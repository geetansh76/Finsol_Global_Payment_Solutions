import AfricaClient from "./africa-client";

const PAGE_URL = "https://www.finsol.group/coverage/africa";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Africa Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Africa-focused coverage offering secure payment gateway solutions in Africa. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
  keywords: [
    "Online Payment Services", "Online Payment Providers", "Payment Gateway Services Africa", "Ecommerce Payment Gateway", "Online Payment Solutions", "Cross Border Payment Gateway", "B2B Payment Gateway", "Payin Service Provider", "Payout API Provider", "White Label Payment Gateway Africa",
  ],

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
  return <AfricaClient />;
}
