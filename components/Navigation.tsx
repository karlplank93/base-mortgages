'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-shadow duration-300"
      style={{
        background: '#0A2E6B',
        boxShadow: scrolled ? '0 2px 16px rgba(10,46,107,0.18)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/base-mortgages-logo.svg" alt="Base Mortgages" className="h-14 w-auto brightness-0 invert" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition font-medium text-sm">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-[#E6EAF0] rounded-xl shadow-xl py-2 z-50">
                  {[
                    ['First Home Buyers',        '/services/first-home-buyers'],
                    ['Refinancing',              '/services/refinancing'],
                    ['Property Investors',       '/services/investors'],
                    ['Refix & Restructure',      '/services/refix'],
                    ['New Build & Construction', '/services/construction'],
                  ].map(([label, href]) => (
                    <Link key={href} href={href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 transition"
                      style={{ color: '#374151' }}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"     className="text-white/80 hover:text-white transition font-medium text-sm">About Us</Link>
            <Link href="/resources" className="text-white/80 hover:text-white transition font-medium text-sm">Resources</Link>
            <Link href="/contact"   className="text-white/80 hover:text-white transition font-medium text-sm">Contact</Link>

            {/* Teal CTA */}
            <a href="https://calendly.com/karl-mortgage-adviser/borrowing-review" target="_blank" rel="noopener noreferrer"
              className="text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: '#27C1B7' }}>
              Book a Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            <Link href="/about"     className="block py-2 text-white/80 font-medium hover:text-white transition">About Us</Link>
            <Link href="/resources" className="block py-2 text-white/80 font-medium hover:text-white transition">Resources</Link>
            <Link href="/contact"   className="block py-2 text-white/80 font-medium hover:text-white transition">Contact</Link>
            <a href="https://calendly.com/karl-mortgage-adviser/borrowing-review" target="_blank" rel="noopener noreferrer"
              className="block text-white px-6 py-3 rounded-xl text-center font-semibold"
              style={{ background: '#27C1B7' }}>
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
