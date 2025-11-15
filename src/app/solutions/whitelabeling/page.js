// app/solutions/whitelabeling/page.jsx
import Industries from "@/components/Home/Industries/IndustriesSection";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import FAQSection from "@/components/Home/FAQ/FAQSection";
import Footer from "@/components/Home/footer/Footer";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import WhiteLabelingClient from "@/components/Solutions/whitelabeling/WhiteLabelingClient";

// ---------- SSR METADATA ----------
export const metadata = {
  title: "Best White Label Payment Service Provider | Payment Software & Gateway Solutions",
  description:
    "Choose the best white label payment gateway platform price with secure solutions. Access white label money transfer service & a trusted payment platform for global transactions.",
  keywords: [
    "white label payment gateway",
    "white label payment platform",
    "white label payment solutions",
    "white label payment gateway solution",
    "white label payment gateway price",
    "best white label payment gateway",
    "white label payment gateway provider",
    "white label merchant services",
    "white label payment gateway software",
    "white label money transfer service",
    "white label money transfer platform",
    "white label gateway solutions",
  ],
  alternates: { canonical: "https://www.finsol.group/solutions/whitelabeling" },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Best White Label Payment Service Provider | Payment Software & Gateway Solutions",
    description:
      "Choose the best white label payment gateway platform price with secure solutions. Access white label money transfer service & a trusted payment platform for global transactions.",
    url: "https://www.finsol.group/solutions/whitelabeling",
    images: [
      {
        url: "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png",
        width: 1200,
        height: 630,
        alt: "Finsol White Labeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Best White Label Payment Service Provider | Payment Software & Gateway Solutions",
    description:
      "Choose the best white label payment gateway platform price with secure solutions. Access white label money transfer service & a trusted payment platform for global transactions.",
    images: [
      "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png",
    ],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// ---------- JSON-LD from the SERVER ----------
function JsonLd() {
  const PAGE_URL = "https://www.finsol.group/solutions/whitelabeling";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
    "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png";
  const LOGO_URL = "https://www.finsol.group/icons/favicon11.png";
  const BRAND_EMAIL = "info@finsol.group";

  const ld = [
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "finsol",
      url: `${HOME_URL}/`,
      potentialAction: {
        "@type": "SearchAction",
        target: `${HOME_URL}/search?searchQuery={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Best White Label Payment Service Provider | Payment Software & Gateway Solutions",
      description:
        "Choose the best white label payment gateway platform price with secure solutions. Access white label money transfer service & a trusted payment platform for global transactions.",
      url: PAGE_URL,
      mainEntity: {
        "@type": "ProfessionalService",
        name: "Finsol",
        description:
          "Choose the best white label payment gateway platform price with secure solutions. Access white label money transfer service & a trusted payment platform for global transactions.",
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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why Choose a White Label Payment Gateway?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In 2025, staying ahead means offering fast, secure digital payments under your brand. With Finsol’s white label gateway, you launch faster, go global, and skip the heavy lifting of building from scratch.",
          },
        },
        {
          "@type": "Question",
          name: "Who Offers the Best White Label Payment Gateway Solution?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best providers offer scale, uptime, global support, and security, but your needs matter most. Finsol tailors its white label gateway to your industry, region, and business goals, making it a perfect fit.",
          },
        },
        {
          "@type": "Question",
          name: "What Are the Benefits of Using a White Label Payment Gateway?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "White label gateways cut development time and let you focus on growing your brand. With Finsol, you get ready-to-go infrastructure, compliance built in, and complete control over your customer experience.",
          },
        },
        {
          "@type": "Question",
          name: "What Is a White Label Digital Wallet Solution?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It’s your branded e-wallet for sending, receiving, or storing money, powered by someone else’s tech. Finsol’s white label wallet supports QR payments, loyalty features, and bank transfers — all under your name.",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

export default function WhiteLabelingPage() {
  const whitelabelingFaq = [
    {
      question: "Why Choose a White Label Payment Gateway?",
      answer:
        "In 2025, staying ahead means offering fast, secure digital payments under your brand. With Finsol’s white label gateway, you launch faster, go global, and skip the heavy lifting of building from scratch.",
    },
    {
      question: "Who Offers the Best White Label Payment Gateway Solution?",
      answer:
        "The best providers offer scale, uptime, global support, and security, but your needs matter most. Finsol tailors its white label gateway to your industry, region, and business goals, making it a perfect fit.",
    },
    {
      question: "What Are the Benefits of Using a White Label Payment Gateway?",
      answer:
        "White label gateways cut development time and let you focus on growing your brand. With Finsol, you get ready-to-go infrastructure, compliance built in, and complete control over your customer experience.",
    },
    {
      question: "What Is a White Label Digital Wallet Solution?",
      answer:
        "It’s your branded e-wallet for sending, receiving, or storing money, powered by someone else’s tech. Finsol’s white label wallet supports QR payments, loyalty features, and bank transfers — all under your name.",
    },
  ];

  return (
    <>
      <JsonLd />
      <WhiteLabelingClient />
      <ChatAssistant />
      <Industries />
      <SubscribeSection />
      <FAQSection items={whitelabelingFaq} />
      <Footer />
    </>
  );
}
