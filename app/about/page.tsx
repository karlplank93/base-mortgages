import Link from 'next/link';
import { Shield, Star, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "About Karl Plank | Base Mortgages",
  description: "Meet Karl Plank, Financial Adviser and founder of Base Mortgages. Helping New Zealanders get the right mortgage since day one.",
};

const values = [
  {
    title: "Whole-of-market access",
    description: "We compare all five major banks and non-bank lenders to find the best fit for your situation.",
  },
  {
    title: "Plain English advice",
    description: "No jargon, no confusion. We explain everything clearly so you can make confident decisions.",
  },
  {
    title: "Fast & proactive",
    description: "We move quickly when you need to, and reach out before your rates expire.",
  },
  {
    title: "Free to you",
    description: "Our advice costs you nothing. We're paid by the bank when your mortgage settles.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-20 px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-light rounded-full blur-[140px] -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-70" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sand rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-60" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">About Us</div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5 leading-tight">
                Meet your mortgage<br />
                <span className="text-teal">adviser, Karl.</span>
              </h1>
              <p className="text-lg text-slate/70 mb-6 leading-relaxed">
                Karl Plank is a Licensed Financial Adviser and the founder of Base Mortgages. He's passionate about helping New Zealanders navigate the home loan process with confidence — whether you're buying your first home, refinancing, or growing a property portfolio.
              </p>
              <p className="text-lg text-slate/70 mb-8 leading-relaxed">
                Base Mortgages was built on a simple belief: mortgage advice should be straightforward, personalised, and genuinely in your corner. Karl works with all five major NZ banks and a range of non-bank lenders to find the right solution for your situation.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-3 mb-8">
                <a href="mailto:karl@kiwimortgages.co.nz" className="inline-flex items-center gap-3 text-navy hover:text-teal transition font-medium">
                  <Mail className="w-5 h-5 text-teal flex-shrink-0" />
                  karl@kiwimortgages.co.nz
                </a>
                <a href="tel:0272664925" className="inline-flex items-center gap-3 text-navy hover:text-teal transition font-medium">
                  <Phone className="w-5 h-5 text-teal flex-shrink-0" />
                  027 266 4925
                </a>
                <a href="/disclosures" className="inline-flex items-center gap-3 text-navy hover:text-teal transition font-medium">
                  <FileText className="w-5 h-5 text-teal flex-shrink-0" />
                  Disclosure Statement
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-cta hover:-translate-y-0.5" style={{ background: '#27C1B7' }}"
                >
                  Book a Free Call
                </a>
                <Link
                  href="/contact"
                  className="bg-transparent text-navy border border-[#E6EAF0] px-8 py-4 rounded-xl font-medium text-lg hover:border-teal hover:text-teal transition"
                >
                  Send a Message
                </Link>
              </div>
            </div>

            {/* Photo card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-sand rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm">
                  {/* Replace karl-plank.jpg with your actual photo filename */}
                  <img
                    src="/karl-plank.jpg"
                    alt="Karl Plank — Financial Adviser, Base Mortgages"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: '3/4' }}
                  />
                  <div className="p-6 bg-white">
                    <div className="font-display text-xl font-bold text-navy">Karl Plank</div>
                    <div className="text-slate/60 text-sm mt-1 mb-3">Financial Adviser</div>
                    <div className="flex items-center gap-1.5 text-sm text-teal font-medium">
                      <Shield className="w-4 h-4" />
                      Licensed Financial Adviser
                    </div>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-36 h-36 bg-sand rounded-full blur-2xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <div className="border-y border-[#E6EAF0] py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="flex items-center gap-2 text-slate/70">
            <Shield className="w-4 h-4 text-teal" />
            <span className="font-medium">Licensed Financial Adviser</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-sand-dark" />
          <div className="flex items-center gap-2 text-slate/70">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">5-Star Google Reviews</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-sand-dark" />
          <div className="flex items-center gap-3">
            <span className="text-slate/60 font-medium">Accredited with:</span>
            <div className="flex gap-2 flex-wrap">
              {['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'].map((bank) => (
                <span key={bank} className="bg-white border border-sand-dark rounded-md px-2.5 py-1 text-xs font-bold text-navy">
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="text-xs font-bold text-teal uppercase tracking-widest mb-3">How We Work</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
              Built on a simple idea.
            </h2>
            <p className="text-lg text-slate/60 max-w-2xl">
              Great mortgage advice should save you money, reduce stress, and set you up for the long term — not just get a deal done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl p-8 border border-[#E6EAF0]" style={{ background: "#F5F7FA" }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-light flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">{value.title}</h3>
                    <p className="text-slate/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 text-center" style={{ background: "linear-gradient(135deg, #243A5E, #1B2F4A)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Book a free 20-minute Discovery Call with Karl and let's talk about your mortgage goals.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-cta" style={{ background: '#27C1B7' }}
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>

    </div>
  );
}
