// app/solutions/page.jsx
import Header from "@/components/Home/Header/Header";
import headerStyles from "@/components/Home/Header/Header.module.css";
import solutionStyles from "./solutions.module.css";
import SolutionsSection from "@/components/Solutions/SolutionsSection";
import Footer from "@/components/Home/footer/Footer";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";

// ---------- SSR METADATA ----------
export const metadata = {
  title: "Trusted Payin, Payouts & White Labelling Payment Gateway Solutions Provider",
  description:
    "Simplify payments with secure payin, payouts & white labelling gateway solutions. Leading online payment gateway service providers for business & international needs.",
  keywords: [
    "payment gateway for business",
    "payment gateway solution",
    "online payment gateway service providers",
    "white label payment gateway",
    "white label payment gateway solution",
    "payin service provider",
    "payin solution",
    "payouts solutions",
    "payout service provider",
  ],
  alternates: { canonical: "https://www.finsol.group/solutions" },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Trusted Payin, Payouts & White Labelling Payment Gateway Solutions Provider",
    description:
      "Simplify payments with secure payin, payouts & white labelling gateway solutions. Leading online payment gateway service providers for business & international needs.",
    url: "https://www.finsol.group/solutions",
    images: [
      {
        url: "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png",
        width: 1200,
        height: 630,
        alt: "Finsol Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Trusted Payin, Payouts & White Labelling Payment Gateway Solutions Provider",
    description:
      "Simplify payments with secure payin, payouts & white labelling gateway solutions. Leading online payment gateway service providers for business & international needs.",
    images: [
      "https://www.finsol.group/icons/industries-icons/digital%20%26%20subscription/elearning.png",
    ],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

// ---------- JSON-LD from the SERVER ----------
function JsonLd() {
  const PAGE_URL = "https://www.finsol.group/solutions";
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
      name: "Trusted Payin, Payouts & White Labelling Payment Gateway Solutions Provider",
      description:
        "Simplify payments with secure payin, payouts & white labelling gateway solutions. Leading online payment gateway service providers for business & international needs.",
      url: PAGE_URL,
      mainEntity: {
        "@type": "ProfessionalService",
        name: "Finsol",
        description:
          "Simplify payments with secure payin, payouts & white labelling gateway solutions. Leading online payment gateway service providers for business & international needs.",
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
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "home page", item: HOME_URL },
        { "@type": "ListItem", position: 2, name: "solution page", item: PAGE_URL },
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

export default function SolutionsPage() {
  return (
    <>
      <JsonLd />
      <Header
        title={
          <div className={solutionStyles.splitTitle}>
            <div className={headerStyles.whiteText}>Global Payment</div>
            <div className={headerStyles.whiteText}>
              Solutions for <div className={headerStyles.blueText}>Asia, Europe</div>
            </div>
            <div className={headerStyles.blueText}>& Latin America</div>
          </div>
        }
        description="Unlock seamless global transactions with a robust payment gateway. Designed to support collection, disbursement, and compliance through a single, secure infrastructure."
        showHero
        heroVariant="default"
        minimal={false}
        hideButton={true}
        titleClass={solutionStyles.titleOverride}
        descriptionClass={solutionStyles.descriptionOverride}
      />
      <SolutionsSection />
      <Footer />
      <ChatAssistant />
    </>
  );
}
