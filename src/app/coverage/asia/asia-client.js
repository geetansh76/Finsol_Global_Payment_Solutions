"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import styles from "../SharedPage.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import OpenServices from "@/components/Home/open-services/OpenServices";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
import Footer from "@/components/Home/footer/Footer";
import CoverageSection from "@/components/Coverage/coverage-section";
import { motion } from "framer-motion";
import React from "react";

import Script from "next/script";

/* ============================
   Variants (match your PayOuts vibe)
   ============================ */
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

export default function AsiaCoveragePage() {
  // Keep only what's needed for JSON-LD here
  const PAGE_URL = "https://www.finsol.group/coverage/asia";
  const HOME_URL = "https://www.finsol.group";

  return (
    <>
      {/* ===================== JSON-LD STRUCTURED DATA ===================== */}
      <Script
        id="ld-website-asia"
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

      {/* ===================== PAGE CONTENT ===================== */}
      <Header
        title="Asia"
         titleClass={styles.Title}
        description="Simplifying payments in Asia with fast, compliant, and scalable solutions that empower businesses to expand, streamline operations and deliver seamless customer experiences."
        showHero={true}
        minimal={false}
        hideButton
        heroVariant="coverage"
      />

      <main className={styles.europePage}>
        {/* ========== Section 1 - Text Left, Image Right ========== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
        >
          <motion.div className={styles.textBlock} variants={leftVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Global-Ready Online Payment Solutions for Asia
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
             Asia stands as one of the most diverse and rapidly growing digital economies. Finsol supports businesses in scaling across the region by offering secure, flexible, and scalable online payment solutions. Whether you are a small business or an enterprise, our platform simplifies the process of accepting payments online, managing payouts, and serving customers with a single integration. We localize your checkout for key markets across South, Southeast, and East Asia—supporting cards, UPI, FPS, PromptPay, GCash, GrabPay, bank transfers, and popular wallets—while handling multi-currency pricing, FX conversion, and transparent settlement flows.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/asia-images/asia-map.png"
              alt="Asia Map"
              width={500}
              height={350}
              priority
            />
          </motion.div>
        </motion.section>

        {/* ========== Section 2 - Image Left, Text Right ========== */}
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
              src="/images/coverage-images/asia-images/asia-payment.png"
              alt="Asia Payment"
              width={500}
              height={350}
              priority
            />
          </motion.div>

          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              End-to-End PayIn, Payout, and White-Label Services
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Our solution supports local and cross-border PayIn and Payout
              services with instant processing, multi-currency support, and
              built-in compliance. From regional payment methods like UPI and
              mobile wallets to local bank transfers, our platform covers every
              preferred channel, enabling businesses to collect and disburse
              funds with ease. With our white-label payment gateway solution,
              you can launch your own fully branded payments platform and retain
              complete control over pricing, user experience, and operations.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* ========== Section 3 - Text Left, Image Right ========== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerStagger}
        >
          <motion.div className={styles.textBlock} variants={leftVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Coverage Across Leading Asian Markets
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Finsol operates in key countries including Japan, Thailand,
              Vietnam, Russia, Philippines, Turkey, Singapore, and Malaysia. Our
              platform is designed to effectively manage regional currencies and
              various payment preferences, and comply with local standards,
              allowing us to operate smoothly in industries such as e-commerce,
              fintech, forex, gaming, dating, and digital platforms.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/asia-images/asia-vector.png"
              alt="Industries in Asia"
              width={500}
              height={350}
              priority
            />
          </motion.div>
        </motion.section>

        {/* ========== Section 4 - Image Left, Text Right ========== */}
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
              src="/images/coverage-images/asia-images/asia-handshake.png"
              alt="Asia Partnership"
              width={500}
              height={350}
              priority
            />
          </motion.div>

          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Your Trusted Partner for Asian Expansion
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              As a trusted payment gateway provider, we offer tools and
              technology to adapt your payment strategy for localization and to
              grow confidently. From payment integration services to full
              white-label platforms, Finsol is your complete online payments
              solution in Asia. We provide developer-friendly SDKs and a unified API with
clear documentation to speed up launches, plus sandbox environments for quick end-to-end testing.
            </motion.p>
          </motion.div>
        </motion.section>
      </main>

      <OpenServices />
      <PaymentMethodSection />
      <ChatAssistant />
      {/* ✅ Show 4 continents only (excluding Asia) */}
      <CoverageSection currentContinent="Asia" />
      <Footer />
    </>
  );
}
