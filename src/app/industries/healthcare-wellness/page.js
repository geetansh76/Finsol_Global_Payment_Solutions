import HealthcareClient from "./healthcare-client";

const PAGE_URL = "https://www.finsol.group/industries/healthcare-wellness";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Healthcare & Wellness Payments | Secure Billing & Scalable Payouts";
const META_DESC =
  "From patient billing to partner disbursements, Finsol simplifies payments for healthcare & wellness brands with real-time reporting, compliance & white-label solutions.";
const META_KEYWORDS =
  "Healthcare Payment Solutions, Medical Billing Gateway, Patient Payment Processing, Wellness Subscription Payments, Clinic Payment Platform, Hospital Payment Gateway, Automated Payouts For Doctors, Cross-Border Medical Payments, Secure Healthcare Transactions, White Label Wellness Payments";

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
  return <HealthcareClient />;
}
