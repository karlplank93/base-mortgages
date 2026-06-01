import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your Mortgage Is Refixing: What to Do Next | Base Mortgages',
  description:
    'Your fixed mortgage term is expiring — here\'s what to do, when to act, and how to make sure you get the best rate when you refix in New Zealand.',
};

export default function RefixGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-indigo-50 to-white px-4 py-16 sm:px-6 lg:px-8">
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
            Your Mortgage Is Refixing: What to Do Next
          </h1>
          <p className="text-xl text-gray-500">
            When your fixed term expires, you have more options than just accepting your bank's rollover rate. Here's how to get the best outcome.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>What happens when your fixed term expires?</h2>
          <p>
            When your fixed mortgage term ends, your loan automatically rolls onto your bank's floating (variable) rate — which is almost always higher than fixed rates. Banks will typically send you a letter or email in the weeks before rollover with an offer to refix. Most people take the path of least resistance and accept whatever rate the bank offers.
          </p>
          <p>
            That's a mistake. This is one of the best opportunities to save meaningful money on your mortgage — but only if you act.
          </p>

          <h2>Start looking 60–90 days out</h2>
          <p>
            Most banks allow you to lock in a rate up to 60–90 days before your current term expires. This means you can secure a rate today for a term that starts in the future — useful if you think rates might rise, or if you just want certainty early.
          </p>
          <p>
            Don't wait until the last week before your term expires. Give yourself time to compare options properly.
          </p>

          <h2>Your three main options at refix</h2>

          <h3>1. Refix with your current bank</h3>
          <p>
            Quickest and simplest — usually just a phone call or online form. No new application required. The downside: you only see one set of rates and you're not leveraging any competitive pressure. You may not get their best offer by asking nicely.
          </p>

          <h3>2. Negotiate with your current bank</h3>
          <p>
            Banks have more flexibility on rates than their advertised specials suggest. If you come to your bank with a competing offer from another lender, they'll often sharpen their rate or offer a cashback to retain you. Don't be afraid to negotiate — the worst they can say is no.
          </p>

          <h3>3. Switch to a new bank</h3>
          <p>
            Refixing is the natural switching window — no break fees apply, and you're free to move. A new bank might offer a better rate, a cashback, or both. The switching process takes 2–4 weeks and involves your solicitor, but a mortgage adviser manages most of it for you.
          </p>

          <h2>What to compare beyond the interest rate</h2>
          <p>
            The rate matters most, but there are other things worth considering when refixing:
          </p>
          <ul>
            <li><strong>Cashback offers</strong> — switching banks can put thousands of dollars in your pocket</li>
            <li><strong>Loan structure</strong> — should you split fixed/floating differently? Change your split ratio?</li>
            <li><strong>Fixed term length</strong> — where are rates expected to go? Shorter or longer?</li>
            <li><strong>Repayment type</strong> — could you be paying down principal faster?</li>
            <li><strong>Revolving credit or offset facilities</strong> — some banks offer these; they can reduce your effective interest cost significantly</li>
          </ul>

          <h2>Should you fix for a shorter or longer term?</h2>
          <p>
            This is one of the most common questions at refix time. A few things to consider:
          </p>
          <ul>
            <li>If rates are expected to fall, shorter terms keep you flexible to refix at lower rates sooner</li>
            <li>If rates are expected to rise, longer terms lock in current rates before they go up</li>
            <li>If you're planning to sell, renovate, or significantly change your situation, shorter terms give you more flexibility</li>
          </ul>
          <p>
            In most market conditions, New Zealanders tend to fix for 1–2 years — enough certainty without locking in for too long. A mortgage adviser can give you a view on the current rate environment.
          </p>

          <h2>The refix conversation with your adviser</h2>
          <p>
            If you have a mortgage adviser, your refix is a great time to check in. They'll:
          </p>
          <ul>
            <li>Compare current rates across multiple lenders</li>
            <li>Identify any cashback offers available</li>
            <li>Model the savings from switching vs. staying</li>
            <li>Review your overall loan structure</li>
            <li>Handle any paperwork if you decide to switch</li>
          </ul>
          <p>
            This service is free — advisers are paid by lenders, not by clients.
          </p>

          <h2>What if you miss the refix window?</h2>
          <p>
            If your loan rolls onto floating, don't panic. You can still refix at any time — just contact your bank or adviser. Floating rates are higher, but there's no fixed commitment or break fee, so you can switch back to fixed whenever it suits you.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Mortgage coming up for refix?
          </h3>
          <p className="mb-6 text-gray-500">
            Book a free call with Karl and we'll compare the market, run the numbers, and make sure you end up on the best deal.
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
