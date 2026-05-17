'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FAF7F0' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="relative z-10">
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
              We&apos;ll help you find the right mortgage for your home and your future.
            </p>

            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-lg text-white font-semibold text-base transition-all hover:opacity-90"
              style={{
                background: '#006D77',
                boxShadow: '0 4px 16px rgba(0,109,119,0.28)',
              }}
            >
              Book a Free Consultation
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

      {/* Curve graphic flowing into the next section */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        style={{ height: 'clamp(80px, 12vw, 180px)' }}
        aria-hidden="true"
      >
        <path
          d="M 0,180 L 0,120 Q 360,20 720,70 T 1440,50 L 1440,180 Z"
          fill="#C7E8DE"
        />
        <path
          d="M 720,180 L 720,140 Q 1080,60 1440,100 L 1440,180 Z"
          fill="#C9A063"
          opacity="0.9"
        />
      </svg>
    </section>
  );
}
