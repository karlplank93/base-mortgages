import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We get to know you, your goals, and your financial situation. Free, no-obligation, and usually just 20–30 minutes.",
  },
  {
    number: "02",
    title: "Mortgage Strategy",
    description: "We assess your affordability, identify the right lenders, and present a tailored mortgage strategy that fits your life.",
  },
  {
    number: "03",
    title: "Pre-Approval",
    description: "We prepare and submit your application, guide you through any conditions, and get your pre-approval secured.",
  },
  {
    number: "04",
    title: "Settlement & Beyond",
    description: "We see you through to settlement — and stay by your side for every refix, refinance, and property move after that.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold text-blue uppercase tracking-widest mb-3">How It Works</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
            Four simple steps to your<br />new mortgage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We've streamlined the entire process so you know exactly what to expect — no surprises, no jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative p-8 border-r border-gray-200 last:border-r-0">
              <div className="font-display text-6xl font-bold text-sky mb-4 leading-none">
                {step.number}
              </div>
              
              <h3 className="text-lg font-semibold text-navy mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 bg-blue rounded-full items-center justify-center z-10">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
