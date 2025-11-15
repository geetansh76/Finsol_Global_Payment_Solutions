import InternetBankingClient from "./internetbankingclient";

const PAGE_URL = "https://www.finsol.group/payment-method/internet-banking";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Internet Banking Payment Solutions | Secure PayIn & Real-Time Payouts";
const META_DESC =
  "Enable seamless internet banking payments with trusted bank integrations. Accept PayIns and automate payouts securely across industries with real-time confirmation and compliance.";
const META_KEYWORDS =
  "Internet Banking Payment Solutions, Net Banking Gateway, Online Banking Transactions, Secure Internet Banking PayIn, Internet Banking Payouts, Real-Time Bank Transfers, Multi-Currency Internet Banking, B2B Banking Payments, Salary And Refund Payouts, Trusted Bank Integrations";

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
  return <InternetBankingClient />;
}
