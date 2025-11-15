// app/coverage/asia/japan/page.js
import JapanClient from "./japan-client";

const PAGE_URL = "https://www.finsol.group/coverage/asia/japan";
const HOME_URL = "https://www.finsol.group";
// NOTE: encode spaces and '&' so the URL is valid in meta tags
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png";

const META_TITLE =
  "Finsol Japan Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Japan-focused coverage offering secure payment gateway solutions in Japan. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

const META_KEYWORDS =
  "Online Payment Services Japan, Ecommerce Payment Gateway, Payment Gateway for Small Business, Cross Border Payment Gateway, Payin Solution Provider, Instant Payout Services, White Label Payment Gateway Platform, Online Merchant Services, International Payment Gateway Providers";

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
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: META_TITLE,
    description: META_DESC,
    images: [OG_IMAGE_URL],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// ---------- JSON-LD rendered on the server ----------
function JsonLd() {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Finsol",
      url: "https://www.finsol.group/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.finsol.group/search?searchQuery={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: META_TITLE,
      description: META_DESC,
      url: PAGE_URL,
      image: OG_IMAGE_URL,
    },
  ];

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
      <JapanClient />
    </>
  );
}
