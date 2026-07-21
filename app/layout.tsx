import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.basemortgages.co.nz"),
  title: {
    default: "Base Mortgages | Mortgage Advisers New Zealand",
    template: "%s | Base Mortgages",
  },
  description:
    "Smart mortgage advice for New Zealanders. Expert guidance for first home buyers, refinancing, and property investors across Auckland and nationwide.",
  keywords:
    "mortgage adviser nz, first home buyer, refinancing, property investment, auckland mortgage broker, mortgage broker nz, home loan nz",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.basemortgages.co.nz",
    siteName: "Base Mortgages",
    title: "Base Mortgages | Mortgage Advisers New Zealand",
    description:
      "Smart mortgage advice for New Zealanders. Expert guidance for first home buyers, refinancing, and property investors across Auckland and nationwide.",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Base Mortgages – Mortgage Advisers New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Mortgages | Mortgage Advisers New Zealand",
    description:
      "Smart mortgage advice for New Zealanders. Expert guidance for first home buyers, refinancing, and property investors.",
    images: ["/hero-image.jpg"],
  },
  alternates: {
    canonical: "https://www.basemortgages.co.nz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.basemortgages.co.nz",
  name: "Base Mortgages",
  description:
    "Mortgage advisers helping New Zealanders buy their first home, refinance, and invest in property.",
  url: "https://www.basemortgages.co.nz",
  telephone: "",
  email: "karl@basemortgages.co.nz",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NZ",
    addressRegion: "Auckland",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -36.8509,
    longitude: 174.7645,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "39",
  },
  priceRange: "Free",
  serviceType: "Mortgage Advice",
  areaServed: {
    "@type": "Country",
    name: "New Zealand",
  },
};

const htmlClassName = outfit.variable + " " + sourceSerif.variable;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={htmlClassName}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
