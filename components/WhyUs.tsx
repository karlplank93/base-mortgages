import { Target, MessageCircle, Zap, DollarSign } from 'lucide-react';

const features = [
  { icon: Target,        title: "Whole-of-market access", description: "We compare all five major banks and non-bank lenders to find the best fit for your situation — not just the easiest option." },
  { icon: MessageCircle, title: "Plain English advice",    description: "No jargon, no confusion. We explain everything clearly so you can make confident, informed decisions." },
  { icon: Zap,           title: "Fast & proactive",       description: "We move quickly when you need to, and we proactively reach out before your rates expire so you're always in the optimal position." },
  { icon: DollarSign,    title: "Free to you",            description: "Our advice costs you nothing. We're paid by the bank when your mortgage settles — so our interests are aligned with yours." },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Why Base Mortgages</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5 leading-tight">
              Your mortgage adviser,<br />for life.
            </h2>
            <p className="text-lg mb-10 max-w-xl" style={{ color: '#6B7280' }}>
              We&apos;re not a transactional service. We build long-term relationships and proactively manage your mortgage so you never leave money on the table.
            </p>
            <div className="space-y-7">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-navy mb-1">{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats card */}
          <div className="rounded-3xl p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #243A5E, #1B2F4A)' }}>
            <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full blur-3xl" style={{ background: 'rgba(39,193,183,0.2)' }} />
            <div className="relative grid grid-cols-2 gap-5 mb-6">
              {[
                { stat: '4.9★', label: '39 Google Reviews from NZ homeowners' },
                { stat: '30+',  label: 'Lenders on our panel' },
                { stat: '24hr', label: 'Average response time' },
                { stat: '$0',   label: 'Cost to you for our advice' },
              ].map(({ stat, label }) => (
                <div key={stat} className="rounded-2xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="font-display text-4xl font-bold mb-1" style={{ color: '#27C1B7' }}>{stat}</div>
                  <div className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>{label}</div>
                </div>
              ))}
            </div>
            {/* Teal CTA inside card */}
            <div className="rounded-2xl p-5 text-center" style={{ background: '#27C1B7' }}>
              <p className="text-sm mb-3 text-white/90">Ready to get started? Book a free call today.</p>
              <a href="https://calendly.com/karl-mortgage-adviser/borrowing-review" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white rounded-lg px-6 py-2.5 font-bold text-sm hover:opacity-90 transition"
                style={{ color: '#1FA79F' }}>
                Book Discovery Call →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
