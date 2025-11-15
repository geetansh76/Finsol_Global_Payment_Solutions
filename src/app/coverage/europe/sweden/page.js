// app/coverage/europe/sweden/page.js
import Script from "next/script";
import SwedenClient from "./sweden-client";

/* ========================= SEO ========================= */
const PAGE_URL = "https://www.finsol.group/coverage/europe/sweden";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Sweden Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Sweden-focused coverage offering secure payment gateway solutions in Sweden. Protect finances, ensure smooth global transactions, and expand your business worldwide.";


    const META_KEYWORDS =
"Online Payment Services Sweden, Ecommerce Payment Gateway, Cross Border Payment Gateway, Payment Gateway for Business, Payin Service Provider, Instant Payout Solutions, White Label Payment Gateway Platform, Online Merchant Services, International Payment Gateway Providers";


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

export default function SwedenPageSEO() {
  return (
    <>
      {/* JSON-LD (WebSite) */}
      <Script
        id="ld-website-sweden"
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
      <SwedenClient />
    </>
  );
}
