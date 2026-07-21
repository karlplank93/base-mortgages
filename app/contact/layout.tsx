import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Base Mortgages. Book a free consultation with a New Zealand mortgage adviser today — no obligation, no jargon.',
  alternates: {
    canonical: 'https://www.basemortgages.co.nz/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
