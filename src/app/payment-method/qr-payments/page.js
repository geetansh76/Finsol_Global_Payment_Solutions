import QRClient from "./qrclient";

/* =========================
   SEO (your exact values)
   ========================= */
const PAGE_URL = "https://www.finsol.group/payment-method/qr-payments";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "QR Code Payment Solutions | Instant, Secure PayIn & Payout for Every Business";
const META_DESC =
  "Simplify payments with QR codes. Enable fast, secure, and low-cost PayIn & Payout experiences across retail, hospitality, transport, and services with real-time tracking.";
const META_KEYWORDS =
  "QR Code Payment Solutions, QR Payments Gateway, Instant QR Transactions, Secure QR PayIn, QR code Payout, Mobile QR Payments, Cross-border QR Payments, UPI QR Code Payments, Retail QR Transactions, Hospitality QR payments, Transportation QR payments, Contactless QR Payments.";

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
  return <QRClient />;
}
