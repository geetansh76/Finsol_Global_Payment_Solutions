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

export default function IndustryClient() {
  // ===== Replace with your production values =====
  const PAGE_URL = "https://www.finsol.group/industries/others-industry";
  const HOME_URL = "https://www.finsol.group";
  const OG_IMAGE_URL =
    "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

 
  return (
    <>
      {/* JSON-LD: WebSite (SearchAction) */}
      <Script
        id="ld-website-others-industry"
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
              Empowering Every Industry with{" "}
            </span>
            <span className={styles.blueText}>Seamless Payments</span>
          </>
        }
        description="Empowering every industry with seamless payments by simplifying collections, automating payouts, and enabling effortless scale across any business model."
        descriptionClass={styles.industriesDescription}
        showHero={true}
        heroVariant="industries"
        className={styles.industriesHero}
        titleClass={styles.industriesTitle}
        hideButton={true}
      />

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          Simplify, Automate, and Scale — One Platform for Every Industry
        </div>
        <div className={styles.content}>
          <p>
            Finsol’s payment infrastructure is built to support a wide range of
            industries with flexible PayIn and Payout capabilities. Whether you
            are collecting rent in real estate, selling tickets for live events,
            processing vendor payments in logistics, or managing invoices in
            professional services, our gateway adapts to your unique workflows.
            With real-time payment processing, multi-currency support, and
            integration with local payment methods, we help you operate
            efficiently and compliantly in every market you serve.
          </p>

          <p>
            For businesses seeking full control over the experience, our
            white-label payment gateway lets you launch fully branded platforms
            without building from scratch. You can manage everything from
            payment collection to disbursements and reporting — all under your
            own identity. From property managers and event organizers to
            delivery partners and creative agencies, Finsol empowers every
            sector to simplify operations, build trust, and grow faster.
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
            src="/icons/industries-icons/other-industries/property.png"
            alt="Property"
            width={72}
            height={72}
          />
          <h3>Real Estate &amp; Property Management</h3>
          <p>
            Collect rent, deposits, and service fees while managing
            disbursements to landlords and vendors with ease.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/other-industries/event-management.png"
            alt="Event Management"
            width={72}
            height={72}
          />
          <h3>Event Management &amp; Ticketing</h3>
          <p>
            Handle online ticket sales, refunds, and payouts to organizers or
            performers through a single platform.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/other-industries/logistics.png"
            alt="Logistics"
            width={72}
            height={72}
          />
          <h3>Logistics &amp; Delivery</h3>
          <p>
            Enable real-time collections, partner settlements, and operational
            payouts for fast-moving logistics workflows.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/icons/industries-icons/other-industries/professional-services.png"
            alt="Professional Services"
            width={72}
            height={72}
          />
          <h3>Professional Services &amp; Agencies</h3>
          <p>
            Simplify client invoicing and automate contractor or partner
            disbursements across projects.
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
