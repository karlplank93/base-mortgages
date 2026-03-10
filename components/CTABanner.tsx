import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-28 px-6 lg:px-8 text-center"
      style={{ background: 'linear-gradient(135deg, #0A2E6B, #1B2F4A)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'rgba(39,193,183,0.15)' }} />

      <div className="relative max-w-3xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6"
          style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#27C1B7' }} />
          <span className="text-sm font-medium" style={{ color: '#27C1B7' }}>Free, no-obligation</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to review your<br />mortgage options?
        </h2>
        <p className="text-base md:text-lg mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Book a free Discovery Call and let&apos;s talk about your mortgage goals. It only takes 20 minutes and could save you thousands.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
          <a href="https://calendly.com/karl-mortgage-adviser/borrowing-review" target="_blank" rel="noopener noreferrer"
            className="text-white px-8 py-4 rounded-xl font-bold text-lg transition hover:-translate-y-0.5"
            style={{ background: '#27C1B7', boxShadow: '0 4px 20px rgba(39,193,183,0.3)' }}>
            Book a Free Discovery Call
          </a>
          <Link href="/contact"
            className="bg-transparent text-white border border-white/25 px-8 py-4 rounded-xl font-medium text-lg hover:border-white/60 transition hover:-translate-y-0.5">
            Get in Touch
          </Link>
        </div>

        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>No cost. No obligation.</p>
      </div>
    </section>
  );
}
