'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const mortgageLinks: [string, string][] = [
  ['First Home Buyers',        '/services/first-home-buyers'],
  ['Refinancing',              '/services/refinancing'],
  ['Property Investors',       '/services/investors'],
  ['Refix & Restructure',      '/services/refix'],
  ['New Build & Construction', '/services/construction'],
  ['Alternative Lending',      '/services/alternative-lending'],
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mortgagesOpen, setMortgagesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = 'px-3 py-2 text-sm font-medium transition-colors';
  const linkColor = { color: '#24323D' };

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-200"
      style={{
        background: '#F7F5F2',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        borderBottom: 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '96px' }}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/base-mortgages-logo.svg"
              alt="Base Mortgages"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setMortgagesOpen(true)}
              onMouseLeave={() => setMortgagesOpen(false)}
            >
              <button
                className={linkClass + ' flex items-center gap-1 rounded-lg hover:opacity-70'}
                style={linkColor}
              >
                Mortgages
                <ChevronDown
                  className={'w-4 h-4 transition-transform duration-200 ' + (mortgagesOpen ? 'rotate-180' : '')}
                />
              </button>
              {mortgagesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white border border-gray-100 rounded-2xl py-2 z-50"
                  style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
                >
                  {mortgageLinks.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-sm transition-colors mx-1 rounded-lg hover:bg-mint/40"
                      style={{ color: '#24323D' }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about"      className={linkClass + ' hover:opacity-70'} style={linkColor}>About Us</Link>
            <Link href="/resources"  className={linkClass + ' hover:opacity-70'} style={linkColor}>Guides</Link>
            <Link href="/calculator" className={linkClass + ' hover:opacity-70'} style={linkColor}>Calculators</Link>
            <Link href="/contact"    className={linkClass + ' hover:opacity-70'} style={linkColor}>Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#0F4C4F' }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: '#24323D' }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-gray-100">
            <div
              className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-wider"
              style={{ color: '#A8B8B2' }}
            >
              Mortgages
            </div>
            {mortgageLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50"
                style={{ color: '#24323D' }}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            <Link href="/about"      className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50" style={linkColor}>About Us</Link>
            <Link href="/resources"  className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50" style={linkColor}>Guides</Link>
            <Link href="/calculator" className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50" style={linkColor}>Calculators</Link>
            <Link href="/contact"    className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors hover:bg-gray-50" style={linkColor}>Contact</Link>
            <div className="pt-3 px-4">
              <Link
                href="/contact"
                className="block text-center w-full py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: '#0F4C4F' }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
