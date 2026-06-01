import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mortgage Pre-Approval in NZ: What It Is and How to Get It | Base Mortgages',
  description:
    'Getting pre-approved for a mortgage in New Zealand gives you a clear budget and buying confidence. Here\'s how the process works and what you need to prepare.',
};

export default function MortgagePreApprovalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Guide · 5 min read
            </span>
          </div>
          <h1
            className="font-display mb-6 font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Mortgage Pre-Approval: What It Is and How to Get It
          </h1>
          <p className="text-xl text-gray-500">
            Pre-approval lets you house hunt with a clear budget and act fast when you find the right property. Here's what the process actually involves.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>What is mortgage pre-approval?</h2>
          <p>
            Pre-approval (also called conditional approval or approval in principle) is when a bank agrees — subject to certain conditions — that they would lend you up to a specified amount. It's not a guarantee of final lending, but it gives you a clear maximum budget and signals to vendors and agents that you're a serious, finance-ready buyer.
          </p>

          <h2>Why get pre-approved before house hunting?</h2>
          <p>
            Without pre-approval, you're guessing at your budget. That's risky for several reasons:
          </p>
          <ul>
            <li>You might fall in love with a property you can't actually finance</li>
            <li>You can't bid at auction confidently without knowing your limit</li>
            <li>Vendors and agents take finance-approved buyers more seriously</li>
            <li>If a good property comes up, you can move quickly without scrambling for finance</li>
          </ul>
          <p>
            In a competitive market, pre-approval is often the difference between getting the property and missing out.
          </p>

          <h2>What do banks look at?</h2>
          <p>
            The pre-approval assessment covers the same ground as a full application:
          </p>
          <ul>
            <li><strong>Income</strong> — payslips, employment contracts, or 2 years of financials for self-employed applicants</li>
            <li><strong>Expenses and living costs</strong> — bank statements from the last 3 months are standard</li>
            <li><strong>Existing debts</strong> — credit cards, loans, hire purchase, BNPL accounts</li>
            <li><strong>Deposit</strong> — evidence of savings, KiwiSaver balance, or gifted funds</li>
            <li><strong>Credit history</strong> — a credit check is run</li>
          </ul>

          <h2>How long does pre-approval take?</h2>
          <p>
            Working with a mortgage adviser, you can typically get pre-approval within <strong>2–5 working days</strong> once your documents are in order. Some banks are faster, some slower. Applying directly through a bank branch can take longer due to processing queues.
          </p>

          <h2>How long does pre-approval last?</h2>
          <p>
            Most pre-approvals are valid for <strong>60–90 days</strong>. After that, banks typically require updated documents and a fresh assessment — particularly if your income, expenses, or the interest rate environment has changed.
          </p>
          <p>
            If your pre-approval expires before you find a property, renewing it is usually straightforward as long as your situation hasn't changed significantly.
          </p>

          <h2>What are the conditions on pre-approval?</h2>
          <p>
            Pre-approval is always conditional — the most common conditions are:
          </p>
          <ul>
            <li>The property must be acceptable to the bank (location, type, condition)</li>
            <li>A registered valuation may be required (particularly for high LVR loans)</li>
            <li>Your financial situation must not have materially changed between pre-approval and settlement</li>
          </ul>
          <p>
            Don't take on new debt, change jobs, or make large financial commitments between pre-approval and settlement — it can invalidate your approval.
          </p>

          <h2>Pre-approval vs. unconditional approval</h2>
          <p>
            Pre-approval covers <em>you</em> as a borrower. Once you've found a specific property and made an offer, the bank will also assess the property itself. If everything checks out, they'll issue unconditional (or formal) approval — the full green light to proceed to settlement.
          </p>

          <h2>Should you apply to multiple banks?</h2>
          <p>
            Be careful here. Each formal credit application leaves a mark on your credit file. Multiple applications in a short period can look concerning to lenders. A mortgage adviser applies to one lender on your behalf after determining who's the best fit — meaning you don't leave a trail of declined or pending applications across multiple banks.
          </p>

          <h2>What to prepare</h2>
          <ul>
            <li>Photo ID (passport or driver's licence)</li>
            <li>3 months of bank statements</li>
            <li>2–3 recent payslips (or 2 years of IR3 returns if self-employed)</li>
            <li>Evidence of your deposit (savings statements, KiwiSaver balance)</li>
            <li>Details of any existing debts or financial commitments</li>
          </ul>
          <p>
            Your adviser will tell you exactly what each lender needs and help you put together a strong application.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Ready to get pre-approved?
          </h3>
          <p className="mb-6 text-gray-500">
            Book a free call with Karl and we can have you pre-approved and ready to buy in a matter of days.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-8 py-3 font-semibold text-white transition-all hover:bg-teal-700 active:scale-95"
          >
            Book a free call <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Back link */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all guides
          </Link>
        </div>
      </div>
    </div>
  );
}
