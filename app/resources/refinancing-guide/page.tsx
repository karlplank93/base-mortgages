import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refinancing Your Mortgage: Is It Worth It? | Base Mortgages',
  description:
    'Thinking about refinancing your mortgage in New Zealand? Here\'s how to weigh up the costs, cashback offers, and whether switching lenders makes financial sense.',
};

export default function RefinancingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-pink-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Guide · 6 min read
            </span>
          </div>
          <h1
            className="font-display mb-6 font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Refinancing Your Mortgage: Is It Worth It?
          </h1>
          <p className="text-xl text-gray-500">
            Switching lenders could save you thousands — but it's not always the right move. Here's how to think through the decision.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 w-full sm:h-96">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
          alt="Person signing a document"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>What is refinancing?</h2>
          <p>
            Refinancing (or "switching") means moving your mortgage from your current lender to a new one. You take out a new home loan with another bank, which is used to repay your existing mortgage. The goal is usually to get a better interest rate, access equity, restructure your loan, or collect a cashback offer.
          </p>

          <h2>When does refinancing make sense?</h2>
          <p>
            The most common trigger is when your fixed term expires. At this point you're in a natural switching window — no break fees apply, and you're free to shop around. Many people don't realise how much money they leave on the table by just letting their mortgage roll over at whatever rate the bank offers.
          </p>
          <p>
            Other good reasons to consider refinancing include:
          </p>
          <ul>
            <li>Your current rate is significantly above market</li>
            <li>You want to access equity for renovations, an investment, or other purposes</li>
            <li>Your circumstances have changed (income, family size, property value) and your current structure no longer fits</li>
            <li>You want to consolidate other debt into your mortgage at a lower rate</li>
            <li>A competing bank is offering a compelling cashback deal</li>
          </ul>

          <h2>The costs of switching</h2>
          <p>
            Refinancing isn't free. Before you decide, factor in these potential costs:
          </p>
          <ul>
            <li><strong>Break fee</strong> — if you're currently in a fixed term, your bank may charge a fee to exit early. This can range from negligible to tens of thousands of dollars depending on how rates have moved. Always get this figure in writing before making a decision.</li>
            <li><strong>Discharge fee</strong> — your current bank will charge a fee to release the mortgage, usually $150–$300.</li>
            <li><strong>Legal fees</strong> — your solicitor will need to complete the transfer, typically $800–$1,500. Many banks offer a legal contribution to offset this.</li>
            <li><strong>Valuation</strong> — sometimes required if your property's value needs to be confirmed, usually $500–$800.</li>
          </ul>

          <h2>How to calculate if it's worth it</h2>
          <p>
            The basic test: add up all the switching costs, then compare them to the savings you'd make over your next fixed term with the new rate.
          </p>
          <p>
            Example: switching costs of $2,000, and you'll save $150/month due to a lower rate. You break even in 13 months and save money after that. Over a 2-year fixed term, you're $1,600 ahead (before any cashback).
          </p>
          <p>
            Add in a cashback of $5,000 and the picture looks very different — you're $6,600 ahead over two years.
          </p>
          <p>
            This kind of modelling is exactly what a mortgage adviser does. The numbers don't lie, and it's rarely as complicated as it seems once you lay it out clearly.
          </p>

          <h2>What about cashback offers?</h2>
          <p>
            Many banks offer a cashback of 0.5%–1% of the loan value to attract refinancers. On a $600,000 mortgage that's $3,000–$6,000 in your account. These offers come with clawback clauses — typically 2–4 years — so if you switch again or sell, you'll repay a portion. Read the fine print carefully and make sure your plans align with the clawback period.
          </p>

          <h2>Your current bank might match the offer</h2>
          <p>
            Banks don't like losing good customers. If you go to your current bank with a competing offer, they'll often match the rate, offer their own cashback, or both — especially if you have a good repayment history and low LVR. It costs the bank less to retain you than to acquire a new customer.
          </p>
          <p>
            A mortgage adviser can run this negotiation on your behalf, using competing offers as leverage. You might end up staying put with a better deal — or moving to a bank that values your business more.
          </p>

          <h2>What does the process look like?</h2>
          <ol>
            <li><strong>Review your current situation</strong> — find out your remaining fixed term, current rate, and what the break fee would be.</li>
            <li><strong>Get market comparisons</strong> — your adviser will check rates and cashback offers across multiple lenders.</li>
            <li><strong>Run the numbers</strong> — total cost of switching vs. total savings over the new fixed term.</li>
            <li><strong>Apply with the new lender</strong> — your adviser handles the application. Approval typically takes a few days to a week.</li>
            <li><strong>Settlement</strong> — your solicitor manages the legal side. The new bank pays out the old one, and your mortgage moves across.</li>
          </ol>
          <p>
            From start to finish, a straightforward refinance usually takes 2–4 weeks.
          </p>

          <h2>How often should you review your mortgage?</h2>
          <p>
            At a minimum, every time your fixed term expires. Ideally, you should have a conversation with your adviser 60–90 days before rollover so you have time to properly consider your options and act without rushing.
          </p>
          <p>
            Many people also benefit from an annual check-in, even mid-term — particularly if their financial situation has changed or rates have shifted significantly.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Wondering if refinancing makes sense for you?
          </h3>
          <p className="mb-6 text-gray-500">
            Karl can pull together the numbers and tell you exactly where you stand — no obligation, no pressure.
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
