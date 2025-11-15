"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import styles from "../SharedPage.module.css";
import OpenServices from "@/components/Home/open-services/OpenServices";
import CoverageSection from "@/components/Coverage/coverage-section";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
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

export default function EuropeCoveragePage() {
  // ===== EDIT THESE FOR YOUR SITE =====
  const PAGE_URL = "https://www.finsol.group/coverage/europe";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL = "https://www.example.com/assets/og/finsol-europe.jpg";

 
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
      scope.querySelector("[data-title]") ||
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
        id="ld-website-europe"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}/search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            url: PAGE_URL,
          }),
        }}
      />

      {/* Scope wrapper for header title animation (no content changes) */}
      <div ref={headerScopeRef} >
        <Header
          title="Europe"
           titleClass={styles.Title}
          description="Across Europe, we provide secure Payins, Payouts, and White Label solutions built for speed, scalability, compliance and sustainable business growth."
          showHero={true}
          minimal={false}
          hideButton
          heroVariant="coverage"
        />
      </div>

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
              Leading Online Payment Solutions for Europe
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Finsol provides fast, secure and scalable online payment services
              designed for a wide range of businesses that want to grow their
              revenue across Europe. Our payment gateway solutions can simplify
              cross-border transactions for businesses that want to accept
              payments online or initiate merchant payouts. From small
              businesses to large enterprises, we help you enhance your
              operations with a unified infrastructure that covers the entire
              continent
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/europe-images/eu-map.png"
              alt="Europe Map"
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
              src="/images/coverage-images/europe-images/eu-payment.png"
              alt="Woman with credit card"
              width={500}
              height={350}
              priority
            />
          </motion.div>
          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Payin, Payout & White-Label Payment Gateway
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Our platform is designed to handle all aspects of payment
              operations, offering PayIn, Payouts, and customizable payment
              gateway software. This means businesses can easily collect
              payments online, manage their disbursements and even create their
              own branded payment platform, giving them complete control over
              user experience and pricing. With features like real-time
              processing, support for multiple currencies, and the ability to
              set up recurring payments, Finsol is your go-to solution for
              efficient, compliant, and adaptable global commerce.
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
              Serving Top European Markets & Industries
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              We operate in several key countries, including the United Kingdom,
              France, Germany, Spain, Italy, Sweden, the Netherlands, Ireland,
              Finland and Russia. Our infrastructure is trusted by various
              industries such as e-commerce, digital platforms, fintech, gaming,
              dating, travel, forex, and healthcare. Whether you’re an online
              merchant, an aggregator, or a fintech startup, we offer payment
              processing gateways that cater to local regulations and checkout
              preferences.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.imageBlock}
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/images/coverage-images/europe-images/eu-stock.png"
              alt="EU Stocks"
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
              src="/images/coverage-images/europe-images/eu-handshake.png"
              alt="EU partnership"
              width={500}
              height={350}
              priority
            />
          </motion.div>
          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Your Trusted Online Payment Gateway Provider
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              As a global online payment gateway provider, Finsol offers more
              than just integration — we deliver end-to-end online merchant
              services, a secure payment collection gateway, and white-label
              capabilities to help you scale. Whether you’re launching in new
              markets or optimizing operations across borders, Finsol is the
              payment gateway partner for your business.
            </motion.p>
          </motion.div>
        </motion.section>
      </main>

      <OpenServices />
      <PaymentMethodSection />
      <ChatAssistant />
      <CoverageSection currentContinent="Europe" />
      <Footer />
    </>
  );
}
