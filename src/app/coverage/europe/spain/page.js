// app/coverage/europe/spain/page.js
import Script from "next/script";
import SpainClient from "./spain-client";

/* ========================= SEO ========================= */
const PAGE_URL = "https://www.finsol.group/coverage/europe/spain";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";
  

const META_TITLE =
  "Finsol Spain Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Spain-focused coverage offering secure payment gateway solutions in Spain. Protect finances, ensure smooth global transactions, and expand your business worldwide.";
    const META_KEYWORDS =
  "Online Payment Providers, Ecommerce Payment Solutions, Payment Gateway for Small Business, Cross Border Payment Gateway, Payin Solution Provider, White Label Payment Gateway Software, Payout Service Provider, Merchant Services Online Payment Gateway, International Payment Gateway";

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
  keywords: META_KEYWORDS,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: META_TITLE,
    description: META_DESC,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: META_TITLE,
    description: META_DESC,
    images: [OG_IMAGE_URL],
  },
  other: {
    copyright: "Finsol",
    "revisit-after": "daily",
    "allow-search": "yes",
  },
};

export default function SpainPageSEO() {
  return (
    <>
      {/* JSON-LD (WebSite) */}
      <Script
        id="ld-website-spain"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            url: PAGE_URL,
          }),
        }}
      />

      {/* Client UI (unchanged content & image paths) */}
      <SpainClient />
    </>
  );
}
