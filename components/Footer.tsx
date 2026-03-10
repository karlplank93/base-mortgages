import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <img src="/base-mortgages-logo.svg" alt="Base Mortgages" className="h-9 w-auto mb-5" />
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              Strategic mortgage advice for New Zealanders at every stage of their property journey.
            </p>
            <div className="space-y-1.5 text-sm text-gray-500">
              <div><a href="tel:0272664925" className="hover:text-navy transition-colors">027 266 4925</a></div>
              <div><a href="mailto:karl@basemortgages.co.nz" className="hover:text-navy transition-colors">karl@basemortgages.co.nz</a></div>
              <div>Auckland, New Zealand</div>
            </div>
            <div className="flex gap-2 mt-5">
              <a href="https://www.facebook.com/basemortgages" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-gray-600" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/basemortgages" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-gray-600" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-5">Services</h4>
            <div className="space-y-2.5 text-sm">
              {[
                ['First Home Buyers',        '/services/first-home-buyers'],
                ['Refinancing',              '/services/refinancing'],
                ['Refix & Restructure',      '/services/refix'],
                ['Property Investors',       '/services/investors'],
                ['New Build & Construction', '/services/construction'],
                ['Alternative Lending',      '/services/alternative-lending'],
              ].map(([l, h]) => (
                <Link key={h} href={h} className="block text-gray-500 hover:text-navy transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-5">Company</h4>
            <div className="space-y-2.5 text-sm">
              {[
                ['About Us',            '/about'],
                ['Blog & Resources',    '/resources'],
                ['Mortgage Calculator', '/calculator'],
                ['Contact Us',          '/contact'],
              ].map(([l, h]) => (
                <Link key={h} href={h} className="block text-gray-500 hover:text-navy transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-5">Legal</h4>
            <div className="space-y-2.5 text-sm">
              {[
                ['Disclosures',     '/disclosures'],
                ['Privacy Policy',  '/privacy'],
                ['Terms of Service','/terms'],
                ['Complaints',      '/complaints'],
              ].map(([l, h]) => (
                <Link key={h} href={h} className="block text-gray-500 hover:text-navy transition-colors">{l}</Link>
              ))}
            </div>
            <div className="mt-6 text-xs text-gray-400 leading-relaxed">
              FSP Registered<br />Licensed under the FMCA 2013
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="rounded-2xl p-5 text-xs text-gray-400 leading-relaxed mb-8 bg-gray-50 border border-gray-100">
          <strong className="text-gray-500">Disclosure:</strong> Base Mortgages is a licensed financial advice provider under the Financial Markets Conduct Act 2013. Our financial advisers are authorised to provide mortgage and insurance advice. We receive commissions from lenders when a mortgage settles — full details are available in our disclosure statement. This website contains general information only and does not constitute personalised financial advice.
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100 text-xs text-gray-400">
          <span>© 2026 Base Mortgages. All rights reserved.</span>
          <div className="flex gap-4">
            {[['Privacy', '/privacy'], ['Disclosures', '/disclosures'], ['Complaints', '/complaints']].map(([l, h]) => (
              <Link key={h} href={h} className="hover:text-navy transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
