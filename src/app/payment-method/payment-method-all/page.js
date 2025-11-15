import PaymentMethodAllClient from "./paymentmethodallclient";


const PAGE_URL = "https://www.finsol.group/payment-method/payment-method-all";
const HOME_URL = "https://www.finsol.group";

const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Unified Payment Solutions | Global PayIn, Payout & White-Label Infrastructure";
const META_DESC =
  "Accept, disburse, and manage payments with ease. From cards to UPI, wallets, bank transfers & QR, our platform powers secure, real-time and scalable global transactions.";
const META_KEYWORDS =
  "Unified Payment Solutions, Global Payment Platform, Multi-Channel Payment Gateway, Cross-Border Payment Processing, Secure Payout Solutions, Card Payment Gateway, UPI Payment Solutions, QR Code Payment Platform, Internet Banking Payments, Bank Transfer Processing.";

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
  return <PaymentMethodAllClient />;
}
