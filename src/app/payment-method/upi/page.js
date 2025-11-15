// app/payment-method/upi/page.js
import UPIPaymentClient from "./upiclient";

const PAGE_URL = "https://www.finsol.group/payment-method/upi";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "UPI Payment Solutions | Instant, Secure PayIn & Payout for Indian Businesses";
const META_DESC =
  "Enable instant UPI transactions with ease. Accept PayIns via UPI ID, QR, or mobile number and automate payouts like refunds, rewards& commissions with real-time security.";
const META_KEYWORDS =
  "UPI Payment Solutions, UPI Payment Gateway, UPI PayIn And Payout, UPI Integration For Business, Instant UPI Transactions, UPI API Solutions, UPI For Retail Brands, UPI Refunds And Commissions, UPI QR Code Payments, UPI Mobile Number Payments, Secure UPI Transfers.";

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
  return <UPIPaymentClient />;
}
