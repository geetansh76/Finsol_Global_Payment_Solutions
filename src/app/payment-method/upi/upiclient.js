// app/payment-method/upi/upiclient.js
"use client";

import Script from "next/script";
import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import sharedStyles from "../SharedPage.module.css";
import Footer from "@/components/Home/footer/Footer";

/* 🔥 Animations (mirrored from other pages; no useScroll) */
import {
  motion,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ================== SEO placeholders (for JSON-LD only) ================== */
const PAGE_URL = "https://www.finsol.group/payment-method/upi";
const HOME_URL = "https://www.finsol.group"; // keep site root for SearchAction JSON-LD
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";


/* ================== Helpers (no parallax) ================== */
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

/* ================== Variants (shared) ================== */
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

export default function UPIPaymentPage() {
  /* ===== Tilt for benefit cards ===== */
  const tilt1 = useTiltHover(10);
  const tilt2 = useTiltHover(10);
  const tilt3 = useTiltHover(10);

  /* ===== Header animation (scoped like other pages) ===== */
  const headerScopeRef = useRef(null);
  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Animate custom title or fallback h1
    const customTitle = scope.querySelector(`.${sharedStyles.customTitle}`);
    if (customTitle) {
      const children = customTitle.querySelectorAll(":scope > *");
      if (children.length) {
        children.forEach((el, i) => {
          animate(
            el,
            { opacity: [0, 1], y: [18, 0], filter: ["blur(6px)", "blur(0px)"] },
            { delay: i * 0.07, duration: 0.6, easing: "cubic-bezier(0.22,1,0.36,1)" }
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
      const h1 = scope.querySelector("h1");
      if (h1) {
        animate(
          h1,
          { opacity: [0, 1], y: [24, 0], rotateX: [-8, 0], filter: ["blur(6px)", "blur(0px)"] },
          { duration: 0.9, easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }
    }
  }, []);

  return (
    <>
      {/* JSON-LD (WebSite + SearchAction) */}
      <Script
        id="ld-website-upi"
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
          title="UPI"
          minimal={false}
          hideButton={true}
          className={sharedStyles.shortHero}
          titleClass={sharedStyles.customTitle}
          description="Empowering businesses through UPI payment solutions that ensure instant transfers, regulatory compliance, and seamless experiences for customers across digital platforms.
 "
        />
      </div>

      {/* ✅ UPI Category Section */}
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
              Unified Payments Interface (UPI) has transformed the way India transacts—offering instant, secure, and 24/7 fund transfers. Finsol integrates deeply with UPI to help merchants, apps, and platforms accept PayIn payments directly from users bank accounts via UPI ID, QR code, or mobile number. Whether you are a retail brand, a subscription service, or a digital platform, UPI enables fast, no-hassle checkouts and increases customer trust with a familiar, government-backed payment method.
            </p>
            <p className={sharedStyles.categoryDescription}>
              Beyond collections, Finsol Payout Solutions enable businesses to disburse refunds, rewards, commissions, and partner settlements directly to UPI-linked bank accounts. Our API-first approach ensures real-time settlement, compliance readiness, and end-to-end transaction visibility. With growing UPI adoption across India, Finsol gives you the infrastructure to scale with it—securely and seamlessly.
            </p>
          </motion.div>

          {/* ⬇️ CHANGE #1: responsive image wrapper + sizes (content/path unchanged) */}
          <motion.div className={sharedStyles.categoryImageWrap} variants={fadeUp}>
            <motion.div variants={floatLoop} initial="initial" animate="animate">
              <Image
                src="/images/payment-method-images/UPI/upi-main.png"
                alt="UPI Payment"
                width={1200}
                height={800}
                className={sharedStyles.categoryImage}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 560px"
                priority
              />
            </motion.div>
          </motion.div>
          {/* ⬆️ end CHANGE #1 */}
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
        <motion.div className={sharedStyles.cardList} variants={staggerChildren}>
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
              src="/icons/payment-method-icons/upi/instant.png"
              alt="Instant Payments"
              width={60}
              height={60}
            />
            <h4>Instant & Secure Transactions</h4>
            <p>
              Accept and disburse UPI payments in real-time with bank-level security and zero downtime—enhancing customer experience and transaction speed.
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
              src="/icons/payment-method-icons/upi/secure.png"
              alt="Secure Auth"
              width={60}
              height={60}
            />
            <h4>Seamless PayIn & Payout Integration</h4>
            <p>
              Enable UPI collections and automate payouts (refunds, commissions, partner settlements) through one unified payment gateway.
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
              src="/icons/payment-method-icons/upi/dashboard.png"
              alt="Smart Reporting"
              width={60}
              height={60}
            />
            <h4>Scalable, API-Driven Infrastructure</h4>
            <p>
             Our robust UPI integration supports high-volume transactions with full compliance, real-time tracking, and easy scalability for growing businesses.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ✅ UPI Payment Flow Section */}
      <motion.section
        className={sharedStyles.cardTransactionSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        style={{ position: "relative" }}
      >
        {/* subtle progress underline */}
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
          {/* ⬇️ CHANGE #2: responsive sizes for flow image (path unchanged) */}
          <Image
            src="/images/payment-method-images/UPI/upi-step.png"
            alt="UPI Payment Flow"
            width={1200}
            height={1200}
            className={sharedStyles.cardTransactionImage}
            sizes="(max-width: 1024px) 92vw, 560px"
          />
          {/* ⬆️ end CHANGE #2 */}
        </motion.div>

        

        {/* Right Content (UNCHANGED) */}
        <motion.div
          className={sharedStyles.cardTransactionContent}
          variants={staggerChildren}
        >
          <motion.h2
            className={sharedStyles.cardTransactionHeading}
            variants={revealClip}
          >
            How UPI <br />
            Transactions Work <br />
            with Finsol
          </motion.h2>

          <motion.p
            className={sharedStyles.cardTransactionDescription}
            variants={fadeUp}
          >
            UPI enables instant, secure, and mobile-friendly fund transfers by directly linking users  bank accounts. Whether using a UPI ID, QR code, or mobile number, Finsol simplifies both PayIn and Payout flows across your business touchpoints. Here is how a typical UPI transaction works with Finsol:
          </motion.p>

          {/* Steps */}
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
                 Choose UPI as Payment Method
                </h3>
                <p className={sharedStyles.cardStepText}>
                  At checkout, the user selects UPI from the list of available online payment options.
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
                 Enter UPI ID or Scan QR Code
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The user either enters their UPI ID or scans the auto-generated QR code using their UPI-enabled app (like Google Pay, PhonePe, Paytm, etc.).
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
                 Approve & Authenticate
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The user receives a request in their UPI app to approve the transaction and confirms it using PIN authentication.
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
                 Instant Confirmation
                </h3>
                <p className={sharedStyles.cardStepText}>
                  Finsol instantly notifies both the merchant and the user of successful payment - completing the transaction in seconds with full transparency.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </>
  );
}
