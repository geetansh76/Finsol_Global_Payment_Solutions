"use client";

import Header from "@/components/Home/Header/Header";
import Image from "next/image";
import styles from "../SharedPage.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import OpenServices from "@/components/Home/open-services/OpenServices";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
import CoverageSection from "@/components/Coverage/coverage-section";
import Footer from "@/components/Home/footer/Footer";
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

/* ============================
   Variants (same vibe as Asia)
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

export default function AfricaClient() {
  /* ===== Replace these with your live values ===== */
  const PAGE_URL = "https://www.finsol.group/coverage/africa";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

  /* 🔸 Animate the <Header /> title without editing the component */
  const headerScopeRef = useRef(null);

  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    // Respect user motion preference
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Try to find a heading inside Header (common cases)
    const titleEl =
      scope.querySelector("h1") ||
      scope.querySelector('[data-title]') ||
      scope.querySelector(".title, .heroTitle");

    if (titleEl) {
      // Crisp slide-in with subtle 3D and de-blur
      animate(
        titleEl,
        { opacity: [0, 1], y: [24, 0], rotateX: [-8, 0], filter: ["blur(6px)", "blur(0px)"] },
        { duration: 0.9, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    }
  }, []);

  return (
    <>
      {/* ===================== JSON-LD STRUCTURED DATA ===================== */}
      <Script
        id="ld-website-africa"
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

      {/* Wrap ONLY to scope the title animation; content remains unchanged */}
      <div ref={headerScopeRef} >
        <Header
          title="Africa "
          titleClass={styles.Title}
          description="Empowering Africa’s digital economy by driving financial inclusion with seamless, compliant payment infrastructure designed for businesses and communities to thrive."
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
              Unlock Growth Across Africa with Seamless Payments
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Africa is one of the most exciting digital marketplaces in the
              world—mobile-first, constantly evolving, and full of untapped
              potential. But to successfully expand into this region, you need
              localized infrastructure and a deep understanding of payment
              processes. At Finsol, we help businesses navigate these
              complexities with our secure, scalable and compliant online
              payment solutions. Whether you are looking to accept payments
              online, launch in a new market, or make cross-border collections
              easier, our unified platform is built to support your growth
              across Africa.
            </motion.p>
          </motion.div>

          <motion.div className={styles.imageBlock} variants={imageVariants} whileHover="hover">
            <Image
              src="/images/coverage-images/africa-images/africa-map.png"
              alt="Africa Map"
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
          <motion.div className={styles.imageBlock} variants={imageVariants} whileHover="hover">
            <Image
              src="/images/coverage-images/africa-images/africa-payment.png"
              alt="Africa Payment"
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
              Our platform is designed to enhance your entire payment
              experience, providing solutions for accepting payments, instant
              payouts, and customizable payment gateway software. Businesses can
              easily accept online payments, manage digital payouts, and even
              create their own branded payment platform, gaining full control
              over the interface, features, and pricing. With functionalities
              like real-time processing, support for multiple currencies, and
              recurring billing, Finsol ensures a smooth experience for
              receiving payments online, handling disbursements, and scaling
              with a flexible, secure, and fully compliant payout platform.
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
              Coverage Across Leading African Markets
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              Finsol operates in key countries in Africa, like Nigeria, Ghana,
              and Kenya. Our platform is designed to support diverse regional
              payment methods, handle multiple currencies, and be compliant with
              all local financial regulations. This enables us to seamlessly
              assist rapidly growing sectors like e-commerce, fintech, forex,
              gaming, dating, and other digital-first industries across the
              African continent.
            </motion.p>
          </motion.div>

          <motion.div className={styles.imageBlock} variants={imageVariants} whileHover="hover">
            <Image
              src="/images/coverage-images/africa-images/africa-market.png"
              alt="African Industries"
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
          <motion.div className={styles.imageBlock} variants={imageVariants} whileHover="hover">
            <Image
              src="/images/coverage-images/africa-images/africa-handshake.png"
              alt="Africa Partnership"
              width={500}
              height={350}
              priority
            />
          </motion.div>

          <motion.div className={styles.textBlock} variants={rightVariants}>
            <motion.h2 variants={textRise} custom={0}>
              Your Trusted Partner for African Expansion
            </motion.h2>
            <motion.p variants={textRise} custom={1}>
              As a trusted payment gateway provider, we offer tools and
              technology to adapt your payment strategy for localization and to
              grow confidently. From payment integration services to full
              white-label platforms, Finsol is your complete online payments
              solution in Africa.
            </motion.p>
          </motion.div>
        </motion.section>
      </main>

      <ChatAssistant />
      <OpenServices />
      <PaymentMethodSection />
      <CoverageSection currentContinent="Africa" />
      <Footer />
    </>
  );
}
