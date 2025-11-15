// app/payment-method/cards-credit-debit/page.js
import CardsCreditDebitClient from "./cardsclient";

const PAGE_URL = "https://www.finsol.group/payment-method/cards-credit-debit";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Card Payment Solutions | Secure Credit & Debit PayIn And Payout Processing";
const META_DESC =
  "Accept and process card payments globally with speed, compliance & trust. Enable PayIns and instant Payouts with Visa, Mastercard, RuPay, Amex & more—secure and seamless.";
const META_KEYWORDS =
  "Card Payment Solutions, Credit Card Processing, Debit Card Payment Gateway, Secure Card Transactions, Global Card Payments, Visa Payment Solutions, Mastercard Payment Processing, RuPay Card Payments, Amex Card Gateway, Instant Card Payouts, Tokenization And 3D Secure";

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
  return <CardsCreditDebitClient />;
}
