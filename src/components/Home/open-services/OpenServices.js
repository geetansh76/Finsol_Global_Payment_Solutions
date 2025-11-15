"use client";
import styles from "./OpenServices.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function OpenServices() {
  const ease = [0.22, 1, 0.36, 1];

  const sectionStagger = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease, staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, delay: 0.08 * i, ease },
    }),
    hover: {
      y: -6,
      boxShadow:
        "0 14px 40px rgba(2,6,23,.18), 0 4px 14px rgba(59,130,246,.12)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { y: -2, scale: 0.997 },
  };

  return (
    <motion.section
      className={styles.openServices}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionStagger}
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div className={styles.header} variants={sectionStagger}>
          <motion.h2
            variants={sectionStagger}
            className={styles.title}
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0, rgba(96,165,250,1), rgba(167,139,250,0.9) 55%, rgba(167,139,250,0.6) 72%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Solutions
          </motion.h2>

          <motion.p variants={sectionStagger}>
            We provide a unified platform for businesses to accept payments,
            manage payouts, and create branded financial experiences. With one
            integration, you can handle both local and international
            transactions seamlessly, ensuring secure, real-time transfers to
            partners, vendors, and users.
          </motion.p>

          <motion.p variants={sectionStagger}>
            For companies looking to build their own payment ecosystem, Finsol
            offers white-label gateway software with full control over UI,
            pricing, and operations. From onboarding to compliance, we deliver
            everything needed to launch faster and scale with confidence.
          </motion.p>
        </motion.div>

        {/* Cards Grid: 3 cards (no uneven rows) */}
        <div className={styles.cardsGrid}>
          {/* Payins */}
          <motion.div
            className={styles.card}
            variants={cardVariants}
            custom={1}
            whileHover="hover"
            whileTap="tap"
          >
            <Image
              src="/icons/open-services/payins.png"
              alt="Payins Icon"
              height={88}
              width={88}
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>Payins</h3>
            <p className={styles.cardBody}>
              Our Payin solutions enable businesses to collect payments
              internationally through a single, secure platform. With real-time
              processing, multi-currency support, and accelerated settlements,
              businesses gain the speed, flexibility, and reliability needed to
              scale efficiently.
            </p>
            <Link
              href="/solutions/payins"
              aria-label="Learn more about Payins"
              className={styles.link}
            >
              Learn More
              <Image
                src="/icons/open-services/Vector.png"
                alt="Vector Icon"
                height={18}
                width={18}
                className={styles.linkIcon}
              />
            </Link>
          </motion.div>

          {/* Payouts */}
          <motion.div
            className={styles.card}
            variants={cardVariants}
            custom={2}
            whileHover="hover"
            whileTap="tap"
          >
            <Image
              src="/icons/open-services/payouts.png"
              alt="Payouts Icon"
              height={88}
              width={88}
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>Payouts</h3>
            <p className={styles.cardBody}>
              Payout solutions simplify how businesses disburse funds to partners,
              vendors and users. With built-in compliance and currency handling,
              every transaction is fast, reliable and ready to scale with your
              business.
            </p>
            <Link
              href="/solutions/payouts"
              aria-label="Learn more about Payouts"
              className={styles.link}
            >
              Learn More
              <Image
                src="/icons/open-services/Vector.png"
                alt="Vector Icon"
                width={18}
                height={18}
                className={styles.linkIcon}
              />
            </Link>
          </motion.div>

          {/* White labeling */}
          <motion.div
            className={styles.card}
            variants={cardVariants}
            custom={3}
            whileHover="hover"
            whileTap="tap"
          >
            <Image
              src="/icons/open-services/white-labeling.png"
              alt="White Label Icon"
              height={88}
              width={88}
              className={styles.cardIcon}
            />
            <h3 className={styles.cardTitle}>White labeling</h3>
            <p className={styles.cardBody}>
              Our white-label solution empowers businesses to launch their own
              branded payment platform using our secure, scalable infrastructure.
              From PayIn to PayOut, you can offer seamless global transactions
              under your brand - with full control over the user experience,
              pricing, and operations.
            </p>
            <Link
              href="/solutions/whitelabeling"
              aria-label="Learn more about White Labeling"
              className={styles.link}
            >
              Learn More
              <Image
                src="/icons/open-services/Vector.png"
                alt="Vector Icon"
                height={18}
                width={18}
                className={styles.linkIcon}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
