// app/coverage/asia/thailand/page.js
import ThailandClient from "./thailand-client";

const PAGE_URL = "https://www.finsol.group/coverage/asia/thailand";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Thailand Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Thailand-focused coverage offering secure payment gateway solutions in Thailand. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

 const META_KEYWORDS =
  "Online Payment Providers, Ecommerce Payment Gateway, Payment Gateway Services, Payin Solution, Cross Border Payment Gateway, White Label Payment Platform, Online Merchant Services, Payout Service Provider, International Payment Gateway Providers Thailand";


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

export default function Page() {
  return <ThailandClient />;
}
