"use client";

import Script from "next/script";
import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import styles from "../SharedPage.module.css";
import Image from "next/image";
import OpenServices from "@/components/Home/open-services/OpenServices";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import Coverage from "@/components/Home/coverage/Coverage";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
import { motion } from "framer-motion";

export default function HealthcareClient() {
  // ===== Replace these with your real production URLs/images =====
  const PAGE_URL = "https://www.finsol.group/industries/healthcare-wellness";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
    "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

  
  return (
    <>
      {/* JSON-LD: WebSite (SearchAction) */}
      <Script
        id="ld-website-healthcare-wellness"
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

      {/* =================== PAGE CONTENT =================== */}
      <Header
        title={
          <>
            <span className={styles.whiteText}>Smart Payment Solutions for </span>
            <span className={styles.blueText}>Clinics & Care Providers</span>
          </>
        }
        description="Accept patient payments, disburse vendor payouts, and manage recurring wellness subscriptions — all through one secure platform."
        descriptionClass={styles.industriesDescription}
        showHero={true}
        heroVariant="industries"
        className={styles.industriesHero}
        titleClass={styles.industriesTitle}
        hideButton={true}
      />

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Simplify Patient Billing and Payouts with One Unified Platform
        </div>
        <div className={styles.content}>
          <p>
            Finsol empowers healthcare providers, clinics, diagnostic centers,
            and wellness platforms with robust online payment solutions designed
            for speed, accuracy, and compliance. With our PayIn infrastructure,
            businesses can accept patient payments seamlessly via cards, UPI,
            wallets, and bank transfers—ensuring a smooth billing experience
            across in-person and telehealth services. Our Payout capabilities
            enable automated disbursements to doctors, consultants, labs,
            pharmacies, and insurance partners, simplifying financial operations
            while maintaining complete transparency and control.
          </p>

          <p>
            For healthcare businesses looking to scale or differentiate, our
            white-label payment gateway provides a powerful way to launch
            branded, secure platforms without building from scratch. Whether
            you are managing recurring subscriptions for wellness services or
            coordinating cross-border medical billing, Finsol’s scalable
            infrastructure supports multiple currencies, real-time reporting,
            and region-specific compliance. We help healthcare and wellness
            brands focus on delivering care—while we take care of the
            payments.
          </p>
        </div>
      </div>

      {/* Industries Category Section */}
      <div className={styles.cardGrid}>
        <motion.div
          className={styles.card}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/healthcare & wellness/pharmacies.png"
            alt="Pharmacies"
            width={72}
            height={72}
          />
          <h3>Pharmacies &amp; Health Product Stores</h3>
          <p>
            Enable secure online payments for prescriptions, health essentials,
            and recurring medicine subscriptions.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/healthcare & wellness/diagnostics.png"
            alt="Diagnostics"
            width={72}
            height={72}
          />
          <h3>Online Diagnostics &amp; Lab Booking Service</h3>
          <p>
            Support real-time bookings, payments, and partner settlements with
            built-in compliance.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/healthcare & wellness/fitness.png"
            alt="Fitness"
            width={72}
            height={72}
          />
          <h3>Wellness Apps &amp; Fitness Platforms</h3>
          <p>
            Manage subscriptions, session bookings, and trainer payouts through
            a unified payment experience.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/healthcare & wellness/hospital.png"
            alt="Hospitals"
            width={72}
            height={72}
          />
          <h3>Hospitals &amp; Clinics</h3>
          <p>
            Simplify patient billing, appointment collections, and vendor
            disbursements — all in one platform.
          </p>
        </motion.div>
      </div>

      <OpenServices />
      <SubscribeSection />
      <Coverage />
      <PaymentMethodSection />
      <ChatAssistant />
      <Footer />
    </>
  );
}
