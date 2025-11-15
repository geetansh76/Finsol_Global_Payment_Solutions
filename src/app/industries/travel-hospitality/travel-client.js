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

export default function TravelClient() {
  // ========= Replace with live values =========
  const PAGE_URL = "https://www.finsol.group/industries/travel-hospitality";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL = "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

 
  return (
    <>
      {/* JSON-LD: WebSite (SearchAction) */}
      <Script
        id="ld-website-travel-hospitality"
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
              Global Payment Gateway Solutions for{" "}
            </span>
            <span className={styles.blueText}>Travel &amp; Hospitality</span>
          </>
        }
        description="Effortlessly accept bookings, manage guest payments, and automate vendor payouts across regions with our unified PayIn and Payout infrastructure"
        descriptionClass={styles.industriesDescription}
        showHero={true}
        heroVariant="industries"
        className={styles.industriesHero}
        titleClass={styles.industriesTitle}
        hideButton={true}
      />

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Unified Payments for Modern Travel and Hospitality Brands
        </div>
        <div className={styles.content}>
          <p>
            Finsol delivers enterprise-grade online payment gateway solutions
            tailored for the travel and hospitality sector. Whether you are a
            global hotel chain, a regional travel agency, or an online booking
            platform, our PayIn infrastructure enables secure, real-time
            acceptance of payments via cards, digital wallets, UPI, and bank
            transfers. With multi-currency capabilities and localized payment
            support, you can offer frictionless booking experiences to customers
            worldwide. Our intelligent routing, automated reconciliation, and
            compliance-ready framework help streamline your operations while
            reducing payment failures and delays.
          </p>

          <p>
            Our Payout capabilities ensure fast, compliant disbursements to your
            vendors, affiliates, and service partners. From hotel commissions to
            tour operator settlements, our platform supports scalable and
            scheduled payouts across regions. For businesses looking to build
            and own their financial journey, our white-label payment gateway
            allows you to launch a fully branded platform — giving you complete
            control over user experience, pricing models, and operational
            workflows. With Finsol as your payments partner, you gain a unified
            system to manage the full transaction lifecycle — built for
            performance, designed for global growth.
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
            src="/icons/industries-icons/travel & hospitality/travel-agency.png"
            alt="Online travel agencies"
            width={72}
            height={72}
          />
          <h3>Online Travel Agencies (OTAs)</h3>
          <p>
            Power global bookings, split payments, refunds, and multi-party
            settlements across partners and suppliers.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/travel & hospitality/hotels.png"
            alt="Hotels & resorts"
            width={72}
            height={72}
          />
          <h3>Hotels &amp; Resorts</h3>
          <p>
            Accept deposits and bookings locally and globally with real-time
            processing and multi-currency support.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/travel & hospitality/airlines.png"
            alt="Airlines & aggregators"
            width={72}
            height={72}
          />
          <h3>Airlines &amp; Aggregators</h3>
          <p>
            Optimize checkout, enable ancillary upsell flows, and support
            flexible refund and voucher management.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/travel & hospitality/vacations.png"
            alt="Tours & vacations"
            width={72}
            height={72}
          />
          <h3>Tours &amp; Vacations</h3>
          <p>
            Support secure guest payments, escrow-style flows, and automated
            payouts to guides and local partners.
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
