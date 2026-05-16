import { Phone, Mail, Calendar } from 'lucide-react';

const stats: { value: string; label: string }[] = [
  { value: '4.9★', label: 'Google Reviews from NZ homeowners' },
  { value: '30+',  label: 'Lenders on our panel' },
  { value: '24hr', label: 'Average response time' },
  { value: '$0',   label: 'Cost to you for our advice' },
];

export default function MeetAdviser() {
  return (
    <section
      className="py-14 lg:py-20 px-6 lg:px-8"
      style={{ background: '#F7F5F2' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#0F4C4F' }}
          >
            Meet your adviser
          </p>
          <h2
            className="font-display font-bold mb-3 leading-tight"
            style={{
              fontSize: 'clamp(26px, 2.8vw, 36px)',
              letterSpacing: '-0.01em',
              color: '#24323D',
            }}
          >
            A name, a face, and a direct line.
          </h2>
          <p className="text-base" style={{ color: '#6B7280' }}>
            Mortgages are a big decision — and you should know exactly who you&apos;re
            working with. No call centres, no handoffs.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 lg:p-10"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
            {/* Photo — fixed size, no stretching */}
            <div className="flex-shrink-0 w-full sm:w-48 lg:w-56">
              <div
                className="rounded-xl overflow-hidden"
                style={{ aspectRatio: '4 / 5' }}
              >
                <img
                  src="/karl-plank.jpg"
                  alt="Karl Plank, Mortgage Adviser at Base Mortgages"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>

            {/* Bio + contact — flexible right column */}
            <div className="flex-1 min-w-0">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: '#0F4C4F' }}
              >
                Mortgage Adviser
              </p>
              <h3
                className="font-display font-bold mb-3 leading-tight"
                style={{
                  fontSize: 'clamp(24px, 2.4vw, 30px)',
                  letterSpacing: '-0.01em',
                  color: '#24323D',
                }}
              >
                Karl Plank
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: '#6B7280' }}
              >
                I&apos;m a licensed Financial Adviser based in Auckland, helping Kiwis
                at every stage of their property journey — from first home buyers to
                seasoned investors. Plain-English advice, proactive service, right outcome.
              </p>

              {/* Credentials chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Licensed Financial Adviser', 'FSP Registered', 'NZ-wide'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: '#C7E8DE', color: '#0F4C4F' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact + CTA — horizontal on larger screens */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="tel:0272664925"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{ color: '#24323D' }}
                  >
                    <Phone className="w-4 h-4" style={{ color: '#0F4C4F' }} />
                    <span className="font-medium">027 266 4925</span>
                  </a>
                  <a
                    href="mailto:karl@basemortgages.co.nz"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{ color: '#24323D' }}
                  >
                    <Mail className="w-4 h-4" style={{ color: '#0F4C4F' }} />
                    <span className="font-medium">karl@basemortgages.co.nz</span>
                  </a>
                </div>

                <a
                  href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 sm:ml-auto"
                  style={{
                    background: '#FF8A5B',
                    boxShadow: '0 4px 16px rgba(255,138,91,0.22)',
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — kept underneath, slightly more compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center"
              style={{ background: '#0F4C4F' }}
            >
              <div
                className="font-display font-bold mb-1"
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 30px)',
                  color: '#C7E8DE',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs leading-snug"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
