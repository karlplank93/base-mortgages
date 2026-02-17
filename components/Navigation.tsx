'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-navy">
              Base<span className="text-blue">Mortgages</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-600 hover:text-navy transition">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                  <Link href="/services/first-home-buyers" className="block px-4 py-2 text-sm hover:bg-sky/30 transition">First Home Buyers</Link>
                  <Link href="/services/refinancing" className="block px-4 py-2 text-sm hover:bg-sky/30 transition">Refinancing</Link>
                  <Link href="/services/investors" className="block px-4 py-2 text-sm hover:bg-sky/30 transition">Property Investors</Link>
                  <Link href="/services/refix" className="block px-4 py-2 text-sm hover:bg-sky/30 transition">Refix & Restructure</Link>
                  <Link href="/services/construction" className="block px-4 py-2 text-sm hover:bg-sky/30 transition">New Build & Construction</Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-600 hover:text-navy transition">About Us</Link>
            <Link href="/resources" className="text-gray-600 hover:text-navy transition">Resources</Link>
            <Link href="/contact" className="text-gray-600 hover:text-navy transition">Contact</Link>
            <a 
              href="https://calendly.com/your-calendly-link" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white px-6 py-2.5 rounded-lg hover:bg-navy transition font-semibold"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/about" className="block py-2 text-gray-600">About Us</Link>
            <Link href="/resources" className="block py-2 text-gray-600">Resources</Link>
            <Link href="/contact" className="block py-2 text-gray-600">Contact</Link>
            <a 
              href="https://calendly.com/your-calendly-link" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue text-white px-6 py-2.5 rounded-lg text-center font-semibold"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
