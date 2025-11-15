import IndonesiaClient from "./indonesia-client";

const PAGE_URL = "https://www.finsol.group/coverage/asia/indonesia";
const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Finsol Indonesia Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Indonesia-focused coverage offering secure payment gateway solutions in Indonesia. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

  const META_KEYWORDS =
  "	Online Payment Services Indonesia, Ecommerce Payment Gateway, Payment Gateway for Business, Cross Border Payment Gateway, Payin Service Provider, Instant Payout Solutions, White Label Payment Gateway Platform, Online Merchant Services, International Payment Gateway Provider";


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
  return <IndonesiaClient />;
}
