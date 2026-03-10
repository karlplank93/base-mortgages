import { Metadata } from 'next';
import { Shield, TrendingUp, CheckCircle, Zap, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Alternative Lending | Base Mortgages',
  description: 'Non-bank lending solutions for NZ self-employed, credit challenges, irregular income, and bridging finance.',
};

export default function AlternativeLendingPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#F8F9FB] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-[#27C1B7] uppercase tracking-widest mb-4">
            Alternative Lending
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            More options than the big banks
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            Self-employed? Credit challenges? Irregular income? The banks might say no, but there are specialist lenders who get it. We know them all.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Explore your options
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
            Where traditional lenders struggle
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">
            Banks have strict rules. But specialist lenders are more flexible. They understand messy situations and are willing to work with you.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Self-employed income</h3>
              <p className="text-gray-500">
                Banks want two years of history. Specialist lenders look at your actual situation and might accept recent business owners, contractors, or those with variable income. We know who's flexible.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#27C1B7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Credit challenges</h3>
              <p className="text-gray-500">
                Old defaults, missed payments, or a rough patch? Specialist lenders understand that people bounce back. We can help you get a mortgage even with a less-than-perfect history.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Irregular income</h3>
              <p className="text-gray-500">
                Seasonal work, commission-based roles, or income that varies month to month? Banks hate it. Specialist lenders look at your last 12 months and can work with you.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bridging loans</h3>
              <p className="text-gray-500">
                Need a short-term loan to buy before you've sold? Or to cover a gap? Bridging finance gets you cash fast, then you refinance once things settle down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-16 md:py-24 bg-[#F8F9FB]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            style={{ letterSpacing: '-0.02em' }}
          >
            Why work with us for alternative lending
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">We understand your situation</h3>
                <p className="text-gray-500 max-w-2xl">
                  We don't judge. We get that life's messy. Maybe you had a rough patch, or your income looks weird on paper. We listen and find a lender that gets it too.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">We know the specialist lenders</h3>
                <p className="text-gray-500 max-w-2xl">
                  We work with non-bank lenders, credit unions, and specialist mortgage lenders. We know who'll say yes and who's flexible. You don't have to shop blind.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">We'll get you approved</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll prepare your application the right way, with the right documentation, for the right lender. That maximizes your chances of approval and might get you a better rate.
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
            Alternative lending questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Will non-bank lending be more expensive?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Usually, yes—specialist lenders typically charge a bit more. But sometimes the difference is only 0.5-1%, and it's worth it for approval and flexibility. The real savings come from getting a mortgage you couldn't get elsewhere. We'll always show you the trade-offs and help you decide if it's worth it.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How different is it from a regular mortgage?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                The process is similar, but applications might get more scrutiny. Be prepared for additional documentation—sometimes a lot. We help you get everything ready so you're not caught off-guard. Once you're approved, it works just like a regular mortgage.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Can I refinance to a bank once I'm stable?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Absolutely. Non-bank lending can be a stepping stone. If you get your credit sorted, build stable income history, or pay down your loan, you can refinance to a bank for a better rate. We'll help you make a plan and execute it when the time's right.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How do I prove self-employed income?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Specialist lenders will look at tax returns, accountant statements, and bank statements. Some want to see 2 years, others will accept 1. Bring as much documentation as you can: recent payslips if you've got employees, accounts, contracts. The more solid your documentation, the better your chances.
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
            Think you've been turned down?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            The banks might have said no, but we've got other options. Let's have a chat about where you're at and what's possible.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Book a confidential chat
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
