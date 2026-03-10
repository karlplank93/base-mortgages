import { CheckCircle, Target, MessageCircle, Zap, DollarSign } from 'lucide-react';

const features = [
  { icon: Target,        title: 'Whole-of-market access', description: 'We compare all five major banks and non-bank lenders to find the best fit for you — not just the easiest option.' },
  { icon: MessageCircle, title: 'Plain English advice',   description: 'No jargon, no confusion. We explain everything clearly so you can make confident, informed decisions.' },
  { icon: Zap,           title: 'Fast & proactive',       description: 'We move quickly when you need to and proactively reach out before your rates expire so you\'re always in the best position.' },
  { icon: DollarSign,    title: 'Free to you',            description: 'Our advice costs you nothing. We\'re paid by the bank when your mortgage settles — so our interests are aligned with yours.' },
];

const bullets = [
  'Access to 30+ lenders',
  'Negotiated cashback offers',
  'Personalised mortgage strategy',
  '100% free service',
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">Why Base Mortgages</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Your mortgage adviser, for life.
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-lg">
              We&apos;re not a transactional service. We build long-term relationships and proactively manage your mortgage so you never leave money on the table.
            </p>

            <div className="space-y-3 mb-10">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                  <span className="text-base font-medium text-gray-700">{b}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats card */}
          <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'rgba(39,193,183,0.18)', transform: 'translate(30%, -30%)' }}
            />
            <div className="relative grid grid-cols-2 gap-4 mb-6">
              {[
                { stat: '4.9★', label: '39 Google Reviews from NZ homeowners' },
                { stat: '30+',  label: 'Lenders on our panel' },
                { stat: '24hr', label: 'Average response time' },
                { stat: '$0',   label: 'Cost to you for our advice' },
              ].map(({ stat, label }) => (
                <div key={stat} className="rounded-2xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <div className="text-3xl font-bold text-teal mb-1">{stat}</div>
                  <div className="text-xs text-white/50 leading-snug">{label}</div>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl p-5 text-center" style={{ background: '#27C1B7' }}>
              <p className="text-sm mb-3 text-white/90">Ready to get started? Book a free call today.</p>
              <a
                href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white rounded-full px-6 py-2.5 font-bold text-sm hover:opacity-90 transition"
                style={{ color: '#1FA79F' }}
              >
                Book Discovery Call →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
