import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Much Can I Borrow? NZ Borrowing Power Explained | Base Mortgages',
  description:
    'How much can you borrow for a mortgage in New Zealand? We explain the key factors banks use — income, expenses, debt, and LVR requirements.',
};

export default function BorrowingPowerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Tool · 7 min read
            </span>
          </div>
          <h1
            className="font-display mb-6 font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            How Much Can I Borrow? (NZ Borrowing Power Explained)
          </h1>
          <p className="text-xl text-gray-500">
            Your borrowing power depends on a lot more than your salary. Here's what New Zealand banks actually look at when they assess your application.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>It's not just about income</h2>
          <p>
            A common misconception is that banks lend you a simple multiple of your income — like 5x or 6x your salary. It doesn't work that way. Banks look at your <strong>net income after tax and expenses</strong>, your existing debts, your living costs, and the number of dependants you have. Two people earning the same income can end up with very different borrowing limits.
          </p>

          <h2>The main factors banks assess</h2>

          <h3>1. Income</h3>
          <p>
            Banks want to see stable, verifiable income. What counts:
          </p>
          <ul>
            <li><strong>PAYE employment</strong> — typically taken at face value with recent payslips</li>
            <li><strong>Self-employment</strong> — usually averaged over 2 years of financials; some lenders are more flexible</li>
            <li><strong>Rental income</strong> — often only 75% is counted (to allow for vacancy and costs)</li>
            <li><strong>Benefits and Working for Families</strong> — counted by most lenders</li>
            <li><strong>Overtime, bonuses, commission</strong> — typically needs to be consistent over 1–2 years</li>
          </ul>

          <h3>2. Living expenses (UMI)</h3>
          <p>
            Banks use the Household Expenditure Survey data to benchmark your living costs, but they'll also ask you to declare your actual monthly expenses. The higher your declared expenses, the less you can borrow. Be honest — banks cross-reference bank statements.
          </p>
          <p>
            The number of people in your household matters significantly. A single person has very different assessed living costs than a family of five.
          </p>

          <h3>3. Existing debt</h3>
          <p>
            Every existing debt commitment reduces how much you can borrow:
          </p>
          <ul>
            <li>Credit cards — banks often assess the full credit <em>limit</em>, not just what you owe</li>
            <li>Car loans and personal loans</li>
            <li>Student loans (HECS/StudyLink repayments)</li>
            <li>Buy-now-pay-later accounts (Afterpay, Laybuy, etc.)</li>
            <li>Other mortgages</li>
          </ul>
          <p>
            Reducing or closing credit cards before applying can meaningfully increase your borrowing limit — even if you don't actually owe anything on them.
          </p>

          <h3>4. The test rate</h3>
          <p>
            Banks don't assess your ability to repay at today's rate — they use a <strong>stress test rate</strong>, typically 2–3% higher than the current rate. This is designed to make sure you can still afford repayments if rates rise. It's one of the main reasons people can borrow less than they expect.
          </p>

          <h3>5. LVR (Loan-to-Value Ratio)</h3>
          <p>
            Your deposit size affects both whether you can get approved and what rate you're offered. The Reserve Bank sets LVR restrictions for banks:
          </p>
          <ul>
            <li><strong>Owner-occupiers</strong> — generally need at least 20% deposit (or 10% with the First Home Loan scheme)</li>
            <li><strong>Investors</strong> — typically require 35% deposit</li>
          </ul>
          <p>
            These limits shift from time to time. A mortgage adviser will know the current rules and which lenders are operating at the edges.
          </p>

          <h2>Debt-to-income (DTI) ratios</h2>
          <p>
            From mid-2024, New Zealand banks are also subject to debt-to-income (DTI) limits. For owner-occupiers, most banks are restricted from lending more than <strong>6x your gross annual income</strong>. Investors face a lower limit of 7x (across their whole portfolio). This is a relatively new constraint and affects some borrowers who would previously have qualified for more.
          </p>

          <h2>What can you do to increase borrowing power?</h2>
          <ul>
            <li>Pay down or cancel credit cards before applying</li>
            <li>Reduce or eliminate other debts (car loans, personal loans)</li>
            <li>Increase your deposit to improve your LVR position</li>
            <li>Avoid large irregular spending in the 90 days before applying</li>
            <li>Stabilise your income (avoid changing jobs right before applying)</li>
            <li>Consider which lender — policies vary and some lenders are more generous in specific areas</li>
          </ul>

          <h2>How a mortgage adviser helps</h2>
          <p>
            Different banks have different policies on how they assess income, treat credit card limits, and calculate living expenses. An adviser knows which lender is most likely to approve your application and for how much — without you having to submit multiple applications and damage your credit score.
          </p>
          <p>
            Getting a pre-approval before you start house hunting means you can bid with confidence and act quickly when you find the right property.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Want to know your actual borrowing limit?
          </h3>
          <p className="mb-6 text-gray-500">
            Book a free call with Karl for a real assessment — not just a calculator estimate.
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
