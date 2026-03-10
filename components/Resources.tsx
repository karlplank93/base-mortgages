import Link from 'next/link';
import { BookOpen, Calculator, DollarSign, ArrowRight } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: "First Home Buyer Guide",
    description: "Everything you need to know about buying your first home in New Zealand — from KiwiSaver to settlement.",
    href: "/resources/first-home-buyer-guide",
    tag: "Guide",
  },
  {
    icon: Calculator,
    title: "Refinance Calculator",
    description: "See how much you could save by switching lenders or restructuring your mortgage today.",
    href: "/calculator",
    tag: "Tool",
  },
  {
    icon: DollarSign,
    title: "Cashback Explained",
    description: "Many NZ banks offer cashback when you take out a new mortgage. Find out how to make the most of it.",
    href: "/resources/cashback-explained",
    tag: "Article",
  },
];

export default function Resources() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Resources</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
              Learn before you decide
            </h2>
          </div>
          <Link href="/resources" className="font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all" style={{ color: '#27C1B7' }}>
            View all resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map(({ icon: Icon, title, description, href, tag }) => (
            <Link key={title} href={href}
              className="group rounded-2xl p-8 border border-[#E6EAF0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,46,107,0.10)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)')}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-teal-light text-teal-dark">{tag}</span>
              </div>
              <h3 className="font-semibold text-navy text-lg mb-3">{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{description}</p>
              <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: '#27C1B7' }}>
                Read more <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
