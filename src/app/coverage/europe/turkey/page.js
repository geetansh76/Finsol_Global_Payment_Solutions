// app/coverage/europe/turkey/page.js
import Script from "next/script";
import TurkeyClient from "./turkey-client";


const PAGE_URL = "https://www.finsol.group/coverage/europe/turkey";

const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

    const META_KEYWORDS =
  "Online Payment Services Turkey, Ecommerce Payment Gateway, Payment Gateway for Business, Cross Border Payment Gateway, Payin Solution Provider, Instant Payout Payment Gateway, White Label Payment Platform, Online Merchant Services, International Payment Gateway Providers Turkey";

const META_TITLE =
  "Accept Payments Online, Instant Payouts & White Label Payment Solutions in Turkey";
const META_DESC =
  "Top payin, white label payment gateway & payout service solutions across Europe, including Turkey. Accept online payments, collect funds & enable cross-border payments.";




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

export default function TurkeyPageSEO() {
  return (
    <>
      <Script
        id="ld-website-turkey"
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


      <TurkeyClient />
    </>
  );
}
