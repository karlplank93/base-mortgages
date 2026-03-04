import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative bg-navy-deep overflow-hidden py-20 px-6 lg:px-8 text-center">
      {/* Teal glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-teal/15 border border-teal/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-teal text-sm font-medium">Free, no-obligation</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to get started?
        </h2>
        <p className="text-lg text-white/65 mb-9 max-w-lg mx-auto">
          Book a free Discovery Call and let's talk about your mortgage goals. It only takes 20 minutes and could save you thousands.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-dark transition shadow-lg shadow-teal/30"
          >
            Book a Free Discovery Call
          </a>
          <Link
            href="/contact"
            className="bg-transparent text-white border-2 border-white/25 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/8 hover:border-white/50 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
