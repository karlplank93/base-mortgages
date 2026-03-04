'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-sand-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/base-mortgages-logo.svg" alt="Base Mortgages" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-navy/70 hover:text-navy transition font-medium">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-sand-dark rounded-xl shadow-lg py-2">
                  <Link href="/services/first-home-buyers" className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-teal-light transition">First Home Buyers</Link>
                  <Link href="/services/refinancing" className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-teal-light transition">Refinancing</Link>
                  <Link href="/services/investors" className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-teal-light transition">Property Investors</Link>
                  <Link href="/services/refix" className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-teal-light transition">Refix & Restructure</Link>
                  <Link href="/services/construction" className="block px-4 py-2.5 text-sm text-navy/70 hover:text-navy hover:bg-teal-light transition">New Build & Construction</Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-navy/70 hover:text-navy transition font-medium">About Us</Link>
            <Link href="/resources" className="text-navy/70 hover:text-navy transition font-medium">Resources</Link>
            <Link href="/contact" className="text-navy/70 hover:text-navy transition font-medium">Contact</Link>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal text-white px-6 py-2.5 rounded-lg hover:bg-teal-dark transition font-semibold"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-sand-dark">
            <Link href="/about" className="block py-2 text-navy/70 font-medium">About Us</Link>
            <Link href="/resources" className="block py-2 text-navy/70 font-medium">Resources</Link>
            <Link href="/contact" className="block py-2 text-navy/70 font-medium">Contact</Link>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal text-white px-6 py-2.5 rounded-lg text-center font-semibold"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
