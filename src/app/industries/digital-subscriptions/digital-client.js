"use client";

import Script from "next/script";
import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import styles from "../SharedPage.module.css";
import OpenServices from "@/components/Home/open-services/OpenServices";
import SubscribeSection from "@/components/Home/subscribe/SubscribeSection";
import Coverage from "@/components/Home/coverage/Coverage";
import PaymentMethodSection from "@/components/Home/payment-method/PaymentMethodSection";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustriesClient() {
  // ===== Replace these with real URLs/images =====
  const PAGE_URL = "https://www.finsol.group/industries/digital-subscriptions";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

 

  return (
    <>
      {/* JSON-LD: WebSite (SearchAction) */}
      <Script
        id="ld-website-digital-subscription"
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
            <span className={styles.whiteText}>Powering Digital Payments for </span>
            <span className={styles.blueText}>Subscriptions That Scale</span>
          </>
        }
        description="Enable smooth recurring billing, real-time processing, and global reach for your digital platforms - all through one unified solution."
        descriptionClass={styles.industriesDescription}
        showHero={true}
        heroVariant="industries"
        className={styles.industriesHero}
        titleClass={styles.industriesTitle}
        hideButton={true}
      />

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Collect, Disburse and Grow with Smart Payment Solutions
        </div>

        <div className={styles.content}>
          <p>
            The digital and subscription economy is built on recurring revenue,
            real-time access, and seamless user experiences—and that starts with
            payment infrastructure. Finsol provides tailored online payment
            gateway services that empower businesses in E-learning, Gaming,
            SaaS, and Streaming to scale globally. With localized PayIn
            solutions, you can accept recurring payments online via cards,
            e-wallets, UPI, and bank transfers across multiple markets. Our
            platform supports subscription billing, automated renewals, and
            multi-currency processing, helping platforms reduce payment failures
            and improve user retention.
          </p>

          <p>
            To complete the transaction loop, Finsol offers fast, secure Payout
            solutions designed for digital-first businesses. Whether you are
            disbursing earnings to course creators, game developers, or SaaS
            partners, our payout API ensures reliable fund distribution with
            real-time tracking and compliance. And for platforms looking to go
            fully branded, our white-label payment gateway lets you manage
            collections and disbursements under your own identity—complete
            with full control over pricing, operations, and the user experience.
            Together, these services simplify global monetization for digital
            platforms and subscription-based models.
          </p>
        </div>

        {/* --- Animated Card Grid --- */}
        <div className={styles.cardGrid}>
          {/* E-learning */}
          <motion.div
            className={styles.card}
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/icons/industries-icons/digital & subscription/elearning.png"
              alt="E-learning"
              width={72}
              height={72}
            />
            <h3>E-learning</h3>
            <p>
              Enable fast, recurring fee collection for online courses,
              memberships, and test prep platforms.
            </p>
          </motion.div>

          {/* Gaming */}
          <motion.div
            className={styles.card}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/icons/industries-icons/digital & subscription/gaming.png"
              alt="Gaming"
              width={72}
              height={72}
            />
            <h3>Gaming</h3>
            <p>
              Power in-game purchases, subscriptions, and creator payouts with
              secure, real-time transactions.
            </p>
          </motion.div>

          {/* SaaS */}
          <motion.div
            className={styles.card}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/icons/industries-icons/digital & subscription/saas.png"
              alt="SaaS"
              width={72}
              height={72}
            />
            <h3>SaaS</h3>
            <p>
              Support flexible billing cycles, global subscriptions, and
              seamless onboarding for software platforms.
            </p>
          </motion.div>

          {/* Streaming */}
          <motion.div
            className={styles.card}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/icons/industries-icons/digital & subscription/streaming.png"
              alt="Streaming"
              width={72}
              height={72}
            />
            <h3>Streaming</h3>
            <p>
              Manage global subscriptions and content access with effortless
              recurring payment support.
            </p>
          </motion.div>
        </div>
        {/* --- /Animated Card Grid --- */}
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
