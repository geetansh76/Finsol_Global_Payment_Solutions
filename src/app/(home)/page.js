// app/(home)/page.js
import Script from "next/script";
import HomeClient from "./home-client";
const ORIGIN = "https://www.finsol.group";
const OG_IMAGE = `${ORIGIN}/icons/industries-icons/digital-subscription/elearning.png`;

export const metadata = {
  metadataBase: new URL(ORIGIN),
  title: "Global Payment Solutions | Online Payment Gateway With Multi-Currency Support",
  description:
    "Enable seamless online payments with our secure payment gateway. Accept cards, UPI, wallets, internet banking & QR code transactions. Manage cross-border transactions.",
  // <link rel="canonical" ...>
    verification: {
    google: "cqd5Hv_YTZDsbTnRxoLsEz7XyOGAcZzRRgva7OACsEc",
  },


  alternates: { canonical: ORIGIN },
  // Keywords (from your list)
  keywords: [
    "Global Payment Solutions",
    "Online Payment Gateway",
    "Cross-Border Transactions",
    "Multi-Currency Payment Platform",
    "Secure Pay-In and Payout",
    "White Label Payment Gateway",
    "Digital Wallet Integration",
    "UPI Payment Solutions",
    "Internet Banking Payments",
    "QR Code Transactions",
    "Card Payment Processing",
  ],
  openGraph: {
    type: "website",
    siteName: "Finsol",
    url: ORIGIN,
    title: "Global Payment Solutions | Online Payment Gateway With Multi-Currency Support",
    description:
      "Enable seamless online payments with our secure payment gateway. Accept cards, UPI, wallets, internet banking & QR code transactions. Manage cross-border transactions.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Global Payment Solutions | Online Payment Gateway With Multi-Currency Support",
    description:
      "Enable seamless online payments with our secure payment gateway. Accept cards, UPI, wallets, internet banking & QR code transactions. Manage cross-border transactions.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    // Mirrors your "googlebot: index, follow"
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // Extra meta tags that don't have first-class fields
  // These render as <meta name="..."> or property if you include ":" in the key
  other: {
    copyright: "Finsol",
    "bingbot": "index, follow",
    "revisit-after": "daily",
    "allow-search": "yes",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Organization JSON-LD (expanded to include alternateName & logo) */}
      <Script
        id="ld-org-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Finsol Payment Service Provider",
            alternateName: "Finsol",
            url: ORIGIN,
            logo: `${ORIGIN}/icons/logo.png`, // <-- replace with your actual logo URL if different
          }),
        }}
      />

      {/* WebSite JSON-LD with SearchAction */}
      <Script
        id="ld-website-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            url: ORIGIN,
            potentialAction: {
              "@type": "SearchAction",
              target: `${ORIGIN}/search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <HomeClient />
    </>
  );
}
