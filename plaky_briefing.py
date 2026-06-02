"""
Base Mortgages — Daily Plaky Briefing
Fetches your Plaky tasks and emails a morning briefing via Outlook.

Setup (one time):
  1. pip install requests
  2. Enter your Outlook email and password below
     (If you have MFA on your Microsoft account, create an App Password at
      account.microsoft.com → Security → Advanced security → App passwords)
  3. Run: python plaky_briefing.py

To schedule it daily at 8am, run:
  schtasks /create /tn "PlakyBriefing" /tr "python C:\path\to\plaky_briefing.py" /sc daily /st 08:00
"""

import requests
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime, timezone, timedelta

# ── CONFIG ────────────────────────────────────────────────
PLAKY_API_KEY    = "plk_ee6fc9214f424b4d8fdbe59d5823bae9"
OUTLOOK_ADDRESS  = "karl@basemortgages.co.nz"
OUTLOOK_PASSWORD = "PASTE_YOUR_OUTLOOK_PASSWORD_HERE" # Your Outlook/Microsoft 365 password
TO_EMAIL         = "karl@basemortgages.co.nz"
# ─────────────────────────────────────────────────────────

BASE_URL = "https://api.plaky.com/v1"
HEADERS  = {"Authorization": f"Token {PLAKY_API_KEY}", "Content-Type": "application/json"}

TEAL  = "#006D77"
RED   = "#DC2626"
AMBER = "#D97706"
GREEN = "#16A34A"
CREAM = "#FAF7F0"
GRAY  = "#6B7280"
DARK  = "#1F2933"


def get(endpoint):
    r = requests.get(f"{BASE_URL}{endpoint}", headers=HEADERS, timeout=15)
    r.raise_for_status()
    return r.json()


def parse_date(s):
    if not s:
        return None
    for fmt in ("%Y-%m-%dT%H:%M:%S.%fZ", "%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%d"):
        try:
            return datetime.strptime(s, fmt).replace(tzinfo=timezone.utc)
        except ValueError:
            continue
    return None


def build_html(overdue, due_today, due_week, no_date, now):
    def rows(items, color):
        if not items:
            return f'<tr><td colspan="3" style="color:{GRAY};font-size:13px;padding:8px 12px;">None</td></tr>'
        html = ""
        for i in items:
            due_str = i["due"].strftime("%-d %b") if i["due"] else "—"
            html += f"""
            <tr>
              <td style="padding:8px 12px;font-size:14px;color:{DARK};border-bottom:1px solid #F3F4F6;">{i['name']}</td>
              <td style="padding:8px 12px;font-size:13px;color:{GRAY};border-bottom:1px solid #F3F4F6;">{i['board']}</td>
              <td style="padding:8px 12px;font-size:13px;font-weight:600;color:{color};border-bottom:1px solid #F3F4F6;">{due_str}</td>
            </tr>"""
        return html

    def section(title, emoji, items, color):
        count = len(items)
        badge_color = color if count > 0 else GREEN
        return f"""
        <div style="margin-bottom:28px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
            <span style="font-size:18px;">{emoji}</span>
            <span style="font-size:15px;font-weight:700;color:{DARK};">{title}</span>
            <span style="background:{badge_color};color:white;border-radius:999px;padding:2px 10px;font-size:12px;font-weight:700;">{count}</span>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:white;border-radius:8px;border:1px solid #E5E7EB;border-collapse:collapse;">
            <thead>
              <tr style="background:#F9FAFB;">
                <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;color:{GRAY};text-transform:uppercase;letter-spacing:0.05em;">Task</th>
                <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;color:{GRAY};text-transform:uppercase;letter-spacing:0.05em;">Board</th>
                <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:700;color:{GRAY};text-transform:uppercase;letter-spacing:0.05em;">Due</th>
              </tr>
            </thead>
            <tbody>{rows(items, color)}</tbody>
          </table>
        </div>"""

    total_urgent = len(overdue) + len(due_today)
    summary_color = RED if len(overdue) > 0 else (AMBER if len(due_today) > 0 else GREEN)
    summary_text = (
        f"🚨 {len(overdue)} overdue · {len(due_today)} due today — action needed"
        if total_urgent > 0
        else "✅ You're clear — nothing overdue or due today"
    )

    return f"""
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background:{CREAM};font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:600px;margin:32px auto;background:{CREAM};border-radius:12px;overflow:hidden;">

        <!-- Header -->
        <div style="background:{TEAL};padding:28px 32px;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;color:rgba(255,255,255,0.65);text-transform:uppercase;margin-bottom:4px;">Base Mortgages</div>
          <div style="font-size:22px;font-weight:700;color:white;">Daily Briefing</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:4px;">{now.strftime('%A, %d %B %Y')}</div>
        </div>

        <!-- Summary bar -->
        <div style="background:{summary_color};padding:12px 32px;">
          <span style="font-size:13px;font-weight:700;color:white;">{summary_text}</span>
        </div>

        <!-- Content -->
        <div style="padding:28px 32px;">
          {section("Overdue", "🔴", overdue, RED)}
          {section("Due Today", "🟡", due_today, AMBER)}
          {section("Due This Week", "🟢", due_week, GREEN)}

          <!-- Stats footer -->
          <div style="display:flex;gap:12px;margin-top:8px;">
            <div style="flex:1;background:white;border:1px solid #E5E7EB;border-radius:8px;padding:14px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:{TEAL};">{len(overdue)}</div>
              <div style="font-size:11px;color:{GRAY};margin-top:2px;">Overdue</div>
            </div>
            <div style="flex:1;background:white;border:1px solid #E5E7EB;border-radius:8px;padding:14px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:{TEAL};">{len(due_today)}</div>
              <div style="font-size:11px;color:{GRAY};margin-top:2px;">Due Today</div>
            </div>
            <div style="flex:1;background:white;border:1px solid #E5E7EB;border-radius:8px;padding:14px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:{TEAL};">{len(due_week)}</div>
              <div style="font-size:11px;color:{GRAY};margin-top:2px;">This Week</div>
            </div>
            <div style="flex:1;background:white;border:1px solid #E5E7EB;border-radius:8px;padding:14px;text-align:center;">
              <div style="font-size:24px;font-weight:700;color:{GRAY};">{len(no_date)}</div>
              <div style="font-size:11px;color:{GRAY};margin-top:2px;">No Date</div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:16px 32px;border-top:1px solid #E5E7EB;text-align:center;">
          <span style="font-size:11px;color:{GRAY};">Base Mortgages · Daily briefing from Plaky · <a href="https://app.plaky.com" style="color:{TEAL};">Open Plaky →</a></span>
        </div>
      </div>
    </body>
    </html>
    """


