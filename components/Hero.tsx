'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative" style={{ background: '#F7F5F2' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div>
            <h1
              className="font-display font-bold mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(40px, 5.2vw, 64px)',
                letterSpacing: '-0.02em',
                color: '#24323D',
              }}
            >
              Mortgages<br />
              made <span style={{ color: '#0F4C4F' }}>simple.</span><br />
              Advice you can trust.
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed max-w-md"
              style={{ color: '#6B7280' }}
            >
              We&apos;ll help you find the right mortgage for your home and your future.
            </p>

            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-lg text-white font-semibold text-base transition-all hover:opacity-90"
              style={{
                background: '#0F4C4F',
                boxShadow: '0 4px 16px rgba(15,76,79,0.28)',
              }}
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Image column — text comes first on mobile, image right on desktop */}
          <div className="relative">
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
