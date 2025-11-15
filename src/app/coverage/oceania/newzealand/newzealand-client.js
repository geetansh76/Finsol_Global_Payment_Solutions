"use client";

import Script from "next/script";
import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import IndustriesSection from "@/components/Home/Industries/IndustriesSection";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import CoverageSection from "@/components/Coverage/coverage-section";
import styles from "../../SharedCountries.module.css";
import Image from "next/image";
import Footer from "@/components/Home/footer/Footer";
import Link from "next/link";

/* 🎬 Framer Motion */
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

/* =========================
   SEO placeholders (EDIT THESE)
   ========================= */
const PAGE_URL = "https://www.finsol.group/coverage/oceania/newzealand";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";



/* Variants (shared across your country pages) */
const containerStagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};
const leftColumn = {
  hidden: { opacity: 0, x: -100, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};
const rightColumn = {
  hidden: { opacity: 0, x: 100, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};
const rise = {
  hidden: { opacity: 0, y: 22, scale: 0.99 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, type: "spring", stiffness: 120, damping: 18 },
  }),
};
const navItem = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, type: "spring", stiffness: 180, damping: 18 },
  }),
  whileHover: { y: -2, scale: 1.04, transition: { duration: 0.16 } },
  whileTap: { scale: 0.97 },
};

