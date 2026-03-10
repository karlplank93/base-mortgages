import { Metadata } from 'next';
import { TrendingUp, Clock, AlertCircle, Shield, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refixing & Restructuring | Base Mortgages',
  description: 'Get your NZ mortgage refixed at the right time with the right strategy. Fixed vs floating, term lengths, and rate strategy advice.',
};

export default function RefixPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#F8F9FB] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-[#27C1B7] uppercase tracking-widest mb-4">
            Refixing & Restructuring
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Don't let your mortgage roll over blindly
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            When your fixed rate ends, you need a strategy. We'll review rates, help you decide between fixed and floating, and make sure you're set up for what comes next.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Schedule a rate review
          </a>
        </div>
      </section>

      {/* What's involved section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            What we'll help with
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">
            Refixing isn't just about picking a new rate. It's about setting your mortgage up so it works for your life.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rate strategy</h3>
              <p className="text-gray-500">
                Fixed or floating? For how long? We look at your situation, the current market, and where rates might be heading. We'll help you think through the pros and cons so the choice is yours.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#27C1B7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mix it up—split loans</h3>
              <p className="text-gray-500">
                You don't have to choose just one. Some clients split their mortgage 50/50 fixed and floating, or maybe 70/30. We'll show you how different splits would work for your situation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Right term length</h3>
              <p className="text-gray-500">
                1 year, 2 years, 5 years? Different terms suit different situations. We'll talk through your timeline and what gives you the best balance of rate and flexibility.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive service</h3>
              <p className="text-gray-500">
                We'll reach out about 3 months before your rate expires so you have time to think and decide, not rush into a roll-over. No surprises, no missed opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 md:py-24 bg-[#F8F9FB]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            style={{ letterSpacing: '-0.02em' }}
          >
            How we handle refixing
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#27C1B7] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="w-1 h-20 bg-gray-200 mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rate review</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll pull your current rate, look at what's available now across the market, and talk about where interest rates might go. This gives us a foundation for the strategy chat.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#27C1B7] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="w-1 h-20 bg-gray-200 mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy session</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll chat about your priorities—whether you want rate certainty, flexibility, or something in between. We'll show you how different splits, terms, and lenders could work. This usually takes one conversation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-[#27C1B7] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Refix with us</h3>
                <p className="text-gray-500 max-w-2xl">
                  Once you've decided, we'll apply for the new rate with your bank or switch if there's a better option. You'll be settled onto your new rate before your current one ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            style={{ letterSpacing: '-0.02em' }}
          >
            Refix questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                When should I refix?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                The best time is usually 2-3 months before your current rate expires. This gives you time to review options without rush. If your rate expires soon, don't stress—we can still lock in a new rate before it expires. Some people refix as early as 6 months out if they think rates are about to spike.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Fixed vs floating—which is better?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                There's no one answer. Fixed gives you certainty and protects you if rates rise, but you pay a higher rate. Floating is cheaper short-term but moves with the RBNZ. Most people feel more comfortable with some fixed portion. We help you figure out what balance works for your stress levels and your budget.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Should I split my loan into multiple parts?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Yes, if you want flexibility. Splitting lets you lock in some security but keep money available on the floating part. The downside is slightly more admin. We'll show you whether it's worth it for your situation—it depends on your income stability and how much flexibility you actually need.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How do you get paid for this?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                We're paid by the lender, not by you. So refixing with us is completely free. We just stay on top of your rate so you don't have to, and we find you the best option. That's how we work.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[#0A2E6B] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Your rate's ending soon?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's chat about your options and get you on the right rate. We'll make sure you're not just rolling over into the default.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Book a rate review
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
