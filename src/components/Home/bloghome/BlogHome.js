"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useEffect, useState } from "react";
import styles from "./bloghome.module.css";

const POSTS = [
  {
    slug: "/blogs/crossborder-payments",
    title: "Cross-Border Payments Made Simple: Creating Global Opportunities",
    img: "/images/blogs-images/crossborder-payments.png",
  },
  {
    slug: "/blogs/international-payments",
    title: "Best Payment Gateways to Receive International Payments",
    img: "/images/blogs-images/international-payments.png",
  },
  {
    slug: "/blogs/instant-payments",
    title: "Instant Payout Payment Gateways for Fast and Secure Transactions",
    img: "/images/blogs-images/instant-payments.png",
  },
  {
    slug: "/blogs/whitelabel-payments",
    title: "White Label Payment Gateway: What It Is and Why Businesses Need It",
    img: "/images/blogs-images/whitelabel-payments.png",
  },
];

export default function BlogHome() {
  const LOOP = useMemo(() => [...POSTS, ...POSTS], []);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);

  // 🔁 pixel-perfect, smooth, infinite scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const calcHalf = () => {
      // track contains two identical halves
      halfRef.current = el.scrollWidth / 2;
    };

    const start = (t) => {
      lastRef.current = t;
      rafRef.current = requestAnimationFrame(tick);
    };

    const tick = (t) => {
      const last = lastRef.current;
      lastRef.current = t;

      if (!paused) {
        const dt = Math.min(50, t - last); // ms clamp for tab switches
        const pxPerSec = 60; // ✅ adjust belt speed here
        offsetRef.current += (pxPerSec * dt) / 1000;

        const half = halfRef.current || 1;
        if (offsetRef.current >= half) offsetRef.current -= half;

        el.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    // initial measurements (after images paint)
    const afterPaint = () => {
      calcHalf();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(start);
    };

    // recalc on resize
    const ro = new ResizeObserver(afterPaint);
    ro.observe(el);

    // small delay so images can size the slides
    const id = setTimeout(afterPaint, 0);

    return () => {
      clearTimeout(id);
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [paused, LOOP.length]);

  return (
    <section
      className={styles.wrap}
      aria-label="Blogs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-paused={paused ? "1" : "0"}
    >
      <div aria-hidden className={styles.bg} />
      <div aria-hidden className={styles.auroraA} />
      <div aria-hidden className={styles.auroraB} />

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>Blogs</span>
            <span aria-hidden className={styles.titleUnderline} />
          </h2>
          <Link href="/blogs" className={styles.more}>
            View more ↗
          </Link>
        </header>

        {/* belt */}
        <div className={styles.belt}>
          <ul className={styles.track} ref={trackRef} role="list">
            {LOOP.map((p, i) => (
              <li className={styles.slide} key={`${p.slug}-${i}`}>
                <Link
                  href={p.slug}
                  className={styles.card}
                  aria-label={p.title}
                >
                  <span className={styles.surface} aria-hidden />
                  <div className={styles.thumbWrap}>
                    {
                      
                      <Image
                        src={p.img}
                        alt=""
                        fill
                       
                        className={styles.thumb}
                        priority={i < 2}
                        quality={90} // request a crisper resource
                      />
                    }
                    <span className={styles.scrim} aria-hidden />
                    <span className={styles.spark} aria-hidden />
                  </div>
                  <h3 className={styles.caption}>{p.title}</h3>
                  <span className={styles.cta}>
                    Read article
                    {/* ✅ wrap the path in an SVG */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      className={styles.icon}
                    >
                      <path
                        d="M7 17L17 7M9 7h8v8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.fadeLeft} aria-hidden />
          <div className={styles.fadeRight} aria-hidden />
        </div>

        <div className={styles.progress} aria-hidden />
      </div>
    </section>
  );
}
