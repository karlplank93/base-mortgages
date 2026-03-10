import { Phone, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    description: 'We get to know you, your goals, and your financial situation. Free, no-obligation, and usually just 20–30 minutes.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Compare Lenders',
    description: 'We assess your affordability across 30+ banks and lenders, then present a tailored mortgage strategy that fits your life.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Secure the Best Deal',
    description: 'We prepare and submit your application, negotiate on your behalf, and get you the best possible rate and structure.',
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
            Three simple steps to your new mortgage
          </h2>
          <p className="text-lg text-gray-500">
            No surprises, no jargon. Here&apos;s exactly what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 border border-gray-100"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
              >
                <div className="text-5xl font-bold mb-5 leading-none" style={{ color: 'rgba(39,193,183,0.15)' }}>
                  {step.number}
                </div>
                <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:opacity-90"
            style={{ background: '#27C1B7', boxShadow: '0 4px 20px rgba(39,193,183,0.28)' }}
          >
            Start with a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
