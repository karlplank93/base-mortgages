import Link from 'next/link';
import { Home, RefreshCw, TrendingUp, BarChart3, Building2, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'First Home Buyers',
    description: 'We build your First Home Roadmap — from assessing your borrowing power to settlement day. KiwiSaver, First Home Loans, and every step in between.',
    href: '/services/first-home-buyers',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&h=280&q=80',
    imageAlt: 'Young family outside their new home',
  },
  {
    icon: RefreshCw,
    title: 'Refinancing',
    description: 'Move lenders, unlock equity, or get a better rate. We compare all major banks and non-bank lenders and negotiate on your behalf.',
    href: '/services/refinancing',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&h=280&q=80',
    imageAlt: 'Couple reviewing mortgage documents',
  },
  {
    icon: BarChart3,
    title: 'Refix & Restructure',
    description: "Don't just roll over your rate. We review your full loan structure and advise on the best combination of fixed, floating, and term lengths.",
    href: '/services/refix',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&h=280&q=80',
    imageAlt: 'Financial planning and charts',
  },
  {
    icon: TrendingUp,
    title: 'Property Investors',
    description: 'Grow your portfolio with strategic debt structuring, entity advice, and access to lenders who understand investment lending.',
    href: '/services/investors',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=600&h=280&q=80',
    imageAlt: 'Investment property building',
  },
  {
    icon: Building2,
    title: 'New Build & Construction',
    description: 'Building your dream home? We manage construction loan drawdowns, progress payments, and make sure your finances are in order at every stage.',
    href: '/services/construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=280&q=80',
    imageAlt: 'New home construction',
  },
  {
    icon: AlertCircle,
    title: 'Bank Said No?',
    description: 'We have access to specialist and non-bank lenders for self-employed clients, complex income situations, or credit challenges.',
    href: '/services/alternative-lending',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=280&q=80',
    imageAlt: 'Mortgage adviser consultation',
  },
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
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-teal hover:shadow-card transition-all duration-200 flex flex-col"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon badge over image */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-4 text-sm font-semibold text-teal flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
