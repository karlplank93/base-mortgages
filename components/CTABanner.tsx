import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-navy">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#27C1B7' }}>
          Free, no-obligation
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Ready to review your mortgage options?
        </h2>
        <p className="text-lg mb-10 text-white/60 max-w-lg mx-auto">
          Book a free Discovery Call and let&apos;s talk about your mortgage goals. It only takes 20 minutes and could save you thousands.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:opacity-90"
            style={{ background: '#27C1B7', boxShadow: '0 4px 20px rgba(39,193,183,0.3)' }}
          >
            Book a Free Discovery Call
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-medium text-base border border-white/25 hover:border-white/50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <p className="text-sm text-white/30">No cost. No obligation.</p>
      </div>
    </section>
  );
}
