'use client';

import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import styles from './StatsSection.module.css';

/* ---------- custom hook (top-level, not inside a component) ---------- */
function useCountUp(end, duration = 2.4, play = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!play) return;

    let current = 0;
    const fps = 60;
    const inc = end / (duration * fps);
    const t = setInterval(() => {
      current += inc;
      if (current >= end) {
        setCount(end);
        clearInterval(t);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / fps);

    return () => clearInterval(t);
  }, [end, duration, play]);

    return count;
}

/* ---------- small formatter ---------- */
function format(n, compact) {
  if (!compact) return n.toLocaleString();
  if (n >= 1_000_000) return `${Math.round(n / 1_000_000)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return `${n}`;
}

/* ---------- child card (hooks live here, not inside .map) ---------- */
function StatCard({ stat, play, i, variants }) {
  const v = useCountUp(stat.value, 2.4, play);
  const display = `${format(v, stat.compact)}${stat.suffix || ''}`;

  return (
    <motion.div
      className={`${styles.card} ${play ? styles.cardActive : ''}`}
      custom={i}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className={`${styles.circle} ${play ? styles.circlePlay : ''}`}>
        <div className={styles.orbit}><span className={styles.dot} /></div>

        <div className={styles.circleInner}>
          <motion.span
            key={display}
            className={styles.metric}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {display}
          </motion.span>
        </div>
      </div>

      <motion.p
        className={styles.label}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}

/* ---------- main section ---------- */
export default function StatsSection() {
  const [play, setPlay] = useState(false);

  const stats = [
    { value: 1, label: 'API Integration' },
    { value: 25, label: 'Currencies', suffix: '+' },
    { value: 100, label: 'Alternative Payment Methods', suffix: '+' },
    { value: 1_000_000, label: 'Payments/Day', compact: true, suffix: '+' },
  ];

  const cardVariants = {
    hidden: (i) => ({ opacity: 0, y: 40, rotateX: i % 2 ? 10 : -10, scale: 0.96 }),
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 16 },
    },
  };

  return (
    <motion.section
      className={styles.statsSection}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setPlay(true)}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8 }}
    >
      {/* Bootstrap container to constrain width & reduce side gaps on phones */}
      <div className="container-xl px-2 px-md-3">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
         Who we are ,what we do?
        </motion.h2>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          We empower startups and enterprises worldwide with reliable, fast, and precise cross-border transaction support.
        </motion.p>

        <div className={styles.splitBg} aria-hidden="true" />

        {/* Bootstrap grid: 1 col (xs), 2 cols (sm/md), 4 cols (lg+) */}
        <div className="row g-3 g-md-4 justify-content-center">
          {stats.map((stat, i) => (
            <div key={stat.label ?? i} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div className="w-100">
                <StatCard stat={stat} play={play} i={i} variants={cardVariants} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
