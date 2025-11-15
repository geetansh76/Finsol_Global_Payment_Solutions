"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const spring = { type: "spring", stiffness: 180, damping: 22 };

const footerMount = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...spring, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const columnRise = (delay = 0) => ({
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ...spring, delay } },
});

const linkFloat = (i = 0) => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, delay: 0.06 * i },
  },
});

const socialPop = (i = 0) => ({
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...spring, delay: 0.12 + i * 0.05 },
  },
});

const bottomBar = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.25 } },
};

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerMount}
    >
      {/* Background layers */}
      <div aria-hidden className={styles.bgBase} />
      <motion.div
        aria-hidden
        className={styles.auroraA}
        animate={{ x: [0, 30, -20, 0], y: [0, -18, 14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className={styles.auroraB}
        animate={{ x: [0, -24, 26, 0], y: [0, 16, -14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden className={styles.noise} />
      <div aria-hidden className={styles.topWave} />

      {/* Bootstrap outer container */}
      <div className="container-xxl">
        {/* Row: Left (logo/desc/social) + Right (link columns) */}
        <div className="row g-4 align-items-start">
          {/* Left */}
          <div className="col-12 col-lg-4">
            <motion.div
              className={`${styles.left}`}
              variants={columnRise(0.02)}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/icons/Footer-icons/Footer-logo.png"
                  alt="Finsol Logo"
                  width={160}
                  height={110}
                  priority
                />
              </motion.div>

              <p className={styles.blurb}>
                FINSOL is a name you can bank upon to delegate the responsibility
                of taking care of your business’s global money management.
              </p>

              <div className={`${styles.socials} d-flex flex-wrap gap-3`}>
                {[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/finsolgroupllc",
                    icon: "/icons/Footer-icons/Facebook.png",
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/finsolgroupllc",
                    icon: "/icons/Footer-icons/Instagram.png",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/company/finsol-groups",
                    icon: "/icons/Footer-icons/Linkedin.png",
                  },
                  {
                    name: "Twitter",
                    href: "https://twitter.com/FinsolGroupLLC",
                    icon: "/icons/Footer-icons/Twitter.png",
                  },
                ].map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className={`${styles.socialBtn}`}
                    variants={socialPop(i)}
                    whileHover={{ y: -4, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image src={s.icon} alt={s.name} width={40} height={40} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3 columns using Bootstrap grid */}
          <div className="col-12 col-lg-8">
            <motion.div
              className={`${styles.links}`}
              variants={columnRise(0.06)}
            >
              <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-3">
                {/* Quick Access */}
                <div className="col">
                  <div className={`${styles.col} ${styles.colQuick}`}>
                    <h4>Quick Access</h4>
                    <div className={`${styles.quickRow}`}>
                      {[
                        ["Home", "/"],
                        ["About Us", "/about"],
                        ["Solutions", "/solutions"],
                        ["Coverage", "/coverage"],
                        ["Industries", "/industries/digital-subscriptions"],
                        ["Blogs", "/blogs"],
                        ["Developers","developers"],
                      ].map(([label, href], i) => (
                        <MotionLink
                          key={label}
                          href={href}
                          className={styles.navItem}
                          variants={linkFloat(i)}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          prefetch
                        >
                          {label}
                        </MotionLink>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Privacy & TnC */}
                <div className="col">
                  <div className={styles.col}>
                    <h4>Privacy & TnC</h4>
                    {[
                      ["Privacy Policies", "/privacy-tnc/privacy-policy"],
                      ["Terms & Conditions", "/privacy-tnc/terms-conditions"],
                    ].map(([label, href], i) => (
                      <MotionLink
                        key={label}
                        href={href}
                        className={styles.navItem}
                        variants={linkFloat(i)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        prefetch
                      >
                        {label}
                      </MotionLink>
                    ))}
                  </div>
                </div>

                {/* Contact Us */}
                <div className="col">
                  <div className={styles.col}>
                    <h4>Contact Us</h4>
                    {[
                      {
                        label: "Location",
                        icon: "/icons/Footer-icons/contact_us/location.png",
                        value:
                          "Finsol Payment Services Provider 311, Emaar Business Park, Building 4, Dubai – UAE",
                        href: null,
                      },
                      {
                        label: "Phone",
                        icon: "/icons/Footer-icons/contact_us/phone.png",
                        value: "+971 52 239 1996",
                        href: "tel:+971522391996",
                      },
                      {
                        label: "Landline",
                        icon: "/icons/Footer-icons/contact_us/telephone.png",
                        value: "+91 4570 1889",
                        href: "tel:045701889",
                      },
                      {
                        label: "Email",
                        icon: "/icons/Footer-icons/contact_us/mail.png",
                        value: "info@finsol.group",
                        href: "mailto:info@finsol.group",
                      },
                    ].map((row, i) => (
                      <motion.div
                        key={`${row.label}-${i}`}
                        className={styles.contactItem}
                        variants={linkFloat(i)}
                      >
                        <Image
                          src={row.icon}
                          alt={row.label}
                          width={20}
                          height={20}
                          className={styles.contactIcon}
                        />
                        {row.href ? (
                          <a href={row.href} className={styles.contactText}>
                            {row.value}
                          </a>
                        ) : (
                          <span className={styles.contactText}>{row.value}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar (Bootstrap assists alignment) */}
      <motion.div className={`${styles.bottom} container-xxl`} variants={bottomBar}>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100 gap-2">
          <p className="mb-0">© 2025 finsol.group</p>
          <motion.span
            className={styles.scrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑ Back to top
          </motion.span>
        </div>
      </motion.div>

      {/* gloss sweep */}
      <div aria-hidden className={styles.sweep} />
    </motion.footer>
  );
}
