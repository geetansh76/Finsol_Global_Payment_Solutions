// app/coverage/page.js
import CoverageClient from "./coverage-client";

const HOME_URL = "https://www.finsol.group";
const PAGE_URL = `${HOME_URL}/coverage`;
const OG_IMAGE_URL = `${HOME_URL}/icons/industries-icons/digital-and-subscription/elearning.png`; 
// ^ replace with a real coverage image if you have one

const META_TITLE = "Finsol Global Solutions | Payment Gateway, Coverage & Security";
const META_DESC =
  "Explore Finsol’s worldwide coverage with advanced payment gateway solutions. Safeguard your finances, ensure secure global transactions and achieve long-term growth with ease.";
const META_KEYWORDS =
 "Global Online Payment Services, Ecommerce Payment Gateway Solutions, Cross Border Payment Gateway, B2B Payment Gateway, Payin and Payout Service Provider, White Label Payment Platform, Merchant Payment Integration, International Payment Gateway Providers Worldwide";

export const metadata = {
  metadataBase: new URL(HOME_URL),
  title: META_TITLE,
  description: META_DESC,
  keywords: META_KEYWORDS, // string is fine; array also works
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
    card: "summary", // use "summary_large_image" if you want a big preview
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
    bingbot: "index, follow",
  },
};

// JSON-LD: WebSite + SearchAction (as per your spec)
function JsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Finsol",
    url: HOME_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${HOME_URL}/search?searchQuery={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <CoverageClient HOME_URL={HOME_URL} PAGE_URL={PAGE_URL} />
    </>
  );
}
