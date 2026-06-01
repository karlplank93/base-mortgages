import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "First Home Buyer's Complete Guide to KiwiSaver | Base Mortgages",
  description:
    'Everything you need to know about using your KiwiSaver to buy your first home in New Zealand — withdrawal rules, eligibility, and how much you can access.',
};

export default function KiwiSaverGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-teal-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Guide · 8 min read
            </span>
          </div>
          <h1
            className="font-display mb-6 font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            First Home Buyer's Complete Guide to KiwiSaver
          </h1>
          <p className="text-xl text-gray-500">
            Your KiwiSaver could be the key to unlocking your first home deposit. Here's exactly how it works, who qualifies, and what to watch out for.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>What is the KiwiSaver First Home Withdrawal?</h2>
          <p>
            If you've been a KiwiSaver member for at least three years, you may be able to withdraw most of your savings to put towards buying your first home. This isn't a loan — it's your own money, contributed over time by you and your employer — and you don't have to pay it back.
          </p>
          <p>
            For many New Zealanders, KiwiSaver is the single biggest chunk of their deposit. Getting this right matters.
          </p>

          <h2>Who is eligible?</h2>
          <p>To withdraw your KiwiSaver for a first home, you must meet all of the following:</p>
          <ul>
            <li>You've been a KiwiSaver member for at least <strong>3 years</strong></li>
            <li>You're buying your <strong>first home</strong> — or you've owned a home before but qualify under the "second chance" criteria (more on that below)</li>
            <li>You intend to <strong>live in the property</strong> — KiwiSaver withdrawals can't be used for investment properties</li>
            <li>The property is in <strong>New Zealand</strong></li>
          </ul>

          <h3>Second chance buyers</h3>
          <p>
            If you've previously owned property but are in a similar financial position to a first home buyer, you may still qualify. This is assessed by Housing New Zealand (Kāinga Ora) on a case-by-case basis. The key question is whether your assets and income are comparable to what would be expected for someone who has never owned a home. This is worth exploring — many people don't realise they're eligible.
          </p>

          <h2>How much can you withdraw?</h2>
          <p>
            You can withdraw <strong>everything in your KiwiSaver account except $1,000</strong>, which must remain in the fund. This includes your own contributions, your employer's contributions, and any government contributions received over the years.
          </p>
          <p>
            You cannot withdraw returns or growth separately — it all comes out together as a single balance minus that $1,000.
          </p>

          <h2>The First Home Grant (no longer available)</h2>
          <p>
            As of May 2024, the First Home Grant has been discontinued by the New Zealand Government. If you were counting on this top-up of up to $10,000, it's no longer available. Your KiwiSaver withdrawal itself is unaffected — that still operates as normal.
          </p>

          <h2>How to apply for your KiwiSaver withdrawal</h2>
          <p>The process typically goes like this:</p>
          <ol>
            <li><strong>Get a signed Sale and Purchase Agreement</strong> — you need a property under contract before you can apply.</li>
            <li><strong>Contact your KiwiSaver provider</strong> — each provider has its own application form and process.</li>
            <li><strong>Submit the paperwork</strong> — you'll typically need your ID, the S&P agreement, and a solicitor's letter confirming the purchase.</li>
            <li><strong>Allow 10–15 working days</strong> — your provider will transfer the funds directly to your solicitor's trust account in time for settlement.</li>
          </ol>
          <p>
            Your mortgage adviser will coordinate the timing with your lawyer to make sure everything lines up with your settlement date. Don't leave this until the last minute.
          </p>

          <h2>Using KiwiSaver alongside other deposit sources</h2>
          <p>
            Most first home buyers combine their KiwiSaver withdrawal with other savings. Your lender will want to see your total deposit add up to at least 10–20% of the purchase price, depending on which bank and loan type you're using.
          </p>
          <p>
            The <strong>First Home Loan</strong> (underwritten by Kāinga Ora) still exists and allows eligible buyers to purchase with as little as a <strong>5% deposit</strong>, using participating lenders including ANZ, ASB, BNZ, Westpac, Kiwibank and others. Income caps apply.
          </p>

          <h2>Common mistakes to avoid</h2>
          <ul>
            <li><strong>Applying too late.</strong> You need time for your provider to process the withdrawal before settlement. Start the paperwork as soon as your offer is accepted.</li>
            <li><strong>Assuming you can use it for an investment property.</strong> You can't. The property must be your principal place of residence.</li>
            <li><strong>Forgetting the $1,000 minimum balance.</strong> Your provider won't send every last cent — $1,000 stays in your account to keep it active.</li>
            <li><strong>Not checking your contribution history.</strong> Some people find they haven't been contributing consistently, which affects how much is available.</li>
          </ul>

          <h2>What if I'm buying with a partner?</h2>
          <p>
            If you're purchasing with a partner or co-buyer, both of you can make a KiwiSaver withdrawal — as long as you each individually meet the eligibility criteria. This can significantly boost your combined deposit. Each person applies separately through their own provider.
          </p>

          <h2>Next steps</h2>
          <p>
            KiwiSaver is just one piece of the puzzle. The best time to talk to a mortgage adviser is before you start making offers — so you know exactly where you stand on deposit, borrowing power, and which lenders suit your situation.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Ready to take the next step?
          </h3>
          <p className="mb-6 text-gray-500">
            Book a free call with Karl to talk through your KiwiSaver, deposit, and borrowing options.
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
