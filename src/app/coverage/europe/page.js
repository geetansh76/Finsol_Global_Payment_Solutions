// app/coverage/europe/page.js
import { Suspense } from "react";
import EuropeCoveragePage from "./europe-client";

const PAGE_URL = "https://www.finsol.group/coverage/europe";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL = "https://www.example.com/assets/og/finsol-europe.jpg";
const META_TITLE =
  "Finsol Europe Coverage | Trusted Global Payment Gateway & Business Growth";
const META_DESC =
  "Explore Finsol’s Europe-focused coverage offering secure payment gateway solutions in Europe. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

export const metadata = {
  title: META_TITLE,
  description: META_DESC,
  keywords: [
   "Online Payment Services", "Ecommerce Payment Gateway", "Payment Gateway for Business", "Online Merchant Services", "Cross Border Payment Gateway", "Payin Solution", "Payout API Provider", "White Label Payment Platform", "International Payment Gateway Providers Europe"

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

export default function Page({ searchParams }) {
  // (optional) pass any initial query values into the client component
  return (
    <Suspense fallback={null}>
      <EuropeCoveragePage />
    </Suspense>
  );
}
