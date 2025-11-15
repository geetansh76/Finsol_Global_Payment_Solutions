"use client";

import Header from "@/components/Home/Header/Header";
import sharedStyles from "../tnc-shared.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import Script from "next/script";

export default function TermsConditionsClient() {

  const PAGE_URL = "https://www.finsol.group/privacy-tnc/terms-conditions";
  const HOME_URL = "https://www.finsol.group";

  return (
    <>
      {/* ================== JSON-LD ================== */}
      <Script
        id="ld-website-terms"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            name: "Finsol",
            potentialAction: {
              "@type": "SearchAction",
              target: `${HOME_URL}/search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            url: PAGE_URL,
          }),
        }}
      />

      {/* ================= PAGE ================= */}
      <Header
        title="Terms & Conditions"
        minimal={false}
        description="Our Terms & Conditions establish clear guidelines defining user rights, obligations, and compliance requirements for accessing and utilizing our services effectively"
        hideButton
        className={sharedStyles.shortHero}
        titleClass={sharedStyles.customTitle}
      />

      <div className={sharedStyles.maindiv}>
        <main className={sharedStyles.tcContainer}>
          <aside className={sharedStyles.tcSidebar} aria-label="Section navigation">
            <ul className={sharedStyles.menu} id="toc">
              <li>
                <a className={`${sharedStyles.link} ${sharedStyles.active}`} href="#about">
                  About Finsol
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#acceptance">
                  Acceptance of Terms
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#eligibility">
                  Eligibility &amp; Use of Services
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#merchant">
                  Merchant Responsibilities
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#white">
                  White-Label Services
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#fees">
                  Fees &amp; Settlement
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#ip">
                  Intellectual Property
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#liability">
                  Limitation of Liability
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#privacy">
                  Data Protection &amp; Privacy
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#suspension">
                  Suspension &amp; Termination
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#changes">
                  Changes to Terms
                </a>
              </li>
            </ul>
          </aside>

          {/* ONE section that contains all blocks */}
          <section className={sharedStyles.tcContent}>
            <p className={sharedStyles.intro}>
              Welcome to Finsol. By accessing or using our website, platform, or services (including
              Pay-In, Pay-Out, and white-label solutions), you agree to comply with these Terms &amp;
              Conditions. Please review them carefully.
            </p>

            <div id="about" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>About Finsol</h2>
              <p>
                Finsol is a financial technology platform that provides businesses with secure Pay-In
                and Pay-Out services, along with customizable white-label payment gateway solutions.
                Our goal is to ensure fast, reliable, and compliant payment processing for merchants
                and partners.
              </p>
            </div>

            <div id="acceptance" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Acceptance of Terms</h2>
              <p>By using Finsol’s services, you acknowledge that you:</p>
              <ul>
                <li>Have read and understood these Terms &amp; Conditions.</li>
                <li>
                  Agree to be bound by them, along with our Privacy Policy and any additional service
                  agreements.
                </li>
              </ul>
              <p>If you do not agree, you must not use our services.</p>
            </div>

            <div id="eligibility" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Eligibility &amp; Use of Services</h2>
              <ul>
                <li>You must be at least 18 years old and legally authorized to represent your business.</li>
                <li>
                  Finsol’s services may only be used for lawful business purposes and in compliance with
                  applicable financial regulations.
                </li>
                <li>
                  Any attempt to use our platform for fraudulent, illegal, or restricted activities
                  (including money laundering, terrorist financing, or unauthorized transactions) is
                  strictly prohibited and will result in immediate suspension or termination.
                </li>
              </ul>
            </div>

            <div id="merchant" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Merchant Responsibilities</h2>
              <p>As a merchant or partner, you are responsible for:</p>
              <ul>
                <li>Providing accurate business and financial information during onboarding.</li>
                <li>
                  Ensuring compliance with applicable laws, including taxation, financial reporting, and
                  consumer protection.
                </li>
                <li>Maintaining the security of your account credentials and restricting unauthorized access.</li>
              </ul>
            </div>

            <div id="white" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>White-Label Services</h2>
              <p>
                If you use our white-label gateway, you are responsible for the branding, presentation,
                and end-customer communication, while Finsol provides the underlying infrastructure and
                compliance support as outlined in your service agreement.
              </p>
            </div>

            <div id="fees" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Fees &amp; Settlement</h2>
              <ul>
                <li>
                  All applicable fees for Pay-In, Pay-Out, or white-label services will be communicated
                  in your service agreement.
                </li>
                <li>Settlement timelines may vary based on transaction types, banking partners, and regulatory requirements.</li>
                <li>Finsol is not responsible for delays caused by banks, payment networks, or regulatory bodies.</li>
              </ul>
            </div>

            <div id="ip" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Intellectual Property</h2>
              <p>
                All content, software, trademarks, and proprietary technology provided by Finsol remain
                our exclusive property. You may not reproduce, distribute, or use our intellectual
                property without prior written consent.
              </p>
            </div>

            <div id="liability" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Limitation of Liability</h2>
              <p>While Finsol strives to ensure secure and uninterrupted service:</p>
              <ul>
                <li>We do not guarantee that our services will be error-free, uninterrupted, or immune from unauthorized access.</li>
                <li>
                  Finsol shall not be liable for any indirect, incidental, or consequential damages,
                  including loss of revenue, profits, or reputation, arising from the use of our services.
                </li>
                <li>Nothing in these terms excludes liability for fraud, gross negligence, or willful misconduct.</li>
              </ul>
            </div>

            <div id="privacy" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Data Protection &amp; Privacy</h2>
              <p>
                Finsol handles personal and financial data in accordance with applicable data protection
                laws. All collected information will be processed securely and only for legitimate business
                purposes, as outlined in our Privacy Policy.
              </p>
            </div>

            <div id="suspension" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Suspension &amp; Termination</h2>
              <p>Finsol may suspend or terminate your access if you:</p>
              <ul>
                <li>Breach these Terms &amp; Conditions.</li>
                <li>Engage in prohibited or illegal activities.</li>
                <li>Fail to comply with regulatory obligations.</li>
              </ul>
            </div>

            <div id="changes" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms &amp; Conditions at any time. Updates will be
                posted on this page, and continued use of our services implies acceptance of the revised
                terms.
              </p>
            </div>
          </section>
        </main>
      </div>

      <ChatAssistant />
      <Footer />
    </>
  );
}
