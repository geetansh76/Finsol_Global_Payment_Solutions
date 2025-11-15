// app/solutions/payins/page.jsx
import Industries from "@/components/Home/Industries/IndustriesSection";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import FAQSection from "@/components/Home/FAQ/FAQSection";
import Footer from "@/components/Home/footer/Footer";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import PayinsClient from "@/components/Solutions/payins/PayinsClient";

// ---------- CONSTANTS ----------
const HOME_URL = "https://www.finsol.group";
const PAGE_URL = `${HOME_URL}/solutions/payins`;
const OG_IMAGE_URL = `${HOME_URL}/icons/industries-icons/digital-and-subscription/elearning.png`; // clean path (no spaces/&)
const LOGO_URL = `${HOME_URL}/icons/favicon11.png`; // update if needed
const BRAND_EMAIL = "info@finsol.group";

// ---------- SSR METADATA ----------
export const metadata = {
  metadataBase: new URL(HOME_URL),
  title: "Payin Solution & Service Provider | Accept, Collect & Receive Payments Online",
  description:
    "Finsol is a trusted Payin Service Provider to collect online payments, accept recurring billing & take international payments, helping businesses grow securely.",
  keywords: [
    "payin solution",
    "payin service provider",
    "accept payments online",
    "collecting online payments",
    "accepting payments online small business",
    "pay and collect online",
    "accept international payments online",
    "take recurring payments online",
    "receive payments online",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Payin Solution & Service Provider | Accept, Collect & Receive Payments Online",
    description:
      "Finsol is a trusted Payin Service Provider to collect online payments, accept recurring billing & take international payments, helping businesses grow securely.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Finsol PayIns" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Payin Solution & Service Provider | Accept, Collect & Receive Payments Online",
    description:
      "Finsol is a trusted Payin Service Provider to collect online payments, accept recurring billing & take international payments, helping businesses grow securely.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  // Extra meta you asked to include
  other: {
    copyright: "Finsol",
    bingbot: "index, follow",
    "revisit-after": "daily",
    "allow-search": "yes",
  },
};

// ---------- JSON-LD from the SERVER ----------
function JsonLd() {
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
          name: "What is a PayIn solution in online payments?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A PayIn solution helps businesses collect payments online via cards, UPI, net banking, or wallets — all in one place. With Finsol, you get a unified PayIn platform that simplifies collections and supports seamless checkout experiences.",
          },
        },
        {
          "@type": "Question",
          name: "How do I accept international payments online?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "To go global, you need a platform that supports multi-currency and cross-border payments. Finsol lets you accept international cards, PayPal, and bank transfers, making it easy to get paid from anywhere.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between PayIn and PayOut?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "PayIn is all about collecting payments from your customers, while PayOut means sending money to vendors or users. Finsol gives you both incoming and outgoing payments, fully managed in one secure system.",
          },
        },
        {
          "@type": "Question",
          name: "Is it possible to pay and collect online using one platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, and that’s the power of modern payment systems like Finsol. You can collect payments from customers and pay vendors or teams — all from one smart dashboard.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Payin Solution & Service Provider | Accept, Collect & Receive Payments Online",
      description:
        "Finsol is a trusted Payin Service Provider to collect online payments, accept recurring billing & take international payments, helping businesses grow securely.",
      url: PAGE_URL,
      mainEntity: {
        "@type": "ProfessionalService",
        name: "Finsol",
        description:
          "Finsol is a trusted Payin Service Provider to collect online payments, accept recurring billing & take international payments, helping businesses grow securely.",
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
          {
            "@type": "Brand",
            name: "Finsol",
            logo: LOGO_URL,
            url: PAGE_URL,
          },
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

export default function PayInsPage() {
  const payinsFaq = [
    {
      question: "What is a PayIn solution in online payments?",
      answer:
        "A PayIn solution helps businesses collect payments online via cards, UPI, net banking, or wallets — all in one place. With Finsol, you get a unified PayIn platform that simplifies collections and supports seamless checkout experiences.",
    },
    {
      question: "How do I accept international payments online?",
      answer:
        "To go global, you need a platform that supports multi-currency and cross-border payments. Finsol lets you accept international cards, PayPal, and bank transfers, making it easy to get paid from anywhere.",
    },
    {
      question: "What is the difference between PayIn and PayOut?",
      answer:
        "PayIn is all about collecting payments from your customers, while PayOut means sending money to vendors or users. Finsol gives you both incoming and outgoing payments, fully managed in one secure system.",
    },
    {
      question: "Is it possible to pay and collect online using one platform?",
      answer:
        "Yes, and that’s the power of modern payment systems like Finsol. You can collect payments from customers and pay vendors or teams — all from one smart dashboard.",
    },
  ];

  return (
    <>
      <JsonLd />
      <PayinsClient />
      <ChatAssistant />
      <Industries />
      <SubscribeSection />
      <FAQSection items={payinsFaq} />
      <Footer />
    </>
  );
}
