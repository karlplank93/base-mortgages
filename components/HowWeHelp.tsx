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
    description: 'Taking your first step onto the property ladder.',
    href: '/services/first-home-buyers',
  },
  {
    icon: Key,
    title: 'Home Mover',
    description: "Moving home? We'll help make it happen.",
    href: '/services/refinancing',
  },
  {
    icon: ClipboardList,
    title: 'Remortgage',
    description: 'Looking for a better deal? We can help.',
    href: '/services/refix',
  },
  {
    icon: ShieldCheck,
    title: 'Buy to Let',
    description: 'Expert advice for property investors.',
    href: '/services/investors',
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-white py-20 lg:py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display font-bold text-center mb-14 lg:mb-16"
          style={{
            fontSize: 'clamp(28px, 3.2vw, 38px)',
            letterSpacing: '-0.01em',
            color: '#24323D',
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
                className="font-semibold text-base lg:text-lg mb-2"
                style={{ color: '#24323D' }}
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
    </section>
  );
}
