import Link from 'next/link';

const audiences = [
  {
    tag: "First Home",
    title: "First Home Buyers",
    description: "Get your First Home Roadmap — from KiwiSaver to keys in hand.",
    href: "/services/first-home-buyers",
    gradient: "from-blue-900 to-blue-700",
  },
  {
    tag: "Homeowner",
    title: "Existing Homeowners",
    description: "Refinance, restructure, or top up — make your mortgage work harder.",
    href: "/services/homeowners",
    gradient: "from-navy to-blue-800",
  },
  {
    tag: "Investor",
    title: "Property Investors",
    description: "Strategic debt structuring to grow your portfolio faster.",
    href: "/services/investors",
    gradient: "from-navy-deep to-navy",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold text-blue uppercase tracking-widest mb-3">Who We Help</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
            Wherever you are on your<br />property journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We specialise in three types of clients — each with a tailored approach designed around their unique situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {audiences.map((audience) => (
            <Link
              key={audience.tag}
              href={audience.href}
              className="group relative rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 transition-transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} transition-transform group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="relative z-10">
                <div className="inline-block bg-blue text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
                  {audience.tag}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-4">
                  {audience.description}
                </p>
                <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm">
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
