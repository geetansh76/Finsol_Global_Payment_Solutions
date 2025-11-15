import RussiaClient from "./russia-client";

const PAGE_URL = "https://www.finsol.group/coverage/asia/russia";
const HOME_URL = "https://www.finsol.group";

const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Accept Payments Online, Instant Payouts & White Label Payment Solutions in Russia";
const META_DESC =
  "Top payin, white label payment gateway & payout solutions in Asia, including Russia. Get instant payouts, advanced merchant services, secure transfers & global money transfer platforms.";

  const META_KEYWORDS =
  "Online Payment Services Russia, Ecommerce Payment Gateway, Payment Gateway for Small Business, Cross Border Payment Gateway, Payin Solution Provider, Instant Payout Services, White Label Payment Gateway Platform, Online Merchant Services, International Payment Gateway Providers";

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
  return <RussiaClient />;
}
