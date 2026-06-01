import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Cashback Works When Switching Banks | Base Mortgages',
  description:
    'Many NZ banks offer cashback when you refinance your mortgage. Here\'s how it works, how much you can expect, and the catch to watch out for.',
};

export default function CashbackExplainedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Article · 5 min read
            </span>
          </div>
          <h1
            className="font-display mb-6 font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            How Cashback Works When Switching Banks
          </h1>
          <p className="text-xl text-gray-500">
            Refinancing to a new bank can put thousands of dollars back in your pocket — but there's more to the story than the headline number.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 w-full sm:h-96">
        <Image
          src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&q=80"
          alt="New Zealand banknotes"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>What is mortgage cashback?</h2>
          <p>
            When you switch your home loan to a new bank, many lenders will offer you a cashback — a lump sum payment deposited into your account shortly after your loan settles. It's the bank's way of competing for your business, and in a competitive market, it can be surprisingly generous.
          </p>
          <p>
            Cashbacks in New Zealand typically range from <strong>0.5% to 1% of your loan amount</strong>. On a $700,000 mortgage, that could be $3,500–$7,000 landing in your account.
          </p>

          <h2>Which banks offer cashback in NZ?</h2>
          <p>
            Cashback offers change frequently, and not all banks advertise them publicly. As of 2025, major NZ banks including ANZ, ASB, BNZ, Westpac, and Kiwibank have all run cashback promotions at various points. The availability and size of the offer often depends on:
          </p>
          <ul>
            <li>Your loan size (larger loans attract bigger cashbacks)</li>
            <li>The current competitive environment</li>
            <li>Whether you're coming from a competing bank</li>
            <li>Your loan-to-value ratio (LVR)</li>
          </ul>
          <p>
            A mortgage adviser has visibility across multiple lenders at once and can often negotiate a cashback offer that isn't publicly listed.
          </p>

          <h2>The catch: clawback clauses</h2>
          <p>
            This is the part most people don't read carefully enough.
          </p>
          <p>
            Almost every cashback offer comes with a <strong>clawback period</strong> — usually 2–4 years. If you switch away from the bank, sell your property, or repay your loan in full before this period ends, you'll have to repay some or all of the cashback on a pro-rata basis.
          </p>
          <p>
            For example: you receive a $6,000 cashback with a 3-year clawback. If you switch banks after 18 months, you'd owe back $3,000.
          </p>
          <p>
            This matters a lot if your situation is likely to change — you're planning to sell, expecting to receive an inheritance, or might want to move lenders again in the near future.
          </p>

          <h2>Does the cashback offset the switching costs?</h2>
          <p>
            Switching banks isn't free. Typical costs include:
          </p>
          <ul>
            <li><strong>Break fee</strong> (if you're mid-fixed-term) — can be significant</li>
            <li><strong>Discharge fee</strong> from your current bank — usually $150–$300</li>
            <li><strong>Legal fees</strong> for the new mortgage — often $800–$1,500, though some banks contribute to these</li>
          </ul>
          <p>
            In many cases, the cashback more than covers these costs — especially if you're at the end of your fixed term and avoid a break fee. But it's worth running the numbers rather than assuming you'll come out ahead.
          </p>

          <h2>Is cashback always worth chasing?</h2>
          <p>
            Not necessarily. A bank offering a large cashback might also be offering a higher interest rate. A 0.2% difference in rate on a $600,000 loan adds up to around $1,200 per year — so a $4,000 cashback could evaporate quickly if the rate isn't competitive.
          </p>
          <p>
            The right approach is to look at the <strong>total cost over the fixed term</strong>, not just the cashback in isolation. A good mortgage adviser will model this for you.
          </p>

          <h2>How to access cashback offers</h2>
          <p>
            Some cashback deals are available if you apply directly, but the best offers are often only available through mortgage advisers. Banks use cashbacks as a way to attract volume, so they're often willing to offer more through an adviser channel than through their branch network.
          </p>
          <p>
            Your adviser will also handle the paperwork, liaise with both banks, and time the switch so you don't end up paying break fees unnecessarily.
          </p>

          <h2>When is a good time to switch?</h2>
          <p>
            The ideal window is when your fixed term is expiring — typically in the 60–90 days before rollover. At this point you can switch without a break fee, negotiate a competitive rate, and collect any cashback on offer.
          </p>
          <p>
            If you're mid-term, it can still be worth switching if the rate saving is significant enough — but you'll need to weigh the break fee carefully.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Wondering if switching makes sense for you?
          </h3>
          <p className="mb-6 text-gray-500">
            Karl can compare current cashback offers across multiple banks and run the numbers on your situation.
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
