import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-navy-deep to-navy overflow-hidden py-20 px-6 lg:px-8 text-center">
      <div className="absolute inset-0 bg-radial-gradient from-blue/20 to-transparent opacity-50" />
      
      <div className="relative max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to get started?
        </h2>
        <p className="text-lg text-white/70 mb-9 max-w-lg mx-auto">
          Book a free, no-obligation Discovery Call and let's talk about your mortgage goals. It only takes 20 minutes and could save you thousands.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition shadow-lg"
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
