// app/coverage/europe/russia/page.js
import Script from "next/script";
import RussiaClient from "./russia-client";

/* ===================== SEO ===================== */
const PAGE_URL = "https://www.finsol.group/coverage/europe/russia";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
 "Best Payin, White Label Solution & Payout Services in Russia"
const META_DESC =
  "Top payin, white label payment gateway providers & payout service solutions across Europe, including Russia. Accept online payments, collect funds & enable cross-border payments.";
    const META_KEYWORDS =
  "Ecommerce Payment Gateway, Online Payment Services Russia, Payment Gateway for Business, Cross Border Payment Gateway, Payin Service Provider, Instant Payout Solutions, White Label Payment Gateway Platform, Online Merchant Services, International Payment Gateway Providers";

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
  keywords: META_KEYWORDS,

  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: META_TITLE,
    description: META_DESC,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: META_TITLE }],
  },
  twitter: {
    card: "summary",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: META_TITLE,
    description: META_DESC,
    images: [OG_IMAGE_URL],
  },
  robots: { index: true, follow: true },
};

export default function RussiaPageSEO() {
  return (
    <>
      {/* JSON-LD (kept as-is) */}
      <Script
        id="ld-website-russia"
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

      {/* Client UI (unchanged) */}
      <RussiaClient />
    </>
  );
}
