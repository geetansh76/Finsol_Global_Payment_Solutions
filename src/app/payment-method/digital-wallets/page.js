import DigitalWalletsClient from "./digitalwalletsclient";

/* ================== SEO (your exact values) ================== */
const PAGE_URL = "https://www.finsol.group/payment-method/digital-wallets";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";
const META_TITLE = "Seamless Digital Wallet Payments | Global PayIn & Instant Payout Solutions";
const META_DESC =
  "Scale faster with digital wallet payments. Deliver seamless, secure checkouts, instant payouts & localized wallet options trusted by customers across industries and global markets.";
const META_KEYWORDS =
  "Digital Wallet Payments, Online Wallet Transactions, Mobile Wallet Solutions, Global Digital Wallets, ECommerce Wallet Payments, Secure Wallet Checkout, Wallet Payment Gateway, Wallet Integration API, Digital Wallet PayIn and Payout, Cross-Border Wallet Transactions";

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
  return <DigitalWalletsClient />;
}
