import LatinAmericaCoveragePage from "./latin-america-client";

const PAGE_URL = "https://www.finsol.group/coverage/latin-america";
const OG_IMAGE_URL = "https://www.yoursite.com/assets/og/finsol-latin-america.jpg";
const META_TITLE =
  "Finsol Latin America Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Latin America-focused coverage offering secure payment gateway solutions in Latin America. Protect finances, ensure smooth global transactions, and expand your business worldwide.";
  const META_KEYWORDS =
  "	Online Payment Services, Ecommerce Payment Gateway, Payment Gateway for Small Business, Cross Border Payment Gateway, Payin Solution Provider, Payout API Services, White Label Payment Platform, Online Merchant Services, International Payment Gateway Providers Latin America";




export const metadata = {
  title: META_TITLE,
  
keywords: META_KEYWORDS,

  description: META_DESC,
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

export default function Page() {
  return <LatinAmericaCoveragePage />;
}
