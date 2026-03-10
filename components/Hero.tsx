'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh]" style={{ background: 'linear-gradient(160deg, #FFFFFF 60%, #F4F7FB 100%)' }}>
      {/* Soft teal glow top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-light rounded-full blur-[180px] -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-teal-light border border-teal-mid rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal-dark text-sm font-semibold">New Zealand Mortgage Advisers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display font-bold text-navy mb-7 leading-[1.05]"
              style={{ fontSize: 'clamp(52px, 6vw, 80px)' }}
            >
              Smart mortgages,{' '}
              <span style={{ color: '#27C1B7' }}>built around you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl" style={{ color: '#6B7280' }}
            >
              We simplify home lending. Whether you&apos;re buying your first home, refinancing, or growing your portfolio, we help you secure the right mortgage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Primary CTA */}
              <a href="https://calendly.com/karl-mortgage-adviser/borrowing-review" target="_blank" rel="noopener noreferrer"
                className="inline-block text-white px-8 py-4 rounded-xl font-semibold text-lg transition hover:-translate-y-0.5"
                style={{ background: '#27C1B7', boxShadow: '0 4px 20px rgba(39,193,183,0.35)' }}>
                Book a Free Discovery Call
              </a>
              {/* Secondary link CTA */}
              <Link href="#services"
                className="inline-flex items-center gap-2 font-semibold text-lg transition hover:gap-3"
                style={{ color: '#0A2E6B' }}>
                See How We Help <span>→</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-[#E6EAF0]"
            >
              {[
                { value: '$36M+', label: 'Loans Arranged' },
                { value: '30+',   label: 'Banks & Lenders' },
                { value: '4.9★',  label: 'Google Rating' },
              ].map(({ value, label }) => (
                <div key={value}>
                  <div className="font-display text-4xl font-bold" style={{ color: '#27C1B7' }}>{value}</div>
                  <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-[#E6EAF0]"
              style={{ boxShadow: '0px 20px 40px rgba(0,0,0,0.08)' }}>
              <img src="/hero-image.jpg" alt="Base Mortgages Team"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-teal/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
