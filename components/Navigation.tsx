'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E6EAF0] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/base-mortgages-logo.svg" alt="Base Mortgages" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-text-secondary hover:text-navy transition font-medium text-sm">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-[#E6EAF0] rounded-xl shadow-card py-2 z-50">
                  {[
                    ['First Home Buyers',        '/services/first-home-buyers'],
                    ['Refinancing',              '/services/refinancing'],
                    ['Property Investors',       '/services/investors'],
                    ['Refix & Restructure',      '/services/refix'],
                    ['New Build & Construction', '/services/construction'],
                  ].map(([label, href]) => (
                    <Link key={href} href={href}
                      className="block px-4 py-2.5 text-sm text-text-secondary hover:text-navy hover:bg-bg transition">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"     className="text-text-secondary hover:text-navy transition font-medium text-sm">About Us</Link>
            <Link href="/resources" className="text-text-secondary hover:text-navy transition font-medium text-sm">Resources</Link>
            <Link href="/contact"   className="text-text-secondary hover:text-navy transition font-medium text-sm">Contact</Link>

            {/* Orange CTA */}
            <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer"
              className="bg-orange text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-orange-dark transition shadow-cta">
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-[#E6EAF0]">
            <Link href="/about"     className="block py-2 text-text-secondary font-medium">About Us</Link>
            <Link href="/resources" className="block py-2 text-text-secondary font-medium">Resources</Link>
            <Link href="/contact"   className="block py-2 text-text-secondary font-medium">Contact</Link>
            <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer"
              className="block bg-orange text-white px-6 py-3 rounded-xl text-center font-semibold shadow-cta">
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
