import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1B2F4A', color: 'rgba(255,255,255,0.55)' }} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company */}
          <div>
            <div className="mb-5">
              <img src="/base-mortgages-logo.svg" alt="Base Mortgages" className="h-11 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Strategic mortgage advice for New Zealanders at every stage of their property journey.
            </p>
            <div className="space-y-2 text-sm">
              <div>📞 <span>0800 000 000</span></div>
              <div>✉️ <span>hello@basemortgages.co.nz</span></div>
              <div>📍 <span>Auckland, New Zealand</span></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Services</h4>
            <div className="space-y-2.5 text-sm">
              {[['First Home Buyers','/services/first-home-buyers'],['Refinancing','/services/refinancing'],['Refix & Restructure','/services/refix'],['Property Investors','/services/investors'],['New Build & Construction','/services/construction'],['Alternative Lending','/services/alternative-lending']].map(([l,h])=>(
                <Link key={h} href={h} className="block hover:text-teal transition">{l}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
            <div className="space-y-2.5 text-sm">
              {[['About Us','/about'],['Our Team','/team'],['Blog & Resources','/resources'],['Mortgage Calculator','/calculator'],['Contact Us','/contact']].map(([l,h])=>(
                <Link key={h} href={h} className="block hover:text-teal transition">{l}</Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Legal</h4>
            <div className="space-y-2.5 text-sm">
              {[['Disclosures','/disclosures'],['Privacy Policy','/privacy'],['Terms of Service','/terms'],['Complaints','/complaints']].map(([l,h])=>(
                <Link key={h} href={h} className="block hover:text-teal transition">{l}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="rounded-xl p-5 text-xs leading-relaxed mb-8" style={{ background: 'rgba(0,0,0,0.2)', color: 'rgba(255,255,255,0.35)' }}>
          <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Disclosure:</strong> Base Mortgages is a licensed financial advice provider under the Financial Markets Conduct Act 2013. Our financial advisers are authorised to provide mortgage and insurance advice. We receive commissions from lenders when a mortgage settles — full details are available in our disclosure statement. This website contains general information only and does not constitute personalised financial advice.
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span>© 2026 Base Mortgages. All rights reserved.</span>
          <div className="flex gap-4">
            {[['Privacy','/privacy'],['Disclosures','/disclosures'],['Complaints','/complaints']].map(([l,h])=>(
              <Link key={h} href={h} className="hover:text-teal transition">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
