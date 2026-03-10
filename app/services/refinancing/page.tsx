import { Metadata } from 'next';
import { DollarSign, TrendingUp, Zap, Gift, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refinancing | Base Mortgages',
  description: 'Switch banks and save money. Refinance your NZ mortgage for better rates, cashback offers, or better loan structure.',
};

export default function RefinancingPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#F8F9FB] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-[#27C1B7] uppercase tracking-widest mb-4">
            Refinancing
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Switch lenders and get ahead
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            Your current bank isn't the only option. We'll find you a better rate, help you access cashback offers, or restructure your loan for better flexibility—and the whole process is free.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Let's compare
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
            Why refinance?
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">
            A refinance might save you thousands. Here's what we can help you achieve.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#27C1B7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save money on interest</h3>
              <p className="text-gray-500">
                Rates move all the time. If other banks are offering better rates than you're on, switching could save you hundreds or thousands in interest. We'll calculate your break fees and show you the real savings.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unlock equity</h3>
              <p className="text-gray-500">
                Your home's gone up in value. You might be able to borrow more at better rates, giving you cash to renovate, invest, or clear other debt. We'll explore this without overextending you.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better loan structure</h3>
              <p className="text-gray-500">
                Maybe your current loan doesn't suit your life anymore. We might split your mortgage into fixed and floating, add a revolving credit facility, or set up offset accounts to cut interest faster.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cashback and perks</h3>
              <p className="text-gray-500">
                Many banks offer cashback on refinances. We'll hunt down the best offers available and make sure you get paid to switch. It's like free money in your pocket.
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
            The refinance process
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Review your current mortgage</h3>
                <p className="text-gray-500 max-w-2xl">
                  Send us a copy of your latest mortgage statement or give us permission to pull your details. We'll look at your current loan, interest rate, remaining term, any break fees, and what you're paying.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compare lenders</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll shop around and get you rates from all the lenders in the market. We'll show you the real savings after break fees are paid, and highlight any cashback or special offers you're eligible for.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Switch and save</h3>
                <p className="text-gray-500 max-w-2xl">
                  Once you've decided, we'll handle the full application with the new lender, manage the discharge from your current bank, and coordinate with your lawyer. You'll be switched within 2-3 weeks.
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
            Refinance questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                When should I refinance?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                If rates have dropped significantly from where you are, or another lender is offering a much better rate, it might be worth it. We usually say if you can save more than 1% and you're staying in the home for at least a few more years, a refinance makes sense. We'll calculate the break fees and show you the actual benefit.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                What are break fees, and will I have to pay them?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Break fees are what the bank charges you to get out of a fixed rate early. Sometimes they're a few hundred dollars, sometimes more. The good news is we'll factor them into the savings calculation—if a refinance is worth doing, the interest savings will outweigh the break fee. If it doesn't make sense, we'll tell you that too.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Can I get cashback when I refinance?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Many lenders offer cashback promotions—sometimes it's 2-5% of your loan amount. These change regularly, so we stay on top of what's available. We'll make sure you get the best deal, which might include cashback on top of a good rate.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How long does a refinance take?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                From start to finish, usually 2-3 weeks. That's once you've approved the new lender and we've got all your documents. We coordinate with both banks and your lawyer to make sure it's smooth and the money transfers at the right time.
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
            Could you be saving money?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's do a quick comparison and see what's available. It takes 10 minutes and could save you thousands.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Check your options
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
