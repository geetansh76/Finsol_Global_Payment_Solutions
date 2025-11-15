"use client";

import Script from "next/script";

import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import sharedStyles from "../SharedPage.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import PaymentMethodCountries from "../PaymentMethodCountries";
import Footer from "@/components/Home/footer/Footer";

/* 🔥 Animations (same stack as cards-credit-debit, no parallax) */
import {
  motion,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ================== SEO placeholders (EDIT THESE) ================== */
const PAGE_URL = "https://www.finsol.group/payment-method/digital-wallets";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

/* ================== Helpers (no useScroll) ================== */
function useTiltHover(intensity = 10) {
  const rx = useSpring(0, { stiffness: 200, damping: 18 });
  const ry = useSpring(0, { stiffness: 200, damping: 18 });
  const glow = useSpring(0, { stiffness: 150, damping: 18 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((0.5 - py) * intensity); // rotateX
    ry.set((px - 0.5) * intensity); // rotateY
    glow.set(1);
  };
  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
    glow.set(0);
  };

  const boxShadow = useMotionTemplate`0 14px 30px rgba(0,0,0,${useTransform(
    glow,
    [0, 1],
    [0.08, 0.18]
  )})`;
  return { rx, ry, boxShadow, onMouseMove, onMouseLeave };
}

/* ================== Variants (same as cards-credit-debit) ================== */
const revealClip = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0 round 8px)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0 round 8px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const growX = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

