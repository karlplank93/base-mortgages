import { Building2, MessageSquare, Compass, Wallet } from 'lucide-react';

const reasons: { icon: typeof Building2; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'We compare multiple banks',
    description:
      "Different lenders suit different situations. We'll compare 20+ lenders to find the right fit for you.",
  },
  {
    icon: MessageSquare,
    title: 'Honest, straightforward advice',
    description:
      "We'll tell you if staying put is the best option. Our advice is always in your best interest.",
  },
  {
    icon: Compass,
    title: 'Expert guidance, every step',
    description:
      'From start to settlement and beyond, we make the process simple and stress-free.',
  },
  {
    icon: Wallet,
    title: 'No cost to you',
    description:
      'The bank pays us, not you. You get expert advice without the extra cost.',
  },
];

export default function WhyBase() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8" style={{ background: '#FAF7F0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left column, intro + CTA */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#C9A063' }}
            >
              Why Choose Base?
            </p>
            <h2
              className="font-display font-bold mb-5 leading-[1.1]"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                letterSpacing: '-0.01em',
                color: '#1F2933',
              }}
            >
              Advice that puts<br />you first.
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: '#6B7280' }}
            >
              We take the time to understand your goals and find the right solution,
              not just the next loan.
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
              Book a Free Review
            </a>
          </div>

          {/* Right column, 4 reasons grid */}
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: '#C7E8DE' }}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} style={{ color: '#006D77' }} />
                </div>
                <h3
                  className="font-display font-semibold text-base lg:text-lg mb-2 leading-snug"
                  style={{ color: '#1F2933' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6B7280' }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
