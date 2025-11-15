
import NewZealandClient from "./newzealand-client";

const PAGE_URL = "https://www.finsol.group/coverage/oceania/new-zealand";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =  
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";
const META_TITLE =
  "Finsol New ZealandCoverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s  New Zealand-focused coverage offering secure payment gateway solutions in New Zealand. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

   const META_KEYWORDS =
  "Global Payment Gateway, International Payment Solutions, Cross-Border Transactions, Local Payment Methods, Multi-Currency Payments, Global Market Expansion, Europe Payment Coverage, Asia Payment Solutions, America Payment Gateway, Trusted Global Payments";



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
  return <NewZealandClient />;
}
