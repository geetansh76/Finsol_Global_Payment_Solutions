
import IndustriesClient from "./digital-client";
const HOME_URL = "https://www.finsol.group";
const PAGE_URL = "https://www.finsol.group/industries/digital-subscriptions";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Seamless Digital Payments & Subscription Billing Solutions | Finsol";
const META_DESC =
  "Finsol powers digital platforms with recurring billing, global subscriptions, fast payouts, and white-label payment gateways. Scale E-learning, SaaS, Gaming & Streaming seamlessly.";
const META_KEYWORDS =
  "Digital Subscription Payments, Recurring Billing Solutions, Online Payment Gateway, SaaS Payment Processing, E-Learning Payment Solutions, Streaming Payment Gateway, Automated Renewals, Multi-Currency Payment Platform, Secure Payout API, White Label Subscription Payments";

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
  return <IndustriesClient />;
}
