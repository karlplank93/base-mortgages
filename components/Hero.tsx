'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-5">
              New Zealand Mortgage Advisers
            </p>

            <h1
              className="font-display font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.02em' }}
            >
              Smart mortgages,{' '}
              <span className="text-teal">built around you.</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
              Whether you&apos;re buying your first home, refinancing, or growing your portfolio — we find the right mortgage and handle everything for you.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <a
                href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:opacity-90"
                style={{ background: '#27C1B7', boxShadow: '0 4px 20px rgba(39,193,183,0.3)' }}
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 font-medium text-gray-700 hover:text-navy transition-colors text-base"
              >
                See how we help <span className="text-teal">→</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
              {[
                { value: '$36M+', label: 'Loans Arranged' },
                { value: '30+',   label: 'Banks & Lenders' },
                { value: '4.9★',  label: 'Google Rating' },
              ].map(({ value, label }) => (
                <div key={value}>
                  <div className="text-2xl font-bold text-navy">{value}</div>
                  <div className="text-sm text-gray-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.10)' }}
            >
              <img
                src="/hero-image.jpg"
                alt="Base Mortgages Team"
                className="w-full h-72 sm:h-96 lg:h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 hidden sm:block"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <div className="text-xs text-gray-400 mb-1">Google Reviews</div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
                <span className="font-bold text-gray-900 text-sm">4.9 / 5</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
