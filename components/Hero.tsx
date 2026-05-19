'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FAF7F0' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-14 lg:pt-28 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="relative z-10">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: '#C9A063' }}
            >
              New Zealand Mortgage Advisers
            </p>
            <h1
              className="font-display font-bold mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(40px, 5.2vw, 64px)',
                letterSpacing: '-0.02em',
                color: '#1F2933',
              }}
            >
              Mortgages<br />
              made <span style={{ color: '#006D77' }}>simple.</span><br />
              Advice you can trust.
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed max-w-md"
              style={{ color: '#6B7280' }}
            >
              Expert, fee-free advice, trusted by Kiwi families.
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

            {/* Google Reviews trust signal */}
            <a
              href="https://share.google/ynwAl6ap2cyS4csY0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 hover:opacity-80 transition-opacity"
            >
              <span className="text-yellow-400 text-base tracking-wider">★★★★★</span>
              <span className="text-sm font-semibold" style={{ color: '#1F2933' }}>4.9</span>
              <span className="text-sm" style={{ color: '#6B7280' }}>
                from 39 Google Reviews
              </span>
            </a>
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
