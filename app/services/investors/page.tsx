import { Metadata } from 'next';
import { TrendingUp, Building2, DollarSign, PieChart, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Property Investors | Base Mortgages',
  description: 'Expert NZ property investment mortgage advice. Debt structuring, interest-only loans, entity advice, portfolio growth for property investors.',
};

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#F8F9FB] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-[#27C1B7] uppercase tracking-widest mb-4">
            Property Investors
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Grow your portfolio strategically
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            Investment mortgages are different from home loans. We'll help you structure your debt, manage multiple properties, and keep your portfolio growing sustainably.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Discuss your strategy
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
            We specialise in
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">
            Successful property investing requires more than just getting a loan. It's about smart structuring and long-term strategy.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Debt structuring</h3>
              <p className="text-gray-500">
                We help you arrange your loans so your interest payments are tax-deductible where they should be. Good structure can save you thousands in tax each year.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#27C1B7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interest-only options</h3>
              <p className="text-gray-500">
                Interest-only loans let you invest the capital instead of paying down principal. We'll help you figure out when this makes sense and when you should be building equity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entity structure advice</h3>
              <p className="text-gray-500">
                Should you buy through a trust, a company, or your own name? We'll talk through the pros and cons for your tax and legal situation. We work with accountants and lawyers for advice.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio growth</h3>
              <p className="text-gray-500">
                Growing from one property to five requires different lending. We help you unlock equity, manage LVR requirements, and keep building without overextending.
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
            Getting investment mortgages sorted
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio review</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll look at what you own, what you owe, what each property earns, and where you're trying to go. This helps us understand your whole picture, not just one loan.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Structure strategy</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll map out the best way to structure your debt for tax, recommend whether you should use a trust or company, and show you how to unlock equity as you grow. We'll coordinate with your accountant.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application & approval</h3>
                <p className="text-gray-500 max-w-2xl">
                  Whether you're buying a new property, refinancing to unlock equity, or restructuring what you've got, we'll handle the full application and get you approved.
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
            Investment mortgage FAQs
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                What's the LVR limit for investment properties?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Most lenders cap investment lending at 80% LVR (loan-to-value). That means you need at least 20% equity. Some specialist lenders go to 85%, but rates are higher. We work within RBNZ requirements and help you structure your properties to maximize borrowing capacity while staying safe.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Can I use interest-only loans?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Yes. Interest-only is available on investment properties, usually for 5-10 years at a time. It's good if you're building a portfolio and want to reinvest the capital. The trade-off is you pay more interest, and you're not building equity. We help you decide whether it suits your strategy.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Should I buy through a trust or company?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                It depends on your tax situation, asset protection goals, and how many properties you'll own. We work with your accountant to figure out which structure works best. A trust offers flexibility, a company can offer tax benefits in some cases. We'll guide you through the options.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How do I manage multiple properties and lenders?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                As you grow your portfolio, things get complicated fast. Some investors end up with 3-4 different lenders. We help consolidate and streamline where it makes sense, and we stay on top of each refix so you're always on the best rates. Having one adviser makes it much easier.
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
            Ready to optimize your portfolio?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's talk about your investment goals and how to structure things for maximum returns and tax efficiency.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Schedule a portfolio review
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
