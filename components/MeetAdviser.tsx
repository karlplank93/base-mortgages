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
      className="py-20 lg:py-24 px-6 lg:px-8"
      style={{ background: '#F7F5F2' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#0F4C4F' }}
          >
            Meet your adviser
          </p>
          <h2
            className="font-display font-bold mb-4 leading-tight"
            style={{
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              letterSpacing: '-0.01em',
              color: '#24323D',
            }}
          >
            A name, a face, and a direct line.
          </h2>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Mortgages are a big decision — and you should know exactly who you&apos;re
            working with. No call centres, no handoffs.
          </p>
        </div>

        <div
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 grid lg:grid-cols-5 gap-0"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
        >
          {/* Photo */}
          <div className="lg:col-span-2 relative">
            <img
              src="/karl-plank.jpg"
              alt="Karl Plank, Mortgage Adviser at Base Mortgages"
              className="w-full h-72 lg:h-full object-cover"
            />
          </div>

          {/* Bio + contact */}
          <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#0F4C4F' }}
            >
              Mortgage Adviser
            </p>
            <h3
              className="font-display font-bold mb-5 leading-tight"
              style={{
                fontSize: 'clamp(28px, 3vw, 36px)',
                letterSpacing: '-0.01em',
                color: '#24323D',
              }}
            >
              Karl Plank
            </h3>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: '#6B7280' }}
            >
              I&apos;m a licensed Financial Adviser based in Auckland, helping Kiwis at every
              stage of their property journey — from first home buyers to seasoned investors.
              I take pride in plain-English advice, proactive service, and getting the right
              outcome for the people I work with.
            </p>

            {/* Credentials chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {['Licensed Financial Adviser', 'FSP Registered', 'NZ-wide'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: '#C7E8DE', color: '#0F4C4F' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact rows */}
            <div className="space-y-3 mb-7">
              <a
                href="tel:0272664925"
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                style={{ color: '#24323D' }}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#C7E8DE' }}
                >
                  <Phone className="w-4 h-4" style={{ color: '#0F4C4F' }} />
                </span>
                <span className="font-medium">027 266 4925</span>
              </a>
              <a
                href="mailto:karl@basemortgages.co.nz"
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                style={{ color: '#24323D' }}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#C7E8DE' }}
                >
                  <Mail className="w-4 h-4" style={{ color: '#0F4C4F' }} />
                </span>
                <span className="font-medium">karl@basemortgages.co.nz</span>
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-semibold text-base transition-all hover:opacity-90 self-start"
              style={{
                background: '#FF8A5B',
                boxShadow: '0 4px 16px rgba(255,138,91,0.28)',
              }}
            >
              <Calendar className="w-4 h-4" />
              Book a Meeting with Karl
            </a>
          </div>
        </div>

        {/* Stats strip — moved from old WhyUs section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-6 text-center"
              style={{ background: '#0F4C4F' }}
            >
              <div
                className="font-display font-bold mb-2"
                style={{
                  fontSize: 'clamp(28px, 3vw, 40px)',
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
