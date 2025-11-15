
import HungaryClient from "./hungary-client";

const PAGE_URL = "https://www.finsol.group/coverage/europe/hungary";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Hungary Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Hungary-focused coverage offering secure payment gateway solutions in Hungary. Protect finances, ensure smooth global transactions, and expand your business worldwide.";
const META_KEYWORDS =
  "Hungary payment gateway, Hungary payin solutions, Hungary payout solutions, white label payments Hungary, online payments Hungary, cross-border payments Hungary, digital wallets Hungary, QR payments Hungary, internet banking Hungary";

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
  return <HungaryClient />;
}
