import { Check } from 'lucide-react';

const tiers: { title: string; includes: string[] }[] = [
  {
    title: 'First Home Purchase',
    includes: [
      'Assessment of your situation and goals',
      'KiwiSaver & First Home Loan guidance',
      'Property selection advice',
      'Application to multiple banks',
      'Pre-approval for purchase',
      'Help during conditional & unconditional stages',
      'Hand-holding through to settlement',
    ],
  },
  {
    title: 'Investment Property',
    includes: [
      'Assessment of your situation and goals',
      'Cashflow & yield analysis',
      'Debt structuring advice',
      'Application to multiple banks',
      'Pre-approval for purchase',
      'Help during conditional & unconditional stages',
      'Settlement support',
    ],
  },
  {
    title: 'Refinance',
    includes: [
      'Review of your existing mortgage',
      'Finding the best bank for your situation',
      'Application to your chosen lender',
      'Negotiating the best interest rate',
      'Maximising any cashback or bonuses',
      'Choosing the optimal loan term',
    ],
  },
  {
    title: 'Refix & Restructure',
    includes: [
      'Full review of your loan structure',
      'Fixed vs floating recommendation',
      'Splitting loans across terms',
      'Proactive contact before rates expire',
      'Negotiating with your bank',
      'No-stress ongoing management',
    ],
  },
];

export default function Pricing() {
  return (
    <section
      className="py-20 lg:py-24 px-6 lg:px-8"
      style={{ background: '#F7F5F2' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#006D77' }}
          >
            How much does it cost?
          </p>
          <h2
            className="font-display font-bold mb-4 leading-tight"
            style={{
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              letterSpacing: '-0.01em',
              color: '#24323D',
            }}
          >
            Straightforward, fee-free advice.
          </h2>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            You don&apos;t pay us anything. We&apos;re paid by the lender when your mortgage settles —
            so our incentives are aligned with yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="rounded-2xl p-7 bg-white border border-gray-100 flex flex-col"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            >
              <h3
                className="font-display font-semibold text-lg mb-4"
                style={{ color: '#24323D' }}
              >
                {tier.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="font-display font-bold"
                  style={{ fontSize: '44px', color: '#006D77', lineHeight: 1 }}
                >
                  $0
                </span>
              </div>
              <p
                className="text-xs uppercase tracking-wider mb-6"
                style={{ color: '#A8B8B2' }}
              >
                We get paid by the bank
              </p>

              <div
                className="border-t pt-5 space-y-3"
                style={{ borderColor: '#E5E7EB' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: '#6B7280' }}
                >
                  Includes
                </p>
                {tier.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div
                      className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: '#C7E8DE' }}
                    >
                      <Check
                        className="w-2.5 h-2.5"
                        strokeWidth={3}
                        style={{ color: '#006D77' }}
                      />
                    </div>
                    <span
                      className="text-sm leading-snug"
                      style={{ color: '#24323D' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
