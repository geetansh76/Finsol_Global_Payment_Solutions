// app/thankyou/page.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./thankyou.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export default function ThankYouPage() {
  const router = useRouter();
  useEffect(() => {
    const t = setTimeout(() => router.replace("/"), 5000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <main className={styles.wrap} aria-labelledby="thankyou-title">
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className={styles.confetti} aria-hidden />

      <motion.section
        className={styles.card}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className={styles.badge} variants={fadeUp}>
          <svg
            viewBox="0 0 64 64"
            className={styles.checkSvg}
            aria-hidden
            focusable="false"
          >
            <defs>
              <radialGradient id="tickGrad" cx="35%" cy="20%" r="80%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="70%" stopColor="#7aa7ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#23d3b4" stopOpacity="1" />
              </radialGradient>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#185ab0" />
                <stop offset="50%" stopColor="#63e3ff" />
                <stop offset="100%" stopColor="#0b8a86" />
              </linearGradient>
              <filter
                id="tickShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="1"
                  stdDeviation="1.2"
                  floodColor="rgba(16,58,115,0.45)"
                />
              </filter>
            </defs>
            <circle cx="32" cy="32" r="28" className={styles.circle} />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="64 24"
              animate={{ rotate: 360 }}
              transform="translate(32 32) rotate(0) translate(-32 -32)"
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.path
              d="M20 33.5l8 8 16-18"
              fill="none"
              stroke="url(#tickGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#tickShadow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.15 }}
            />
          </svg>
        </motion.div>

        <motion.h1
          id="thankyou-title"
          className={styles.title}
          variants={fadeUp}
        >
          Thank you!
        </motion.h1>
        <motion.p className={styles.subtitle} variants={fadeUp}>
          We’ve received your details. You’ll hear from us shortly. Redirecting
          to home…
        </motion.p>

        <motion.div className={styles.ctaRow} variants={fadeUp}>
          <Link
            href="/"
            className={styles.btnPrimary}
            aria-label="Go back to Home"
          >
            Go to Home
          </Link>
          <Link
            href="/payment-method/payment-method-all"
            className={styles.btnGhost}
            aria-label="Explore payment methods"
          >
            Explore Payment Methods
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
