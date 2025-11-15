import RemittanceClient from "./remittance-client";

const PAGE_URL = "https://www.finsol.group/industries/remittance-fintech";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

const META_TITLE =
  "Global Remittance & Fintech Payments | Secure PayIn, Payout & White-Label.";
const META_DESC =
  "Enable fast, compliant money transfers with Finsol. From digital wallets to cross-border payouts, our solutions help fintechs scale securely with real-time global payments.";
const META_KEYWORDS =
  "Remittance Solutions, Digital Money Transfer Platform, Fintech Remittance Services, Cross Border Payment Solutions, Global Remittance Gateway, Money Transfer API, Payout and Payin Services, White Label Remittance Platform, International Money Transfer Solutions, Fintech Payment Gateway";

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
  return <RemittanceClient />;
}
