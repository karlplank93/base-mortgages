import Link from 'next/link';
import { Shield, Star, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Meet the Team | Base Mortgages',
  description: 'Meet the team at Base Mortgages — Karl Plank and Vincent Uys, helping New Zealanders get the right mortgage.',
};

const values = [
  { title: 'Whole-of-market access',  description: 'We compare all five major banks and non-bank lenders to find the best fit for your situation.' },
  { title: 'Plain English advice',    description: 'No jargon, no confusion. We explain everything clearly so you can make confident decisions.' },
  { title: 'Fast & proactive',        description: 'We move quickly when you need to, and reach out before your rates expire.' },
  { title: 'Free to you',             description: "Our advice costs you nothing. We're paid by the bank when your mortgage settles." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="py-20 px-6 lg:px-8" style={{ background: '#FAF7F0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Meet the team.
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Base Mortgages was built on a simple belief: mortgage advice should be straightforward, personalised, and genuinely in your corner. Our team works with all five major NZ banks and a range of non-bank lenders to find the right solution for your situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Karl */}
            <div className="rounded-3xl border border-gray-100 overflow-hidden bg-white" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.07)' }}>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 p-4 pb-0 sm:pb-4">
                  <img
                    src="/karl-plank.jpg"
                    alt="Karl Plank, Mortgage Adviser, Base Mortgages"
                    className="w-full sm:w-44 object-cover object-top rounded-2xl"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="font-display text-2xl font-bold uppercase tracking-wide text-teal">Karl Plank</div>
                  <div className="text-gray-500 text-sm mt-1">Mortgage and Investment Adviser</div>
                  <div className="flex items-center gap-1.5 text-xs text-teal font-medium mt-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    FSP1007409
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Karl is the founder of Base Mortgages and is passionate about helping New Zealanders navigate the home loan process with confidence, whether you&apos;re buying your first home, refinancing, or growing a property portfolio.
                </p>
                <div className="space-y-2">
                  <a href="mailto:karl@basemortgages.co.nz" className="flex items-center gap-3 text-gray-600 hover:text-teal transition-colors font-medium text-sm">
                    <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                    karl@basemortgages.co.nz
                  </a>
                  <a href="tel:0272664925" className="flex items-center gap-3 text-gray-600 hover:text-teal transition-colors font-medium text-sm">
                    <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                    027 266 4925
                  </a>
                  <a href="/disclosures" className="flex items-center gap-3 text-gray-600 hover:text-teal transition-colors font-medium text-sm">
                    <FileText className="w-4 h-4 text-teal flex-shrink-0" />
                    Disclosure Statement
                  </a>
                </div>
              </div>
            </div>

            {/* Vincent */}
            <div className="rounded-3xl border border-gray-100 overflow-hidden bg-white" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.07)' }}>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 p-4 pb-0 sm:pb-4">
                  <img
                    src="/vincent-uys.png"
                    alt="Vincent Uys, Mortgage Adviser, Base Mortgages"
                    className="w-full sm:w-44 object-cover object-top rounded-2xl"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="font-display text-2xl font-bold uppercase tracking-wide text-teal">Vincent Uys</div>
                  <div className="text-gray-500 text-sm mt-1">Mortgage Adviser</div>
                  <div className="flex items-center gap-1.5 text-xs text-teal font-medium mt-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    FSP1012855
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  With over 5 years of banking experience across BNZ and ASB, Vincent brings deep lender knowledge and a client-first approach to every mortgage. He&apos;s dedicated to finding the right solution and making the process as smooth as possible.
                </p>
                <div className="space-y-2">
                  <a href="mailto:vincent@basemortgages.co.nz" className="flex items-center gap-3 text-gray-600 hover:text-teal transition-colors font-medium text-sm">
                    <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                    vincent@basemortgages.co.nz
                  </a>
                  <a href="tel:0204045012" className="flex items-center gap-3 text-gray-600 hover:text-teal transition-colors font-medium text-sm">
                    <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                    020 404 5012
                  </a>
                  <a href="/disclosures" className="flex items-center gap-3 text-gray-600 hover:text-teal transition-colors font-medium text-sm">
                    <FileText className="w-4 h-4 text-teal flex-shrink-0" />
                    Disclosure Statement
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: '#006D77' }}
            >
              Book a Free Call
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full text-gray-700 font-medium text-sm border border-gray-200 hover:border-teal hover:text-teal transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <div className="border-y border-gray-100 py-5 px-6 lg:px-8" style={{ background: '#FAF7F0' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Shield className="w-4 h-4 text-teal" />
            <span className="font-medium">Licensed Financial Adviser</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-2 text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">5-Star Google Reviews</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-medium">Accredited with:</span>
            <div className="flex gap-2 flex-wrap">
              {['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'].map((bank) => (
                <span key={bank} className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-700">{bank}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-teal uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
              Built on a simple idea.
            </h2>
            <p className="text-lg text-gray-500">
              Great mortgage advice should save you money, reduce stress, and set you up for the long term, not just get a deal done.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl p-8 border border-gray-100" style={{ background: '#FAF7F0' }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-teal-light flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Ready to work together?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Book a free 20-minute Discovery Call and let&apos;s talk about your mortgage goals.
          </p>
          <a
            href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:opacity-90"
            style={{ background: '#006D77', boxShadow: '0 4px 20px rgba(0,109,119,0.3)' }}
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>

    </div>
  );
}
