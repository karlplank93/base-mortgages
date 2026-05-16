'use client';

import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Appear after the user has scrolled past roughly the hero (~600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop — floating bottom-right pill */}
      <a
        href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a free call"
        className={`hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 px-5 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
        style={{
          background: '#0F4C4F',
          boxShadow: '0 8px 24px rgba(15,76,79,0.32)',
        }}
      >
        <Calendar className="w-4 h-4" />
        Book a Free Call
      </a>

      {/* Mobile — full-width bottom banner */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 transition-all duration-300 ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(to top, rgba(247,245,242,0.98), rgba(247,245,242,0.85))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <a
          href="https://calendly.com/karl-mortgage-adviser/borrowing-review"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a free call"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-white font-semibold text-sm"
          style={{
            background: '#0F4C4F',
            boxShadow: '0 4px 16px rgba(15,76,79,0.28)',
          }}
        >
          <Calendar className="w-4 h-4" />
          Book a Free Call
        </a>
      </div>
    </>
  );
}
