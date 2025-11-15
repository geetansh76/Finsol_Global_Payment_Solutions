"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header/Header";
import styles from "./payment-method-all.module.css";
import Footer from "@/components/Home/footer/Footer";

/* =========================
   SEO placeholders (kept for JSON-LD only)
   ========================= */
const PAGE_URL = "https://www.finsol.group/payment-method/payment-method-all";
const HOME_URL = "https://www.finsol.group";

export default function PaymentMethodAllPage() {
  const items = [
    {
      title: "Cards (credit & debit)",
      blurb:
        "Finsol supports fast, secure, and global transactions via all major credit and debit cards—empowering both PayIn and Payout experiences across diverse industries. Whether your customers are making payments through Visa, Mastercard, or UnionPay, or you are sending refunds, commissions, or partner settlements back to their card accounts, our infrastructure ensures seamless card processing. From online purchases to global vendor payouts, Finsol simplifies card-based transactions with built-in fraud protection, real-time tracking, and multi-currency compatibility.",
      img: "/images/payment-method-images/Cards(Credit & Debit)/card.png",
      href: "/payment-method/cards-credit-debit",
    },
    {
      title: "QR Payments",
      blurb:
        "Finsol enables frictionless QR-based transactions for instant collections and smart disbursements. From UPI to dynamic QR codes linked to wallets and bank accounts, our platform empowers businesses to accept payments in-store, online, or on the go. Whether you are collecting micro-payments from end users or enabling quick vendor or gig worker payouts, QR payments offer a fast, secure, and cost-effective solution. With real-time settlement and wide consumer adoption, QR is a must-have method for scaling PayIn and Payout operations in emerging and mobile-first markets.",
      img: "/images/payment-method-images/QR/qr-main.png",
      href: "/payment-method/qr-payments",
    },
    {
      title: "UPI",
      blurb:
        "Finsol integrates Unified Payments Interface (UPI) to power instant, 24/7 transactions across India. Whether you are enabling seamless PayIn through UPI IDs, mobile numbers, or QR scans, or pushing instant Payouts to customers, vendors, or service partners — UPI makes it effortless. With real-time settlement, low transaction costs, and a rapidly growing user base, UPI is ideal for businesses targeting high-volume, mobile-first markets. Finsol’s UPI rails are built for speed, compliance, and scale—ensuring smooth cash flow on both sides of your payment ecosystem.",
      img: "/images/payment-method-images/UPI/upi-main.png",
      href: "/payment-method/upi",
    },
    {
      title: "Bank Transfers",
      blurb:
        "Finsol supports seamless domestic and international bank transfers, enabling direct account-to-account payments for both collections and disbursements. Whether customers are paying via NEFT, RTGS, IMPS, or SWIFT, or you re sending Payouts to employee salaries, vendor accounts, or affiliate commissions—our platform ensures secure and traceable transfers. With real-time status tracking, bulk settlement capabilities, and multi-currency support, bank transfers are ideal for high-value, regulated, and recurring transactions across industries.",
      img: "/images/payment-method-images/BankTransfer/bank-main.png",
      href: "/payment-method/bank-transfer",
    },
    {
      title: "Digital Wallets",
      blurb:
        "Finsol enables businesses to accept and disburse payments via leading digital wallets—bringing speed, convenience, and flexibility to your payment ecosystem. Whether customers prefer to PayIn using wallets like Paytm, PhonePe, or Google Pay, or you are sending instant refunds, cashback, or earnings directly to their wallets, Finsol makes it effortless. With wallet penetration growing rapidly in mobile-first economies, digital wallets are ideal for enhancing user experience, reducing friction, and supporting real-time Payouts at scale.",
      img: "/images/payment-method-images/DigitalWallets/main.png",
      href: "/payment-method/digital-wallets",
    },
    {
      title: "Internet Banking",
      blurb:
        "Finsol streamlines PayIn and Payout operations through direct integration with secure internet banking networks. Customers can pay using their preferred bank’s net banking portal, while businesses can disburse payments, refunds, or salaries directly to beneficiary accounts with ease. With support for all major banks, instant confirmation, and robust transaction logs, internet banking is a reliable method for high-trust, high-value transactions. It’s ideal for businesses needing secure, verified flows in both collections and settlements.",
      img: "/images/payment-method-images/InternetBanking/main.png",
      href: "/payment-method/internet-banking",
    },
  ];

  return (
    <>
      {/* JSON-LD (WebSite) */}
      <Script
        id="ld-website-payment-methods"
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

      {/* ---------------- ORIGINAL PAGE CONTENT (unchanged) ---------------- */}
      <Header
        minimal
        hideButton
        className={styles.heroHeader}
        title={
          <div className={styles.titleWrap}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titlePrimary}>Powering Growth with</span>
              <br />
              <span className={styles.titleAccent}>Smarter Payment Options</span>
            </h1>
            <p className={styles.subtitle}>
              Accept, disburse, and manage payments across borders with ease — through one unified
              platform built for PayIn, Payout, and white-label growth.
            </p>
          </div>
        }
      />

      <main className={styles.page}>
        {items.map((it, i) => (
          <article key={it.title} className={`${styles.card} ${i % 2 ? styles.reverse : ""}`}>
            {/* Text */}
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>{it.title}</h2>
              <p className={styles.cardBlurb}>{it.blurb}</p>
              <Link href={it.href} className={styles.cta}>
                Learn More <span aria-hidden>↗</span>
              </Link>
            </div>

            {/* Image */}
            <div className={styles.imageWrap}>
              <Image
                src={it.img}
                alt={it.title}
                fill
                className={styles.image}
                sizes="(max-width: 900px) 92vw, 520px"
                priority={i < 2}
              />
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </>
  );
}
