// app/coverage/europe/hungary/hungary-client.js
"use client";

import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import IndustriesSection from "@/components/Home/Industries/IndustriesSection";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import CoverageSection from "@/components/Coverage/coverage-section";
import Footer from "@/components/Home/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import styles from "../../SharedCountries.module.css";

/* =========================
   JSON-LD / SEO constants (SSR meta lives in page.js)
   ========================= */
const PAGE_URL = "https://www.finsol.group/coverage/europe/hungary";
const HOME_URL = "https://www.finsol.group";

/* =========================
   Framer Motion variants
   ========================= */
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
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  }),
};
const navItem = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 180,
      damping: 18,
    },
  }),
  whileHover: { y: -2, scale: 1.04, transition: { duration: 0.16 } },
  whileTap: { scale: 0.97 },
};

export default function HungaryClient() {
  const headerScopeRef = useRef(null);
  const [activeSolution, setActiveSolution] = useState("PayIns");

  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // animate multi-line hero title if present
    const heroTitle = scope.querySelector(`.${styles.heroTitle}`);
    if (heroTitle) {
      const lines = heroTitle.querySelectorAll(":scope > *");
      lines.forEach((el, i) => {
        animate(
          el,
          { opacity: [0, 1], y: [18, 0], filter: ["blur(6px)", "blur(0px)"] },
          {
            delay: i * 0.07,
            duration: 0.6,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );
      });
    }

    // description fade
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
      {/* ===================== JSON-LD (SearchAction) ===================== */}
      <Script
        id="ld-website-hungary"
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

      {/* ===================== PAGE (content unchanged) ===================== */}
      <div ref={headerScopeRef} >
        <Header
          title={
            <h1 className={styles.heroTitle}>
              <span className={`${styles.line} ${styles.blueLine}`}>
                Driving Financial Simplicity
              </span>
              <span className={`${styles.line} ${styles.whiteLine}`}>
                Across Hungary with Smart
              </span>
              <span className={`${styles.line} ${styles.blueLine}`}>
                Payment Solutions
              </span>
            </h1>
          }
          description="Delivering fast, flexible payment systems tailored to Hungary’s evolving business needs — enabling smooth, cost-effective financial operations."
          showHero
          heroVariant="industries"
          className={styles.industriesHero}
          titleClass={styles.industriesTitle}
          descriptionClass={styles.industriesDescription}
          hideButton
        />
      </div>

      {/* Solutions (interactive tabs; standardized copy with country = Hungary) */}
      <motion.section
        className={styles.solutionsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerStagger}
      >
        <motion.div className={styles.container} variants={containerStagger}>
          {/* Left column */}
          <motion.div className={styles.leftColumn} variants={leftColumn}>
            <motion.h2 className={styles.title} variants={rise} custom={0}>
              Solutions
            </motion.h2>
            <motion.ul
              className={styles.navList}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
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
                className={
                  activeSolution === "WhiteLabeling" ? styles.active : ""
                }
                onClick={() => setActiveSolution("WhiteLabeling")}
                variants={navItem}
                custom={2}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                White Labeling
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Right column */}
          <motion.div className={styles.rightColumn} variants={rightColumn}>
            <motion.div className={styles.learnMore} variants={rise} custom={0}>
              <Link href="/solutions" className={styles.learnLink}>
                <motion.span
                  variants={rise}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                    Finsol provides advanced payin solutions in Hungary, helping
                    businesses accept payments online through secure, fast, and
                    fully compliant systems. As a payin service provider in
                    Hungary, we support a wide variety of local payment methods
                    — including credit cards, bank transfers, UPI, and mobile
                    wallets. These localized options help businesses receive
                    payments online from both local consumers and international
                    customers, streamlining the checkout experience and boosting
                    conversions.
                  </p>

                  <p className={styles.paragraph}>
                    Our online payment services are tailored to meet the needs
                    of businesses operating in digital economy. We offer
                    real-time processing, multi-currency support, customizable
                    checkout solutions, and seamless integration with e-commerce
                    platforms, SaaS applications, and mobile apps. Whether you
                    are a startup expanding into Hungary or an established brand
                    optimizing local payments, Finsol delivers reliable,
                    scalable, and fully localized online payment solutions in
                    Hungary.
                  </p>
                </>
              )}

              {activeSolution === "PayOuts" && (
                <>
                  <p className={styles.paragraph}>
                    Finsol provides advanced payout solutions in Hungary,
                    enabling businesses to disburse payments quickly, securely
                    and in full compliance with local regulations. As a trusted
                    payout service provider in Hungary, we support a wide range
                    of payout methods - including bank transfers, prepaid cards,
                    mobile wallets and international remittances. These flexible
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
                    Whether you are a startup scaling operations in Hungary or
                    an enterprise managing global partners, Finsol delivers
                    reliable, scalable and fully localized payout solutions.
                  </p>
                </>
              )}

              {activeSolution === "WhiteLabeling" && (
                <>
                  <p className={styles.paragraph}>
                    Finsol offers fully customizable white label payment
                    solutions in Hungary, allowing businesses to launch their
                    own branded payment platform with complete control over the
                    user experience, features, and pricing. As a leading white
                    label provider, we deliver the technology, infrastructure,
                    and compliance support you need to enter the payments market
                    with speed and confidence.
                  </p>
                  <p className={styles.paragraph}>
                    Our white-label payment gateway supports local payment
                    methods, multi-currency processing, and real-time
                    transaction management. Whether you are a fintech startup or
                    an enterprise expanding into Hungary, Finsol enables you to
                    offer secure and scalable online payment services under your
                    brand. With full API access, localization options, and
                    regulatory compliance built in, we make it easy to go to
                    market quickly with a robust payment solution tailored for
                    Hungary.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Payment Methods with background video */}
      <motion.section
        className={`${styles.paymentSection} ${styles.withVideoBg}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerStagger}
      >
        {/* Background video */}
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

        <motion.div
          className={styles.paymentContainer}
          variants={containerStagger}
        >
          <motion.div className={styles.headerRow} variants={rise} custom={0}>
            <motion.h2 className={styles.heading} variants={rise} custom={0}>
              Payment Methods
            </motion.h2>
            <Link
              href="/payment-method/payment-method-all"
              className={styles.learnLink}
            >
              <motion.span
                variants={rise}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more ↗
              </motion.span>
            </Link>
          </motion.div>

          {/* Cards */}
          <motion.div
            className={`${styles.category} ${styles.withVideoBg}`}
            variants={rise}
            custom={1}
          >
            <div className={styles.content}>
              <h3 className={styles.categoryTitle}>Cards (Credit & Debit)</h3>
              <motion.div
                className={styles.iconsRow}
                variants={rise}
                custom={2}
              >
                <Image
                  src="/icons/countries-icon/europe/hungary/visa.png"
                  alt="Visa"
                  width={120}
                  height={60}
                />
                <Image
                  src="/icons/countries-icon/europe/hungary/master-card.png"
                  alt="Mastercard"
                  width={120}
                  height={60}
                />
                <Image
                  src="/icons/countries-icon/europe/hungary/barion.png"
                  alt="Barion"
                  width={120}
                  height={60}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* QR Payments */}
          <motion.div className={styles.category} variants={rise} custom={3}>
            <h3 className={styles.categoryTitle}>QR Payments</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={4}>
              <Image
                src="/icons/countries-icon/europe/hungary/barion.png"
                alt="Barion"
                width={120}
                height={60}
              />
            </motion.div>
          </motion.div>

          {/* Bank Transfers */}
          <motion.div className={styles.category} variants={rise} custom={5}>
            <h3 className={styles.categoryTitle}>Bank Transfers</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={6}>
              <Image
                src="/icons/countries-icon/europe/hungary/sepa.png"
                alt="SEPA"
                width={120}
                height={60}
              />
            </motion.div>
          </motion.div>

          {/* Digital Wallets */}
          <motion.div className={styles.category} variants={rise} custom={7}>
            <h3 className={styles.categoryTitle}>Digital Wallets</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={8}>
              <Image
                src="/icons/countries-icon/europe/hungary/barion.png"
                alt="Barion"
                width={120}
                height={60}
              />
              <Image
                src="/icons/countries-icon/europe/hungary/simple-way.png"
                alt="SimplePay"
                width={120}
                height={60}
              />
            </motion.div>
          </motion.div>

          {/* Internet Banking */}
          <motion.div className={styles.category} variants={rise} custom={9}>
            <h3 className={styles.categoryTitle}>Internet Banking</h3>
            <motion.div className={styles.iconsRow} variants={rise} custom={10}>
              <Image
                src="/icons/countries-icon/europe/hungary/barion.png"
                alt="Barion"
                width={120}
                height={60}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <IndustriesSection />
      <SubscribeSection />
      <ChatAssistant />
      <CoverageSection />
      <Footer />
    </>
  );
}
