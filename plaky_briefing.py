"""
Base Mortgages - Monday Morning Briefing
Sends a focused weekly action list every Monday morning.

To schedule every Monday at 8am (run once in PowerShell):
  schtasks /create /tn "PlakyMondayBriefing" /tr "python C:\\Users\\karl\\OneDrive\\문서\\GitHub\\base-mortgages\\plaky_briefing.py" /sc weekly /d MON /st 08:00
"""

import requests
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime, timezone, timedelta

# ── CONFIG ────────────────────────────────────────────────
PLAKY_API_KEY      = "plk_ee6fc9214f424b4d8fdbe59d5823bae9"
GMAIL_ADDRESS      = "karlplank93@gmail.com"
GMAIL_APP_PASSWORD = "vnbyflpdvvzjzyew"
TO_EMAIL           = "karl@basemortgages.co.nz"
SPACE_ID           = 116761
BOARD_ID           = 138199
# ─────────────────────────────────────────────────────────

BASE_URL = "https://api.plaky.com/v1/public"
HEADERS  = {"X-API-Key": PLAKY_API_KEY, "Content-Type": "application/json"}

# Status number → label
STATUS_MAP = {
    "0": "House Hunting",
    "1": "To Do",
    "2": "In Progress",
    "3": "Approved",
    "4": "Submitted",
    "5": "Settled",
    "6": "Doc'd",
    "7": "On Hold",
    "8": "Under Contract",
    "9": "App Sent",
}

TEAL  = "#006D77"
RED   = "#DC2626"
AMBER = "#D97706"
BLUE  = "#2563EB"
CREAM = "#FAF7F0"
GRAY  = "#6B7280"
DARK  = "#1F2933"


def get_items():
    r = requests.get(
        f"{BASE_URL}/spaces/{SPACE_ID}/boards/{BOARD_ID}/items",
        headers=HEADERS, timeout=15
    )
    r.raise_for_status()
    return r.json().get("data", [])


def parse_date(s):
    if not s:
        return None
    try:
        # Handle offset-aware strings like 2026-06-01T00:00:00+12:00
        from datetime import datetime
        s = s[:19]  # strip timezone, treat as local NZ date
        return datetime.strptime(s, "%Y-%m-%dT%H:%M:%S").replace(tzinfo=timezone.utc)
    except Exception:
        return None


def get_field_value(fields, field_type=None, title=None):
    for f in fields:
        if field_type and f.get("type") != field_type:
            continue
        if title and f.get("title") != title:
            continue
        return f.get("value")
    return None


def fmt_date(dt):
    if not dt:
        return "—"
    return dt.strftime("%d %b").lstrip("0")


def card(title, subtitle, date_str, color, action):
    return f"""
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #F3F4F6;">
        <div style="font-size:14px;font-weight:600;color:{DARK};">{title}</div>
        <div style="font-size:12px;color:{GRAY};margin-top:1px;">{subtitle}</div>
      </td>
      <td style="padding:10px 16px;border-bottom:1px solid #F3F4F6;white-space:nowrap;text-align:right;">
        <div style="font-size:13px;font-weight:700;color:{color};">{date_str}</div>
        <div style="font-size:11px;color:{GRAY};margin-top:1px;">{action}</div>
      </td>
    </tr>"""


def section(title, emoji, color, cards_html, count):
    if count == 0:
        body = f'<tr><td colspan="2" style="padding:12px 16px;font-size:13px;color:{GRAY};font-style:italic;">Nothing this week ✓</td></tr>'
    else:
        body = cards_html
    badge_bg = color if count > 0 else "#16A34A"
    return f"""
    <div style="margin-bottom:24px;">
      <div style="margin-bottom:10px;">
        <span style="font-size:15px;font-weight:700;color:{DARK};">{emoji} {title}</span>
        <span style="background:{badge_bg};color:white;border-radius:999px;padding:2px 9px;font-size:12px;font-weight:700;margin-left:8px;">{count}</span>
      </div>
      <table width="100%" cellpadding="0" cellspacing="0" style="background:white;border-radius:8px;border:1px solid #E5E7EB;border-collapse:collapse;">
        <tbody>{body}</tbody>
      </table>
    </div>"""


