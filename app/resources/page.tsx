import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources & Guides | Base Mortgages',
  description: 'Plain-English mortgage guides, articles and tools for New Zealand homebuyers and property investors.',
};

interface ResourceCard {
  id: number;
  category: string;
  title: string;
  description: string;
  readTime: number;
  href: string;
  gradientFrom: string;
  gradientTo: string;
}

const resources: ResourceCard[] = [
  {
    id: 1,
    category: 'Guide',
    title: "First Home Buyer's Complete Guide to KiwiSaver",
    description:
      'Everything you need to know about using your KiwiSaver to buy your first home — withdrawal rules, eligibility, and how much you can access.',
    readTime: 8,
    href: '/resources/kiwisaver-first-home',
    gradientFrom: 'from-teal-400',
    gradientTo: 'to-teal-600',
  },
  {
    id: 2,
    category: 'Article',
    title: 'How Cashback Works When Switching Banks',
    description:
      'Many NZ banks offer cashback incentives when you take out a new mortgage. Here's how to make the most of it — and the catch to watch out for.',
    readTime: 5,
    href: '/resources/cashback-explained',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
  },
  {
    id: 3,
    category: 'Guide',
    title: 'Fixed vs Floating: Which Rate is Right for You?',
    description:
      "One of the most common questions we get. Here's a plain-English breakdown of both options and how to decide what suits your situation.",
    readTime: 6,
    href: '/resources/fixed-vs-floating',
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-cyan-600',
  },
  {
    id: 4,
    category: 'Tool',
    title: 'How Much Can I Borrow? (NZ Borrowing Power Explained)',
    description:
      'Your borrowing power depends on more than just your income. We explain the key factors NZ banks use to assess how much you can borrow.',
    readTime: 7,
    href: '/resources/borrowing-power',
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-emerald-600',
  },
  {
    id: 5,
    category: 'Article',
    title: 'Property Investment in NZ: A Beginner's Roadmap',
    description:
      "Thinking about buying an investment property? From LVR rules to entity structures, here's what you need to know before you start.",
    readTime: 10,
    href: '/resources/property-investment-guide',
    gradientFrom: 'from-violet-400',
    gradientTo: 'to-violet-600',
  },
  {
    id: 6,
    category: 'Guide',
    title: 'Refinancing Your Mortgage: Is It Worth It?',
    description:
      'Switching lenders could save you thousands — but it's not always the right move. Here's how to weigh up the costs and benefits.',
    readTime: 6,
    href: '/resources/refinancing-guide',
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-pink-600',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">
              Resources
            </span>
          </div>
          <h1
            className="mb-4 font-bold text-gray-900"
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Guides, articles & tools to help you decide
          </h1>
          <p className="text-lg text-gray-500">
            Plain-English mortgage content written for New Zealanders.
          </p>
        </div>
      </div>

      {/* Featured Resource */}
      <div className="bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href={resources[0].href}>
            <div className="flex overflow-hidden rounded-2xl border border-gray-100 transition-all hover:shadow-lg">
              {/* Gradient background */}
              <div
                className={`hidden w-1/3 bg-gradient-to-b ${resources[0].gradientFrom} ${resources[0].gradientTo} sm:block`}
              />

              {/* Content */}
              <div className="w-full bg-gradient-to-br from-gray-50 to-white p-8 sm:w-2/3">
                <span className="mb-2 inline-block text-sm font-semibold text-teal-600 uppercase tracking-widest">
                  Featured — {resources[0].category}
                </span>
                <h2
                  className="mb-3 font-bold text-gray-900"
                  style={{ letterSpacing: '-0.02em', fontSize: '1.5rem' }}
                >
                  {resources[0].title}
                </h2>
                <p className="mb-4 text-gray-500">{resources[0].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {resources[0].readTime} min read
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-teal-600">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.slice(1).map((resource) => (
              <Link key={resource.id} href={resource.href}>
                <div className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-md">
                  {/* Image placeholder */}
                  <div
                    className={`h-40 bg-gradient-to-br ${resource.gradientFrom} ${resource.gradientTo}`}
                  />

                  {/* Content */}
                  <div className="p-6">
                    <span className="mb-3 inline-block text-sm font-semibold text-teal-600 uppercase tracking-widest">
                      {resource.category}
                    </span>

                    <h3
                      className="mb-3 font-bold text-gray-900"
                      style={{
                        letterSpacing: '-0.02em',
                        fontSize: '1.125rem',
                      }}
                    >
                      {resource.title}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {resource.readTime} min read
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium text-teal-600 opacity-0 transition-opacity group-hover:opacity-100">
                        Read <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-4 font-bold text-gray-900"
            style={{
              fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Can't find what you're looking for?
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            Let's chat about your mortgage situation. Karl is here to help with
            personalised advice.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal-600 px-8 py-3 font-semibold text-white transition-all hover:bg-teal-700 active:scale-95"
          >
            Book a free call
          </a>
        </div>
      </div>
    </div>
  );
}
