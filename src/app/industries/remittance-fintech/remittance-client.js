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

export default function RemittanceClient() {
  // ========= Replace with live values =========
  const PAGE_URL =
    "https://www.finsol.group/industries/remittance-fintech";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
   "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

  return (
    <>
      {/* JSON-LD: WebSite (SearchAction) */}
      <Script
        id="ld-website-remittance-fintech"
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
            <span className={styles.whiteText}>Powering Fast, Secure </span>
            <span className={styles.blueText}>Remittance and Fintech</span>
            <span className={styles.blueText}> Payments</span>
          </>
        }
        description="Deliver seamless money transfers and digital financial services with our PayIn, Payout, and white-label solutions — optimized for speed, scale, and compliance."
        descriptionClass={styles.industriesDescription}
        showHero={true}
        heroVariant="industries"
        className={styles.industriesHero}
        titleClass={styles.industriesTitle}
        hideButton={true}
      />

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Global Money Movement Made Simple and Secure
        </div>
        <div className={styles.content}>
          <p>
            Finsol enables remittance and fintech businesses to simplify and
            accelerate global money movement with a secure, compliant payment
            infrastructure. From peer-to-peer transfers to digital wallets and
            cross-border payouts, our PayIn and Payout solutions support
            real-time transactions across multiple currencies and local payment
            channels. With automated settlements, integrated fraud protection,
            and compliance built in, businesses can confidently operate across
            borders while minimizing risk and operational overhead.
          </p>

            <p>
            Our white-label payment gateway empowers fintech platforms to launch
            branded, scalable solutions without the cost or complexity of
            building from scratch. With complete control over customer
            experience, pricing, and onboarding, companies can enter new markets
            quickly and offer end-to-end financial services. Whether you are a
            remittance startup or a global fintech provider, Finsol gives you
            the flexibility, security, and speed to grow in today’s fast-moving
            financial landscape.
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
            src="/icons/industries-icons/remittance & fintech/cross-border.png"
            alt="Cross Border"
            width={72}
            height={72}
          />
          <h3>Cross-Border Remittance Apps</h3>
          <p>
            Enable fast, compliant international transfers with real-time
            settlement and local payout options.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/remittance & fintech/payroll.png"
            alt="Payroll"
            width={72}
            height={72}
          />
          <h3>Payroll &amp; Freelancer Payment Platforms</h3>
          <p>
            Automate salary disbursements and global freelancer payouts with
            full transparency and control.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/remittance & fintech/investment.png"
            alt="Investment"
            width={72}
            height={72}
          />
          <h3>Investment &amp; WealthTech Platforms</h3>
          <p>
            Support flexible billing cycles, global subscriptions, and seamless
            onboarding for software platforms.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/remittance & fintech/digital-wallets.png"
            alt="Digital wallets"
            width={72}
            height={72}
          />
          <h3>Digital Wallets &amp; Neobanks</h3>
          <p>
            Power user deposits, transfers, and merchant payments with scalable,
            API-first infrastructure.
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
