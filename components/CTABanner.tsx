import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative bg-teal overflow-hidden py-20 px-6 lg:px-8 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white text-sm font-medium">Free, no-obligation</span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to get started?
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-9 max-w-lg mx-auto">
          Book a free Discovery Call and let's talk about your mortgage goals. It only takes 20 minutes and could save you thousands.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-teal-darker px-8 py-4 rounded-xl font-bold text-lg hover:bg-sand transition shadow-lg"
          >
            Book a Free Discovery Call
          </a>
          <Link
            href="/contact"
            className="bg-transparent text-white border-2 border-white/40 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 hover:border-white/70 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
