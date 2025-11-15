"use client";

import Header from "@/components/Home/Header/Header";
import sharedStyles from "../tnc-shared.module.css";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import Script from "next/script";

export default function PrivacyClient() {
  const PAGE_URL = "https://www.finsol.group/privacy-tnc/privacy-policy";
  const HOME_URL = "https://www.finsol.group";

  return (
    <>
      {/* ================== JSON-LD ================== */}
      <Script
        id="ld-website-privacy"
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

      {/* ================== PAGE CONTENT ================== */}
      <Header
        title="Privacy Policy"
        minimal={false}
        description="This Privacy Policy defines our commitment to safeguarding your personal information, ensuring confidentiality, compliance, and responsible data management practices."
        hideButton
        className={sharedStyles.shortHero}
        titleClass={sharedStyles.customTitle}
      />

      <div className={sharedStyles.maindiv}>
        <main className={sharedStyles.tcContainer}>
          <aside
            className={sharedStyles.tcSidebar}
            aria-label="Section navigation"
          >
            <ul className={sharedStyles.menu} id="toc">
              <li>
                <a
                  className={`${sharedStyles.link} ${sharedStyles.active}`}
                  href="#info"
                >
                  Information We Collect
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#use">
                  How We Use Your Information
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#security">
                  Data Security
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#sharing">
                  Sharing of Information
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#rights">
                  Your Rights
                </a>
              </li>
              <li>
                <a className={sharedStyles.link} href="#updates">
                  Policy Updates
                </a>
              </li>
            </ul>
          </aside>

          <section className={sharedStyles.tcContent}>
            <p className={sharedStyles.intro}>
              At Finsol, protecting your personal and financial information is
              our top priority. This Privacy Policy explains how we collect,
              use, and safeguard your data when you access our website, payment
              gateway, and related services.
            </p>

            <div id="info" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Information We Collect</h2>
              <p>We may collect the following categories of data:</p>
              <ul>
                <li>Contact information: name, email, phone number</li>
                <li>
                  Business &amp; financial details: company information, bank
                  details, transaction history
                </li>
                <li>
                  Technical data: IP address, browser type, device information,
                  cookies and tracking data
                </li>
              </ul>
            </div>

            <div id="use" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>How We Use Your Information</h2>
              <p>Your data may be used to:</p>
              <ul>
                <li>
                  Provide, operate, and improve our Pay-In, Pay-Out, and
                  white-label payment services
                </li>
                <li>Process and settle transactions securely</li>
                <li>
                  Verify identity and prevent fraud or unauthorized activities
                </li>
                <li>
                  Communicate important updates, notifications, and support
                  information
                </li>
                <li>
                  Comply with applicable financial, legal, and regulatory
                  requirements
                </li>
              </ul>
            </div>

            <div id="security" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Data Security</h2>
              <p>
                We implement advanced security measures to protect your
                information from unauthorized access, misuse, or disclosure.
                However, while we adopt industry best practices, no online
                transmission or storage system can be guaranteed to be 100%
                secure.
              </p>
            </div>

            <div id="sharing" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Sharing of Information</h2>
              <p>
                We do not sell or rent your personal data. Information may only
                be shared with:
              </p>
              <ul>
                <li>
                  Authorized partners such as banks, payment processors, and
                  service providers supporting our operations
                </li>
                <li>
                  Regulators or government authorities, when disclosure is
                  required by law or regulation
                </li>
              </ul>
            </div>

            <div id="rights" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Your Rights</h2>
              <p>As a Finsol user, you have the right to:</p>
              <ul>
                <li>
                  Access and review the personal information we hold about you
                </li>
                <li>Request corrections or updates to your data</li>
                <li>
                  Request deletion of your information, subject to legal and
                  compliance obligations
                </li>
                <li>Manage your communication and marketing preferences</li>
              </ul>
            </div>

            <div id="updates" className={sharedStyles.block}>
              <h2 className={sharedStyles.h2}>Policy Updates</h2>
              <p>
                We may revise this Privacy Policy from time to time to reflect
                changes in our services, technology, or legal requirements.
                Updated versions will be posted on this page, and continued use
                of our services constitutes acceptance of any changes.
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
