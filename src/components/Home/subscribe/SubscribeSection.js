"use client";
import { motion } from "framer-motion";
import styles from "./SubscribeSection.module.css";
import React from "react";
import Link from "next/link";

const MotionLink = motion(Link);

export default function SubscribeSection() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 16 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 12, delay: 1.5 },
    },
  };

  const renderAnimatedLine = (text) => (
    <motion.span variants={containerVariants} className={styles.line}>
      {text.split(" ").map((word, w) => (
        <React.Fragment key={w}>
          <span className={styles.word}>
            {word.split("").map((char, i) => (
              <motion.span
                key={`${w}-${i}`}
                variants={letterVariants}
                className={styles.letter}
              >
                {char}
              </motion.span>
            ))}
          </span>{" "}
        </React.Fragment>
      ))}
    </motion.span>
  );

  return (
    <section className={styles.subscribe}>
      {/* Bootstrap container with your scoped styles kept */}
      <div className={`container-xl ${styles.container}`}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles.heading}>
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>{renderAnimatedLine("Grow your business with")}</div>
                <div>
                  {renderAnimatedLine("cross-border ")}
                  <span
                    className={`${styles.doubleUnderline} ${styles.noUnderline}`}
                  >
                    {renderAnimatedLine("payment solutions")}
                  </span>
                </div>
              </motion.h2>
            </div>
          </div>
        </div>

        {/* CTA row */}
      <div className="row mt-2 mt-md-3">
  <div className="col-12 d-flex justify-content-center">
    <Link href="/contact" className={styles.ctaButton}>
      <motion.span
        variants={buttonVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{ display: "inline-block" }}
      >
        Contact Us
      </motion.span>
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}
