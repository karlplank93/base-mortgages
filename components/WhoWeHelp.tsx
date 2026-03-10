'use client';

import Link from 'next/link';
import { Home, RefreshCw, TrendingUp } from 'lucide-react';

const audiences = [
  {
    icon: Home,
    tag: 'First Home',
    title: 'First Home Buyers',
    description: 'Get your First Home Roadmap — from KiwiSaver to keys in hand. We make the complex simple and guide you every step of the way.',
    href: '/services/first-home-buyers',
  },
  {
    icon: RefreshCw,
    tag: 'Homeowner',
    title: 'Existing Homeowners',
    description: 'Refinance, restructure, or top up — make your mortgage work harder for you and stop paying more than you need to.',
    href: '/services/homeowners',
  },
  {
    icon: TrendingUp,
    tag: 'Investor',
    title: 'Property Investors',
    description: 'Strategic debt structuring to grow your portfolio faster and smarter, with access to lenders who understand investment lending.',
    href: '/services/investors',
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">Who We Help</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
            Wherever you are on your property journey
          </h2>
          <p className="text-lg text-gray-500">
            We specialise in three types of clients, each with a tailored approach designed around their unique situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.tag}
                href={a.href}
                className="group rounded-2xl p-8 border border-gray-100 bg-white hover:border-teal hover:shadow-card transition-all duration-200"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,46,107,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)')}
              >
                <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-teal-light text-teal-dark mb-4">
                  {a.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{a.description}</p>
                <div className="text-sm font-semibold text-teal group-hover:gap-3 transition-all flex items-center gap-2">
                  Learn more →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
