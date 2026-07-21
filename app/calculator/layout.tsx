import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Calculator',
  description: 'Use our free NZ mortgage calculator to estimate your repayments, borrowing power, and see how much you could save by refinancing.',
  alternates: {
    canonical: 'https://www.basemortgages.co.nz/calculator',
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
