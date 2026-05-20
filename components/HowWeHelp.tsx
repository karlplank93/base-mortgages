'use client';

import Link from 'next/link';
import { Home, Key, ClipboardList, ShieldCheck } from 'lucide-react';

const helpCategories: {
  icon: typeof Home;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: Home,
    title: 'First Time Buyer',
    description: 'From KiwiSaver & deposits to pre-approvals, we help get you into your first home.',
    href: '/services/first-home-buyers',
  },
  {
    icon: Key,
    title: 'Home Mover',
    description: 'Sell, buy, and move seamlessly with finance and expert timing.',
    href: '/services/refinancing',
  },
  {
    icon: ClipboardList,
    title: 'Refinance',
    description: 'Better rates, cashback offers, and smarter structures, we save you money on your mortgage.',
    href: '/services/refix',
  },
  {
    icon: ShieldCheck,
    title: 'Investors',
    description: 'From cashflow analysis to smart debt structuring, we help you grow your property portfolio.',
    href: '/services/investors',
  },
];

export default function HowWeHelp() {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-12 pb-28 lg:pb-32 px-6 lg:px-8" style={{ background: '#C7E8DE' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display font-bold text-center mb-10 lg:mb-12"
          style={{
            fontSize: 'clamp(28px, 3.2vw, 38px)',
            letterSpacing: '-0.01em',
            color: '#1F2933',
          }}
        >
          How we can help
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {helpCategories.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col items-center text-center px-3 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5">
                <Icon
                  className="w-12 h-12 lg:w-14 lg:h-14"
                  strokeWidth={1.5}
                  style={{ color: '#006D77' }}
                />
              </div>
              <h3
                className="font-display font-semibold text-lg lg:text-xl mb-2"
                style={{ color: '#1F2933' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-[200px]"
                style={{ color: '#6B7280' }}
              >
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Cream curve at bottom, bridges HowWeHelp (mint) back into Pricing (cream) */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 'clamp(60px, 8vw, 120px)' }}
        aria-hidden="true"
      >
        <path
          d="M 0,120 L 0,80 Q 360,10 720,50 T 1440,40 L 1440,120 Z"
          fill="#FAF7F0"
        />
      </svg>
    </section>
  );
}
