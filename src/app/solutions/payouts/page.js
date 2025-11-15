
import Industries from "@/components/Home/Industries/IndustriesSection";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import FAQSection from "@/components/Home/FAQ/FAQSection";
import Footer from "@/components/Home/footer/Footer";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import PayoutsClient from "@/components/Solutions/payouts/PayoutsClient";

// ---------- SSR METADATA ----------
export const metadata = {
  title: "Finsol Payout API & Payment Gateway | Secure Global Payout Services",
  description:
    "Scale your business with Finsol payout solutions. Offering instant payouts via API, use a global payout platform & access trusted payout services for businesses of all sizes.",
  keywords: [
    "payout api provider",
    "payouts solutions",
    "payout services",
    "instant payout payment gateway",
    "global payout platform",
    "payout service provider",
  ],
  alternates: { canonical: "https://www.finsol.group/solutions/payouts" },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Finsol Payout API & Payment Gateway | Secure Global Payout Services",
    description:
      "Scale your business with Finsol payout solutions. Offering instant payouts via API, use a global payout platform & access trusted payout services for businesses of all sizes.",
    url: "https://www.finsol.group/solutions/payouts",
    images: [
      {
        url: "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png",
        width: 1200,
        height: 630,
        alt: "Finsol Payouts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Finsol Payout API & Payment Gateway | Secure Global Payout Services",
    description:
      "Scale your business with Finsol payout solutions. Offering instant payouts via API, use a global payout platform & access trusted payout services for businesses of all sizes.",
    images: [
      "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png",
    ],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// ---------- JSON-LD from the SERVER ----------
function JsonLd() {
  const PAGE_URL = "https://www.finsol.group/solutions/payouts";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
    "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png";
  const LOGO_URL = "https://www.finsol.group/icons/favicon11.png";
  const BRAND_EMAIL = "info@finsol.group";

  const ld = [
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Finsol",
      url: `${HOME_URL}/`,
      potentialAction: {
        "@type": "SearchAction",
        target: `${HOME_URL}/search?searchQuery={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Payout Platform and How to Choose One?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A payout platform helps businesses send money to vendors or users via UPI, bank, or wallets. Finsol offers fast payouts, global reach, secure API, and multi-currency support — all in one platform.",
          },
        },
        {
          "@type": "Question",
          name: "Are Global Payouts Supported by Most Payout Providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, many leading providers offer global payout capabilities, but the experience can vary. Finsol makes international payouts seamless with built-in currency conversion, full tax compliance, and real-time tracking — perfect for SaaS businesses, affiliate networks, or platforms working with global teams and users.",
          },
        },
        {
          "@type": "Question",
          name: "Does a Payout Mean You Get Money?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, a payout simply means you’re receiving money, often as a payment for your services, rewards, commissions, or refunds. With Finsol, recipients can receive their funds quickly and securely.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Manage Vendor Payouts Automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Absolutely! Finsol enables smart automation for vendor payouts, so you can set rules based on invoice approvals, project milestones, or delivery status. Everything is tracked in real-time, so you stay in control while saving time on manual processes.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name:
        "Finsol Payout API & Payment Gateway | Secure Global Payout Services",
      description:
        "Scale your business with Finsol payout solutions. Offering instant payouts via API, use a global payout platform & access trusted payout services for businesses of all sizes.",
      url: PAGE_URL,
      mainEntity: {
        "@type": "ProfessionalService",
        name: "Finsol",
        description:
          "Scale your business with Finsol payout solutions. Offering instant payouts via API, use a global payout platform & access trusted payout services for businesses of all sizes.",
        telephone: "+971-522391996",
        email: BRAND_EMAIL,
        areaServed: ["AE"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "311, Emaar Business Park, Building 4, Dubai",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        brand: [
          { "@type": "Brand", name: "Finsol", logo: LOGO_URL, url: PAGE_URL },
        ],
      },
      image: OG_IMAGE_URL,
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

export default function PayOutsPage() {
  const payoutsFaq = [
    {
      question: "What is a Payout Platform and How to Choose One?",
      answer:
        "A payout platform helps businesses send money to vendors or users via UPI, bank, or wallets. Finsol offers fast payouts, global reach, secure API, and multi-currency support — all in one platform.",
    },
    {
      question: "Are Global Payouts Supported by Most Payout Providers?",
      answer:
        "Yes, many leading providers offer global payout capabilities, but the experience can vary. Finsol makes international payouts seamless with built-in currency conversion, full tax compliance, and real-time tracking — perfect for SaaS businesses, affiliate networks, or platforms working with global teams and users.",
    },
    {
      question: "Does a Payout Mean You Get Money?",
      answer:
        "Yes, a payout simply means you’re receiving money, often as a payment for your services, rewards, commissions, or refunds. With Finsol, recipients can receive their funds quickly and securely.",
    },
    {
      question: "Can I Manage Vendor Payouts Automatically?",
      answer:
        "Absolutely! Finsol enables smart automation for vendor payouts, so you can set rules based on invoice approvals, project milestones, or delivery status. Everything is tracked in real-time, so you stay in control while saving time on manual processes.",
    },
  ];

  return (
    <>
      <JsonLd />
      <PayoutsClient />
      <ChatAssistant />
      <Industries />
      <SubscribeSection />
      <FAQSection items={payoutsFaq} />
      <Footer />
    </>
  );
}
