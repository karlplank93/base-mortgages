import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  image: string;
  imageAlt: string;
}

const resources: ResourceCard[] = [
  {
    id: 1,
    category: 'Guide',
    title: "First Home Buyer's Complete Guide to KiwiSaver",
    description:
      'Everything you need to know about using your KiwiSaver to buy your first home, withdrawal rules, eligibility, and how much you can access.',
    readTime: 8,
    href: '/resources/kiwisaver-first-home',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    imageAlt: 'House keys on a wooden table',
  },
  {
    id: 2,
    category: 'Article',
    title: 'How Cashback Works When Switching Banks',
    description:
      "Many NZ banks offer cashback incentives when you take out a new mortgage. Here's how to make the most of it, and the catch to watch out for.",
    readTime: 5,
    href: '/resources/cashback-explained',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80',
    imageAlt: 'New Zealand banknotes',
  },
  {
    id: 3,
    category: 'Guide',
    title: 'Fixed vs Floating: Which Rate is Right for You?',
    description:
      "One of the most common questions we get. Here's a plain-English breakdown of both options and how to decide what suits your situation.",
    readTime: 6,
    href: '/resources/fixed-vs-floating',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageAlt: 'Financial charts and graphs',
  },
  {
    id: 4,
    category: 'Tool',
    title: 'How Much Can I Borrow? (NZ Borrowing Power Explained)',
    description:
      'Your borrowing power depends on more than just your income. We explain the key factors NZ banks use to assess how much you can borrow.',
    readTime: 7,
    href: '/resources/borrowing-power',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80',
    imageAlt: 'Calculator and financial documents',
  },
  {
    id: 5,
    category: 'Article',
    title: "Property Investment in NZ: A Beginner's Roadmap",
    description:
      "Thinking about buying an investment property? From LVR rules to entity structures, here's what you need to know before you start.",
    readTime: 10,
    href: '/resources/property-investment-guide',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    imageAlt: 'Modern apartment buildings',
  },
  {
    id: 6,
    category: 'Guide',
    title: 'Refinancing Your Mortgage: Is It Worth It?',
    description:
      "Switching lenders could save you thousands, but it's not always the right move. Here's how to weigh up the costs and benefits.",
    readTime: 6,
    href: '/resources/refinancing-guide',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    imageAlt: 'Person signing a document',
  },
  {
    id: 7,
    category: 'Guide',
    title: 'Mortgage Pre-Approval: What It Is and How to Get It',
    description:
      "Pre-approval lets you house hunt with a clear budget and act fast when you find the right property. Here's what the process actually involves.",
    readTime: 5,
    href: '/resources/mortgage-pre-approval',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    imageAlt: 'Handshake between two people',
  },
  {
    id: 8,
    category: 'Guide',
    title: 'Your Mortgage Is Refixing: What to Do Next',
    description:
      "When your fixed term expires, you have more options than just accepting your bank's rollover rate. Here's how to get the best outcome.",
    readTime: 5,
    href: '/resources/refix-guide',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
    imageAlt: 'Planning calendar and notebook',
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
            className="font-display mb-4 font-bold text-gray-900"
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
              {/* Image */}
              <div className="hidden w-1/3 sm:block relative">
                <Image
                  src={resources[0].image}
                  alt={resources[0].imageAlt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>

              {/* Content */}
              <div className="w-full bg-gradient-to-br from-gray-50 to-white p-8 sm:w-2/3">
                <span className="mb-2 inline-block text-sm font-semibold text-teal-600 uppercase tracking-widest">
                  Featured, {resources[0].category}
                </span>
                <h2
                  className="font-display mb-3 font-bold text-gray-900"
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
                  {/* Image */}
                  <div className="relative h-48">
                    <Image
                      src={resource.image}
                      alt={resource.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="mb-3 inline-block text-sm font-semibold text-teal-600 uppercase tracking-widest">
                      {resource.category}
                    </span>

                    <h3
                      className="font-display mb-3 font-bold text-gray-900"
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
            className="font-display mb-4 font-bold text-gray-900"
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
