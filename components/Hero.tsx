'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh]" style={{ background: '#F7F9FC' }}>
      {/* Soft teal glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-light rounded-full blur-[160px] -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-60" />
      {/* Soft sand glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F1E8D9] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-teal-light border border-teal-mid rounded-full px-4 py-2 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal-dark text-sm font-medium">New Zealand Mortgage Advisers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight"
            >
              Smart mortgages,<br />
              {/* Slightly deepened teal #23B5A7 for contrast */}
              <span style={{ color: '#23B5A7' }}>built around you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl mb-11 leading-relaxed max-w-lg" style={{ color: '#6B7280' }}
            >
              At Base Mortgages, we take the complexity out of home lending. Whether you're buying your first home, refinancing, or growing your property portfolio — we get you the best deal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {/* Primary: orange CTA */}
              <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer"
                className="bg-orange text-white px-7 py-4 rounded-xl font-semibold text-lg hover:bg-orange-dark transition shadow-cta hover:-translate-y-0.5">
                Book a Free Discovery Call
              </a>
              {/* Secondary: outline */}
              <Link href="#services"
                className="bg-transparent text-navy border border-[#E6EAF0] px-7 py-4 rounded-xl font-medium text-lg hover:border-teal hover:text-teal transition">
                See How We Help
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-[#E6EAF0]"
            >
              {[
                { value: '$500M+', label: 'Mortgages settled' },
                { value: '5 Banks', label: 'ANZ, ASB, BNZ,\nWestpac & Kiwibank' },
                { value: '100%',   label: 'Fee-free to you' },
              ].map(({ value, label }) => (
                <div key={value}>
                  <div className="font-display text-3xl font-bold" style={{ color: '#23B5A7' }}>{value}</div>
                  <div className="text-sm mt-1 whitespace-pre-line" style={{ color: '#6B7280' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image — visible all screen sizes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-[#E6EAF0]">
              <img src="/hero-image.jpg" alt="Base Mortgages Team"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/8 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-teal/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#F1E8D9] rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
