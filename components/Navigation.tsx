'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  ['First Home Buyers',        '/services/first-home-buyers'],
  ['Refinancing',              '/services/refinancing'],
  ['Property Investors',       '/services/investors'],
  ['Refix & Restructure',      '/services/refix'],
  ['New Build & Construction', '/services/construction'],
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 bg-white transition-all duration-200"
      style={{ boxShadow: scrolled ? '0 1px 0 #E5E7EB, 0 4px 20px rgba(0,0,0,0.07)' : '0 1px 0 #E5E7EB' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '72px' }}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/base-mortgages-logo.svg" alt="Base Mortgages" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 z-50">
                  {services.map(([label, href]) => (
                    <Link key={href} href={href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors mx-1 rounded-lg">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about"     className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">About</Link>
            <Link href="/resources" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">Resources</Link>
            <Link href="/contact"   className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#27C1B7' }}
            >
              Book a Free Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-gray-100">
            {services.map(([label, href]) => (
              <Link key={href} href={href}
                className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors">
                {label}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            <Link href="/about"     className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors">About</Link>
            <Link href="/resources" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors">Resources</Link>
            <Link href="/contact"   className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-navy hover:bg-gray-50 rounded-lg transition-colors">Contact</Link>
            <div className="pt-2 px-4">
              <a
                href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: '#27C1B7' }}
              >
                Book a Free Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
