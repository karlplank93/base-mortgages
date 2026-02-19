'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-deep via-navy to-blue-900 overflow-hidden min-h-[88vh]">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-blue-light animate-pulse" />
              <span className="text-blue-100 text-sm font-medium">New Zealand Mortgage Advisers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Smart mortgages,<br />
              <em className="text-blue-300 italic">built around you.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/75 mb-11 leading-relaxed"
            >
              At Base Mortgages, we take the complexity out of home lending. Whether you're buying your first home, refinancing, or growing your property portfolio — we get you the best deal and structure your mortgage to build real wealth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition shadow-lg shadow-blue/40 hover:shadow-xl hover:shadow-blue/50 hover:-translate-y-0.5"
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="#services"
                className="bg-transparent text-white border-2 border-white/40 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 hover:border-white/70 transition"
              >
                See How We Help
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/12"
            >
              <div>
                <div className="font-display text-4xl text-white font-bold">$500M+</div>
                <div className="text-sm text-white/55 mt-1">Mortgages settled</div>
              </div>
              <div>
                <div className="font-display text-4xl text-white font-bold">5 Banks</div>
                <div className="text-sm text-white/55 mt-1">ANZ, ASB, BNZ,<br />Westpac & Kiwibank</div>
              </div>
              <div>
                <div className="font-display text-4xl text-white font-bold">100%</div>
                <div className="text-sm text-white/55 mt-1">Fee-free to you</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/hero-image.jpg" 
                alt="Base Mortgages Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}