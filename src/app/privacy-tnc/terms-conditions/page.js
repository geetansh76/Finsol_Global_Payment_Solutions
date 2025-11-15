// app/privacy-tnc/terms-conditions/page.js

import TermsConditionsClient from "./terms-conditionsclient";

export const metadata = {
  title: "Finsol Terms & Conditions | Pay-In, Pay-Out & White-Label Payment Services",
  description:
    "Review Finsol’s Terms & Conditions for using our digital payment solutions. Learn about service eligibility, merchant responsibilities, fees, settlements, data protection & compliances.",
  keywords:
    "Finsol, Terms And Conditions, Digital Payment Services, Pay-In Solutions, Pay-Out Solutions, White Label Payment Gateway, Merchant Responsibilities, Payment Compliance, Secure Transactions, Settlement Policies, Financial Technology Platform, User Agreement",
  alternates: {
    canonical: "https://www.finsol.group/privacy-tnc/terms-conditions",
  },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Finsol Terms & Conditions | Pay-In, Pay-Out & White-Label Payment Services",
    description:
      "Review Finsol’s Terms & Conditions for using our digital payment solutions. Learn about service eligibility, merchant responsibilities, fees, settlements, data protection & compliances.",
    url: "https://www.finsol.group/privacy-tnc/terms-conditions",
    images: [
      {
        url: "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png",
        width: 1200,
        height: 630,
        alt: "Finsol Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Finsol Terms & Conditions | Pay-In, Pay-Out & White-Label Payment Services",
    description:
      "Review Finsol’s Terms & Conditions for using our digital payment solutions. Learn about service eligibility, merchant responsibilities, fees, settlements, data protection & compliances.",
    images: [
      "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function TermsConditionsPage() {
  return <TermsConditionsClient />;
}
