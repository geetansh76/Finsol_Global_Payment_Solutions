"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import payoutStyles from "../common.module.css";
import { dmSans } from "@/utils/fonts";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PayoutsClient() {
  // ===== Variants =====
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
    hidden: { opacity: 0, x: 80, scale: 1.04 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      },
    },
    hover: { scale: 1.03, transition: { duration: 0.25 } },
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
      {/* ===================== PAGE CONTENT ===================== */}
      <div className={payoutStyles.wideHero}>
        <Header
          title="PayOuts"
          minimal={false}
          hideButton
          heroVariant="default"
          className={payoutStyles.wideHero}
        />
      </div>

      <section>
        {/* Row: content left, STICKY media right */}
        <motion.div
          className={payoutStyles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div
            className={payoutStyles.row}
            style={{ ["--sticky-top"]: "100px" }} // matches header height
          >
            {/* Content column */}
            <motion.div
              className={payoutStyles.contentCol}
              variants={leftContentVariants}
            >
              <motion.p
                className={`${payoutStyles.description} ${dmSans.className}`}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftContentVariants}
              >
                Disbursing funds should not be complicated, whether you are
                paying vendors, partners, employees, or customers. Our payout
                solutions are designed to simplify the way businesses send money
                internationally. With one integration, you can automate payouts
                at scale, eliminate manual processes and ensure timely, accurate
                payments across every use case. From refunds to rewards, partner
                commissions to salary transfers, we help you manage it all
                through a secure, centralized system.
              </motion.p>

              <motion.p
                className={`${payoutStyles.description} ${dmSans.className}`}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftContentVariants}
              >
                As a trusted payout API provider, we equip your business with
                the tools to handle disbursements quickly and accurately. Our
                platform supports bulk payouts, scheduled transfers, and instant
                withdrawals through secure channels such as bank accounts and
                mobile wallets. With real-time tracking, error handling, and
                built-in compliance, our payout services deliver the control and
                efficiency you need, whether you are managing routine payroll or
                on-demand partner settlements.
              </motion.p>

              <motion.p
                className={`${payoutStyles.description} ${dmSans.className}`}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={leftContentVariants}
              >
                Our platform is designed to be a global payout solution that
                fits your specific geography, industry, and scale. Whether you
                are making payments cross-border, our infrastructure supports
                multiple currencies, regions, and payout partners, all while
                providing clear reporting at every stage. As your reliable
                payout service provider, we ensure that your money moves faster,
                safer and smarter, allowing you to concentrate on growth rather
                than payment logistics.
              </motion.p>

             <Link href="/contact">
                <motion.div
                  className={payoutStyles.contactSalesButton}
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

            {/* Sticky media column */}
            <div
              className={`${payoutStyles.mediaCol} ${payoutStyles.stickyCol}`}
            >
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/images/solutions-images/payout-images/payout.png"
                  alt="Payouts overview"
                  width={1200}
                  height={800}
                  className={payoutStyles.mediaImg}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={payoutStyles.container_cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className={payoutStyles.card_list}>
            <motion.div
              className={payoutStyles.card}
              custom={0}
              variants={bottomVariants}
            >
              <div className={payoutStyles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon"
                  className={payoutStyles.polygonIcon}
                  width={118}
                  height={132}
                />
                <Image
                  src="/icons/solutions-icons/Trust.png"
                  alt="Trust"
                  className={payoutStyles.centerIcon}
                  width={94}
                  height={80}
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
              className={payoutStyles.card}
              custom={1}
              variants={bottomVariants}
            >
              <div className={payoutStyles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon"
                  className={payoutStyles.polygonIcon}
                  width={118}
                  height={132}
                />
                <Image
                  src="/icons/solutions-icons/Reliability.png"
                  alt="Reliability"
                  className={payoutStyles.centerIcon}
                  width={94}
                  height={80}
                />
              </div>
              <h3>Reliability</h3>
              <p>
                Our PayOut infrastructure delivers consistent, real-time
                performance and uninterrupted uptime, so you never miss a
                transaction, anytime, anywhere.
              </p>
            </motion.div>

            <motion.div
              className={payoutStyles.card}
              custom={2}
              variants={bottomVariants}
            >
              <div className={payoutStyles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon"
                  className={payoutStyles.polygonIcon}
                  width={118}
                  height={132}
                />
                <Image
                  src="/icons/solutions-icons/Transparency.png"
                  alt="Transparency"
                  className={payoutStyles.centerIcon}
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

        {/* Incoming grid */}
        <motion.div
          className={payoutStyles.incomingWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className={payoutStyles.incomingHeader}
            variants={bottomVariants}
          >
            <motion.h2
              className={payoutStyles.incomingTitle}
              variants={bottomVariants}
            >
              With a single integration, you can
            </motion.h2>
            <motion.p
              className={payoutStyles.incomingSubtitle}
              variants={bottomVariants}
            >
              Manage all your incoming payments from one platform.
            </motion.p>
          </motion.div>

          <motion.div
            className={payoutStyles.incomingCardGrid}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              className={payoutStyles.incomingCard}
              custom={0}
              variants={bottomVariants}
            >
              <h3>Expand to 40+ Countries Worldwide</h3>
              <p>
                Disburse payouts across borders with global coverage and
                built-in regulatory support.
              </p>
            </motion.div>
            <motion.div
              className={payoutStyles.incomingCard}
              custom={1}
              variants={bottomVariants}
            >
              <h3>Instant Activation with Plug & Play API</h3>
              <p>
                Go live quickly with minimal setup using our developer-friendly,
                unified API.
              </p>
            </motion.div>
            <motion.div
              className={payoutStyles.incomingCard}
              custom={2}
              variants={bottomVariants}
            >
              <h3>Multichannel Payment Processing</h3>
              <p>
                Send payouts through bank transfers, wallets, cards, and
                regional methods — all in one platform.
              </p>
            </motion.div>
            <motion.div
              className={payoutStyles.incomingCard}
              custom={3}
              variants={bottomVariants}
            >
              <h3>Multi-Currency Processing and Payouts</h3>
              <p>
                Support multiple currencies with real-time conversion and
                seamless cross-border disbursements.
              </p>
            </motion.div>
            <motion.div
              className={payoutStyles.incomingCard}
              custom={4}
              variants={bottomVariants}
            >
              <h3>Advanced Risk Management System</h3>
              <p>
                Protect every transaction with fraud detection, compliance
                checks, and smart routing.
              </p>
            </motion.div>
            <motion.div
              className={payoutStyles.incomingCard}
              custom={5}
              variants={bottomVariants}
            >
              <h3>Flexible Payout Solutions</h3>
              <p>
                Automate scheduled, on-demand, or bulk payouts tailored to your
                business model.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
