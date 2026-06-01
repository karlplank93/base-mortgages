import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fixed vs Floating Mortgage Rates NZ | Base Mortgages',
  description:
    'Fixed or floating? A plain-English breakdown of both mortgage rate options in New Zealand and how to decide which suits your situation.',
};

export default function FixedVsFloatingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-cyan-50 to-white px-4 py-16 sm:px-6 lg:px-8">
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
            Fixed vs Floating: Which Rate is Right for You?
          </h1>
          <p className="text-xl text-gray-500">
            One of the most common questions we get asked. Here's a plain-English breakdown of both options and how to think about the decision.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 w-full sm:h-96">
        <Image
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"
          alt="Financial charts and graphs"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>The basics</h2>
          <p>
            When you take out a mortgage in New Zealand, you choose how your interest rate is structured. The two main options are fixed and floating (also called variable), and most people end up with a mix of both.
          </p>

          <h2>Fixed rates</h2>
          <p>
            A fixed rate locks in your interest rate for a set period — typically 6 months, 1 year, 2 years, or 3 years. During that term, your rate doesn't change, regardless of what the Reserve Bank does with the Official Cash Rate (OCR).
          </p>
          <p><strong>Advantages:</strong></p>
          <ul>
            <li>Certainty — you know exactly what your repayments will be</li>
            <li>Protection if rates rise during your fixed term</li>
            <li>Easier to budget around</li>
          </ul>
          <p><strong>Disadvantages:</strong></p>
          <ul>
            <li>If rates fall, you're stuck at the higher rate</li>
            <li>Break fees apply if you want to change or repay early</li>
            <li>Less flexibility to make large lump sum repayments</li>
          </ul>

          <h2>Floating rates</h2>
          <p>
            A floating rate moves with the market — typically tracking the bank's own base rate, which is influenced by the OCR. Your rate (and repayments) can go up or down at any time.
          </p>
          <p><strong>Advantages:</strong></p>
          <ul>
            <li>Flexibility — you can repay extra at any time without penalty</li>
            <li>Benefits immediately when rates fall</li>
            <li>No break fees</li>
          </ul>
          <p><strong>Disadvantages:</strong></p>
          <ul>
            <li>Uncertainty — repayments can increase without warning</li>
            <li>Usually a higher rate than fixed terms</li>
            <li>Harder to budget when rates are volatile</li>
          </ul>

          <h2>How to decide</h2>
          <p>
            There's no universally right answer — it depends on your situation, your risk tolerance, and what's happening in the economy. Here are the questions worth asking:
          </p>

          <h3>1. Do you need flexibility?</h3>
          <p>
            If you're planning to sell, expecting a windfall (inheritance, bonus, property sale), or want to make large extra repayments, floating gives you that freedom. Fixed locks you in and penalises early repayment.
          </p>

          <h3>2. Where are rates heading?</h3>
          <p>
            Nobody knows for certain, but looking at OCR forecasts and bank economists' predictions can give you a sense of direction. If rates are expected to fall, shorter fixed terms (or floating) might serve you better. If rates look set to rise, locking in now could save you money.
          </p>

          <h3>3. Can your budget handle rate increases?</h3>
          <p>
            If you're stretched and a rate increase would put serious pressure on your finances, fixing provides peace of mind. If you have headroom, floating is easier to manage.
          </p>

          <h2>The split loan approach</h2>
          <p>
            Many New Zealanders split their mortgage — fixing part of it for certainty and leaving part floating for flexibility. A common approach might be 70% fixed and 30% floating, allowing you to make extra repayments on the floating portion while still having predictable payments overall.
          </p>
          <p>
            The split ratio is something your adviser will help you work through based on your loan size, income, and goals.
          </p>

          <h2>What term to fix for?</h2>
          <p>
            If you decide to fix, the next question is how long. In New Zealand, the most popular fixed terms are 1 and 2 years — they give short-term certainty while keeping you flexible as the market evolves.
          </p>
          <p>
            Longer terms (3–5 years) can work well when rates are low and rising, but they lock you in for a long time. Shorter terms (6 months, 1 year) suit people who think rates will move soon or who want to revisit their structure regularly.
          </p>

          <h2>The refix conversation</h2>
          <p>
            When your fixed term expires, you'll enter a refix period. This is a great time to review your whole mortgage structure — the rate, the term, any cashback offers from other banks, and whether your current lender is still the best fit. Don't just let it roll over on the bank's standard rate without checking the market.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Not sure what's right for your situation?
          </h3>
          <p className="mb-6 text-gray-500">
            Karl can walk through the options with you and make a recommendation based on your goals and the current market.
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
