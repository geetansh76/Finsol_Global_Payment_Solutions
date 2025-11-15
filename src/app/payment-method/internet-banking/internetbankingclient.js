"use client";

import Script from "next/script";
import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import sharedStyles from "../SharedPage.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import PaymentMethodCountries from "../PaymentMethodCountries";
import Footer from "@/components/Home/footer/Footer";

/* 🔥 Animations (same as cards/digital-wallets) */
import {
  motion,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* ================== SEO placeholders (EDIT THESE) ================== */
const PAGE_URL = "https://www.finsol.group/payment-method/internet-banking";
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

export default function InternetBankingPage() {
  /* ===== Tilt for benefit cards ===== */
  const tilt1 = useTiltHover(10);
  const tilt2 = useTiltHover(10);
  const tilt3 = useTiltHover(10);

  /* ===== Header animation (same as other pages) ===== */
  const headerScopeRef = useRef(null);
  useEffect(() => {
    const scope = headerScopeRef.current;
    if (!scope) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Animate custom title lines or fallback h1
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
      {/* JSON-LD (WebSite + SearchAction) */}
      <Script
        id="ld-website-internet-banking"
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

      <div ref={headerScopeRef} >
        <Header
          title="Internet Banking"
          minimal={false}
          hideButton={true}
          className={sharedStyles.shortHero}
          titleClass={sharedStyles.customTitle}
          description="Enable businesses to accept payments through secure, fast, and compliant internet banking solutions that streamline transactions and deliver seamless customer experiences."
        />
      </div>

      {/* ✅ Internet Banking Category Section */}
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
              Internet banking remains one of the most trusted online payment
              methods, especially for users who prefer secure fund transfers
              directly through their bank portals. Finsol’s payment gateway
              supports a wide range of local and international banks, enabling
              seamless PayIn experiences across industries like eCommerce,
              travel, education, and financial services. Customers can select
              their bank at checkout, authenticate via netbanking credentials,
              and complete the payment without needing to share card
              details—boosting trust and conversion rates.
            </p>
            <p className={sharedStyles.categoryDescription}>
              For businesses, Finsol also enables real-time payouts via internet
              banking—ideal for disbursing refunds, commissions, vendor
              payments, or partner earnings. Our platform handles the entire
              transaction flow, from customer collections to backend
              settlements, all with robust compliance and transaction-level
              transparency. With support for multiple currencies and built-in
              reconciliation tools, Finsol helps you deliver a smooth and secure
              banking experience, aligned with local payment behaviors.
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
                src="/images/payment-method-images/InternetBanking/main.png"
                alt="Internet Banking"
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
              src="/icons/payment-method-icons/internet-banking/real-time.png"
              alt="Real-Time Payments"
              width={60}
              height={60}
            />
            <h4>Real-Time Processing</h4>
            <p>
              Enable users to complete transactions instantly through their
              preferred bank, with immediate confirmation and reduced cart
              abandonment.
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
              src="/icons/payment-method-icons/internet-banking/security.png"
              alt="Bank-Level Security"
              width={60}
              height={60}
            />
            <h4>Bank-Level Security</h4>
            <p>
              All transactions are authenticated via the customer’s online
              banking portal using OTPs, credentials, or biometric verification
              — ensuring maximum safety.
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
              src="/icons/payment-method-icons/internet-banking/network.png"
              alt="Wide Bank Network"
              width={60}
              height={60}
            />
            <h4>Broad Bank Coverage</h4>
            <p>
              Access a wide range of domestic and global banks through a single
              integration, making it easy to serve customers from varied
              geographies.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ✅ Internet Banking Flow Section */}
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
          <Image
            src="/images/payment-method-images/InternetBanking/flow.png"
            alt="Internet Banking Flow"
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
            How Internet Banking <br />
            Transactions Work <br />
            with Finsol
          </motion.h2>

          <motion.p
            className={sharedStyles.cardTransactionDescription}
            variants={fadeUp}
          >
            Finsol streamlines internet banking transactions by allowing users
            to pay directly via their banks net banking portal. Here is, how a
            standard internet banking payment works:
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
                  Select Internet Banking at Checkout
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The customer chooses Internet Banking as their payment method
                  during checkout.
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
                  Choose Bank and Authenticate
                </h3>
                <p className={sharedStyles.cardStepText}>
                  User selects their bank from the list and is redirected to
                  their online banking portal to log in securely.
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
                  Complete the Payment
                </h3>
                <p className={sharedStyles.cardStepText}>
                  The user approves the transaction through OTP or credentials,
                  and the bank processes the transfer in real-time.
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
                  Confirmation & Reconciliation
                </h3>
                <p className={sharedStyles.cardStepText}>
                  Finsol confirms payment success instantly, updates transaction
                  status, and reconciles it automatically for the merchant.
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
