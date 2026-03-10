import { Metadata } from 'next';
import { CheckCircle, Home, Clock, DollarSign, Heart, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'First Home Buyers | Base Mortgages',
  description: 'Get expert guidance on your first home purchase in NZ. KiwiSaver withdrawal, First Home Loan, deposit help & bank pre-approval.',
};

export default function FirstHomeBuyersPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-[#F8F9FB] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <p className="text-sm font-semibold text-[#27C1B7] uppercase tracking-widest mb-4">
            First Home Buyers
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Your path to home ownership starts here
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            We'll guide you through every step—from unlocking your KiwiSaver to getting pre-approved by the right lender. No jargon, just straight advice.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Book a free chat
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
            What we'll help you with
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">
            Buying your first home is a big moment. We'll handle the mortgage side so you can focus on finding the right place.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">KiwiSaver & First Home Loan</h3>
              <p className="text-gray-500">
                We'll show you how to access your KiwiSaver, understand the First Home Loan eligibility, and work out what deposit you actually need. Most first home buyers can buy sooner than they think.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#27C1B7]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank pre-approval</h3>
              <p className="text-gray-500">
                We'll get you pre-approved so you know your budget before you start house hunting. This shows sellers you're serious, and helps you stay focused on properties in your range.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access to all lenders</h3>
              <p className="text-gray-500">
                We work with every major NZ bank plus Kāinga Ora and specialist lenders. That means we find the best rate and terms for your situation, not just what your current bank offers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#0A2E6B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">It's completely free</h3>
              <p className="text-gray-500">
                We're paid by the lenders, not by you. So getting expert advice costs you nothing—and could save you thousands in interest over your mortgage life.
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
            How it works
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery call</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll chat about your situation, your goals, any challenges with credit or income, and what you've saved so far. This is just a friendly conversation to understand where you're at.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy & pre-approval</h3>
                <p className="text-gray-500 max-w-2xl">
                  We'll work out the best way to use your KiwiSaver, apply for pre-approval from the lender that suits you best, and give you a clear picture of what you can borrow. This usually takes 3-5 working days.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Settlement</h3>
                <p className="text-gray-500 max-w-2xl">
                  You've found the right place. We'll manage the loan application with full paperwork, liaise with the bank and your lawyer, and make sure everything's ready for settlement day.
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
            Common questions
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How much deposit do I actually need?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                It depends on your situation. With a strong KiwiSaver balance and income, the First Home Loan can help you buy with as little as 5-10% deposit. We'll work through what you've got and show you your options. Most people can access more than they think.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                Can I withdraw from my KiwiSaver?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Yes. If you're a first home buyer, you can withdraw your full KiwiSaver balance and all the contributions your employer made. You can also withdraw the government contribution (once it's been in the scheme for 5 years). We'll make sure you do this the right way and keep IRD happy.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                What's the First Home Loan exactly?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                It's a government scheme run by most banks. If you qualify, you get a better interest rate and lower fees than a standard home loan. You need to be under 40 years old, buying a place to live (not investment), and this is your first home purchase. We'll check if you qualify and apply for you.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="border border-gray-100 rounded-2xl p-6 open:bg-[#F8F9FB] group cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-gray-900 text-lg select-none">
                How long does it take to get pre-approved?
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition" />
              </summary>
              <p className="text-gray-500 mt-4">
                Usually 3-5 working days from when you've given us all your info. We'll handle all the paperwork with the bank. Once you're pre-approved, you can start house hunting with confidence and move quickly when you find the right place.
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
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's have a chat about your first home goals. No pressure, no commitment—just friendly advice to get you moving.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            className="inline-block bg-[#27C1B7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Book a free consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
