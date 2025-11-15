"use client";

import Script from "next/script";

import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import sharedStyles from "../SharedPage.module.css";
import PaymentMethodCountries from "../PaymentMethodCountries";
import Footer from "@/components/Home/footer/Footer";

const PAGE_URL = "https://www.finsol.group/payment-method/bank-transfers";
const HOME_URL = "https://www.finsol.group";
const OG_IMAGE_URL =
  "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png";

export default function BankTransferClient() {
  return (
    <>
      {/* JSON-LD (WebSite + SearchAction) */}
      <Script
        id="ld-website-bank-transfer"
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

      <Header
        title="Bank Transfers"
        minimal={false}
        hideButton
        className={sharedStyles.shortHero}
        titleClass={sharedStyles.customTitle}
        description="Empowering businesses with reliable bank transfer solutions that ensure fast settlements, compliance, and flexibility for cross-border and domestic transactions worldwide."
      />

      {/* ✅ Bank Transfer Category Section */}
      <section className={sharedStyles.categoryContainer}>
        <div className={sharedStyles.contentCTA}>
          <div className={sharedStyles.headerBody}>
            <p className={sharedStyles.categoryDescription}>
              Bank transfers remain a reliable and widely used payment method
              for high-value transactions, especially in B2B and enterprise
              contexts. With Finsol, businesses can initiate and accept direct
              bank-to-bank transfers seamlessly, whether it is through NEFT,
              RTGS, IMPS, or cross-border remittance networks. Our PayIn
              infrastructure allows customers to send funds directly from their
              bank accounts using provided beneficiary details—enabling
              transparent, traceable, and secure fund movement across domestic
              and international accounts.
            </p>
            <p className={sharedStyles.categoryDescription}>
              On the Payout side, Finsol empowers businesses to disburse funds
              to vendors, partners, employees, or customers via automated bank
              transfers with complete control and visibility. Through our
              API-first platform, businesses can schedule, batch, and monitor
              large-volume payments while ensuring full compliance with
              regulatory standards. Built-in reconciliation tools, real-time
              status updates, and error-handling mechanisms make our bank
              transfer solution ideal for managing scale and complexity in
              financial operations.
            </p>
          </div>
          <div className={sharedStyles.categoryImageWrap}>
            <Image
              src="/images/payment-method-images/BankTransfer/bank-main.png"
              alt="Bank Transfer"
              width={1200}
              height={800}
              className={sharedStyles.categoryImage}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 560px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section className={sharedStyles.benefitsSection}>
        <h2 className={sharedStyles.benefitsTitle}>Benefits</h2>
        <div className={sharedStyles.cardList}>
          <div className={sharedStyles.benefitCard}>
            <Image
              src="/icons/payment-method-icons/bank-transfer/supported-banks.png"
              alt="Supported Banks"
              width={60}
              height={60}
            />
            <h4>Support for NEFT, RTGS, IMPS & SWIFT</h4>
            <p>
              Finsol enables seamless domestic and international bank transfers
              through integration with India’s key payment rails and global
              networks, ensuring timely and secure settlements.
            </p>
          </div>

          <div className={sharedStyles.benefitCard}>
            <Image
              src="/icons/payment-method-icons/bank-transfer/secure-compliant.png"
              alt="Secure Transfers"
              width={60}
              height={60}
            />
            <h4>Ideal for High-Value Transactions</h4>
            <p>
              Bank transfers are perfect for B2B payments, vendor settlements,
              and enterprise-level disbursements where reliability,
              auditability, and transaction traceability are critical.
            </p>
          </div>

          <div className={sharedStyles.benefitCard}>
            <Image
              src="/icons/payment-method-icons/bank-transfer/reconciliation.png"
              alt="Smart Reconciliation"
              width={60}
              height={60}
            />
            <h4>Automated & API-Driven Payouts</h4>
            <p>
              With Finsol’s programmable infrastructure, businesses can
              schedule, track, and reconcile large volumes of outbound
              transfers—saving time, reducing errors, and improving cash flow
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Bank Transfer Flow Section */}
      <section className={sharedStyles.cardTransactionSection}>
        {/* Left Image */}
        <div className={sharedStyles.cardTransactionImageWrapper}>
          <Image
            src="/images/payment-method-images/BankTransfer/bank-step.png"
            alt="Bank Transfer Flow"
            width={1200}
            height={1200}
            className={sharedStyles.cardTransactionImage}
            sizes="(max-width: 1024px) 92vw, 560px"
          />
        </div>

        {/* Right Content */}
        <div className={sharedStyles.cardTransactionContent}>
          <h2 className={sharedStyles.cardTransactionHeading}>
            How Bank Transfers <br />
            Transaction Work
            <br />
            with Finsol
          </h2>

          <p className={sharedStyles.cardTransactionDescription}>
            Finsol simplifies direct bank-to-bank transfers by supporting NEFT,
            RTGS, IMPS, and SWIFT rails for both domestic and international
            payments. Whether for collections or disbursements, our platform
            ensures secure, auditable fund movement. Here is how a typical bank
            transfer works with Finsol:
          </p>

          {/* Step 1 */}
          <div className={sharedStyles.cardStep}>
            <span className={sharedStyles.cardStepNumber}>1</span>
            <div>
              <h3 className={sharedStyles.cardStepTitle1}>
                Select Bank Transfer as Payment Option
              </h3>
              <p className={sharedStyles.cardStepText}>
                At checkout or invoice stage, the user selects “Bank Transfer”
                as their preferred payment method.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className={sharedStyles.cardStep}>
            <span className={sharedStyles.cardStepNumber}>2</span>
            <div>
              <h3 className={sharedStyles.cardStepTitle2}>
                View Beneficiary Details
              </h3>
              <p className={sharedStyles.cardStepText}>
                Finsol displays the bank account details (account number,
                IFSC/SWIFT code, bank name) for the user to initiate the
                transfer.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className={sharedStyles.cardStep}>
            <span className={sharedStyles.cardStepNumber}>3</span>
            <div>
              <h3 className={sharedStyles.cardStepTitle3}>
                Initiate Transfer via Bank Portal
              </h3>
              <p className={sharedStyles.cardStepText}>
                The user logs into their bank account or app and manually
                transfers the amount using NEFT, RTGS, IMPS, or SWIFT, depending
                on the transaction type.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className={sharedStyles.cardStep}>
            <span className={sharedStyles.cardStepNumber}>4</span>
            <div>
              <h3 className={sharedStyles.cardStepTitle3}>
                Confirmation & Reconciliation
              </h3>
              <p className={sharedStyles.cardStepText}>
                Once the payment is received, Finsol verifies the transaction
                and provides real-time confirmation and auto-reconciliation for
                the merchant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PaymentMethodCountries />

      <Footer />
    </>
  );
}
