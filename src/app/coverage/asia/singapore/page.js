
import SingaporeClient from "./singapore-client";

const PAGE_URL = "https://www.finsol.group/coverage/asia/singapore";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png"; // URL-encoded

const META_TITLE =
  "Finsol Singapore Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Singapore-focused coverage offering secure payment gateway solutions in Singapore. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

  const META_KEYWORDS =
 "Online Payment Services Singapore, Ecommerce Payment Gateway, Payment Gateway for Business, Cross Border Payment Gateway, Payin Solution Provider, Instant Payout Services, White Label Payment Gateway Platform, Online Merchant Services, International Payment Gateway Providers";

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
  keywords: META_KEYWORDS,                // ✅ added
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
  return <SingaporeClient />;
}
