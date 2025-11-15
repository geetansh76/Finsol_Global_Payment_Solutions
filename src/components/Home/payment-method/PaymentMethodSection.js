// app/payment-method/page.js
"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PaymentMethodSection.module.css";

const PAYMENT_METHODS = [
  {
    icon: "/icons/payment-method-icons/cards.png",
    title: "Cards (Credit & Debit)",
    slug: "cards-credit-debit",
    description:
      "Accept all major credit and debit cards with secure global transactions.",
  },
  {
    icon: "/icons/payment-method-icons/netbanking.png",
    title: "Internet Banking",
    slug: "internet-banking",
    description: "Offer instant net banking for fast online payments.",
  },
  {
    icon: "/icons/payment-method-icons/qr.png",
    title: "QR Payments",
    slug: "qr-payments",
    description:
      "Let customers pay instantly by scanning QR codes — simple, contactless, and quick.",
  },
  {
    icon: "/icons/payment-method-icons/upi.png",
    title: "UPI",
    slug: "upi",
    description: "Enable real-time UPI transfers with instant confirmation.",
  },
  {
    icon: "/icons/payment-method-icons/wallet.png",
    title: "Digital Wallets",
    slug: "digital-wallets",
    description:
      "Support top wallets for a seamless mobile checkout experience.",
  },
  {
    icon: "/icons/payment-method-icons/bank-transfer.png",
    title: "Bank Transfer",
    slug: "bank-transfer",
    description: "Offer secure bank payments for local and global payouts.",
  },
];

export default function PaymentMethodArc() {
  const items = useMemo(() => PAYMENT_METHODS, []);
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);

  const next = () => setActive((i) => (i + 1) % items.length);
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);

  const nextRef = useRef(next);
  useEffect(() => {
    nextRef.current = next;
  }, [next]);

  const roleOf = (idx) => {
    const len = items.length;
    if (idx === active) return "roleCenter";
    if (idx === (active - 1 + len) % len) return "roleLeft";
    if (idx === (active + 1) % len) return "roleRight";
    if (idx === (active - 2 + len) % len) return "roleBackLeft";
    if (idx === (active + 2) % len) return "roleBackRight";
    return "roleHidden";
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.auroraA} aria-hidden />
      <div className={styles.auroraB} aria-hidden />

      <div className="container-xxl">
        <div className="row align-items-center justify-content-between g-2">
          <div className="col-12 col-md-8">
            <header className={`${styles.header} p-0`}>
              <div>
                <h2 className={styles.title}>
                  <span className={styles.titleGradient}>Payment Method</span>
                  <span aria-hidden className={styles.titleUnderline} />
                </h2>
                <p className={styles.subtitle}>
                  Designed to support every payment method, for every market.
                </p>
              </div>
            </header>
          </div>

          <div className="col-12 col-md-4 text-md-end">
            <Link
              href="/payment-method/payment-method-all"
              className={`${styles.seeAll} d-inline-flex justify-content-center`}
              style={{ position: "relative", zIndex: 10 }}
            >
              See all payment types
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={styles.seeAllIcon}
              >
                <path
                  d="M7 17L17 7M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <div
              className={`${styles.container} mx-auto`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className={`${styles.stage} position-relative`}
                data-paused={paused ? "1" : "0"}
              >
                {items.map((m, i) => (
                  <article
                    key={`${m.slug}-${i}`}
                    className={`${styles.card} ${styles[roleOf(i)]}`}
                  >
                    <span className={styles.surface} aria-hidden />

                    <div className={styles.iconWrap}>
                      <span className={styles.iconPlate} aria-hidden />
                      <span className={styles.iconHalo} aria-hidden />
                      <span className={styles.orbit} aria-hidden />
                      <Image
                        src={m.icon}
                        alt={m.title}
                        width={72}
                        height={72}
                        className={styles.icon}
                      />
                    </div>

                    <h3 className={styles.cardTitle}>{m.title}</h3>
                    <p className={styles.cardDesc}>{m.description}</p>

                    <Link
                      href={`/payment-method/${m.slug}`}
                      className={styles.cta}
                    >
                      Learn More
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        className={styles.ctaIcon}
                        aria-hidden
                      >
                        <path
                          d="M7 17L17 7M9 7h8v8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </article>
                ))}

                {/* arrows layer – keep visible/clickable on mobile */}
                <div
                  className={`position-absolute top-50 start-0 end-0 translate-middle-y d-flex justify-content-between ${styles.arrows}`}
                >
                  <button
                    className={`${styles.nav} ${styles.navLeft} d-grid`}
                    onClick={prev}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    className={`${styles.nav} ${styles.navRight} d-grid`}
                    onClick={next}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
