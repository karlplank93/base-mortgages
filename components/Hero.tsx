'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#F8FAF9' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-32 lg:pt-20 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div className="relative z-10">
            <h1
              className="font-display font-bold mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(40px, 5.2vw, 64px)',
                letterSpacing: '-0.02em',
                color: '#24323D',
              }}
            >
              Mortgages<br />
              made <span style={{ color: '#4A9FA6' }}>simple.</span><br />
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
              className="inline-flex items-center px-6 py-3.5 rounded-lg text-white font-semibold text-base transition-all hover:opacity-90"
              style={{
                background: '#006D77',
                boxShadow: '0 4px 16px rgba(0,109,119,0.22)',
              }}
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Image column */}
          <div className="relative order-first lg:order-last z-10">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.10)' }}
            >
              <img
                src="/hero-image.jpg"
                alt="A New Zealand family settling into their new home"
                className="w-full h-72 sm:h-96 lg:h-[460px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Smooth curve graphics — signature brand element from the brand guide */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        style={{ height: 'clamp(120px, 14vw, 220px)' }}
        aria-hidden="true"
      >
        {/* Background mint curve — primary signature swoosh */}
        <path
          d="M 0,220 L 0,150 Q 360,40 720,90 T 1440,60 L 1440,220 Z"
          fill="#D6E7E2"
        />
        {/* Foreground teal accent curve — overlaps on the right */}
        <path
          d="M 720,220 L 720,180 Q 1080,90 1440,140 L 1440,220 Z"
          fill="#006D77"
          opacity="0.92"
        />
      </svg>
    </section>
  );
}
