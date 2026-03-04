'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[88vh]">
      {/* Subtle teal gradient wash top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-light rounded-full blur-[140px] -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-70" />
      {/* Subtle teal gradient bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-light rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-teal-light border border-teal-mid rounded-full px-4 py-2 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal-dark text-sm font-medium">New Zealand Mortgage Advisers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight"
            >
              Smart mortgages,<br />
              <span className="text-teal">built around you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-navy/60 mb-11 leading-relaxed max-w-lg"
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
                className="bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-dark transition shadow-lg shadow-teal/25 hover:-translate-y-0.5"
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="#services"
                className="bg-white text-navy border-2 border-cream-dark px-8 py-4 rounded-xl font-medium text-lg hover:border-teal hover:text-teal transition"
              >
                See How We Help
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-cream-dark"
            >
              <div>
                <div className="font-display text-4xl text-teal font-bold">$500M+</div>
                <div className="text-sm text-navy/50 mt-1">Mortgages settled</div>
              </div>
              <div>
                <div className="font-display text-4xl text-teal font-bold">5 Banks</div>
                <div className="text-sm text-navy/50 mt-1">ANZ, ASB, BNZ,<br />Westpac & Kiwibank</div>
              </div>
              <div>
                <div className="font-display text-4xl text-teal font-bold">100%</div>
                <div className="text-sm text-navy/50 mt-1">Fee-free to you</div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-cream-dark">
              <img
                src="/hero-image.jpg"
                alt="Base Mortgages Team"
                className="w-full h-auto object-cover"
              />
              {/* Subtle teal tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal/10 to-transparent" />
            </div>
            {/* Decorative teal blobs */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal/15 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-teal-light rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
