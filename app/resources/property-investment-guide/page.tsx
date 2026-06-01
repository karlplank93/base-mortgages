import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Property Investment in NZ: A Beginner's Roadmap | Base Mortgages",
  description:
    'Thinking about buying an investment property in New Zealand? From LVR rules to entity structures, here\'s what you need to know before you start.',
};

export default function PropertyInvestmentGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-violet-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" /> Back to guides
          </Link>
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Article · 10 min read
            </span>
          </div>
          <h1
            className="font-display mb-6 font-bold text-gray-900"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Property Investment in NZ: A Beginner's Roadmap
          </h1>
          <p className="text-xl text-gray-500">
            From LVR rules to entity structures, here's what you need to understand before buying your first investment property in New Zealand.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 w-full sm:h-96">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
          alt="Modern apartment buildings"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl prose prose-gray prose-lg">

          <h2>Is property investment still worth it in NZ?</h2>
          <p>
            New Zealand's property investment landscape has changed significantly over the past few years — higher interest rates, changes to interest deductibility, and tighter lending rules have all shifted the calculus. But property remains one of the most popular wealth-building strategies for New Zealanders, and for good reason: leverage, long-term capital growth, and rental income can combine to build meaningful wealth over time.
          </p>
          <p>
            Getting the fundamentals right — especially the finance structure — makes all the difference.
          </p>

          <h2>LVR rules for investors</h2>
          <p>
            The Reserve Bank sets Loan-to-Value Ratio (LVR) restrictions for investment property lending. Currently, investors generally need a <strong>minimum 35% deposit</strong> for residential investment properties. This is higher than the 20% required for owner-occupiers.
          </p>
          <p>
            This deposit can come from various sources: savings, equity in your existing home, or a combination. If you're using equity from your home as the deposit, your mortgage adviser will help you structure this as a separate loan split (sometimes called a "top-up") rather than just increasing your home loan — which has tax and accounting implications.
          </p>

          <h2>Interest deductibility — what changed</h2>
          <p>
            For several years, landlords couldn't deduct interest on investment properties from their rental income for tax purposes. This changed significantly from 1 April 2024, when interest deductibility was restored for residential rental properties on a phased basis:
          </p>
          <ul>
            <li><strong>2023/24 tax year:</strong> 50% deductible</li>
            <li><strong>2024/25 tax year:</strong> 80% deductible</li>
            <li><strong>2025/26 onwards:</strong> 100% deductible</li>
          </ul>
          <p>
            This is a significant improvement for investors and has made the numbers stack up better for many properties. Speak with a property accountant to understand how this applies to your situation.
          </p>

          <h2>The bright-line test</h2>
          <p>
            If you sell an investment property within <strong>2 years</strong> of purchasing it, any profit is taxed as income under the bright-line test. This applies to most residential investment properties. The test was previously 10 years, reduced back to 2 years in 2024. This change makes shorter-hold strategies more viable again, though most property investors in New Zealand take a long-term view.
          </p>

          <h2>Ownership structures</h2>
          <p>
            How you own your investment property matters for tax, liability, and estate planning. Common options include:
          </p>
          <ul>
            <li><strong>Personal name</strong> — simplest to set up, but offers no personal liability protection and income is taxed at your personal rate</li>
            <li><strong>Joint names</strong> — works well for couples; income can be split, but both parties are exposed</li>
            <li><strong>LTC (Look-Through Company)</strong> — can pass losses through to shareholders; popular for investors who want to offset rental losses against personal income</li>
            <li><strong>Trust</strong> — provides asset protection and flexibility for estate planning, but adds compliance costs</li>
          </ul>
          <p>
            The right structure depends on your personal tax situation, long-term goals, and how many properties you plan to hold. An accountant specialising in property investment is essential here — get this advice before you buy, not after.
          </p>

          <h2>How banks assess investment property applications</h2>
          <p>
            Lenders treat investment property applications differently to home loans:
          </p>
          <ul>
            <li>Only a portion of expected rental income is counted (typically 75%) to allow for vacancies and expenses</li>
            <li>Your existing home loan is factored into your total debt obligations</li>
            <li>Stress testing at higher rates means your assessed serviceability is more conservative</li>
            <li>DTI (debt-to-income) limits apply across your whole portfolio — currently 7x gross income for investors</li>
          </ul>
          <p>
            Different lenders have different appetites for investment lending. Some banks are more flexible with portfolio investors; others are more restrictive. A mortgage adviser who works regularly with property investors will know which lender suits your profile.
          </p>

          <h2>Cashflow vs capital growth</h2>
          <p>
            Investment properties generally fall somewhere on a spectrum between high-cashflow (positive rental yield after costs) and high-growth (significant capital appreciation expected). In New Zealand's major cities, particularly Auckland, properties often offer stronger growth but lower immediate cashflow. Regional areas may offer better yields but less predictable growth.
          </p>
          <p>
            Neither is inherently better — it depends on your goals, your time horizon, and your current financial position.
          </p>

          <h2>What to think about before you buy</h2>
          <ul>
            <li>Can you service the loan if the property is vacant for 6–8 weeks?</li>
            <li>Are you prepared for maintenance costs and unexpected repairs?</li>
            <li>How does the investment fit with your home loan — are both serviced comfortably?</li>
            <li>What's your exit strategy if you need to liquidate?</li>
            <li>Have you spoken to an accountant about the tax implications before settling?</li>
          </ul>

          <h2>Getting finance right from the start</h2>
          <p>
            The structure of your investment loan matters as much as the rate. Separating investment debt from personal debt, choosing the right fixed/floating mix, and setting up loan limits correctly will affect your flexibility for years. This is one of the most valuable things a mortgage adviser does for property investors — not just getting the loan across the line, but structuring it well.
          </p>

        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-teal-50 p-8 text-center">
          <h3
            className="font-display mb-3 font-bold text-gray-900"
            style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Thinking about your first investment property?
          </h3>
          <p className="mb-6 text-gray-500">
            Karl works with property investors at every stage — from first-timers to growing portfolios. Book a free call to talk through the finance side.
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
