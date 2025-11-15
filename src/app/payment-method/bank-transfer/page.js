// app/payment-method/bank-transfer/page.js
import BankTransferClient from "./banktransferclient";

const PAGE_URL = "https://www.finsol.group/payment-method/bank-transfer";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Bank Transfer Payment Solutions | Secure NEFT, RTGS, IMPS & SWIFT Transfers";
const META_DESC =
  " Simplify domestic & cross-border bank transfers with secure PayIn & automated Payouts. Support NEFT, RTGS, IMPS & SWIFT with real-time tracking, compliance & reconciliation.";
const META_KEYWORDS =
  "Bank Transfer Payment Solutions, Secure Bank-To-Bank Transfers, NEFT RTGS IMPS Payments, Cross-Border SWIFT Transfers, Automated Bank Payouts, B2B Bank Transactions, Enterprise Bank Settlements, Real-Time Bank Transfer Tracking, API-Driven Bank Payments, Global Bank Transfers";

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
  return <BankTransferClient />;
}
