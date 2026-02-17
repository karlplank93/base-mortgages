import Link from 'next/link';
import { Home, RefreshCw, TrendingUp, BarChart3, Building2, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "First Home Buyers",
    description: "We build your First Home Roadmap — from assessing your borrowing power to settlement day. We'll handle KiwiSaver withdrawals, First Home Loans, and every step in between.",
    href: "/services/first-home-buyers",
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "Move lenders, unlock equity, or simply get a better rate. We compare all five major banks and negotiate on your behalf.",
    href: "/services/refinancing",
  },
  {
    icon: BarChart3,
    title: "Refix & Restructure",
    description: "Don't just roll over your rate. Let us review your full loan structure and advise on the optimal combination of fixed, floating, and term lengths.",
    href: "/services/refix",
  },
  {
    icon: TrendingUp,
    title: "Property Investors",
    description: "Grow your portfolio with expert debt structuring, entity advice, and access to lenders who understand investment property lending.",
    href: "/services/investors",
  },
  {
    icon: Building2,
    title: "New Build & Construction",
    description: "Building your dream home? We manage construction loan drawdowns, progress payments, and make sure your finances are in order at every stage.",
    href: "/services/construction",
  },
  {
    icon: AlertCircle,
    title: "Bank Said No?",
    description: "We have access to non-bank lenders and specialist solutions for self-employed clients, complex income situations, or credit challenges.",
    href: "/services/alternative-lending",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold text-blue uppercase tracking-widest mb-3">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
            Mortgage advice for every<br />stage of your journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            From your first home to your fifth investment property — we provide strategic mortgage advice that goes beyond just finding a rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? 'bg-navy border-navy text-white'
                    : 'bg-white border-gray-200 hover:border-blue'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.featured ? 'bg-white/10' : 'bg-sky'
                }`}>
                  <Icon className={`w-7 h-7 ${service.featured ? 'text-blue-300' : 'text-blue'}`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${service.featured ? 'text-white' : 'text-navy'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${service.featured ? 'text-white/70' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                <div className={`absolute bottom-6 right-6 text-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  service.featured ? 'text-blue-300' : 'text-blue'
                }`}>
                  →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
