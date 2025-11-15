// app/coverage/asia/turkey/page.js
import TurkeyClient from "./turkey-client";

const PAGE_URL = "https://www.finsol.group/coverage/asia/turkey";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
 "Best Payin, Payout & White Label Payment Gateway Solutions in Turkey";
const META_DESC =
  "Explore secure payin, payout solutions & advanced white label payment gateway services across Asia, including Turkey. Receive online payments easily with trusted providers.";
  const META_KEYWORDS =
  "Payment Gateway Services, Ecommerce Payment Gateway Turkey, Online Payment Providers, Cross Border Payment Gateway, Payin Service Provider, Payout API Provider, White Label Payment Platform, Merchant Services, Online Payment Solutions Turkey";

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
  return <TurkeyClient />;
}
