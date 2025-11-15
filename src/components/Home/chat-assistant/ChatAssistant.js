// ChatAssistantButton.jsx
"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ChatAssistantButton.module.css";
import Image from "next/image";

export default function ChatAssistant() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const node = (
    <div className={styles.whatsappIcon} aria-label="WhatsApp quick connect">
      <a
        className={styles.iconButton}
        href="https://wa.me/919717036057"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.pulse} aria-hidden="true" />
        <Image
          className={styles.iconImg}
          src="/icons/chatassistant-icons/whatsapp-icon.png"
          alt="WhatsApp"
          width={60}
          height={60}
        />
      </a>
      <div className={styles.cta}>Quick Connect!</div>
    </div>
  );
  if (!mounted) return null;
  return createPortal(node, document.body);
}
