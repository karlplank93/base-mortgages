'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const faqs: { q: string; a: string }[] = [
  {
    q: 'How much can I actually borrow?',
    a: 'How much you can borrow depends on your income, expenses, deposit, and the banks’ lending criteria. We assess your full situation and give you a realistic borrowing range so you can search for property with confidence, not guesswork.',
  },
  {
    q: 'Do you help with pre-approvals?',
    a: 'Yes. We prepare your application and submit it to the lenders most likely to approve it. A pre-approval gives you a clear budget and puts you in a stronger position when making an offer or bidding at auction.',
  },
  {
    q: 'Can you review properties before I make an offer?',
    a: 'Yes. If you’re considering a property, we can review it with you to make sure it fits your budget and lending position. We’ll also highlight anything the bank may take into account before approving the loan.',
  },
  {
    q: "What if I'm buying at auction?",
    a: 'Buying at auction means the purchase is unconditional, so it’s important to have your finance organised beforehand. We’ll make sure your lending is structured and approved so you can bid with confidence.',
  },
  {
    q: 'Can you negotiate rates and terms with the bank?',
    a: 'Yes. We work with the banks on your behalf to negotiate competitive rates, cashback where available, and loan terms that suit your financial goals, so you don’t have to manage the back-and-forth yourself.',
  },
  {
    q: 'What happens when my fixed rate expires?',
    a: 'When your fixed rate is coming up for renewal, we proactively reach out and review your loan. We compare options with your current lender and others if needed, so your lending structure and rate stay competitive, you never leave money on the table.',
  },
  {
    q: 'Do you charge for your mortgage advice?',
    a: 'In most cases, no. Our advice is paid for by the lender once your loan settles, and we’ll always explain how this works before we begin. Our interests are aligned with yours: we only get paid when you get the right outcome.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-12 lg:py-16 px-6 lg:px-8"
      style={{ background: '#FAF7F0' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#C9A063' }}
          >
            FAQs
          </p>
          <h2
            className="font-display font-bold mb-4 leading-tight"
            style={{
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              letterSpacing: '-0.01em',
              color: '#1F2933',
            }}
          >
            Have a question?
          </h2>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Here are the answers to the things our clients ask us most. Need more detail?{' '}
            <Link
              href="/contact"
              className="font-semibold underline-offset-4 hover:underline"
              style={{ color: '#006D77' }}
            >
              Get in touch
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                style={{ boxShadow: isOpen ? '0 4px 16px rgba(0,0,0,0.06)' : 'none' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-base lg:text-lg"
                    style={{ color: '#1F2933' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: isOpen ? '#006D77' : '#C7E8DE' }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                    ) : (
                      <Plus className="w-4 h-4" style={{ color: '#006D77' }} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="px-6 pb-5 text-base leading-relaxed"
                    style={{ color: '#6B7280' }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
