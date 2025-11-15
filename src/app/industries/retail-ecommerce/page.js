import RetailClient from "./retail-client";

const PAGE_URL = "https://www.finsol.group/industries/retail-ecommerce";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Seamless Payment Gateway for Retail & eCommerce | Global PayIn & Payouts";
const META_DESC =
  "Finsol helps retail & eCommerce brands accept global payments, automate payouts, boost conversions & scale with secure, multi-currency & compliance-ready solutions.";
const META_KEYWORDS =
  "Retail Payment Gateway Solutions, eCommerce Payment Processing, Multi-Currency Online Payments, Secure Checkout Solutions, Vendor Payout Automation, Marketplace Payment Gateway, Digital Storefront Payments, Subscription eCommerce Payments, Global Retail Transactions, Logistics Payment Integration";

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
  return <RetailClient />;
}
