"use client";

import Header from "@/components/Home/Header/Header";
import CoverageSection from "@/components/Coverage/coverage-section";
import Coverage from "@/components/Home/coverage/Coverage";
import styles from "@/components/Coverage/coverage-section.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import Script from "next/script";

export default function CoverageClient({
  HOME_URL = "https://www.finsol.group",
  PAGE_URL = "https://www.finsol.group/coverage",
}) {
  const OG_IMAGE_URL = "https://www.example.com/assets/og/finsol-coverage.jpg";

  return (
    <>
      {/* ===================== JSON-LD STRUCTURED DATA ===================== */}
      <Script
        id="ld-website-coverage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            url: PAGE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <Header
        title={
          <>
            <span className={styles.whiteText}>Expand Globally with </span>
            <span className={styles.blueText}>Trusted Payment Gateway</span>
          </>
        }
        description="Connect with customers across 40+ global markets through seamless, reliable, and localized payment coverage."
        descriptionClass={styles.coverageDescription}
        showHero
        hideButton
        heroVariant="coverage"
        minimal={false}
        className={styles.coverageHero}
        titleClass={styles.coverageTitle}
      />
      <ChatAssistant />
      <Coverage
        title="Expand your reach across global markets"
        description="Serve businesses and customers throughout Europe, Asia, and America - all from a single platform. With access to trusted local payment methods in key regions, we help you connect and streamline cross-border transactions and scale faster in new and mature economies alike"
      />
      <CoverageSection />
      <Footer />
    </>
  );
}