def send_email(subject, html_body):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"]    = OUTLOOK_ADDRESS
    msg["To"]      = TO_EMAIL
    msg.attach(MIMEText(html_body, "html"))

    with smtplib.SMTP("smtp.office365.com", 587) as server:
        server.ehlo()
        server.starttls()
        server.login(OUTLOOK_ADDRESS, OUTLOOK_PASSWORD)
        server.sendmail(OUTLOOK_ADDRESS, TO_EMAIL, msg.as_string())


def main():
    now      = datetime.now(timezone.utc)
    today_end = now.replace(hour=23, minute=59, second=59)
    week_end  = now + timedelta(days=7)

    print(f"Fetching Plaky data...")

    try:
        workspaces = get("/workspaces")
    except Exception as e:
        print(f"❌  Could not connect to Plaky: {e}")
        return

    overdue, due_today, due_week, no_date = [], [], [], []

    for ws in workspaces:
        boards = get(f"/workspaces/{ws['id']}/boards") if "id" in ws else []
        for board in boards:
            items = get(f"/boards/{board['id']}/items") if "id" in board else []
            for item in items:
                if item.get("done") or item.get("completed"):
                    continue
                name     = item.get("name") or item.get("title") or "Untitled"
                due_raw  = item.get("due_date") or item.get("dueDate") or item.get("deadline")
                due_date = parse_date(due_raw)
                entry    = {"name": name, "board": board.get("name", ""), "due": due_date}

                if due_date:
                    if due_date < now:            overdue.append(entry)
                    elif due_date <= today_end:   due_today.append(entry)
                    elif due_date <= week_end:    due_week.append(entry)
                else:
                    no_date.append(entry)

    html  = build_html(overdue, due_today, due_week, no_date, now)
    total = len(overdue) + len(due_today)
    subj  = (
        f"🔴 Plaky Briefing — {len(overdue)} overdue, {len(due_today)} due today"
        if total > 0
        else f"✅ Plaky Briefing — {now.strftime('%d %b')} · All clear"
    )

    if "PASTE" in OUTLOOK_ADDRESS or "PASTE" in OUTLOOK_PASSWORD:
        print("\n⚠️  Email not sent — add your Outlook email and password to the script first.")
        print(f"\nSummary: {len(overdue)} overdue | {len(due_today)} due today | {len(due_week)} this week\n")
    else:
        send_email(subj, html)
        print(f"✅  Briefing emailed to {TO_EMAIL}")
        print(f"    {len(overdue)} overdue | {len(due_today)} due today | {len(due_week)} this week")


if __name__ == "__main__":
    main()
