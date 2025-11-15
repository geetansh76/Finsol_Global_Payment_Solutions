// app/coverage/europe/finland/finland-client.js (client component)
"use client";

import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import IndustriesSection from "@/components/Home/Industries/IndustriesSection";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import CoverageSection from "@/components/Coverage/coverage-section";
import Footer from "@/components/Home/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import styles from "../../SharedCountries.module.css";
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

/* (Optional) small variants so it matches other pages */
const containerStagger = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};
const leftColumn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};
const rightColumn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
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

export default function FinlandClient() {
  const headerScopeRef = useRef(null);
  const [activeSolution, setActiveSolution] = useState("PayIns");

  useEffect(() => {
    const scope = headerScopeRef.current; // ✅ fixed ref name
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const title = scope.querySelector(`.${styles.heroTitle}`);
    if (title) {
      const lines = title.querySelectorAll(":scope > *");
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
  }, []);

  const handleSolutionChange = (solution) => setActiveSolution(solution);

  return (
    <>
      {/* Header */}
      <div ref={headerScopeRef} >
        <Header
          title={
            <h1 className={styles.heroTitle}>
              <span className={`${styles.line} ${styles.blueLine}`}>
                Enabling Fast, Secure and
              </span>
              <span className={`${styles.line} ${styles.whiteLine}`}>
                Scalable Payments for
              </span>
              <span className={`${styles.line} ${styles.blueLine}`}>
                The United Kingdom
              </span>
            </h1>
          }
          description="We help UK businesses move money smarter with seamless, end-to-end payment technology. Secure, scalable, and ready to support both local and global operations"
          showHero={true}
          heroVariant="industries"
          className={styles.industriesHero}
          titleClass={styles.industriesTitle}
          descriptionClass={styles.industriesDescription}
          hideButton={true}
        />
      </div>

      {/* Solutions Section */}
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
            <h2 className={styles.title}>Solutions</h2>
            <ul className={styles.navList}>
              <li
                className={activeSolution === "PayIns" ? styles.active : ""}
                onClick={() => handleSolutionChange("PayIns")}
              >
                PayIns
              </li>
              <li
                className={activeSolution === "PayOuts" ? styles.active : ""}
                onClick={() => handleSolutionChange("PayOuts")}
              >
                PayOuts
              </li>
              <li
                className={
                  activeSolution === "WhiteLabeling" ? styles.active : ""
                }
                onClick={() => handleSolutionChange("WhiteLabeling")}
              >
                White Labeling
              </li>
            </ul>
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

            {/* Solution Content (unchanged) */}
            {activeSolution === "PayIns" && (
              <>
                <p className={styles.paragraph}>
                  Finsol provides advanced payin solutions in United Kingdom,
                  helping businesses accept payments online through secure,
                  fast, and fully compliant systems. As a payin service provider
                  in United Kingdom, we support a wide variety of local payment
                  methods — including credit cards, bank transfers, UPI, and
                  mobile wallets. These localized options help businesses
                  receive payments online from both local consumers and
                  international customers, streamlining the checkout experience
                  and boosting conversions.
                </p>
                <p className={styles.paragraph}>
                  Our online payment services are tailored to meet the needs of
                  businesses operating in digital economy. We offer real-time
                  processing, multi-currency support, customizable checkout
                  solutions, and seamless integration with e-commerce platforms,
                  SaaS applications, and mobile apps. Whether you’re a startup
                  expanding into United Kingdom or an established brand
                  optimizing local payments, Finsol delivers reliable, scalable,
                  and fully localized online payment solutions in United
                  Kingdom.
                </p>
              </>
            )}

            {activeSolution === "PayOuts" && (
              <>
                <p className={styles.paragraph}>
                  Finsol provides advanced payout solutions in United Kingdom,
                  enabling businesses to disburse payments quickly, securely and
                  in full compliance with local regulations. As a trusted payout
                  service provider in United Kingdom, we support a wide range of
                  payout methods - including bank transfers, prepaid cards,
                  mobile wallets and international remittances. These flexible
                  options help businesses streamline vendor settlements,
                  employee salaries, partner commissions and customer refunds
                  with ease.
                </p>
                <p className={styles.paragraph}>
                  Our payout services are designed for the digital economy,
                  offering real-time processing, multi-currency support, bulk
                  payouts and customizable workflows. With seamless integration
                  into e-commerce platforms, fintech applications and enterprise
                  systems, businesses can automate disbursements and ensure
                  faster, error-free transactions. Whether you are a startup
                  scaling operations in United Kingdom or an enterprise managing
                  global partners, Finsol delivers reliable, scalable and fully
                  localized payout solutions.
                </p>
              </>
            )}

            {activeSolution === "WhiteLabeling" && (
              <>
                <p className={styles.paragraph}>
                  Finsol offers fully customizable white label payment solutions
                  in United Kingdom, allowing businesses to launch their own
                  branded payment platform with complete control over the user
                  experience, features, and pricing. As a leading white label
                  provider, we deliver the technology, infrastructure, and
                  compliance support you need to enter the payments market with
                  speed and confidence.
                </p>
                <p className={styles.paragraph}>
                  Our white-label payment gateway supports local payment
                  methods, multi-currency processing, and real-time transaction
                  management. Whether you are a fintech startup or an enterprise
                  expanding into United Kingdom, Finsol enables you to offer
                  secure and scalable online payment services under your brand.
                  With full API access, localization options, and regulatory
                  compliance built in, we make it easy to go to market quickly
                  with a robust payment solution tailored for United Kingdom.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Payment Methods Section */}
      <motion.section
        className={`${styles.paymentSection} ${styles.withVideoBg}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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

        <div className={styles.paymentContainer}>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>Payment Methods</h2>
            <Link
              href="/payment-method/payment-method-all"
              className={styles.learnLink}
            >
              <span>Learn more ↗</span>
            </Link>
          </div>

          {/* Cards */}
          <div className={`${styles.category} ${styles.withVideoBg}`}>
            <div className={styles.content}>
              <h3 className={styles.categoryTitle}>Cards (Credit & Debit)</h3>
              <div className={styles.iconsRow}>
                <Image
                  src="/icons/countries-icon/europe/united-kingdom/visa.png"
                  alt="Visa"
                  width={120}
                  height={60}
                />
                <Image
                  src="/icons/countries-icon/europe/united-kingdom/master-card.png"
                  alt="Mastercard"
                  width={120}
                  height={60}
                />
                <Image
                  src="/icons/countries-icon/europe/united-kingdom/american-express.png"
                  alt="American Express"
                  width={120}
                  height={60}
                />
              </div>
            </div>
          </div>

          {/* QR Payments */}
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>QR Payments</h3>
            <div className={styles.iconsRow}>
              <Image
                src="/icons/countries-icon/europe/united-kingdom/apple-pay.png"
                alt="apple pay"
                width={120}
                height={60}
              />
              <Image
                src="/icons/countries-icon/europe/united-kingdom/g-pay.png"
                alt="google pay"
                width={120}
                height={60}
              />
            </div>
          </div>

          {/* Bank Transfer */}
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Bank Transfer</h3>
            <div className={styles.iconsRow}>
              <Image
                src="/icons/countries-icon/europe/united-kingdom/faster-payments.png"
                alt="Faster Payments"
                width={120}
                height={60}
              />
            </div>
          </div>

          {/* Digital Wallets */}
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Digital Wallets</h3>
            <div className={styles.iconsRow}>
              <Image
                src="/icons/countries-icon/europe/united-kingdom/pay-pal.png"
                alt="PayPal"
                width={120}
                height={60}
              />
              <Image
                src="/icons/countries-icon/europe/united-kingdom/apple-pay.png"
                alt="Apple Pay"
                width={120}
                height={60}
              />
              <Image
                src="/icons/countries-icon/europe/united-kingdom/g-pay.png"
                alt="Google Pay"
                width={120}
                height={60}
              />
            </div>
          </div>

          {/* Internet Banking */}
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Internet Banking</h3>
            <div className={styles.iconsRow}>
              <Image
                src="/icons/countries-icon/europe/united-kingdom/faster-payments.png"
                alt="Faster Payments"
                width={120}
                height={60}
              />
            </div>
          </div>
        </div>
      </motion.section>

      <IndustriesSection />
      <SubscribeSection />
      <ChatAssistant />
      <CoverageSection />
      <Footer />
    </>
  );
}
