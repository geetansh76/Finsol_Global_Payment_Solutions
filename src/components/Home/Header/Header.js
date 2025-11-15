"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_TITLE = "Empowering Global Transactions That Scale";
const MotionLink = motion(Link);

export default function Header({
  title = DEFAULT_TITLE,
  description = "Unlock seamless global payment services with Finsol – the smarter way to collect and disburse cross-border payments. Our Payin and Payout solutions enable fast settlements, flexible currency options, and confidence at every step.",
  buttonText = "Get in Touch to Simplify Global Payments",
  minimal = false,
  showHero = true,
  heroVariant = "default",
  titleClass = "",
  descriptionClass = "",
  className = "",
  hideButton = false,
  videoSrc = "/video/home/finsol-banner.mp4",
  poster = "/video/finsol-banner-poster.jpg",
}) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const resolvedVideo = `${base}${videoSrc}`;
  const resolvedPoster = `${base}${poster}`;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([`.${styles.logo}`, `.${styles.navigation}`, `.${styles.extras}`], {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });
      setTimeout(() => ScrollTrigger.refresh(), 0);
    });
    return () => ctx.revert();
  }, []);

  const [shouldPlayVideo, setShouldPlayVideo] = useState(true);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldPlayVideo(!mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  const [videoReady, setVideoReady] = useState(false);
  const handleVideoReady = () => {
    setVideoReady(true);
    ScrollTrigger.refresh();
  };

  let titleNode;
  if (React.isValidElement(title)) {
    titleNode = title;
  } else if (typeof title === "string" && title === DEFAULT_TITLE) {
    titleNode = (
      <>
        <span className={styles.whiteText}>Empowering Global</span>{" "}
        <span className={styles.blueText}>Transactions That Scale</span>
      </>
    );
  } else {
    titleNode = title;
  }

  const [mobileOpen, setMobileOpen] = useState(false);
  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const burgerRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMobile();
    if (mobileOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) burgerRef.current?.focus();
  }, [mobileOpen]);

  return (
    <>
      {/* Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className="container-xxl">
          <nav className={`${styles.nav} navbar navbar-expand-md`} role="navigation" aria-label="Main">
            {/* Logo */}
            <div className={styles.logo}>
              <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
                <Image src="/images/logo.png" alt="Finsol Logo" width={154} height={56} priority />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className={`collapse navbar-collapse d-none d-md-flex`} id="mainNavDesktop">
              <div className={`${styles.navigation} ms-md-4`}>
                <MenuItems />
              </div>
              <div>
                <a href="https://login.finsol.group" className={styles.extras}>
                  Login
                </a>
              </div>
            </div>

            {/* Burger for mobile */}
            <button
              ref={burgerRef}
              className={`navbar-toggler ms-auto ${styles.burger}`}
              type="button"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              onClick={openMobile}
            >
              <span className={styles.burgerIcon} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              className={styles.backdrop}
              onClick={closeMobile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
            />
            <motion.aside
              className={styles.sidebar}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className={styles.sidebarHeader}>
                <Link href="/" onClick={closeMobile} className={styles.sidebarLogo}>
                  <Image src="/images/logo.png" alt="Finsol Logo" width={120} height={44} />
                </Link>
                <button className={styles.closeBtn} aria-label="Close menu" onClick={closeMobile}>
                  ✕
                </button>
              </div>
              <nav className={styles.sidebarNav}>
                <MenuItems onNavigate={closeMobile} />
              </nav>
              <div className={styles.sidebarFooter}>
                <Link
                  href="https://login.finsol.group"
                  className={`${styles.sidebarLogin} btn btn-outline-light w-100`}
                  onClick={closeMobile}
                >
                  Login
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      {showHero && (
        <section
          className={`${styles.hero} ${minimal ? styles.minimalHero : ""} ${
            heroVariant === "about" ? styles.heroAbout : ""
          } ${className}`}
        >
          <div className={styles.bgVideo} aria-hidden="true" style={{ backgroundImage: `url(${resolvedPoster})` }}>
            <video
              className={styles.bgVideoEl}
              poster={resolvedPoster}
              autoPlay={shouldPlayVideo}
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={handleVideoReady}
              key={resolvedVideo}
            >
              <source src={resolvedVideo.replace(/\.mp4$/i, ".webm")} type="video/webm" />
              <source src={resolvedVideo} type="video/mp4" />
            </video>
          </div>

          <div className={`${styles.overlay} ${videoReady ? styles.overlayOn : styles.overlayOff}`} aria-hidden="true" />

          <div className={`${styles.content} container-xxl`}>
            <h1 className={`${heroVariant === "about" ? styles.aboutTitle : styles.title} ${titleClass}`}>
              {titleNode}
            </h1>
            {!minimal && (
              <>
                <p className={`${styles.description} ${descriptionClass}`}>{description}</p>
                {!hideButton && (
                  <MotionLink href="/contact" className={styles.ctaButton}>
                    {buttonText}
                  </MotionLink>
                )}
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
