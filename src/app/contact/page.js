import ContactClient from "./contactclient";
import Script from "next/script";

export const metadata = {
  title: "Contact Finsol | Get in Touch for Global Payment Gateway & Coverage Support",
  description:
    "Reach out to Finsol for assistance with global coverage and payment gateway solutions. Our team is here to answer queries, provide support and help your business grow securely.",
  keywords:
    "Contact Payment Solutions Team, Payment Gateway Support, Secure Payment Assistance, Customized Payment Solutions, Sales Inquiries Payment, Technical Support Payments, Partner With Payment Provider, Payment Consultation Services, Global Payment Support, Reach Payment Experts",
  alternates: {
    canonical: "https://www.finsol.group/contact",
  },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Contact Finsol | Get in Touch for Global Payment Gateway & Coverage Support",
    description:
      "Reach out to Finsol for assistance with global coverage and payment gateway solutions. Our team is here to answer queries, provide support and help your business grow securely.",
    url: "https://www.finsol.group/contact",
    images: [
      {
        url: "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png",
        width: 1200,
        height: 630,
        alt: "Finsol Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Contact Finsol | Get in Touch for Global Payment Gateway & Coverage Support",
    description:
      "Reach out to Finsol for assistance with global coverage and payment gateway solutions. Our team is here to answer queries, provide support and help your business grow securely.",
    images: [
      "https://www.finsol.group/icons/industries-icons/digital & subscription/elearning.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Finsol",
      url: "https://www.finsol.group",
      logo: "https://www.finsol.group/logo.png",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971522391996",
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["en"],
          email: "info@finsol.group",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "311, Emaar Business Park, Building 4",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
