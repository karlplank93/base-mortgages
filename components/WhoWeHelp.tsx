import Link from 'next/link';

const audiences = [
  {
    tag: "First Home",
    tagColor: "bg-teal text-white",
    arrowColor: "text-teal",
    title: "First Home Buyers",
    description: "Get your First Home Roadmap — from KiwiSaver to keys in hand.",
    href: "/services/first-home-buyers",
  },
  {
    tag: "Homeowner",
    tagColor: "bg-[#4DA3FF] text-white",
    arrowColor: "text-[#4DA3FF]",
    title: "Existing Homeowners",
    description: "Refinance, restructure, or top up — make your mortgage work harder.",
    href: "/services/homeowners",
  },
  {
    tag: "Investor",
    tagColor: "bg-white/20 text-white",
    arrowColor: "text-white",
    title: "Property Investors",
    description: "Strategic debt structuring to grow your portfolio faster.",
    href: "/services/investors",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
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
          {audiences.map((audience) => (
            <Link key={audience.tag} href={audience.href}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              style={{ background: 'linear-gradient(135deg, #243A5E, #1B2F4A)' }}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(43,183,169,0.15), transparent 70%)' }} />

              <div className="relative z-10">
                <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-4 ${audience.tagColor}`}>
                  {audience.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">{audience.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">{audience.description}</p>
                <div className={`flex items-center gap-2 font-semibold text-sm ${audience.arrowColor}`}>
                  Learn more <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
