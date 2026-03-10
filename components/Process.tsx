import { Phone, Search, CheckCircle } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "We get to know you, your goals, and your financial situation. Free, no-obligation, and usually just 20–30 minutes.",
  },
  {
    number: "02",
    icon: Search,
    title: "Compare Lenders",
    description: "We assess your affordability across 30+ banks and lenders, then present a tailored mortgage strategy that fits your life.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Secure the Best Deal",
    description: "We prepare and submit your application, negotiate on your behalf, and get you the best possible rate and structure.",
  },
];

export default function Process() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5 leading-tight">
            Three simple steps to your<br />new mortgage
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: '#6B7280' }}>
            We&apos;ve streamlined the entire process so you know exactly what to expect — no surprises, no jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number}
                className="relative p-10 border border-[#E6EAF0] bg-white first:rounded-l-2xl last:rounded-r-2xl -ml-px first:ml-0 hover:z-10 transition-shadow duration-300 hover:shadow-lg">
                {/* Step number watermark */}
                <div className="font-display text-7xl font-bold mb-6 leading-none select-none"
                  style={{ color: 'rgba(39,193,183,0.12)' }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-teal" />
                </div>

                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{step.description}</p>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 rounded-full items-center justify-center z-10"
                    style={{ background: '#27C1B7' }}>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA below */}
        <div className="text-center mt-12">
          <a href="https://calendly.com/karl-mortgage-adviser/borrowing-review" target="_blank" rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-xl font-semibold text-lg transition hover:-translate-y-0.5"
            style={{ background: '#27C1B7', boxShadow: '0 4px 20px rgba(39,193,183,0.3)' }}>
            Start with a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
