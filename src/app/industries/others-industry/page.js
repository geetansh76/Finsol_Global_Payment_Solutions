import IndustryClient from "./industry-client";

const PAGE_URL = "https://www.finsol.group/industries/others-industry";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Seamless Payment Solutions for Every Industry | Collections & Payouts Simplified";
const META_DESC =
  "Empowering industries with secure PayIn & Payout solutions. Simplify collections, automate disbursements, and scale globally with real-time, multi-currency payment infrastructure.";
  
const META_KEYWORDS =
  "Payment Solutions for Industries, Industry Payment Gateway, Multi-Industry Payment Platform, Seamless Collections and Payouts, Automated Disbursement Solutions, Global Payment Infrastructure, Real Estate Payment Gateway, Event Ticketing Payment Solutions, Logistics Payment Processing";

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
  return <IndustryClient />;
}
