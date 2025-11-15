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

export default function RetailClient() {
  // ========= Replace with live values =========
  const PAGE_URL =
    "https://www.finsol.group/industries/retail-ecommerce";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
   "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png"


  return (
    <>
      {/* JSON-LD: WebSite (SearchAction) */}
      <Script
        id="ld-website-retail-ecommerce"
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
            <span className={styles.whiteText}>
              Seamless Payment Gateway Solutions for{" "}
            </span>
            <span className={styles.blueText}>Retail &amp; E-Commerce</span>
          </>
        }
        description="Accept payments effortlessly across channels, currencies, and regions. Our PayIn and Payout solutions help you streamline checkout, boost conversions, and scale your retail business globally."
        descriptionClass={styles.industriesDescription}
        showHero={true}
        heroVariant="industries"
        className={styles.industriesHero}
        titleClass={styles.industriesTitle}
        hideButton={true}
      />

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Streamline Payments, Drive Sales, and Expand Fast
        </div>
        <div className={styles.content}>
          <p>
            Finsol empowers retail and e-commerce businesses with a seamless
            online payment gateway that supports local and international
            transactions. Our PayIn solutions allow you to accept payments
            online via cards, wallets, UPI, and bank transfers—enhancing
            checkout experiences and reducing drop-offs. On the backend, our
            Payout services automate vendor disbursements, customer refunds, and
            partner commissions, enabling efficient cash flow management.
            Whether you are running a direct-to-consumer brand, an online
            marketplace, or a subscription-based store, our infrastructure
            adapts to your business model. With built-in compliance,
            multi-currency support, and real-time reporting, Finsol helps you
            simplify operations and drive growth across global markets.
          </p>

          <p>
            With rising customer expectations and evolving digital storefronts,
            the payment experience is now a key differentiator. Finsol’s unified
            online payment solutions enable businesses to deliver fast, secure,
            and localized PayIn experiences—across web, mobile, and app
            platforms. Our integrated Payout capabilities ensure seamless
            settlements to suppliers, affiliates, and logistics partners,
            removing bottlenecks and enhancing fulfillment efficiency. From
            order placement to last-mile payout, Finsol’s eCommerce payment
            gateway gives your business the agility and scalability it needs to
            compete and grow in today’s global commerce ecosystem
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
            src="/icons/industries-icons/retail & ecommerce/market.png"
            alt="Online marketplace"
            width={72}
            height={72}
          />
          <h3>Online Marketplace</h3>
          <p>
            Facilitate vendor payouts, customer payin, split payments, and
            high-volume transactions across diverse product categories.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/retail & ecommerce/ecommerce.png"
            alt="E-commerce"
            width={72}
            height={72}
          />
          <h3>E-commerce Portals</h3>
          <p>
            Accept payments locally and globally with real-time processing and
            multi-currency support.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/retail & ecommerce/gift-cards.png"
            alt="Gift cards"
            width={72}
            height={72}
          />
          <h3>Gift Cards &amp; Loyalty Programs</h3>
          <p>
            Enable smooth issuance, redemption, and balance management with
            flexible Payin and Payout capabilities.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/retail & ecommerce/c2c.png"
            alt="C2C marketplaces"
            width={72}
            height={72}
          />
          <h3>C2C Marketplaces</h3>
          <p>
            Support secure buyer-seller transactions with escrow, wallet
            management, and dispute-handling flows.
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
