'use client';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative mint wedge — bottom-left signature element from brand guide */}
      <div
        className="absolute left-0 bottom-0 w-[55%] h-[110px] pointer-events-none"
        style={{
          background: '#D6E7E2',
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
        }}
        aria-hidden="true"
      />
      {/* Soft teal accent — bottom-right balancing wedge */}
      <div
        className="absolute right-0 bottom-0 w-[30%] h-[80px] pointer-events-none opacity-90"
        style={{
          background: '#006D77',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div>
            <h1
              className="font-display font-bold mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(40px, 5.4vw, 68px)',
                letterSpacing: '-0.02em',
                color: '#24323D',
              }}
            >
              Mortgages<br />
              made <span style={{ color: '#A8B8B2' }}>simple.</span><br />
              Advice you can <span style={{ color: '#A8B8B2' }}>trust.</span>
            </h1>

            <p
              className="text-lg mb-9 leading-relaxed max-w-md"
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
                boxShadow: '0 4px 16px rgba(0,109,119,0.22)',
              }}
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Image column */}
          <div className="relative order-first lg:order-last">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.10)' }}
            >
              <img
                src="/hero-image.jpg"
                alt="A New Zealand family settling into their new home"
                className="w-full h-72 sm:h-96 lg:h-[520px] object-cover"
              />
            </div>

            {/* Floating reviews badge */}
            <div
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 hidden sm:block"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <div className="text-xs mb-1" style={{ color: '#A8B8B2' }}>
                Google Reviews
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
                <span className="font-bold text-sm" style={{ color: '#24323D' }}>
                  4.9 / 5
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
