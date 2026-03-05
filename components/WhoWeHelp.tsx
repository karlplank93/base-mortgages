import Link from 'next/link';
import { Home, RefreshCw, TrendingUp } from 'lucide-react';

const audiences = [
  {
    tag: "First Home",
    icon: Home,
    title: "First Home Buyers",
    description: "Get your First Home Roadmap — from KiwiSaver to keys in hand. We make the complex simple.",
    href: "/services/first-home-buyers",
    accent: '#27C1B7',
    tagBg: 'bg-teal-light',
    tagText: 'text-teal-dark',
  },
  {
    tag: "Homeowner",
    icon: RefreshCw,
    title: "Existing Homeowners",
    description: "Refinance, restructure, or top up — make your mortgage work harder for you.",
    href: "/services/homeowners",
    accent: '#243A5E',
    tagBg: 'bg-navy/10',
    tagText: 'text-navy',
  },
  {
    tag: "Investor",
    icon: TrendingUp,
    title: "Property Investors",
    description: "Strategic debt structuring to grow your portfolio faster and smarter.",
    href: "/services/investors",
    accent: '#27C1B7',
    tagBg: 'bg-teal-light',
    tagText: 'text-teal-dark',
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">Who We Help</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
            Wherever you are on your<br />property journey
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: '#6B7280' }}>
            We specialise in three types of clients — each with a tailored approach designed around their unique situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Link key={audience.tag} href={audience.href}
                className="group relative rounded-2xl overflow-hidden flex flex-col p-8 border border-[#E6EAF0] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-teal"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-teal" />
                </div>

                {/* Tag */}
                <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${audience.tagBg} ${audience.tagText}`}>
                  {audience.tag}
                </span>

                <h3 className="font-display text-2xl font-bold text-navy mb-3">{audience.title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#6B7280' }}>{audience.description}</p>

                <div className="flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3" style={{ color: '#27C1B7' }}>
                  Learn more <span>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
