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
  title: "Base Mortgages | New Zealand Mortgage Advisers",
  description:
    "Smart mortgage advice for New Zealanders. Expert guidance for first home buyers, refinancing, and property investors across Auckland and nationwide.",
  keywords:
    "mortgage adviser nz, first home buyer, refinancing, property investment, auckland mortgage broker",
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
