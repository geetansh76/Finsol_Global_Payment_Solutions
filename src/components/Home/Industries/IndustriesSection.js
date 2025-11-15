"use client";

import styles from "./IndustriesSection.module.css";
import Image from "next/image";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 14, delay: 0.15 },
  },
};

export default function Industries() {
  const [activeTab, setActiveTab] = useState("digital-subscriptions");


   const isSmall = useMediaQuery("(max-width:768px)");

  const TABS = [
    {
      value: "digital-subscriptions",
      label: "Digital & Subscriptions",
      content: (
        <>
          <div className={styles.card}>
            <Image
              src="/images/industries/digital-subscription/elearning.png"
              alt="E-learning"
              width={72}
              height={72}
            />
            <h3>E-learning</h3>
            <p>
              Enable fast, recurring fee collection for online courses,
              memberships, and test prep platforms.
            </p>
          </div>

          <div className={styles.centerCard}>
            <h1>Digital &amp; Subscriptions</h1>
            <p>
              Streamline subscription payments and digital purchases with
              real-time, cross-border payment support.
            </p>
            <Image
              src="/images/industries/digital-subscription/digital.png"
              alt="Digital & Subscriptions"
              width={454}
              height={298}
            />
            <MotionLink
              href="/industries/digital-subscriptions"
              className={styles.learnMore}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              Learn More
            </MotionLink>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/digital-subscription/gaming.png"
              alt="Gaming"
              width={72}
              height={72}
            />
            <h3>Gaming</h3>
            <p>
              Power in-game purchases, subscriptions, and creator payouts with
              secure, real-time transactions.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/digital-subscription/saas.png"
              alt="SaaS"
              width={72}
              height={72}
            />
            <h3>SaaS</h3>
            <p>
              Support flexible billing cycles, global subscriptions, and
              seamless onboarding for software platforms.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/digital-subscription/streaming.png"
              alt="Streaming"
              width={72}
              height={72}
            />
            <h3>Streaming</h3>
            <p>
              Manage global subscriptions and content access with effortless
              recurring payment support.
            </p>
          </div>
        </>
      ),
    },

    {
      value: "travel-hospitality",
      label: "Travel & Hospitality",
      content: (
        <>
          <div className={styles.card}>
            <Image
              src="/images/industries/travel-hospitality/travel-agency.png"
              alt="Travel Agency"
              width={72}
              height={72}
            />
            <h3>Travel Agency</h3>
            <p>
              Collect customer payments and settle with local and global
              partners through one streamlined platform.
            </p>
          </div>

          <div className={styles.centerCard}>
            <h1>Travel &amp; Hospitality</h1>
            <p>
              Support global bookings and vendor payouts with secure,
              region-friendly payment solutions.
            </p>
            <Image
              src="/images/industries/travel-hospitality/travel-hospitality.png"
              alt="Travel & Hospitality"
              width={454}
              height={298}
            />
            <MotionLink
              href="/industries/travel-hospitality"
              className={styles.learnMore}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              Learn More
            </MotionLink>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/travel-hospitality/airlines.png"
              alt="Airlines"
              width={72}
              height={72}
            />
            <h3>Airlines</h3>
            <p>
              Collect customer payments and settle with local and global
              partners through one streamlined platform.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/travel-hospitality/hotels.png"
              alt="Hotels"
              width={72}
              height={72}
            />
            <h3>Hotels</h3>
            <p>
              Enable direct bookings, instant confirmations, and automated
              payouts to property owners or franchisees.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/travel-hospitality/vacations.png"
              alt="Vacations"
              width={72}
              height={72}
            />
            <h3>Vacation Rentals &amp; Homestays</h3>
            <p>
              Manage host collections and guest payments securely, with
              region-specific support and timely disbursements.
            </p>
          </div>
        </>
      ),
    },

    {
      value: "remittance-fintech",
      label: "Remittance & Fintech",
      content: (
        <>
          <div className={styles.card}>
            <Image
              src="/images/industries/remittance-fintech/cross-border.png"
              alt="Cross Border"
              width={72}
              height={72}
            />
            <h3>Cross-Border Remittance Apps</h3>
            <p>
              Enable fast, compliant international transfers with real-time
              settlement and local payout options.
            </p>
          </div>

          <div className={styles.centerCard}>
            <h1>Remittance &amp; Fintech</h1>
            <p>
              Enable fast, compliant international transfers with real-time
              settlement and local payout options.
            </p>
            <Image
              src="/images/industries/remittance-fintech/remittance-fintech.png"
              alt="Remittance & Fintech"
              width={454}
              height={298}
            />
            <MotionLink
              href="/industries/remittance-fintech"
              className={styles.learnMore}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              Learn More
            </MotionLink>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/remittance-fintech/payroll.png"
              alt="Payroll"
              width={72}
              height={72}
            />
            <h3>Payroll &amp; Freelancer Platforms</h3>
            <p>
              Automate salary disbursements and global freelancer payouts with
              full transparency and control.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/remittance-fintech/investment.png"
              alt="Investment & WealthTech"
              width={72}
              height={72}
            />
            <h3>Investment &amp; WealthTech</h3>
            <p>
              Support contributions, redemptions, and investor transactions with
              secure infrastructure.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/remittance-fintech/digital-wallets.png"
              alt="Digital Wallets"
              width={72}
              height={72}
            />
            <h3>Digital Wallets &amp; Neobanks</h3>
            <p>
              Power deposits, transfers, and merchant payments with scalable,
              API-first infrastructure.
            </p>
          </div>
        </>
      ),
    },

    {
      value: "healthcare-wellness",
      label: "Healthcare & Wellness",
      content: (
        <>
          <div className={styles.card}>
            <Image
              src="/images/industries/healthcare-wellness/pharmacies.png"
              alt="Pharmacies"
              width={72}
              height={72}
            />
            <h3>Pharmacies &amp; Health Stores</h3>
            <p>
              Enable secure online payments for prescriptions, essentials, and
              recurring medicine subscriptions.
            </p>
          </div>

          <div className={styles.centerCard}>
            <h1>Healthcare &amp; Wellness</h1>
            <p>
              Manage patient payments, vendor disbursements, and digital health
              transactions with ease.
            </p>
            <Image
              src="/images/industries/healthcare-wellness/healthcare-wellness.png"
              alt="Healthcare & Wellness"
              width={454}
              height={298}
            />
            <MotionLink
              href="/industries/healthcare-wellness"
              className={styles.learnMore}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              Learn More
            </MotionLink>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/healthcare-wellness/diagnostics.png"
              alt="Diagnostics"
              width={72}
              height={72}
            />
            <h3>Diagnostics &amp; Lab Booking</h3>
            <p>
              Support real-time bookings, payments, and partner settlements with
              built-in compliance.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/healthcare-wellness/fitness.png"
              alt="Fitness"
              width={72}
              height={72}
            />
            <h3>Wellness &amp; Fitness</h3>
            <p>
              Manage subscriptions, session bookings, and trainer payouts
              through a unified experience.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/healthcare-wellness/hospital.png"
              alt="Hospital"
              width={72}
              height={72}
            />
            <h3>Hospitals &amp; Clinics</h3>
            <p>
              Simplify billing, appointment collections, and vendor
              disbursements — all in one platform.
            </p>
          </div>
        </>
      ),
    },

    {
      value: "retail-ecommerce",
      label: "Retail & eCommerce",
      content: (
        <>
          <div className={styles.card}>
            <Image
              src="/images/industries/retail-ecommerce/market.png"
              alt="Marketplace"
              width={72}
              height={72}
            />
            <h3>Online Marketplace</h3>
            <p>
              Facilitate vendor payouts, customer pay-ins, split payments, and
              high-volume transactions.
            </p>
          </div>

          <div className={styles.centerCard}>
            <h1>Retail &amp; E-commerce</h1>
            <p>
              Support cross-border shopping with local payment options and fast
              settlements.
            </p>
            <Image
              src="/images/industries/retail-ecommerce/retail-ecommerce.png"
              alt="Retail & E-commerce"
              width={454}
              height={298}
            />
            <MotionLink
              href="/industries/retail-ecommerce"
              className={styles.learnMore}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              Learn More
            </MotionLink>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/retail-ecommerce/ecommerce.png"
              alt="E-commerce"
              width={72}
              height={72}
            />
            <h3>E-commerce Portals</h3>
            <p>
              Accept payments locally and globally with real-time processing and
              multi-currency support.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/retail-ecommerce/gift-cards.png"
              alt="Gift Cards"
              width={72}
              height={72}
            />
            <h3>Gift Cards &amp; Loyalty</h3>
            <p>
              Enable issuance, redemption, and balance management with flexible
              Pay-in and Payout.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/retail-ecommerce/c2c.png"
              alt="C2C"
              width={72}
              height={72}
            />
            <h3>C2C Marketplaces</h3>
            <p>
              Support secure buyer-seller transactions with escrow, wallets, and
              dispute handling.
            </p>
          </div>
        </>
      ),
    },

    {
      value: "other-industry",
      label: "Other & Industries",
      content: (
        <>
          <div className={styles.card}>
            <Image
              src="/images/industries/other-industries/property.png"
              alt="Real Estate"
              width={72}
              height={72}
            />
            <h3>Real Estate &amp; Property</h3>
            <p>
              Collect rent, deposits, and service fees while managing
              disbursements to landlords and vendors.
            </p>
          </div>

          <div className={styles.centerCard}>
            <h1>Other &amp; Industries</h1>
            <p>
              Flexible solutions for unique payment workflows across any sector.
            </p>
            <Image
              src="/images/industries/other-industries/other-industry.png"
              alt="Other Industries"
              width={454}
              height={298}
            />
            <MotionLink
              href="/industries/others-industry"
              className={styles.learnMore}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              Learn More
            </MotionLink>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/other-industries/event-management.png"
              alt="Event"
              width={72}
              height={72}
            />
            <h3>Event Management</h3>
            <p>
              Handle ticket sales, refunds, and payouts to organizers or
              performers in one place.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/other-industries/logistics.png"
              alt="Logistics"
              width={72}
              height={72}
            />
            <h3>Logistics &amp; Delivery</h3>
            <p>
              Enable real-time collections, partner settlements, and operational
              payouts.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/industries/other-industries/professional-services.png"
              alt="Agencies"
              width={72}
              height={72}
            />
            <h3>Professional Services</h3>
            <p>
              Simplify invoicing and automate contractor or partner
              disbursements across projects.
            </p>
          </div>
        </>
      ),
    },
  ];

  const handleTabChange = (_e, newValue) => setActiveTab(newValue);

  return (
    <section className={styles.industriesSection}>
      <div className="container-xxl">
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9 text-center">
            <div className={styles.headerGroup}>
              <h2 className={styles.title}>Industries</h2>
              <p className={styles.trustedLine}>
                Trusted by businesses across sectors and borders
              </p>
              <p className={styles.description}>
                We support a diverse range of industries with adaptable,
                enterprise-ready payment solutions. Whether you’re in fintech,
                SaaS, eCommerce, or operating a global platform, our
                infrastructure scales with your business for faster, secure
                transactions across regions.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs (desktop = centered; mobile = scrollable slider) */}
        <div className="row">
          <div className="col-12">
            <Tabs
              value={activeTab}
              onChange={(_e, v) => setActiveTab(v)}
              aria-label="Industries tabs"
              variant={isSmall ? "scrollable" : "standard"}     // ← slider only on small
              scrollButtons={isSmall ? "auto" : false}          // ← arrows only on small
              allowScrollButtonsMobile={isSmall}
              className={styles.tabs}
              TabIndicatorProps={{ className: styles.tabIndicator }}
              centered={!isSmall}                                // ← center on desktop
            >
              {TABS.map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  label={tab.label}
                  className={styles.tab}
                  disableRipple
                />
              ))}
            </Tabs>
          </div>
        </div>

        {/* Cards grid */}
        <div className="row justify-content-center g-3 g-md-4">
          <div className="col-12">
            <div className={`${styles.cardGrid} mx-auto`}>
              {TABS.find((t) => t.value === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




