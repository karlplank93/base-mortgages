import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services: { title: string; description: string; href: string; cta: string }[] = [
  {
    title: 'First Home Buyers',
    description:
      'From helping you build your deposit and understand your borrowing power, to finding the right property and securing the best loan, right through to settlement.',
    href: '/services/first-home-buyers',
    cta: 'Secure your first home loan',
  },
  {
    title: 'Property Investors',
    description:
      'We help investors understand their cashflow and rental yields, find the right properties, and secure the best funding, guiding you through every step of the investment journey.',
    href: '/services/investors',
    cta: 'Finance your next investment',
  },
  {
    title: 'Refinancing',
    description:
      'We help homeowners review their existing mortgage, reduce interest costs, unlock equity, and secure better lending terms that align with your current financial goals.',
    href: '/services/refinancing',
    cta: 'Refinance your home loan',
  },
  {
    title: 'Refix & Restructure',
    description:
      "Don't just roll over your rate. Let us review your full loan structure and advise on the optimal combination of fixed, floating, and term lengths, proactively, before your rates expire.",
    href: '/services/refix',
    cta: 'Review your loan structure',
  },
  {
    title: 'New Build & Construction',
    description:
      'Building your dream home? We manage construction loan drawdowns, progress payments, and make sure your finances are in order at every stage, start to finish.',
    href: '/services/construction',
    cta: 'Finance your build',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 px-6 lg:px-8"
      style={{ background: '#FAF7F0' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#C9A063' }}
          >
            Our Services
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              letterSpacing: '-0.01em',
              color: '#1F2933',
            }}
          >
            Smarter borrowing,<br />
            <span style={{ color: '#006D77' }}>tailored to your situation.</span>
          </h2>
        </div>

        {/* Editorial list */}
        <div>
          {services.map((service) => (
            <div
              key={service.title}
              className="grid lg:grid-cols-12 gap-8 py-10 lg:py-12"
              style={{ borderTop: '1px solid #E5E7EB' }}
            >
              {/* Title */}
              <div className="lg:col-span-4">
                <h3
                  className="font-display font-bold leading-tight"
                  style={{
                    fontSize: 'clamp(24px, 2.4vw, 32px)',
                    letterSpacing: '-0.01em',
                    color: '#1F2933',
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description + CTA */}
              <div className="lg:col-span-8">
                <p
                  className="text-base lg:text-lg leading-relaxed mb-5 max-w-2xl"
                  style={{ color: '#6B7280' }}
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold group transition-all"
                  style={{ color: '#006D77' }}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
