// components/Solutions/SolutionsSection.jsx
"use client";

import React from "react";
import styles from "./SolutionsSection.module.css";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["600", "900"] });

/** Shared motion presets */
const fadeLeft = {
  hidden: { opacity: 0, x: -32, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const imagePopRight = {
  hidden: { opacity: 0, x: 40, scale: 1.04 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.6 },
  },
  hover: { scale: 1.03, transition: { duration: 0.25 } },
};

const imagePopLeft = {
  hidden: { opacity: 0, x: -40, scale: 1.04 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.6 },
  },
  hover: { scale: 1.03, transition: { duration: 0.25 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const paragraphMotion = (paragraphs /*, variants */) =>
  paragraphs.map((para, idx) => (
    <motion.p
      key={idx}
      className={`${styles.description} ${dmSans.className}`}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: idx * 0.06, duration: 0.35, ease: "easeOut" },
        },
      }}
    >
      {para}
    </motion.p>
  ));

export default function SolutionsSection() {
  return (
    <section className={styles.solutionSection}>
      {/* ---------- 1) PAYINS ---------- */}
      <motion.div
        className={styles.container}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.content} variants={fadeLeft}>
          <span className={styles.tag}>PayIns</span>
          <h2
            className={`${styles.title} ${styles.titleGradient} ${dmSans.className}`}
          >
            Trusted Solution to Accept Payments Online
          </h2>

          {paragraphMotion([
            "Our PayIn solution enables businesses to accept payments online through a single platform. As a trusted payin service provider, we support both global and local payment methods including cards, UPI, bank transfers, digital wallets, and more giving your customers the flexibility to pay the way they prefer.",

            "Engineered for scale and performance, our platform streamlines the collection of online payments across various use cases. With built-in features like dynamic currency conversion, real-time transaction processing, and no settlement limits, businesses can receive payments online without delays or disruptions. Need to take recurring payments online or streamline subscription billing? Our system is designed to handle it all with efficiency and reliability.",
            
            "As an international payment gateway, Finsol removes the operational burden of managing cross-border transactions. Our unified API replaces multiple regional integrations, reducing overhead and accelerating deployment. With enterprise-grade security, transaction routing, and full compliance built in, we empower businesses to collect online while meeting global standards, giving you the foundation to grow across markets with confidence.",
          ])}

          <Link href="/solutions/payins" className={styles.link}>
            Learn More
          </Link>
        </motion.div>

        {/* Sticky image column */}
        <motion.div
          className={`${styles.images} ${styles.stickyCol}`}
          variants={imagePopRight}
          whileHover="hover"
        >
          <Image
            src="/images/solutions-images/payin-images/payment.jpg"
            alt="Payment 1"
            width={293}
            height={195}
            className={styles.image}
          />
          <Image
            src="/images/solutions-images/payin-images/rupees.jpg"
            alt="Payment 2"
            width={293}
            height={195}
            className={styles.image}
          />
          <Image
            src="/images/solutions-images/payin-images/card.jpg"
            alt="Payment 3"
            width={600}
            height={350}
            className={`${styles.image} ${styles.imageLarge}`}
          />
        </motion.div>
      </motion.div>

      {/* ---------- 2) PAYOUTS ---------- */}
      <motion.div
        className={`${styles.reverseContainer} ${styles.boxed}`}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        

        <motion.div className={styles.content} variants={fadeRight}>
          <span className={styles.tag}>Payouts</span>
          <h2 className={`${styles.title} ${styles.titleGradient}`}>
            Secure Solution to Send and Withdraw Funds
          </h2>

          {paragraphMotion([
            "Payout solutions simplify how businesses disburse funds to partners, vendors and users. With built-in compliance and currency handling, every transaction is fast, reliable and ready to scale with your business.",
            "Whether it's vendor payments, partner commissions, remittance, rewards distributions, or user withdrawals, Payout solutions streamline the way businesses send funds. We ensure secure, instant payouts through trusted methods like direct bank transfers and mobile wallets. With built-in compliance and seamless currency handling, every transaction is fast, reliable, and scalable for growing businesses.",



            "We provide payout solutions that make sending money simple, secure, and dependable. Whether it’s salaries, partner payments, or customer refunds, our platform ensures every transaction is handled smoothly and on time. With built-in efficiency and compliance, we take the complexity out of payouts, so your business can operate with confidence and scale with ease.",
          ])}

          <Link href="/solutions/payouts" className={styles.link}>
            Learn More
          </Link>
        </motion.div>
        {/* Sticky single image */}
        <motion.div
          className={`${styles.singleImage} ${styles.singleImagePayouts} ${styles.stickyCol}`}
          variants={imagePopLeft}
          whileHover="hover"
        >
          <Image
            src="/images/solutions-images/payout-images/payout.png"
            alt="Payment Left"
            width={600}
            height={350}
            className={styles.image}
          />
        </motion.div>
      </motion.div>

      {/* ---------- 3) WHITE LABELING ---------- */}
      <motion.div
        className={`${styles.imageRightContainer} ${styles.boxed}`}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.content} variants={fadeLeft}>
          <span className={styles.tag}>White labeling</span>
          <h2 className={`${styles.title} ${styles.titleGradient}`}>
            Launch Your Own Branded Payment Platform
          </h2>

          {paragraphMotion([
            "Our white-label solution enables businesses to launch their own branded payment platforms using our secure and scalable infrastructure. From PayIn to PayOut, you can offer seamless global transactions under your brand, with full control over the user experience, pricing and operations.",
            "Launching a robust, compliant payment platform requires significant time, resources, and regulatory expertise. Our white-label solution eliminates these challenges by providing a pre-built, enterprise-grade infrastructure that you can fully brand as your own. It enables financial institutions, fintech platforms, and aggregators to enter the market with confidence, offering end-to-end payment capabilities under their own identity. With Finsol managing the backend, you retain full control over the customer experience while accelerating your go-to-market strategy and reducing operational complexity.",
            "Our white-label offering allows you to deliver seamless Payin and Payout functionality through a platform that reflects your brand, not your vendor’s. From merchant onboarding to transaction processing and reporting, every touchpoint is customized to your business. With our scalable global infrastructure, your business can expand into multiple markets without the need to build separate systems or manage region-specific compliance.",
          ])}

          <Link href="/solutions/whitelabeling" className={styles.link}>
            Learn More
          </Link>
        </motion.div>

        {/* Sticky single image */}
        <motion.div
          className={`${styles.singleImage} ${styles.singleImageWhite} ${styles.stickyCol}`}
          variants={imagePopRight}
          whileHover="hover"
        >
          <Image
            src="/images/solutions-images/white-labeling-images/white-labeling.png"
            alt="Business Tools"
            width={500}
            height={350}
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
