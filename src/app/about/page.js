// app/(about)/about/page.js
import Header from "@/components/Home/Header/Header";
import AboutSection from "@/components/About/AboutSection";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import Script from "next/script";
import styles from "./about.module.css";

/* ===== Constants ===== */
const HOME_URL = "https://www.finsol.group";
const PAGE_URL = `${HOME_URL}/about`;
const OG_IMAGE_URL = `${HOME_URL}/icons/industries-icons/digital-and-subscription/elearning.png`; // no spaces/&
const LOGO_URL = `${HOME_URL}/logo.png`; // replace with your actual logo path if different

/* ===== SEO METADATA ===== */
export const metadata = {
  metadataBase: new URL(HOME_URL),
  title: "About Finsol | Seamless, Secure & Scalable Global Payment Solutions",
  description:
    "At Finsol, we combine global expertise with innovation to deliver trusted payment solutions. From pay-ins to payouts, we help businesses expand securely worldwide.",
  // You can pass a string or array; keeping as array helps DX
  keywords: [
    "Global Payment Solutions",
    "Secure Payment Gateway",
    "Cross-Border Transactions",
    "Scalable Payment Infrastructure",
    "PayIn And Payout Services",
    "White Label Payment Gateway",
    "Multi-Currency Payment Processing",
    "Industry-Specific Payment Solutions",
    "Compliance-Ready Payments",
    "Digital Economy Payments",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "About Finsol | Seamless, Secure & Scalable Global Payment Solutions",
    description:
      "At Finsol, we combine global expertise with innovation to deliver trusted payment solutions. From pay-ins to payouts, we help businesses expand securely worldwide.",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Finsol About Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "About Finsol | Seamless, Secure & Scalable Global Payment Solutions",
    description:
      "At Finsol, we combine global expertise with innovation to deliver trusted payment solutions. From pay-ins to payouts, we help businesses expand securely worldwide.",
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Extra meta you listed that aren't first-class fields
  other: {
    copyright: "Finsol",
    bingbot: "index, follow",
    "revisit-after": "daily",
    "allow-search": "yes",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ===================== STRUCTURED DATA ===================== */}

      {/* Organization */}
      <Script
        id="ld-org-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Finsol Payment Service Provider",
            alternateName: "Finsol",
            url: HOME_URL, // Organization should point to homepage
            logo: LOGO_URL,
            sameAs: [
              "https://www.linkedin.com/company/finsol-group",
              "https://x.com/FinsolGroupLLC",
            ],
          }),
        }}
      />

      {/* WebSite */}
      <Script
        id="ld-website-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            url: HOME_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}/search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* AboutPage */}
      <Script
        id="ld-aboutpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: PAGE_URL,
            name: metadata.title,
            description: metadata.description,
            potentialAction: [
              {
                "@type": "ReadAction",
                target: [PAGE_URL],
              },
            ],
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: OG_IMAGE_URL,
              width: 1200,
              height: 630,
            },
          }),
        }}
      />

      {/* ===================== PAGE CONTENT ===================== */}
      <Header
        title="About Us"
        description="Driving growth by delivering seamless, secure, and compliant payment experiences that empower businesses to scale globally and enhance customer trust."
        showHero
        heroVariant="default"
        minimal={false}
        hideButton
        className={styles.aboutHeader}
        titleClass={styles.aboutTitle}
        descriptionClass={styles.aboutDescription}
      />

      <main className={styles.main}>
        <AboutSection />
      </main>

      <ChatAssistant />
      <Footer />
    </>
  );
}
