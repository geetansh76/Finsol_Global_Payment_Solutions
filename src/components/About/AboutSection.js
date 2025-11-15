"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const cards = [
    {
      title: "Endless Payment Possibilities",
      number: "1",
      text: "From card payments to bank transfers, wallets, UPI, and more, we enable businesses to offer diverse, region-specific online payment methods that drive conversions and customer trust.",
    },
    {
      title: "Global Perspective, Local Insight",
      number: "2",
      text: "Our experts bring deep regional knowledge with global experience — helping clients confidently navigate new markets with local payment flows, currencies, and compliance.",
    },
    {
      title: "Complexity is Where We Thrive",
      number: "3",
      text: "We specialize in solving the challenges others avoid — fragmented markets, compliance barriers, and cross-border settlement. If it's difficult, we’re already working on it.",
    },
    {
      title: "Designed to Scale",
      number: "4",
      text: "Our infrastructure is built for growth — whether you're launching in one market or 20, managing thousands of payouts, or scaling your own white-label platform.",
    },
  ];

  const MotionLink = motion(Link);

  const buttonVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const VIDEO_SRC = "/video/about_us/company-video.mp4";
  const POSTER = "/images/company-video-poster.jpg";

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Callback ref (prevents "Expected ref..." runtime error in some builds)
  const setVideoRef = useCallback((node) => {
    videoRef.current = node || null;
  }, []);

  const isYouTube = useMemo(
    () => /youtube\.com|youtu\.be/i.test(VIDEO_SRC),
    [VIDEO_SRC]
  );

  const { youTubeEmbed, youTubeId } = useMemo(() => {
    if (!isYouTube) return { youTubeEmbed: "", youTubeId: "" };
    try {
      const url = new URL(VIDEO_SRC, "https://dummy.origin");
      let id = url.searchParams.get("v") || "";
      if (!id && /youtu\.be/i.test(url.hostname))
        id = url.pathname.replace("/", "");
      const embed = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      return { youTubeEmbed: embed, youTubeId: id };
    } catch {
      return { youTubeEmbed: VIDEO_SRC, youTubeId: "" };
    }
  }, [VIDEO_SRC, isYouTube]);

  const handlePlay = async () => {
    if (isYouTube) {
      setPlaying(true);
      return;
    }
    setPlaying(true);
    requestAnimationFrame(async () => {
      const el = videoRef.current;
      if (!el) return;
      try {
        await el.play();
      } catch {
        try {
          el.muted = true;
          await el.play();
          setTimeout(() => {
            try {
              el.muted = false;
            } catch {}
          }, 150);
        } catch (err2) {
          console.error("Video play failed:", err2);
        }
      }
    });
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onEnded = () => setPlaying(false);
    const onError = () => console.error("Video error:", el.error);
    el.addEventListener("ended", onEnded);
    el.addEventListener("error", onError);
    return () => {
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("error", onError);
    };
  }, [playing]);

  return (
    <>
      {/* ===== Experts In ===== */}
      <section className="position-relative py-5 bg-white overflow-hidden">
        <div className="container">
          <h2 className={`${styles.heading} fw-bold text-center mb-3`}>
            Experts In
          </h2>
          <p
            className={`${styles.description} text-center mx-auto mb-4`}
            style={{ maxWidth: 900 }}
          >
            We combine global expertise with innovative thinking to deliver
            payment solutions that grow with your business.
          </p>

          {/* Responsive cards: 1 col on xs, 2 cols ≥ md */}
          <div className="row g-4">
            {cards.map((card, idx) => (
              <div className="col-12 col-md-6" key={card.number}>
                <div className={`${styles.cardGrad} h-100 p-4`}>
                  <h3 className="h5 fw-bold d-flex align-items-center gap-2 mb-2">
                    <span className={styles.cardNum}>{card.number}</span>
                    {card.title}
                  </h3>
                  <p className="mb-0">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Finsol ===== */}
      <section className="bg-white py-5" aria-label="Why Choose Finsol">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* Text column */}
            <div className="col-12 col-lg-7">
              <h2 className={`${styles.heading} fw-bold mb-3`}>
                Why Choose Finsol?
              </h2>

              <p className={styles.whyP}>
                At Finsol, we go beyond being just another payment gateway
                provider – we deliver secure, seamless, and scalable payment
                solutions tailored to businesses of all sizes. From robust
                pay-in and payout services to advanced white label payment
                gateways, our platform ensures that companies can expand
                globally without worrying about payment barriers. With
                compliance-ready systems and multiple integration options, we
                empower merchants, e-commerce platforms, and enterprises to
                accept and disburse payments effortlessly.
              </p>
              <p className={styles.whyP}>
                What sets us apart is our commitment to speed, reliability, and
                global reach. Our platform supports instant transactions across
                borders, enabling businesses to scale worldwide and individuals
                to send or receive funds without delays. Whether you are a small
                business accepting international payments or a global enterprise
                managing large-scale disbursements, Finsol guarantees secure,
                fast, and transparent cross-border transactions — building trust
                and creating opportunities in today’s digital economy.
              </p>
              <p className={styles.whyP}>
                We proudly serve a wide range of industries, including
                e-commerce, travel, fintech, gaming, education, retail, and
                professional services. By understanding the unique needs of each
                sector, we provide customized payment gateway solutions that
                enhance efficiency, improve customer experience, and accelerate
                global growth. No matter the industry, Finsol is the trusted
                partner for businesses aiming to expand their horizons with
                smarter payment solutions.
              </p>
            </div>

            {/* Sticky image column */}
            <div className="col-12 col-lg-5">
              <div
                className="position-sticky rounded-3 overflow-hidden bg-white border shadow"
                style={{ top: 100 }}
              >
                <div className="ratio ratio-4x3">
                  <Image
                    src="/images/about-images/author-image.png"
                    alt="Customer paying at a café with a card reader"
                    fill
                    className="img-fluid object-fit-cover"
                    sizes="(max-width: 980px) 100vw, 560px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Payment Intro with animated Link + your video placeholder ===== */}
      <section className="py-5">
        <div className="container">
          <div
            className={`${styles.paymentBlock} rounded-4 text-white p-4 p-lg-5 shadow-lg`}
          >
            <p className={styles.subHeading}>Build Secure Payment Solutions</p>
            <h2 className={`${styles.mainHeading}`}>
              Integrate Payins and Payouts through a single platform designed
              for speed, flexibility and global compliance.
            </h2>

            <MotionLink
              href="/developers"
              className={styles.viewBtn}
              variants={buttonVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              onClick={handlePlay}
            >
              View More
            </MotionLink>
          </div>
        </div>
      </section>

      {/* ===== Company Video (full-bleed, responsive) ===== */}
      <section id="company-video" className="pb-5">
        <div className="container-fluid p-0">
          {/* remove bg-black to avoid the black strip */}
          <div className="ratio ratio-16x9">
            {!isYouTube && (
              <video
                ref={setVideoRef}
                className="w-100 h-100"
                src={VIDEO_SRC}
                poster={POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ objectFit: "cover", backgroundColor: "transparent" }}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            )}

            {isYouTube && (
              <iframe
                className="w-100 h-100"
                src={`${youTubeEmbed}${
                  youTubeEmbed.includes("?") ? "&" : "?"
                }autoplay=1&mute=1&loop=1${
                  youTubeId ? `&playlist=${youTubeId}` : ""
                }&controls=0&modestbranding=1&rel=0`}
                title="Company Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{ backgroundColor: "transparent" }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
