import CanadaClient from "./canada-client";
import Script from "next/script";

const PAGE_URL = "https://www.finsol.group/coverage/latin-america/canada";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Canada Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Canada-focused coverage offering secure payment gateway solutions in Canada. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
   keywords: [
    "Global Payment Gateway",
    "International Payment Solutions",
    "Cross-Border Transactions",
    "Local Payment Methods",
    "Multi-Currency Payments",
    "Global Market Expansion",
    "Europe Payment Coverage",
    "Asia Payment Solutions",
    "America Payment Gateway",
    "Trusted Global Payments",
  ],
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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

export default function Page() {
  return (
    <>
      {/* JSON-LD kept exactly the same shape */}
      <Script
        id="ld-website-canada"
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
      <CanadaClient />
    </>
  );
}
