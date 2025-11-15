"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import styles from "../SharedPage.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import OpenServices from "@/components/Home/open-services/OpenServices";
import CoverageSection from "@/components/Coverage/coverage-section";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
import Footer from "@/components/Home/footer/Footer";
/* 🎬 Framer Motion */
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

const containerStagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40, scale: 1.06 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18, duration: 0.8 },
  },
  hover: { scale: 1.02, rotate: 0, transition: { duration: 0.25 } },
};

const textRise = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  }),
};

export default function LatinAmericaCoveragePage() {
  /* ===== Replace these with your real URLs/paths =====
     (SEO meta is now controlled by page.js metadata) */
  const PAGE_URL = "https://www.finsol.group/coverage/latin-america";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
    "https://www.yoursite.com/assets/og/finsol-latin-america.jpg";

  const META_TITLE =
    "Finsol Latin America Coverage | Trusted Global Payment Gateway & Business Growth";
  const META_DESC =
    "Explore Finsol’s Latin America-focused coverage offering secure payment gateway solutions in Latin America. Protect finances, ensure smooth global transactions, and expand your business worldwide.";

  /* 🔸 Animate the <Header /> title without editing the component */
  const headerScopeRef = useRef(null);

  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const titleEl =
      scope.querySelector("h1") ||
      scope.querySelector('[data-title]') ||
      scope.querySelector(".title, .heroTitle");

    if (titleEl) {
      animate(
        titleEl,
        {
          opacity: [0, 1],
          y: [24, 0],
          rotateX: [-8, 0],
          filter: ["blur(6px)", "blur(0px)"],
        },
        { duration: 0.9, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    }
  }, []);

  return (
    <>
      {/* ===================== JSON-LD STRUCTURED DATA ===================== */}
      <Script
        id="ld-website-latin-america"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            url: PAGE_URL,
          }),
        }}
      />

      {/* ===== Header (unchanged UI) ===== */}
      <div ref={headerScopeRef} >
        <Header
          title="Latin America"
           titleClass={styles.Title}
          description="Enabling Latin America with fast, secure, and compliant payment solutions that empower businesses to expand, build trust and deliver seamless customer experiences."
          showHero={true}
          minimal={false}
          hideButton
          heroVariant="coverage"
        />
      </div>

      <ChatAssistant />

      <main className={styles.europePage}>
        {/* Section 1 - Text Left, Image Right */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
        >
          <motion.div className={styles.textBlock} variants={leftVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Unlock Growth Across Latin America with Seamless Payments
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Latin America is one of the worlds fastest-growing digital
              economies — mobile-driven, diverse, and filled with opportunity.
              Yet expanding into the region requires localized infrastructure
              and payment expertise. At Finsol, we help businesses navigate this
              complexity with secure, scalable, and compliant online payment
              solutions. Whether you are looking to accept payments online, launch
              in a new market, or simplify cross-border collections, our unified
              platform is built to support your growth across Latin America.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/latin-america-images/latin-america-map.png"
              alt="Latin America Map"
              width={500}
              height={350}
              priority
            />
          </motion.div>
        </motion.section>

        {/* Section 2 - Image Left, Text Right */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
        >
          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/latin-america-images/latin-america-payment.png"
              alt="LATAM Payments"
              width={500}
              height={350}
              priority
            />
          </motion.div>
          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              PayIn, Payout & White-Label Gateway for Latin America
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Finsol provides complete PayIn and Payout services, supporting
              local cards, bank transfers, mobile wallets, and even cash-based
              payment methods — all with real-time processing and multi-currency
              handling. For companies seeking full control over branding and
              experience, our white-label payment gateway solution enables you to
              launch a fully branded platform with customizable pricing,
              onboarding, and settlement flows. Whether you’re collecting revenue
              or issuing disbursements, Finsol ensures seamless, compliant
              transactions.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 3 - Text Left, Image Right */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
        >
          <motion.div className={styles.textBlock} variants={leftVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Serving Key Markets & Industries in the Region
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              We support payment operations across major Latin American markets,
              including Brazil, Mexico, Colombia, Argentina, and Peru. Our
              infrastructure is optimized for local regulations, regional
              currencies, and country-specific payment preferences. We work
              across high-growth sectors such as e-commerce, fintech, gaming,
              online trading, digital platforms, healthcare, and dating services,
              providing payment gateway solutions that adapt to each market’s
              needs.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/latin-america-images/latin-america-market.png"
              alt="LATAM Industries"
              width={500}
              height={350}
              priority
            />
          </motion.div>
        </motion.section>

        {/* Section 4 - Image Left, Text Right */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
        >
          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/latin-america-images/latin-america-handshake.png"
              alt="LATAM Partnership"
              width={500}
              height={350}
              priority
            />
          </motion.div>
          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Your Trusted Payment Gateway Provider in Latin America
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Finsol goes beyond basic integrations. We deliver robust online
              merchant services, real-time payouts, and scalable white-label
              payment platforms for businesses operating across Latin America.
              Whether you are launching in a single country or building a regional
              footprint, Finsol is your reliable payment gateway provider built
              for long-term growth, performance, and simplicity.
            </motion.p>
          </motion.div>
        </motion.section>
      </main>

      <OpenServices />
      <PaymentMethodSection />
      <CoverageSection currentContinent="Latin America" />
      <Footer />
    </>
  );
}
