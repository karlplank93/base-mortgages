import { Metadata } from 'next';
import { Building2, Clock, AlertCircle, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Loans | Base Mortgages',
  description: 'Expert NZ construction and new build mortgage advice. Progress payments, drawdown schedules, and build finance management.',
};

export default function ConstructionPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#F8F9FB] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-[#27C1B7] uppercase tracking-widest mb-4">
            Construction Loans
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            We'll manage the money side while you manage the build
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            Building or buying a new home is complex. Construction finance is different from a standard mortgage. We'll make sure you've got the right funding at each stage.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Talk to us about your build
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
            What we help with
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">
            Construction loans work differently than standard mortgages. We'll handle the technical side so you can focus on getting your home right.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progress payment setup</h3>
              <p className="text-gray-500">
                We'll arrange funding that releases in stages as your build progresses. So you pay the builder as they hit milestones (foundations, framing, lockup, etc.), not all upfront.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#27C1B7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drawdown management</h3>
              <p className="text-gray-500">
                We coordinate with the builder and the bank. When you hit a stage, we arrange the drawdown so the money's there when you need it. No delays, no cash flow problems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Builder contract review</h3>
              <p className="text-gray-500">
                We'll review your fixed-price contract to make sure there aren't surprises in the funding. We'll spot potential cost issues early so you're not caught off-guard.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access to all lenders</h3>
              <p className="text-gray-500">
                Not every lender does construction finance, and rates and terms vary wildly. We shop around so you get the best option. This could save thousands over the build period.
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
            How we set up your construction loan
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-approval</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll get you pre-approved for the amount you need, based on your plans and the land or deposit you've got. This usually takes 5-7 working days and gives you confidence to proceed.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Builder contract review</h3>
                <p className="text-gray-500 max-w-2xl">
                  Once you've got a builder quote, we'll review the contract with you to spot any funding gaps. Fixed-price contracts are good, but we want to make sure there's no hidden surprises.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Drawdown management</h3>
                <p className="text-gray-500 max-w-2xl">
                  As construction progresses, we'll coordinate each drawdown with the builder and the bank. We'll make sure funds are released on time at each milestone, and handle any changes to the plan.
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
            Construction finance questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                What's the deposit on a construction loan?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Usually you need 10-20% as a deposit. The exact amount depends on the lender, the builder, and whether you own the land. If you own the land outright, some lenders will count the land value, which can reduce your cash requirement. We'll work through your options.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                What if construction costs blow out?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                This is why fixed-price contracts are important. If you've got a fixed contract and costs rise, that's the builder's problem, not yours. But if you're doing variations (extra features, changes), those need funding too. We help you figure out where you can fund changes and what you can afford.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How do progress payments work?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Most builders work on a standard schedule: 10% on contract, then payment at key milestones like foundation, framing, lockup, internal fit-out, and final completion. We arrange the loan so funds release at these stages. The bank usually gets a progress report from a registered valuer before releasing each amount.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                What happens when the build's finished?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Once construction is done, the loan usually converts to a standard mortgage. If you've drawn your full construction facility, you'll have the balance on the home loan at the standard rate. If you've under-drawn, you might have extra borrowing capacity. We'll help you understand your options.
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
            Planning a new build?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's chat about your plans and get the construction finance sorted before you sign with the builder.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Discuss your build plan
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
