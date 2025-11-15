// app/privacy-tnc/privacy-policy/page.js

import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Finsol Privacy Policy | Secure Digital Payment & Data Protection Practices",
  description:
    "Read Finsol’s Privacy Policy to learn how we collect, use, and protect your personal and financial data. Discover our commitment to secure pay-in, pay-out & white label payment services.",
  keywords:
    "Finsol, Privacy Policy, Data Protection, Secure Digital Payments, Pay-In Services, Pay-Out Services, White Label Payment Solutions, Cross-Border Transactions, Fraud Prevention, Compliance, Financial Data Security, Online Payment Gateway, User Rights",
  alternates: {
    canonical: "https://www.finsol.group/privacy-tnc/privacy-policy",
  },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title:
      "Finsol Privacy Policy | Secure Digital Payment & Data Protection Practices",
    description:
      "Read Finsol’s Privacy Policy to learn how we collect, use, and protect your personal and financial data. Discover our commitment to secure pay-in, pay-out & white label payment services.",
    url: "https://www.finsol.group/privacy-tnc/privacy-policy",
    images: [
      {
        url: "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png",
        width: 1200,
        height: 630,
        alt: "Finsol Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title:
      "Finsol Privacy Policy | Secure Digital Payment & Data Protection Practices",
    description:
      "Read Finsol’s Privacy Policy to learn how we collect, use, and protect your personal and financial data. Discover our commitment to secure pay-in, pay-out & white label payment services.",
    images: [
      "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
