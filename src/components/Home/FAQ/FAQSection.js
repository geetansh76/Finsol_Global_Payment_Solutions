"use client";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./FAQ.module.css";
import FAQCard from "./FAQCard";

const defaultFaqs = [
  {
    question: "What is Finsol and how does it work?",
    answer:
      "Finsol is a financial technology company that provides various services and products related to financial solutions, including software development for the financial industry, payment processing, and algorithmic trading platforms.",
  },
  {
    question: "What industries does Finsol serve?",
    answer:
      "Finsol serves Digital & Subscriptions, eCommerce, Travel, Fintech, Healthcare, and SaaS industries with secure payment processing, instant payouts, and scalable merchant solutions for global and domestic transactions.",
  },
  {
    question: "Can I start accepting international payments using finsol?",
    answer:
      "Yes. You can easily accept international payments through a unified platform with support for multi-currency transactions, global cards, cross-border bank transfers, and digital wallets. The system ensures fast settlements, transparent FX rates, and full compliance with global standards, making global expansion seamless and secure.",
  },
  {
    question: "What types of payment methods does Finsol support?",
    answer:
      "Finsol supports a wide range of payment methods, including Credit/Debit Cards, UPI, Net Banking, Digital Wallets, and QR Codes. This makes it a reliable and flexible payment gateway service provider for businesses seeking seamless and secure online transactions.",
  },
];

export default function FAQSection({
  title = "Frequently Ask Questions",
  subtitle = "Everything you need to know about global payments",
  items = defaultFaqs,
  className = "",
  defaultOpenIndex = 0,
}) {
  return (
    <section className={`${styles.faqSection} ${className}`}>
      <div className="container-xxl">
        <div className="row g-4 g-lg-5 align-items-start">
          {/* Sticky header (desktop) */}
          <aside className={`col-12 col-lg-5 ${styles.header}`}>
            <h2 className={styles.faqHeading}>{title}</h2>
            <p className={styles.faqSubheading}>{subtitle}</p>
            <div className={styles.headerAccent} aria-hidden />
          </aside>

          {/* List */}
          <motion.div
            className={`col-12 col-lg-7 ${styles.faqList}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {items.map((faq, index) => (
              <motion.div
                key={index}
                className="w-100"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <FAQCard faq={faq} defaultOpen={index === defaultOpenIndex} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

FAQSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
    })
  ),
  className: PropTypes.string,
  defaultOpenIndex: PropTypes.number,
};