export default function NewZealandClient() {
  /* Animate Header title lines + description without editing Header */
  const headerScopeRef = useRef(null);
  const [activeSolution, setActiveSolution] = useState("PayIns"); // tabs like Japan

  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Multiline title animation
    const heroTitle = scope.querySelector(`.${styles.heroTitle}`);
    if (heroTitle) {
      const lines = heroTitle.querySelectorAll(":scope > *");
      lines.forEach((el, i) => {
        animate(
          el,
          { opacity: [0, 1], y: [18, 0], filter: ["blur(6px)", "blur(0px)"] },
          { delay: i * 0.07, duration: 0.6, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
        );
      });
    }

    // Fallback (single h1 if Header renders one)
    const titleFallback =
      scope.querySelector("h1") || scope.querySelector(`.${styles.industriesTitle}`);
    if (!heroTitle && titleFallback) {
      animate(
        titleFallback,
        { opacity: [0, 1], y: [24, 0], rotateX: [-8, 0], filter: ["blur(6px)", "blur(0px)"] },
        { duration: 0.9, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    }

    // Description animation
    const descEl = scope.querySelector(`.${styles.industriesDescription}`);
    if (descEl) {
      animate(
        descEl,
        { opacity: [0, 1], y: [16, 0], filter: ["blur(6px)", "blur(0px)"] },
        { duration: 0.6, delay: 0.15, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    }
  }, []);

  return (
    <>
      {/* JSON-LD (WebSite) */}
      <Script
        id="ld-website-nz"
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

      {/* ---------------- ORIGINAL CONTENT BELOW (unchanged) ---------------- */}
      {/* Scope wrapper for header animations; content unchanged */}
      <div ref={headerScopeRef} >
        <Header
          title={
            <h1 className={styles.heroTitle}>
              <span className={`${styles.line} ${styles.blueLine}`}>
                Boosting Business
              </span>

              <span className={`${styles.line} ${styles.whiteLine}`}>
                Efficiency in New Zealand 
              </span>

              <span className={`${styles.line} ${styles.blueLine}`}>
                with Seamless Payments
              </span>
            </h1>
          }
          description="Empowering businesses across New Zealand with fast, secure payment systems that simplify financial operations and drive smarter growth."
          showHero={true}
          heroVariant="industries"
          className={styles.industriesHero}
          titleClass={styles.industriesTitle}
          descriptionClass={styles.industriesDescription}
          hideButton={true}
        />
      </div>

      {/* ==== Solutions (interactive tabs like Japan) ==== */}
      <motion.section
        className={styles.solutionsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerStagger}
      >
        <motion.div className={styles.container} variants={containerStagger}>
          {/* Left: clickable nav */}
          <motion.ul className={styles.navList}>
            <motion.h2 className={styles.title} variants={rise} custom={0}>
              Solutions
            </motion.h2>
            <motion.li
              className={activeSolution === "PayIns" ? styles.active : ""}
              onClick={() => setActiveSolution("PayIns")}
              variants={navItem}
              custom={0}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              PayIns
            </motion.li>
            <motion.li
              className={activeSolution === "PayOuts" ? styles.active : ""}
              onClick={() => setActiveSolution("PayOuts")}
              variants={navItem}
              custom={1}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              PayOuts
            </motion.li>
            <motion.li
              className={activeSolution === "WhiteLabeling" ? styles.active : ""}
              onClick={() => setActiveSolution("WhiteLabeling")}
              variants={navItem}
              custom={2}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              White Labeling
            </motion.li>
          </motion.ul>

          {/* Right: content area */}
          <motion.div className={styles.rightColumn} variants={rightColumn}>
            <motion.div className={styles.learnMore} variants={rise} custom={0}>
              {/* mirror Japan: Link + motion span */}
              <Link href="/solutions" className={styles.learnLink}>
                <motion.span variants={rise} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                  Learn more ↗
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeSolution === "PayIns" && (
                <>
                  <p className={styles.paragraph}>
                    Finsol provides advanced payin solutions in New Zealand, helping
                    businesses accept payments online through secure, fast, and
                    fully compliant systems. As a payin service provider in New Zealand, we
                    support a wide variety of local payment methods — including credit
                    cards, bank transfers, UPI, and mobile wallets. These localized
                    options help businesses receive payments online from both local
                    consumers and international customers, streamlining the checkout
                    experience and boosting conversions.
                  </p>
                  <p className={styles.paragraph}>
                    Our online payment services are tailored to meet the needs of
                    businesses operating in digital economy. We offer real-time
                    processing, multi-currency support, customizable checkout
                    solutions, and seamless integration with e-commerce platforms,
                    SaaS applications, and mobile apps. Whether you are a startup
                    expanding into New Zealand or an established brand optimizing
                    local payments, Finsol delivers reliable, scalable, and fully
                    localized online payment solutions in New Zealand.
                  </p>
                </>
              )}

              {activeSolution === "PayOuts" && (
                <>
                  <p className={styles.paragraph}>
                    Finsol provides advanced payout solutions in New Zealand, enabling
                    businesses to disburse payments quickly, securely and in
                    full compliance with local regulations. As a trusted payout
                    service provider in New Zealand, we support a wide range of payout
                    methods - including bank transfers, prepaid cards, mobile
                    wallets and international remittances. These flexible
                    options help businesses streamline vendor settlements,
                    employee salaries, partner commissions and customer refunds
                    with ease.
                  </p>
                  <p className={styles.paragraph}>
                    Our payout services are designed for the digital economy,
                    offering real-time processing, multi-currency support, bulk
                    payouts and customizable workflows. With seamless
                    integration into e-commerce platforms, fintech applications
                    and enterprise systems, businesses can automate
                    disbursements and ensure faster, error-free transactions.
                    Whether you are a startup scaling operations in New Zealand or an
                    enterprise managing global partners, Finsol delivers
                    reliable, scalable and fully localized payout solutions.
                  </p>
                </>
              )}

              {activeSolution === "WhiteLabeling" && (
                <>
                  <p className={styles.paragraph}>
                    Finsol offers fully customizable white label payment
                    solutions in New Zealand, allowing businesses to launch their own
                    branded payment platform with complete control over the user
                    experience, features, and pricing. As a leading white label
                    provider, we deliver the technology, infrastructure, and
                    compliance support you need to enter the payments market
                    with speed and confidence.
                  </p>
                  <p className={styles.paragraph}>
                    Our white-label payment gateway supports local payment
                    methods, multi-currency processing, and real-time
                    transaction management. Whether you are a fintech startup or
                    an enterprise expanding into New Zealand, Finsol enables you to
                    offer secure and scalable online payment services under your
                    brand. With full API access, localization options, and
                    regulatory compliance built in, we make it easy to go to
                    market quickly with a robust payment solution tailored for
                    New Zealand.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Payment Methods Section with background video (mirrors Japan) */}
      <motion.section
        className={`${styles.paymentSection} ${styles.withVideoBg}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerStagger}
      >
        {/* 🔹 Background video */}
        <div className={styles.videoBg} aria-hidden="true">
          <video
            className={styles.videoEl}
            src="/video/coverage/payment-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className={styles.videoOverlay} />
        </div>

        <motion.div className={styles.paymentContainer} variants={containerStagger}>
          <motion.div className={styles.headerRow} variants={rise} custom={0}>
            <motion.h2 className={styles.heading} variants={rise} custom={0}>
              Payment Methods
            </motion.h2>
            {/* mirror Japan: link to payment methods hub */}
            <Link href="/payment-method/payment-method-all" className={styles.learnLink}>
              <motion.span variants={rise} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                Learn more ↗
              </motion.span>
            </Link>
          </motion.div>

          {/* Cards */}
          <motion.div className={`${styles.category} ${styles.withVideoBg}`} variants={rise} custom={0}>
            <div className={styles.content}>
              <h3 className={styles.categoryTitle}>Cards (Credit & Debit)</h3>
              <motion.div className={styles.iconsRow} variants={rise} custom={1}>
                <Image src="/icons/countries-icon/oceania/newzealand/visa.png" alt="Visa" width={120} height={60} />
                <Image src="/icons/countries-icon/oceania/newzealand/master-card.png" alt="Mastercard" width={120} height={60} />
                <Image src="/icons/countries-icon/oceania/newzealand/poli.png" alt="Poli" width={120} height={60} />
              </motion.div>
            </div>
          </motion.div>

          {/* QR Payments */}
          <motion.div className={styles.category} variants={rise} custom={2}>
            <h3 className={styles.categoryTitle}>QR Payments</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={3}>
              <Image src="/icons/countries-icon/oceania/newzealand/poli.png" alt="Poli" width={120} height={60} />
            </motion.div>
          </motion.div>

          {/* Bank Transfers */}
          <motion.div className={styles.category} variants={rise} custom={4}>
            <h3 className={styles.categoryTitle}>Bank Transfers</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={5}>
              <Image src="/icons/countries-icon/oceania/newzealand/poli.png" alt="Poli" width={120} height={60} />
            </motion.div>
          </motion.div>

          {/* Digital Wallets */}
          <motion.div className={styles.category} variants={rise} custom={6}>
            <h3 className={styles.categoryTitle}>Digital Wallets</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={7}>
              <Image src="/icons/countries-icon/oceania/newzealand/poli.png" alt="Poli" width={120} height={60} />
              <Image src="/icons/countries-icon/oceania/newzealand/after-pay.png" alt="After-pay" width={120} height={60} />
              <Image src="/icons/countries-icon/oceania/newzealand/lay-buy.png" alt="laybuy" width={120} height={60} />
            </motion.div>
          </motion.div>

          {/* Internet Banking */}
          <motion.div className={styles.category} variants={rise} custom={8}>
            <h3 className={styles.categoryTitle}>Internet Banking</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={9}>
              <Image src="/icons/countries-icon/oceania/newzealand/poli.png" alt="Poli" width={120} height={60} />
              <Image src="/icons/countries-icon/oceania/newzealand/pay-id.png" alt="Pay Id " width={120} height={60} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <IndustriesSection />
      <SubscribeSection />
      <ChatAssistant/>
      <CoverageSection />
      <Footer />
    </>
  );
}
