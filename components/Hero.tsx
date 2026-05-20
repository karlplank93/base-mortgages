'use client';

import Image from 'next/image';
import { Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FAF7F0' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-10 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="relative z-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3 lg:mb-5"
              style={{ color: '#C9A063' }}
            >
              New Zealand Mortgage Advisers
            </p>
            <h1
              className="font-display font-bold mb-4 lg:mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '-0.02em',
                color: '#1F2933',
              }}
            >
              Mortgages<br />
              made <span style={{ color: '#006D77' }}>simple.</span><br />
              Advice you can trust.
            </h1>

            <p
              className="text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed max-w-md"
              style={{ color: '#6B7280' }}
            >
              We compare NZ lenders to help you buy, refinance, invest or get a better deal.
            </p>

            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white font-bold text-base transition-all hover:opacity-90"
              style={{
                background: '#006D77',
                boxShadow: '0 4px 16px rgba(0,109,119,0.28)',
              }}
            >
              Book a Free Consultation
            </a>

            {/* Trust signal block, two-column layout, Google rating + Kiwi homeowners */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7">
              <a
                href="https://share.google/ynwAl6ap2cyS4csY0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="text-yellow-400 text-base tracking-wider">★★★★★</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold" style={{ color: '#1F2933' }}>
                    4.9 Google Rating
                  </span>
                  <span className="text-xs" style={{ color: '#6B7280' }}>
                    From 39 reviews
                  </span>
                </div>
              </a>

              <div className="hidden sm:block h-8 w-px" style={{ background: '#E5E7EB' }} aria-hidden="true" />

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" strokeWidth={1.8} style={{ color: '#006D77' }} />
                <span className="text-sm leading-tight" style={{ color: '#1F2933' }}>
                  Trusted by Kiwi<br className="sm:hidden" /> homeowners across NZ
                </span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative z-10">
            <div
              className="relative w-full h-64 sm:h-80 lg:h-[480px] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.10)' }}
            >
              <Image
                src="/hero-image.jpg"
                alt="A New Zealand family settling into their new home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
