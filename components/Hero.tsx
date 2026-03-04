'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-navy-deep overflow-hidden min-h-[88vh]">
      {/* Subtle teal glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      {/* Subtle teal glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/8 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-teal/15 border border-teal/30 rounded-full px-4 py-2 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-sm font-medium">New Zealand Mortgage Advisers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Smart mortgages,<br />
              <em className="text-teal not-italic">built around you.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/65 mb-11 leading-relaxed max-w-lg"
            >
              At Base Mortgages, we take the complexity out of home lending. Whether you're buying your first home, refinancing, or growing your property portfolio — we get you the best deal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-dark transition shadow-lg shadow-teal/30 hover:shadow-xl hover:shadow-teal/40 hover:-translate-y-0.5"
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="#services"
                className="bg-transparent text-white border-2 border-white/25 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/8 hover:border-white/50 transition"
              >
                See How We Help
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/10"
            >
              <div>
                <div className="font-display text-4xl text-white font-bold">$500M+</div>
                <div className="text-sm text-white/45 mt-1">Mortgages settled</div>
              </div>
              <div>
                <div className="font-display text-4xl text-white font-bold">5 Banks</div>
                <div className="text-sm text-white/45 mt-1">ANZ, ASB, BNZ,<br />Westpac & Kiwibank</div>
              </div>
              <div>
                <div className="font-display text-4xl text-white font-bold">100%</div>
                <div className="text-sm text-white/45 mt-1">Fee-free to you</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/hero-image.jpg"
                alt="Base Mortgages Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
            </div>
            {/* Teal accent blob */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-teal/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