/* continuous float for images */
const floatLoop = {
  initial: { y: 0, rotate: 0, scale: 1 },
  animate: {
    y: [0, -6, 0, 4, 0],
    rotate: [0, 0.4, 0, -0.4, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function DigitalWalletsPage() {
  /* ===== Tilt for benefit cards ===== */
  const tilt1 = useTiltHover(10);
  const tilt2 = useTiltHover(10);
  const tilt3 = useTiltHover(10);

  /* ===== Header animation (same as Japan page) ===== */
  const headerScopeRef = useRef(null);
  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Animate your custom title
    const customTitle = scope.querySelector(`.${sharedStyles.customTitle}`);
    if (customTitle) {
      const children = customTitle.querySelectorAll(":scope > *");
      if (children.length) {
        children.forEach((el, i) => {
          animate(
            el,
            { opacity: [0, 1], y: [18, 0], filter: ["blur(6px)", "blur(0px)"] },
            {
              delay: i * 0.07,
              duration: 0.6,
              easing: "cubic-bezier(0.22,1,0.36,1)",
            }
          );
        });
      } else {
        animate(
          customTitle,
          { opacity: [0, 1], y: [18, 0], filter: ["blur(6px)", "blur(0px)"] },
          { duration: 0.6, easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }
    } else {
      // Fallback: animate an h1 if Header renders one
      const h1 = scope.querySelector("h1");
      if (h1) {
        animate(
          h1,
          {
            opacity: [0, 1],
            y: [24, 0],
            rotateX: [-8, 0],
            filter: ["blur(6px)", "blur(0px)"],
          },
          { duration: 0.9, easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }
    }
  }, []);

  return (
    <>
      {/* ===================== JSON-LD (WebSite + SearchAction) ===================== */}
      <Script
        id="ld-website-digital-wallets"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            url: PAGE_URL,
          }),
        }}
      />

      {/* ===== HERO / HEADER (scoped animation) ===== */}
      <div ref={headerScopeRef} >
        <Header
          title="Digital Wallets"
          minimal={false}
          hideButton={true}
          className={sharedStyles.shortHero}
          titleClass={sharedStyles.customTitle}
          description="Enabling businesses with seamless digital wallet acceptance, delivering speed, compliance, and flexibility to support growth and customer satisfaction across markets."
        />
      </div>

      {/* ✅ Digital Wallet Category Section */}
      <motion.section
        className={sharedStyles.categoryContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerChildren}
      >
        <div className={sharedStyles.contentCTA}>
          <motion.div className={sharedStyles.headerBody} variants={fadeUp}>
            <p className={sharedStyles.categoryDescription}>
              Digital wallets are no more optional—they are essential. Today
              users demand fast, seamless, and secure ways to pay and get paid,
              and digital wallets deliver exactly that. Whether you are
              operating in e-commerce, gaming, streaming, or services, enabling
              wallet payments means giving your customers what they expect:
              frictionless checkouts, instant access, and trusted local options.
              With wallet adoption growing exponentially across global markets,
              integrating them into your payment strategy is critical to staying
              competitive.
            </p>
            <p className={sharedStyles.categoryDescription}>
              Finsol helps you stay ahead by offering a single integration that
              connects you to the most widely used digital wallets—tailored to
              your market and customer base. With one API, you can collect
              PayIns and initiate Payouts across regions, platforms, and
              currencies. No multiple vendors. No fragmented flows. Just a
              unified, high-performance wallet infrastructure built for scale,
              security, and speed. Focus on growing your business—we will handle
              the complexity of wallet payments.
            </p>
          </motion.div>

          <motion.div
            className={sharedStyles.categoryImageWrap}
            variants={fadeUp}
          >
            <motion.div
              variants={floatLoop}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/images/payment-method-images/DigitalWallets/main.png"
                alt="Digital Wallets"
                width={1200}
                height={800}
                className={sharedStyles.categoryImage}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 560px"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ Benefits Section */}
      <motion.section
        className={sharedStyles.benefitsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <motion.h2 className={sharedStyles.benefitsTitle} variants={revealClip}>
          Benefits
        </motion.h2>

        <motion.div
          className={sharedStyles.cardList}
          variants={staggerChildren}
        >
          <motion.div
            className={sharedStyles.benefitCard}
            variants={fadeUp}
            onMouseMove={tilt1.onMouseMove}
            onMouseLeave={tilt1.onMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              perspective: 800,
              rotateX: tilt1.rx,
              rotateY: tilt1.ry,
              boxShadow: tilt1.boxShadow,
              willChange: "transform, box-shadow",
            }}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Image
              src="/icons/payment-method-icons/digital-wallets/popular-wallets.png"
              alt="Popular Wallets"
              width={60}
              height={60}
            />
            <h4>Extensive Coverage</h4>
            <p>
              Seamlessly integrate the most popular digital wallets in the
              regions where your business operates—ensuring localized payment
              experiences for every customer.
            </p>
          </motion.div>

          <motion.div
            className={sharedStyles.benefitCard}
            variants={fadeUp}
            onMouseMove={tilt2.onMouseMove}
            onMouseLeave={tilt2.onMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              perspective: 800,
              rotateX: tilt2.rx,
              rotateY: tilt2.ry,
              boxShadow: tilt2.boxShadow,
              willChange: "transform, box-shadow",
            }}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Image
              src="/icons/payment-method-icons/digital-wallets/refund.png"
              alt="Instant Refunds"
              width={60}
              height={60}
            />
            <h4>Fast-Growing Adoption</h4>
            <p>
              Digital wallets continue to gain rapid traction across industries,
              providing a scalable solution for businesses targeting large and
              diverse audiences.
            </p>
          </motion.div>

          <motion.div
            className={sharedStyles.benefitCard}
            variants={fadeUp}
            onMouseMove={tilt3.onMouseMove}
            onMouseLeave={tilt3.onMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              perspective: 800,
              rotateX: tilt3.rx,
              rotateY: tilt3.ry,
              boxShadow: tilt3.boxShadow,
              willChange: "transform, box-shadow",
            }}
            whileHover={{ scale: 1.02, y: -6 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Image
              src="/icons/payment-method-icons/digital-wallets/mobile-user.png"
              alt="Mobile Users"
              width={60}
              height={60}
            />
            <h4>Customer Trust & Familiarity</h4>
            <p>
              Enabling payments through familiar, day-to-day wallet options
              builds user confidence and encourages repeat transactions by
              reducing friction at checkout.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ✅ Digital Wallets Flow Section */}
      <motion.section
        className={sharedStyles.cardTransactionSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        style={{ position: "relative" }}
      >
        {/* subtle progress underline like cards page */}
        <motion.span
          aria-hidden
          variants={growX}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            position: "absolute",
            left: "50%",
            right: "2rem",
            bottom: "2.2rem",
            height: 2,
            transformOrigin: "0% 50%",
            background:
              "linear-gradient(90deg, rgba(26,112,166,0.0) 0%, rgba(26,112,166,0.45) 30%, rgba(0,119,255,0.6) 70%, rgba(0,119,255,0.0) 100%)",
          }}
        />

        {/* Left Image */}
        <motion.div
          className={sharedStyles.cardTransactionImageWrapper}
          variants={fadeUp}
        >
          <Image
            src="/images/payment-method-images/DigitalWallets/wallet-step.png"
            alt="Wallet Transaction Flow"
            width={1200}
            height={1200}
            className={sharedStyles.cardTransactionImage}
            sizes="(max-width: 1024px) 92vw, 560px"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className={sharedStyles.cardTransactionContent}
          variants={staggerChildren}
        >
          <motion.h2
            className={sharedStyles.cardTransactionHeading}
            variants={revealClip}
          >
            How Digital Wallet <br />
            Transactions Work <br />
            with Finsol
          </motion.h2>

          <motion.p
            className={sharedStyles.cardTransactionDescription}
            variants={fadeUp}
          >
            Digital wallets facilitate fast, secure, and intuitive fund
            transfers by connecting users through various methods, including QR
            codes, credit/debit cards, and tap-to-pay using NFC (Near Field
            Communication) technology. Users typically fund their wallets
            through linked bank accounts or stored card details. While
            transaction flows may differ slightly across wallet providers,
            Finsol streamlines the process into a seamless and consistent
            experience across platforms.
          </motion.p>

          {/* Steps (cascade) */}
          <motion.div variants={staggerChildren}>
            {/* Step 1 */}
            <motion.div
              className={sharedStyles.cardStep}
              variants={stepVariant}
              custom={0}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <span className={sharedStyles.cardStepNumber}>1</span>
              <div>
                <h3 className={sharedStyles.cardStepTitle1}>
                  Select Wallet as Payment Method
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The customer chooses their preferred wallet (e.g., Paytm,
                  GPay) during checkout.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className={sharedStyles.cardStep}
              variants={stepVariant}
              custom={1}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <span className={sharedStyles.cardStepNumber}>2</span>
              <div>
                <h3 className={sharedStyles.cardStepTitle2}>
                  Authenticate Using Wallet App
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The customer is redirected to their wallet app or uses a
                  secure popup to approve the payment.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className={sharedStyles.cardStep}
              variants={stepVariant}
              custom={2}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <span className={sharedStyles.cardStepNumber}>3</span>
              <div>
                <h3 className={sharedStyles.cardStepTitle3}>
                  Payment is Processed Instantly
                </h3>
                <p className={sharedStyles.cardStepText}>
                  Finsol processes the payment in real-time and notifies both
                  the merchant and customer.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className={sharedStyles.cardStep}
              variants={stepVariant}
              custom={3}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <span className={sharedStyles.cardStepNumber}>4</span>
              <div>
                <h3 className={sharedStyles.cardStepTitle3}>
                  Reconciliation & Refunds
                </h3>
                <p className={sharedStyles.cardStepText}>
                  Transactions are logged and reconciled instantly, enabling
                  smooth refunds, wallet balance tracking, and loyalty
                  incentives.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <PaymentMethodCountries />
      <ChatAssistant />
      <Footer />
    </>
  );
}
