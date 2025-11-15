// app/payment-method/cards-credit-debit/cardsclient.js
"use client";

import Script from "next/script";

import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import sharedStyles from "../SharedPage.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import PaymentMethodCountries from "../PaymentMethodCountries";
import Footer from "@/components/Home/footer/Footer";
import {
  motion,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ================== SEO placeholders (EDIT THESE) ================== */
const PAGE_URL = "https://www.finsol.group/payment-method/cards-credit-debit";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

/* ================== Helpers (no useScroll/parallax) ================== */
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

/* ================== Variants ================== */
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

export default function CardsCreditDebitClient() {
  /* ===== Refs ===== */
  const tilt1 = useTiltHover(10);
  const tilt2 = useTiltHover(10);
  const tilt3 = useTiltHover(10);

  /* ===== Header animation (ported from Japan page) ===== */
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

    // Optional description if you pass descriptionClass to Header
    const desc = scope.querySelector(`.${sharedStyles.customDescription}`);
    if (desc) {
      animate(
        desc,
        { opacity: [0, 1], y: [16, 0], filter: ["blur(6px)", "blur(0px)"] },
        { duration: 0.6, delay: 0.15, easing: "cubic-bezier(0.22,1,0.36,1)" }
      );
    }
  }, []);

  return (
    <>
      {/* ===================== JSON-LD (WebSite + SearchAction) ===================== */}
      <Script
        id="ld-website-cards"
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

      {/* ===== HERO / HEADER (no parallax) ===== */}
      <div ref={headerScopeRef} >
        <Header
          title="Cards (Credit & Debit)"
          minimal={false}
          hideButton
          className={sharedStyles.shortHero}
          titleClass={sharedStyles.customTitle}
          description="Enable your business to accept and process card payments with speed, flexibility and compliance, driving trusted transactions and global scalability."
        />
      </div>

      {/* ===== CATEGORY SECTION ===== */}
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
              Credit and debit cards remain a cornerstone of online payment
              solutions, offering global reach, consumer trust, and high
              conversion rates. Finsol enables businesses to accept card
              payments seamlessly through a unified payment gateway that
              supports Visa, Mastercard, RuPay, Amex, and more. Whether you
              operate in e-commerce, digital services, travel, or fintech, our
              PayIn infrastructure delivers secure, real-time card transactions
              optimized for both desktop and mobile checkouts. Features like
              tokenization, 3D Secure authentication, and multi-currency
              acceptance ensure your customers enjoy a frictionless and safe
              payment experience across geographies.
            </p>
            <p className={sharedStyles.categoryDescription}>
              Our platform also supports fast and secure Payouts to card-linked
              accounts, allowing businesses to issue instant refunds, rewards,
              or vendor disbursements with minimal delay. Finsol’s API-first
              architecture helps reduce chargebacks, simplify reconciliation,
              and provide full transaction transparency. Whether you’re scaling
              in domestic markets or expanding cross-border, our debit and
              credit card processing engine is built for flexibility,
              performance, and trust.
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
                src="/images/payment-method-images/Cards(Credit & Debit)/card.png"
                alt="Cards Illustration"
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

      {/* ===== BENEFITS (3D tilt + magnetic hover) ===== */}
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
          {/* Card 1 */}
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
              src="/icons/payment-method-icons/credit-debit/coverage.png"
              alt="Global Acceptance"
              width={60}
              height={60}
            />
            <h4>Global Acceptance Across Networks</h4>
            <p>
              Accept payments from all major card networks, including Visa,
              Mastercard, RuPay, and Amex—ensuring your business can transact
              with customers worldwide.
            </p>
          </motion.div>

          {/* Card 2 */}
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
              src="/icons/payment-method-icons/credit-debit/Frame.png"
              alt="Enhanced Security"
              width={60}
              height={60}
            />
            <h4>Enhanced Security & Compliance</h4>
            <p>
              With PCI DSS compliance, tokenization, and 3D Secure
              authentication, every transaction is protected against fraud and
              unauthorized access.
            </p>
          </motion.div>

          {/* Card 3 */}
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
              src="/icons/payment-method-icons/credit-debit/layer.png"
              alt="Payin Payout"
              width={60}
              height={60}
            />
            <h4>Seamless PayIn & Payout Flows</h4>
            <p>
              Collect payments and process instant card-based Payouts like
              refunds and partner settlements – all from one unified payment
              gateway.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== HOW IT WORKS ===== */}
      <motion.section
        className={sharedStyles.cardTransactionSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        style={{ position: "relative" }}
      >
        {/* progress underline under the whole right column */}
        <motion.span
          aria-hidden
          variants={growX}
          className="__underline-progress"
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
            src="/images/payment-method-images/BankTransfer/bank-step.png"
            alt="Card Transaction"
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
            How Card <br />
            Transactions Work <br />
            with Finsol
          </motion.h2>

          <motion.p
            className={sharedStyles.cardTransactionDescription}
            variants={fadeUp}
          >
            Finsol enables smooth, secure, and globally trusted debit and credit
            card transactions through a streamlined PayIn and Payout
            infrastructure. Supporting major networks like Visa, Mastercard, and
            RuPay, our platform ensures fast checkouts and real-time
            confirmations. Here’s how a typical card payment works with Finsol:
          </motion.p>

          {/* Steps with cascade */}
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
                  Choose Card as Payment Method
                </h3>
                <p className={sharedStyles.cardStepText}>
                  At checkout, the user selects “Credit/Debit Card” from the
                  available payment options.
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
                  Enter Card Details
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The user fills in the required information — card number,
                  expiry date, CVV, and cardholder name — on the secure payment
                  page.
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
                  Authenticate via OTP or 3D Secure
                </h3>
                <p className={sharedStyles.cardStepText}>
                  A one-time password (OTP) or biometric verification (3D
                  Secure) is used to validate the transaction for security.
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
