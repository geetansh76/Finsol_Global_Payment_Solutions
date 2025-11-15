import TravelClient from "./travel-client";

const PAGE_URL = "https://www.finsol.group/industries/travel-hospitality";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Global Payment Gateway for Travel & Hospitality | Seamless PayIn & Payouts";
const META_DESC =
  "Finsol enables travel & hospitality brands to accept bookings, manage global payments and automate vendor payouts with secure, scalable & compliant infrastructure.";
const META_KEYWORDS =
  "Travel Payment Gateway Solutions, Hospitality Payment Processing, Global Booking Payments, Hotel Payment Gateway, Online Travel Agency Payments, Multi-Currency Travel Payments, Secure Vendor Payouts, Automated Travel Settlements, White Label Travel Payments, Cross-Border Hospitality Transactions";

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
  return <TravelClient />;
}
