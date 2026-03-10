import Link from 'next/link';
import { Home, RefreshCw, TrendingUp, BarChart3, Building2, AlertCircle } from 'lucide-react';

const services = [
  { icon: Home,        title: 'First Home Buyers',        description: 'We build your First Home Roadmap — from assessing your borrowing power to settlement day. KiwiSaver, First Home Loans, and every step in between.',     href: '/services/first-home-buyers' },
  { icon: RefreshCw,   title: 'Refinancing',              description: 'Move lenders, unlock equity, or get a better rate. We compare all major banks and non-bank lenders and negotiate on your behalf.',                         href: '/services/refinancing' },
  { icon: BarChart3,   title: 'Refix & Restructure',      description: "Don't just roll over your rate. We review your full loan structure and advise on the best combination of fixed, floating, and term lengths.",              href: '/services/refix' },
  { icon: TrendingUp,  title: 'Property Investors',       description: 'Grow your portfolio with strategic debt structuring, entity advice, and access to lenders who understand investment lending.',                             href: '/services/investors' },
  { icon: Building2,   title: 'New Build & Construction', description: 'Building your dream home? We manage construction loan drawdowns, progress payments, and make sure your finances are in order at every stage.',             href: '/services/construction' },
  { icon: AlertCircle, title: 'Bank Said No?',            description: 'We have access to specialist and non-bank lenders for self-employed clients, complex income situations, or credit challenges.',                           href: '/services/alternative-lending' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
            Mortgage advice for every stage of your journey
          </h2>
          <p className="text-lg text-gray-500">
            From your first home to your fifth investment property — strategic advice that goes beyond just finding a rate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl p-7 border border-gray-100 bg-white hover:border-teal hover:shadow-card transition-all duration-200"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
              >
                <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                <div className="mt-4 text-sm font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
