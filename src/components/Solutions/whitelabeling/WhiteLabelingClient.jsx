
"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import whiteLabelingStyles from "../common.module.css";
import { dmSans } from "@/utils/fonts";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Variants
const leftContentVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};
const rightContentVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100, damping: 18 },
  }),
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

export default function WhiteLabelingClient() {
  return (
    <>
      {/* ===================== PAGE CONTENT ===================== */}
      <div className={whiteLabelingStyles.wideHero}>
        <Header
          title="White Labeling"
          hideButton
          minimal={false}
          heroVariant="default"
          className={whiteLabelingStyles.wideHero}
        />
      </div>

      <section className={whiteLabelingStyles.solutionSection}>
        {/* ===== Row: content left, STICKY media right ===== */}
        <motion.div
          className={whiteLabelingStyles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div
            className={whiteLabelingStyles.row}
            style={{ ["--sticky-top"]: "100px" }} // match your header height
          >
            {/* Content column */}
            <motion.div
              className={whiteLabelingStyles.contentCol}
              variants={leftContentVariants}
            >
              {[
                "Building a complete branded payments platform from scratch can be difficult and requires considerable investment. Our white-label solution gives you an existing branded solution to start your branded, scalable, compliant, and secure payment platform under your name. Whether you're a payment aggregator, fintech startup, or financial institution, you'll provide seamless PayIn and Payout services without the hassle of backend development or dealing with regulatory requirements.",
                "Our architecture is designed for quick deployment and comes with a customizable dashboard, integrated workflows, and developer-friendly APIs that allow you to tailor every aspect of the user experience. Whether it's onboarding merchants, managing transactions, or generating reports, you have full control over branding, pricing, and customer interactions, while we take care of the complex tasks behind the scenes. The outcome? A quicker time to market, lower operational risks, and a platform that your customers will see as uniquely yours.",
                "Our white-label infrastructure is designed to handle multi-currency payments, local compliance, and consistent transaction routing across markets. As your partner, we keep your operations flexible, secure, and ready for the future. Whether you're expanding into new regions or creating a digital finance ecosystem, our solution provides a solid foundation for you to grow confidently, fully branded and entirely yours.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className={`${whiteLabelingStyles.description} ${dmSans.className}`}
                  custom={i}
                  variants={fadeUpVariants}
                >
                  {text}
                </motion.p>
              ))}

               <Link href="/contact">
                <motion.div
                  className={whiteLabelingStyles.contactSalesButton}
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
            <motion.div
              className={`${whiteLabelingStyles.mediaCol} ${whiteLabelingStyles.stickyCol}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={rightContentVariants}
            >
              <Image
                src="/images/solutions-images/white-labeling-images/white-labeling.png"
                alt="White Labeling Illustration"
                width={1200}
                height={800}
                className={whiteLabelingStyles.mediaImg}
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={whiteLabelingStyles.container_cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className={whiteLabelingStyles.card_list}>
            <motion.div
              className={whiteLabelingStyles.card}
              custom={0}
              variants={bottomVariants}
            >
              <div className={whiteLabelingStyles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon"
                  className={whiteLabelingStyles.polygonIcon}
                  width={118}
                  height={132}
                />
                <Image
                  src="/icons/solutions-icons/Trust.png"
                  alt="Trust"
                  className={whiteLabelingStyles.centerIcon}
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
              className={whiteLabelingStyles.card}
              custom={1}
              variants={bottomVariants}
            >
              <div className={whiteLabelingStyles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon"
                  className={whiteLabelingStyles.polygonIcon}
                  width={118}
                  height={132}
                />
                <Image
                  src="/icons/solutions-icons/Reliability.png"
                  alt="Reliability"
                  className={whiteLabelingStyles.centerIcon}
                  width={94}
                  height={80}
                />
              </div>
              <h3>Reliability</h3>
              <p>
                Our White labeling infrastructure delivers consistent, real-time performance and uninterrupted uptime, so you never miss a transaction, anytime, anywhere.
              </p>
            </motion.div>

            <motion.div
              className={whiteLabelingStyles.card}
              custom={2}
              variants={bottomVariants}
            >
              <div className={whiteLabelingStyles.iconWrapper}>
                <Image
                  src="/icons/solutions-icons/Polygon.png"
                  alt="Polygon"
                  className={whiteLabelingStyles.polygonIcon}
                  width={118}
                  height={132}
                />
                <Image
                  src="/icons/solutions-icons/Transparency.png"
                  alt="Transparency"
                  className={whiteLabelingStyles.centerIcon}
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

        {/* ===== Incoming features ===== */}
        <motion.div
          className={whiteLabelingStyles.incomingWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={whiteLabelingStyles.incomingHeader}>
            <motion.h2
              className={whiteLabelingStyles.incomingTitle}
              variants={fadeUpVariants}
              custom={0}
            >
              With our white-label solution, you can
            </motion.h2>
            <motion.p
              className={whiteLabelingStyles.incomingSubtitle}
              variants={fadeUpVariants}
              custom={1}
            >
              Deliver branded payment experiences your customers trust—powered
              by Finsol.
            </motion.p>
          </motion.div>

          <div className={whiteLabelingStyles.incomingCardGrid}>
            {[
              {
                title: "Launch Under Your Brand",
                desc: "Offer PayIn and Payout services with a platform fully customized to reflect your brand identity.",
              },
              {
                title: "Go to Market Faster",
                desc: "Skip the development cycle with ready-to-deploy infrastructure that gets you live in days, not months.",
              },
              {
                title: "Customize the User Experience",
                desc: "Control every customer touchpoint — from dashboard UI to onboarding flow — with flexible configuration options.",
              },
              {
                title: "Scale Without Limits",
                desc: "Support high transaction volumes, growing merchant bases, and multiple markets with ease.",
              },
              {
                title: "Expand Globally with Confidence",
                desc: "Scale to new markets effortlessly using a platform built for multi-currency support and global settlement capabilities.",
              },
              {
                title: "Focus on Growth, Not Infrastructure",
                desc: "Let us manage the backend technology while you focus on customer acquisition, partnerships, and business growth.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={whiteLabelingStyles.incomingCard}
                variants={fadeUpVariants}
                custom={i}
              >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