def build_email(settlements, preapprovals, followups, now):
    s_cards = "".join([
        card(i["title"], "Doc'd — settlement approaching", fmt_date(i["date"]),
             RED, f"Write summary of advice doc")
        for i in settlements
    ])
    p_cards = "".join([
        card(i["title"], "House Hunting — pre-approval expiring", fmt_date(i["date"]),
             AMBER, "Contact client to renew")
        for i in preapprovals
    ])
    f_cards = "".join([
        card(i["title"], f"App sent {i['days_ago']} days ago", "",
             BLUE, "Follow up with lender / client")
        for i in followups
    ])

    total = len(settlements) + len(preapprovals) + len(followups)
    summary_color = RED if total > 0 else "#16A34A"
    summary_text  = (
        f"{total} item{'s' if total != 1 else ''} need your attention this week"
        if total > 0 else "✅ All clear — nothing urgent this week"
    )

    return f"""<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:{CREAM};font-family:Arial,Helvetica,sans-serif;">
<div style="max-width:560px;margin:32px auto;">
  <div style="background:{TEAL};padding:26px 28px;border-radius:10px 10px 0 0;">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.6);text-transform:uppercase;">Base Mortgages</div>
    <div style="font-size:22px;font-weight:700;color:white;margin-top:2px;">Monday Briefing</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:3px;">{now.strftime('%A, %d %B %Y')}</div>
  </div>
  <div style="background:{summary_color};padding:11px 28px;">
    <span style="font-size:13px;font-weight:700;color:white;">{summary_text}</span>
  </div>
  <div style="padding:24px 28px;background:{CREAM};">
    {section("Settlements This Week", "📋", RED, s_cards, len(settlements))}
    {section("Pre-Approvals Expiring (30 days)", "🏠", AMBER, p_cards, len(preapprovals))}
    {section("Follow Up — App Sent 7+ Days Ago", "📞", BLUE, f_cards, len(followups))}
  </div>
  <div style="padding:14px 28px;border-top:1px solid #E5E7EB;text-align:center;background:white;border-radius:0 0 10px 10px;">
    <span style="font-size:11px;color:{GRAY};">Base Mortgages &nbsp;·&nbsp; <a href="https://app.plaky.com" style="color:{TEAL};text-decoration:none;">Open Plaky →</a></span>
  </div>
</div>
</body></html>"""


def send_email(subject, html_body):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"]    = GMAIL_ADDRESS
    msg["To"]      = TO_EMAIL
    msg.attach(MIMEText(html_body, "html"))
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(GMAIL_ADDRESS, GMAIL_APP_PASSWORD)
        server.sendmail(GMAIL_ADDRESS, TO_EMAIL, msg.as_string())


def main():
    now      = datetime.now(timezone.utc)
    in_7     = now + timedelta(days=7)
    in_30    = now + timedelta(days=30)
    ago_7    = now - timedelta(days=7)

    print("Fetching Plaky tasks...")
    try:
        items = get_items()
    except Exception as e:
        print(f"❌  Could not fetch tasks: {e}")
        return
    print(f"Found {len(items)} items. Filtering...")

    settlements  = []  # Doc'd, settling within 7 days
    preapprovals = []  # House Hunting, pre-approval expiring within 30 days
    followups    = []  # App Sent, sent more than 7 days ago

    for item in items:
        if item.get("archived") or item.get("deleted"):
            continue

        title      = item.get("title", "Untitled")
        fields     = item.get("fields", [])
        status_val = str(get_field_value(fields, field_type="STATUS", title="Status") or "")
        status_lbl = STATUS_MAP.get(status_val, "")
        date       = parse_date(get_field_value(fields, field_type="DATE_TIME"))

        if status_lbl == "Doc'd" and date:
            if now <= date <= in_7:
                settlements.append({"title": title, "date": date})

        elif status_lbl == "House Hunting" and date:
            if now <= date <= in_30:
                preapprovals.append({"title": title, "date": date})

        elif status_lbl == "App Sent" and date:
            if date <= ago_7:
                days_ago = (now - date).days
                followups.append({"title": title, "date": date, "days_ago": days_ago})

    # Sort each list by date
    settlements.sort(key=lambda x: x["date"])
    preapprovals.sort(key=lambda x: x["date"])
    followups.sort(key=lambda x: x["days_ago"], reverse=True)

    total = len(settlements) + len(preapprovals) + len(followups)
    subj  = (
        f"📋 Monday Briefing — {total} item{'s' if total != 1 else ''} need attention"
        if total > 0
        else f"✅ Monday Briefing — All clear this week"
    )

    html = build_email(settlements, preapprovals, followups, now)

    try:
        send_email(subj, html)
        print(f"✅  Briefing sent to {TO_EMAIL}")
        print(f"    {len(settlements)} settlements | {len(preapprovals)} pre-approvals expiring | {len(followups)} follow-ups needed")
    except Exception as e:
        print(f"❌  Email failed: {e}")


if __name__ == "__main__":
    main()
