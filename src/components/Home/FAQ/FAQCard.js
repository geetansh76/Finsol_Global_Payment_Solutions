"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

export default function FAQCard({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const innerRef = useRef(null);
  const [h, setH] = useState(0);

  const uidRef = useRef(`faq-${Math.random().toString(36).slice(2, 10)}`);
  const id = uidRef.current;

  useEffect(() => {
    if (innerRef.current) setH(innerRef.current.scrollHeight || 0);
  }, [faq.answer]);

  useEffect(() => {
    if (!open || !innerRef.current) return;
    const ro = new ResizeObserver(() => setH(innerRef.current.scrollHeight || 0));
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [open]);

  useEffect(() => {
    const onSomeoneOpened = (e) => {
      if (e?.detail?.id !== id) setOpen(false);
    };
    window.addEventListener("faq:open", onSomeoneOpened);
    if (defaultOpen) {
      window.dispatchEvent(new CustomEvent("faq:open", { detail: { id } }));
    }
    return () => window.removeEventListener("faq:open", onSomeoneOpened);
  }, [id, defaultOpen]);

  const handleToggle = () => {
    if (open) setOpen(false);
    else {
      window.dispatchEvent(new CustomEvent("faq:open", { detail: { id } }));
      setOpen(true);
    }
  };

  const bodyId = `${id}-body`;

  return (
    <motion.article
      className={`${styles.card} ${
        open ? styles.cardOpen : styles.cardClosed
      } shadow-sm rounded-3`}
      initial={false}
      whileHover={{ rotateX: -1.5, rotateY: 1.5, y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {/* Animated accent rail */}
      <div aria-hidden className={styles.rail}>
        <div className={styles.railGlow} />
      </div>

      {/* Question row */}
      <button
        className={`${styles.question} w-100 d-flex align-items-center justify-content-between`}
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        <span className={styles.qText}>{faq.question}</span>

        {/* Morphing +/− icon */}
        <span className={`${styles.iconWrap}`} aria-hidden>
          <svg viewBox="0 0 24 24" className={styles.icon}>
            <motion.rect x="5" y="11" width="14" height="2" rx="1" />
            <motion.rect
              x="11"
              y="5"
              width="2"
              height="14"
              rx="1"
              animate={{ scaleY: open ? 0 : 1 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "12px 12px" }}
            />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            id={bodyId}
            className={`${styles.answerWrap}`}
            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ height: h, opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div ref={innerRef} className={`${styles.answerInner}`}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* animated highlight sweep across the top edge */}
      <div aria-hidden className={styles.sweep} />
    </motion.article>
  );
}
