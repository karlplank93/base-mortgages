import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/65 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
<div className="mb-5">
  <img 
    src="/base-mortgages-logo.svg" 
    alt="Base Mortgages" 
    className="h-8 w-auto brightness-0 invert"
  />
</div>
```

6. **Save** (Ctrl+S or Cmd+S)

---

## 🚀 Deploy Your Changes

1. **Go to GitHub Desktop**

2. **You'll see these changes:**
   - ✅ Modified: `components/Navigation.tsx`
   - ✅ Modified: `components/Footer.tsx`
   - ✅ Added: `public/base-mortgages-logo.svg`

3. **Bottom left box**, type:
```
   Updated logo
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Strategic mortgage advice for New Zealanders at every stage of their property journey. We're here to help you make the most of your mortgage.
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
              <Link href="/services/first-home-buyers" className="block hover:text-white transition">First Home Buyers</Link>
              <Link href="/services/refinancing" className="block hover:text-white transition">Refinancing</Link>
              <Link href="/services/refix" className="block hover:text-white transition">Refix & Restructure</Link>
              <Link href="/services/investors" className="block hover:text-white transition">Property Investors</Link>
              <Link href="/services/construction" className="block hover:text-white transition">New Build & Construction</Link>
              <Link href="/services/alternative-lending" className="block hover:text-white transition">Alternative Lending</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
            <div className="space-y-2.5 text-sm">
              <Link href="/about" className="block hover:text-white transition">About Us</Link>
              <Link href="/team" className="block hover:text-white transition">Our Team</Link>
              <Link href="/resources" className="block hover:text-white transition">Blog & Resources</Link>
              <Link href="/calculator" className="block hover:text-white transition">Mortgage Calculator</Link>
              <Link href="/contact" className="block hover:text-white transition">Contact Us</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Legal</h4>
            <div className="space-y-2.5 text-sm">
              <Link href="/disclosures" className="block hover:text-white transition">Disclosures</Link>
              <Link href="/privacy" className="block hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white transition">Terms of Service</Link>
              <Link href="/complaints" className="block hover:text-white transition">Complaints</Link>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-black/25 rounded-xl p-5 text-xs leading-relaxed text-white/40 mb-8">
          <strong className="text-white/55">Disclosure:</strong> Base Mortgages is a licensed financial advice provider under the Financial Markets Conduct Act 2013. Our financial advisers are authorised to provide mortgage and insurance advice. We receive commissions from lenders when a mortgage settles — full details are available in our disclosure statement. This website contains general information only and does not constitute personalised financial advice.
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs">
          <span>© 2026 Base Mortgages. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/disclosures" className="hover:text-white transition">Disclosures</Link>
            <Link href="/complaints" className="hover:text-white transition">Complaints</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
