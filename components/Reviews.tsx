'use client';

import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'James & Tara',
    role: 'First Home Buyers, Auckland',
    text: 'Karl made the whole process so straightforward. We were completely overwhelmed as first home buyers — he broke everything down, got us a great rate, and was always available to answer questions.',
    initials: 'JT',
    featured: true,
  },
  {
    name: 'Mark C.',
    role: 'Property Investor, Wellington',
    text: 'We refinanced three properties with Base Mortgages and saved significantly across the portfolio. The strategic advice on splitting fixed terms was something no bank had ever offered us.',
    initials: 'MC',
    featured: false,
  },
  {
    name: 'Sarah R.',
    role: 'Self-Employed, Christchurch',
    text: "I'd been turned down by two banks and thought my chances were gone. Base Mortgages found a solution I didn't know existed and had me approved within a week. Incredible service.",
    initials: 'SR',
    featured: false,
  },
  {
    name: 'David & Amy',
    role: 'Refinancing, Auckland',
    text: 'Switched lenders through Base Mortgages and saved over $4,000 in the first year alone. Fast, excellent communication, and Karl clearly knew his stuff.',
    initials: 'DA',
    featured: false,
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: 'linear-gradient(160deg, #0D1F2D 0%, #0A3040 50%, #0D1F2D 100%)',
      padding: '80px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: 52,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(39,193,183,0.12)',
            border: '1px solid rgba(39,193,183,0.25)',
            borderRadius: 999, padding: '6px 16px',
            marginBottom: 20,
          }}>
            <GoogleIcon />
            <span style={{ color: '#27C1B7', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              5.0 · Google Reviews
            </span>
            <Stars />
          </div>

          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '0 0 14px',
          }}>
            {"Don't just take our word for it"}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 17, maxWidth: 440, margin: '0 auto' }}>
            Real clients. Real results. See what people are saying.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              style={{
                background: r.featured ? 'rgba(39,193,183,0.1)' : 'rgba(255,255,255,0.04)',
                border: r.featured ? '1px solid rgba(39,193,183,0.35)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.55s ease ${0.1 + i * 0.1}s, transform 0.55s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: r.featured ? '#27C1B7' : 'rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700,
                  color: r.featured ? '#0D1F2D' : '#fff',
                  flexShrink: 0,
                  border: r.featured ? 'none' : '1.5px solid rgba(255,255,255,0.15)',
                }}>
                  {r.initials}
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{r.name}</div>
                  <Stars />
                </div>
              </div>

              <div style={{ color: '#27C1B7', fontSize: 36, lineHeight: 1, opacity: 0.4, marginBottom: -8 }}>&ldquo;</div>

              <p style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: 13.5,
                lineHeight: 1.72,
                flex: 1,
                margin: 0,
              }}>
                {r.text}
              </p>

              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>{r.role}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center', marginTop: 48,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.6s',
        }}>
          <a
            href="https://share.google/yRmM1i4FL0kiBMf5O"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#27C1B7', fontSize: 15, fontWeight: 600,
              textDecoration: 'none',
              border: '1.5px solid rgba(39,193,183,0.3)',
              borderRadius: 40, padding: '12px 28px',
            }}
          >
            <GoogleIcon />
            Read all our reviews on Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#27C1B7" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
