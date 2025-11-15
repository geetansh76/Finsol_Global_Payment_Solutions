"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import styles from "../common.module.css";
import { dmSans } from "@/utils/fonts";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function PayinsClient() {
  // ===== Variants (kept from your file) =====
  const leftContentVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 1.2 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
    hover: { scale: 1.05, rotate: 0, transition: { duration: 0.3 } },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    }),
  };

  return (
    <>
      {/* ===== Your existing page content ===== */}
      <div className={styles.wideHero}>
        <Header
          title="PayIns"
          minimal={false}
          hideButton
          heroVariant="default"
          className={styles.wideHero}
          description="Driving growth by delivering seamless, secure, and compliant payment experiences that empower businesses to scale globally and enhance customer trust."
          descriptionClass={styles.solutionsDescription}
        />
      </div>

      <section>
        {/* ===== Row 1: content left, sticky media right ===== */}
        <motion.div
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div
            className={
              styles.row /* add styles.reverse to put media on the LEFT */
            }
            style={{ ["--sticky-top"]: "100px" }} // header height offset
          >
            {/* content column */}
            <motion.div
              className={styles.contentCol}
              variants={leftContentVariants}
            >
              <motion.p
                className={`${styles.description} ${dmSans.className}`}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftContentVariants}
              >
                In today’s rapidly evolving digital landscape, businesses
                require more than just a basic tool for accepting payments
                online—they need a robust solution that prioritizes security,
                flexibility, and growth potential. Our payment solution is
                designed to assist companies of all sizes, including small
                businesses, in effortlessly collecting payments through various
                methods like cards, UPI, bank transfers, wallets, and
                international options—all within a unified experience. With our
                platform, your teams can enjoy a smooth process for collecting
                online payments, while your customers benefit from quicker
                checkouts and improved conversion rates.
              </motion.p>

              <motion.p
                className={`${styles.description} ${dmSans.className}`}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftContentVariants}
              >
                As a trusted Payin service provider, we don’t just stop at basic
                integrations. Our platform is designed to handle recurring
                billing, dynamic currency conversion, and real-time settlements,
                simplifying the process of accepting recurring payments online
                or managing international transactions without the usual
                complications. Our unified Payin API architecture removes the
                hassle of region-specific setups, ensuring your operations
                remain agile, scalable, and ready for the future, whether you’re
                venturing into new markets or enhancing your current model.
              </motion.p>

              <motion.p
                className={`${styles.description} ${dmSans.className}`}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftContentVariants}
              >
                With Finsol, businesses can easily and securely handle online
                payments and collections while ensuring compliance and security
                with every transaction. You’ll have full visibility and control
                over your payment methods, no matter the currency, country, or
                channel. Our Payin infrastructure is built for performance,
                giving you the flexibility to operate on a global scale and the
                reliability to grow sustainably, turning your payment processes
                into real progress.
              </motion.p>

              <Link href="/contact">
                <motion.div
                  className={styles.contactSalesButton}
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={leftContentVariants}
                >
                  Boost Your Conversion Rate
                </motion.div>
              </Link>
            </motion.div>

            {/* media column (sticky) */}
            <motion.div
              className={`${styles.mediaCol} ${styles.stickyCol}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              whileHover="hover"
            >
              <div className={styles.mediaGrid}>
                <motion.div variants={imageVariants}>
                  <Image
                    src="/images/solutions-images/payin-images/rupees.jpg"
                    alt="Payment 1"
                    width={300}
                    height={200}
                    className={styles.mediaImg}
                  />
                </motion.div>

                <motion.div variants={imageVariants}>
                  <Image
                    src="/images/solutions-images/payin-images/card.jpg"
                    alt="Payment 2"
                    width={300}
                    height={200}
                    className={styles.mediaImg}
                  />
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className={styles.mediaImgLarge}
                >
                  <Image
                    src="/images/solutions-images/payin-images/payment.jpg"
                    alt="Payment 3"
                    width={600}
                    height={350}
                    className={`${styles.mediaImg} ${styles.mediaImgLarge}`}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== Cards ===== */}
        <motion.div
          className={styles.container_cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className={styles.card_list}>
            <motion.div
              className={styles.card}
              custom={0}
              variants={bottomVariants}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon background"
                  width={118}
                  height={132}
                  className={styles.polygonIcon}
                />
                <Image
                  src="/icons/solutions-icons/Trust.png"
                  alt="Trust Icon"
                  width={94}
                  height={80}
                  className={styles.centerIcon}
                />
              </div>
              <h3>Trust</h3>
              <p>
                We ensure secure, encrypted transactions with global compliance,
                building confidence for businesses and their customers at every
                step.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              custom={1}
              variants={bottomVariants}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon background"
                  width={118}
                  height={132}
                  className={styles.polygonIcon}
                />
                <Image
                  src="/icons/solutions-icons/Reliability.png"
                  alt="Reliability Icon"
                  width={94}
                  height={80}
                  className={styles.centerIcon}
                />
              </div>
              <h3>Reliability</h3>
              <p>
                Our PayIn infrastructure delivers consistent, real-time
                performance and uninterrupted uptime, so you never miss a
                transaction, anytime, anywhere.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              custom={2}
              variants={bottomVariants}
            >
              <div className={styles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon background"
                  width={118}
                  height={132}
                  className={styles.polygonIcon}
                />
                <Image
                  src="/icons/solutions-icons/Transparency.png"
                  alt="Transparency Icon"
                  className={styles.centerIcon}
                  width={94}
                  height={80}
                />
              </div>
              <h3>Transparency</h3>
              <p>
                Gain full visibility into transactions and settlements with
                clear reporting, real-time tracking and zero hidden fees or
                surprises.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== Incoming grid ===== */}
        <motion.div
          className={styles.incomingWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className={styles.incomingHeader}
            variants={bottomVariants}
          >
            <motion.h2
              className={`${styles.incomingTitle} ${styles.gradientH2}`}
              variants={bottomVariants}
            >
              With a single integration, you can
            </motion.h2>
            <motion.p
              className={styles.incomingSubtitle}
              variants={bottomVariants}
            >
              Manage all your incoming payments from one platform.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.incomingCardGrid}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              {
                title: "Quick Launch with Easy API Integration",
                text: "Go live in minutes with a single, developer-friendly integration — no complex setup required.",
              },
              {
                title: "Multichannel Payment Processing",
                text: "Accept payments via cards, UPI, bank transfers, wallets, and more — all through one streamlined platform.",
              },
              {
                title: "Multi-Currency Acceptance & PayIn",
                text: "Collect payments in various currencies with built-in conversion and seamless international settlement.",
              },
              {
                title: "Advanced Risk Management System",
                text: "Safeguard transactions with intelligent fraud detection, risk scoring, and real-time monitoring.",
              },
              {
                title: "Flexible PayIn Solutions",
                text: "Support one-time, recurring, or on-demand payments — designed to adapt to your business model and scale.",
              },
              {
                title: "Hosted & Embedded Checkout Options",
                text: "Choose between a ready-to-use hosted flow or fully embedded checkout for complete control over your payment experience.",
              },
            ].map((item, i) => (
              <motion.div
                className={styles.incomingCard}
                custom={i}
                variants={bottomVariants}
                key={i}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
