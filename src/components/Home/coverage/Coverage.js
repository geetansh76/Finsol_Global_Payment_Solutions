"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import styles from "./Coverage.module.css";

export default function CoverageShowcase({
  title = "Coverage",
  subheading = "Expand your reach across global markets",
  description = "Serve businesses and customers throughout Europe, Asia, and the Americas—all from a single platform. With access to trusted local payment methods in key regions, we help you streamline cross-border transactions and scale faster in both new and mature economies.",
}) {
  const slides = [
    {
      href: "/coverage/asia",
      title: "Asia",
      img: "/images/coverage-images/asia.png",
      blurb: "Learn about Asia →",
    },
    {
      href: "/coverage/africa",
      title: "Africa",
      img: "/images/coverage-images/africa.png",
      blurb: "Learn about Africa →",
    },
    {
      href: "/coverage/europe",
      title: "Europe",
      img: "/images/coverage-images/europe.png",
      blurb: "Learn about Europe →",
    },
    {
      href: "/coverage/latin-america",
      title: "Latin America",
      img: "/images/coverage-images/latin-america.png",
      blurb: "Learn about Latin America →",
    },
    {
      href: "/coverage/oceania",
      title: "Oceania",
      img: "/images/coverage-images/oceania.png",
      blurb: "Learn about Oceania →",
    },
  ];

  return (
    <section className={`${styles.section} py-4 py-md-5`}>
      <div className={styles.mesh} aria-hidden="true" />

      {/* Header in Bootstrap container */}
      <div className="container-xl">
        <div className="row justify-content-center">
          <header className={`col-12 col-lg-10 col-xl-9 ${styles.header}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subheading}>{subheading}</p>
            <p className={styles.desc}>{description}</p>
          </header>
        </div>
      </div>

      {/* Carousel in Bootstrap container (edge spacing on small, comfy on large) */}
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 px-2 px-sm-3 px-md-4">
            <Swiper
              className={`${styles.swiper}`}
              modules={[Autoplay, Navigation, Pagination, EffectCreative]}
              effect="creative"
              creativeEffect={{
                limitProgress: 2,
                prev: {
                  translate: ["-24%", 0, -160],
                  rotate: [0, 0, 0],
                  opacity: 0.75,
                },
                next: {
                  translate: ["24%", 0, -160],
                  rotate: [0, 0, 0],
                  opacity: 0.75,
                },
                perspective: true,
                shadowPerProgress: false,
              }}
              loop
              speed={750}
              grabCursor
              centeredSlides
              slidesPerView={1.1}
              spaceBetween={24}
              breakpoints={{
                576: { slidesPerView: 1.2 },
                640: { slidesPerView: 1.3 },
                768: { slidesPerView: 1.8 },
                992: { slidesPerView: 2.2 },
                1200: { slidesPerView: 2.6 },
                1400: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 2600,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              {slides.map((s, i) => (
                <SwiperSlide key={`${s.href}-${i}`} className={styles.slide}>
                  <Link
                    href={s.href}
                    className={styles.card}
                    aria-label={s.title}
                  >
                    <div className={styles.media}>
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className={styles.img}
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 420px"
                        priority={i < 2}
                      />
                      <div className={styles.scrim} />
                      <div className={styles.rings} aria-hidden="true" />
                    </div>

                    <div className={styles.footer}>
                      <h3>{s.title}</h3>
                      <p className={styles.blurb}>{s.blurb}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
