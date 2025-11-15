"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import styles from "./contact.module.css";
import Footer from "@/components/Home/footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactClient() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    region: "",
    volume: "",
    consent1: false,
    consent2: false,
  });

  const [formErrors, setFormErrors] = useState({});

  // ====== VALIDATION PATTERNS ======
  const nameRegex = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
  const companyRegex = /^[A-Za-z][A-Za-z0-9\s.'&-]{1,99}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const urlRegex = /^(https?:\/\/)[^\s]+$/;

  function validateField(name, value) {
    const v = typeof value === "string" ? value.trim() : value;

    switch (name) {
      case "firstName":
        if (!v) return "First name is required.";
        if (!nameRegex.test(v)) return "Enter a valid first name (letters only).";
        return "";
      case "lastName":
        if (!v) return "Last name is required.";
        if (!nameRegex.test(v)) return "Enter a valid last name (letters only).";
        return "";
      case "email":
        if (!v) return "Email is required.";
        if (!emailRegex.test(v)) return "Please enter a valid email address.";
        return "";
      case "company":
        if (!v) return "Company is required.";
        if (!companyRegex.test(v)) return "Enter a valid company name (letters, numbers, space, . ' & -).";
        return "";
      case "website":
        if (!v) return "Website is required.";
        if (!urlRegex.test(v)) return "Website must start with http:// or https://";
        return "";
      case "region":
        if (!v) return "Payment region is required.";
        return "";
      case "volume":
        if (!v) return "Monthly volume is required.";
        return "";
      case "consent1":
        if (!v) return "You must consent to communications.";
        return "";
      case "consent2":
        if (!v) return "You must accept privacy policy and T&Cs.";
        return "";
      default:
        return "";
    }
  }

  function validateAll(values) {
    const nextErrors = {};
    Object.keys(values).forEach((key) => {
      const err = validateField(key, values[key]);
      if (err) nextErrors[key] = err;
    });
    return nextErrors;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const realValue = type === "checkbox" ? checked : value;

    const nextValues = { ...formValues, [name]: realValue };
    setFormValues(nextValues);

    const err = validateField(name, realValue);
    setFormErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const realValue = type === "checkbox" ? checked : value;
    const err = validateField(name, realValue);
    setFormErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateAll(formValues);
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    const {
      firstName,
      lastName,
      email,
      company,
      website,
      region,
      volume,
      consent1,
      consent2,
    } = formValues;

    const payload = {
      to: "geetanshshrivastava085@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company}
        Website: ${website}
        Region: ${region}
        Volume: ${volume}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Website:</b> ${website}</p>
        <p><b>Region:</b> ${region}</p>
        <p><b>Volume:</b> ${volume}</p>
        <p><b>Consent Marketing:</b> ${consent1 ? "Yes" : "No"}</p>
        <p><b>Consent T&Cs:</b> ${consent2 ? "Yes" : "No"}</p>
      `,
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          website: "",
          region: "",
          volume: "",
          consent1: false,
          consent2: false,
        });
        setFormErrors({});
        router.push("/thankyou");
      } else {
        console.error("Email sending failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header
        title={
          <>
            <span className={styles.titlePrimary}>Connect with Us to Build</span>
            <br />
            <span className={styles.titleAccent}>Smarter Payment Solutions</span>
          </>
        }
        description="Our team is here to help you scale faster with secure, seamless, and customized payment solutions."
        minimal={false}
        showHero
        hideButton
        className={styles.headerContainer}
        titleClass={styles.customTitle}
        descriptionClass={styles.headerDescription}
      />

      <section className={styles.section}>
        <span className={styles.accentA} aria-hidden />
        <span className={styles.accentB} aria-hidden />
        <span className={styles.grid} aria-hidden />

        <div className={styles.container}>
          {/* Left: form card */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className={styles.h2}>Have questions? Get support from us</h2>

            <motion.form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* Name row */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    value={formValues.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {formErrors.firstName ? (
                    <p className={styles.errorMsg}>{formErrors.firstName}</p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label htmlFor="lastName">Last Name*</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {formErrors.lastName ? (
                    <p className={styles.errorMsg}>{formErrors.lastName}</p>
                  ) : null}
                </div>
              </div>

              {/* Email / Company */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email">Work Email*</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {formErrors.email ? (
                    <p className={styles.errorMsg}>{formErrors.email}</p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Company*</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    value={formValues.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {formErrors.company ? (
                    <p className={styles.errorMsg}>{formErrors.company}</p>
                  ) : null}
                </div>
              </div>

              {/* Website */}
              <div className={styles.field}>
                <label htmlFor="website">Company Website*</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={formValues.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.website ? (
                  <p className={styles.errorMsg}>{formErrors.website}</p>
                ) : null}
              </div>

              {/* Region / Volume */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="region">Payment Region*</label>
                  <select
                    id="region"
                    name="region"
                    value={formValues.region}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please select</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="latin-america">Latin America</option>
                    <option value="oceania">Oceania</option>
                    <option value="africa">Africa</option>
                  </select>
                  {formErrors.region ? (
                    <p className={styles.errorMsg}>{formErrors.region}</p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label htmlFor="volume">Monthly Volume in USD*</label>
                  <select
                    id="volume"
                    name="volume"
                    value={formValues.volume}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please select</option>
                    <option value="0-50000">USD 0 - 50,000</option>
                    <option value="50001-200000">USD 50,001 - 200,000</option>
                    <option value="200001-500000">USD 200,001 - 500,000</option>
                    <option value="500001-1000000">USD 500,001 - 1,000,000</option>
                    <option value="1000001+">USD 1,000,001+</option>
                  </select>
                  {formErrors.volume ? (
                    <p className={styles.errorMsg}>{formErrors.volume}</p>
                  ) : null}
                </div>
              </div>

              {/* Consents */}
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="consent1"
                  checked={formValues.consent1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  I consent to Finsol using my personal information to send
                  communications about its products, services, updates, events,
                  and industry insights.
                </span>
              </label>
              {formErrors.consent1 ? (
                <p className={styles.errorMsg}>{formErrors.consent1}</p>
              ) : null}

              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="consent2"
                  checked={formValues.consent2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  By submitting, you confirm that you have read Finsol’s{" "}
                  <a href="/privacy-tnc/privacy-policy" className={styles.supportLink} rel="noopener">
                    Privacy Policy
                  </a>{" "}
                  and agree to its{" "}
                  <a href="/privacy-tnc/terms-conditions" className={styles.supportLink} rel="noopener">
                    Terms and Conditions
                  </a>{" "}
                  regarding the use of your data.
                </span>
              </label>
              {formErrors.consent2 ? (
                <p className={styles.errorMsg}>{formErrors.consent2}</p>
              ) : null}

              <motion.button
                type="submit"
                className={styles.submit}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Submit"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right: contact info */}
          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <h3 className={styles.h3}>Want to reach us directly?</h3>
            <p className={styles.helper}>
              Sales inquiries, technical support, or partnerships — our team
              will get back to you shortly.
            </p>

            <ul className={styles.list}>
              <li>
                <Image
                  src="/icons/Footer-icons/contact_us/location.png"
                  alt="Location"
                  width={40}
                  height={40}
                />
                <a>
                  311, Emaar Business Park, Building 4
                  <br />
                  Dubai – UAE
                </a>
              </li>

              <li>
                <Image
                  src="/icons/Footer-icons/contact_us/mail.png"
                  alt="Email"
                  width={40}
                  height={40}
                />
                <a href="mailto:info@finsol.group">info@finsol.group</a>
              </li>

              <li>
                <Image
                  src="/icons/Footer-icons/contact_us/phone.png"
                  alt="Phone"
                  width={35}
                  height={35}
                />
                <a href="tel:+971522391996">+971 52 239 1996</a>
              </li>

              <li>
                <Image
                  src="/icons/Footer-icons/contact_us/telephone.png"
                  alt="Telephone"
                  width={40}
                  height={40}
                />
                <a href="tel:045701889">+91 4570 1889</a>
              </li>
            </ul>
          </motion.aside>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </>
  );
}
