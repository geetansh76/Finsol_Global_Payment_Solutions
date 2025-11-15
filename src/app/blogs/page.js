
import Header from "@/components/Home/Header/Header";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import Footer from "@/components/Home/footer/Footer";
import BlogTabs from "@/components/Blog/blogTabs";
import styles from "./blog.module.css";
import Script from "next/script";

const SITE = "https://www.finsol.group";
const PAGE_URL = `${SITE}/blogs/`;
const OG_IMAGE = `${SITE}/images/blogs-images/crossborder-payments.png`;

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Finsol Blog: Insights on Global Payments, Fintech & Cross-Border Solutions",
  description:
    "Explore Finsol's blog for expert insights on digital payments, fintech trends, cross-border solutions and white-label gateways to scale your global business operations.",
  keywords:
    "Digital Payment Solutions, Cross-Border Payment Gateway, Fintech Trends, Online Payment Services, International Payment Gateway Providers, Pay-In and Payout Solutions, White Label Payment Platform, Online Payment Gateway Provider, Instant Payout Solutions, Scalable Payment API",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Finsol Blog: Insights on Global Payments, Fintech & Cross-Border Solutions",
    description:
      "Explore Finsol's blog for expert insights on digital payments, fintech trends, cross-border solutions and white-label gateways to scale your global business operations.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary", // use "summary_large_image" if you want a bigger preview
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Finsol Blog: Insights on Global Payments, Fintech & Cross-Border Solutions",
    description:
      "Explore Finsol's blog for expert insights on digital payments, fintech trends, cross-border solutions and white-label gateways to scale your global business operations.",
    images: [OG_IMAGE],
  },
  other: {
    copyright: "Finsol",
    bingbot: "index, follow",
    "revisit-after": "daily",
    "allow-search": "yes",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* JSON-LD: WebSite with SearchAction */}
      <Script
        id="ld-website-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "finsol group",
            url: PAGE_URL,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE}/search?searchQuery={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* JSON-LD: Organization */}
      <Script
        id="ld-org-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "finsol group",
            alternateName: "finsol",
            url: PAGE_URL,
            logo: `${SITE}/images/logo.png`,
          }),
        }}
      />

      {/* JSON-LD: LocalBusiness (optional, as provided) */}
      <Script
        id="ld-localbusiness-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "finsol group",
            image: OG_IMAGE,
            url: PAGE_URL,
            telephone: "+971 52 239 1996",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Finsol Payment Services Provider, 311 Emaar Business Park, Building 4",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
          }),
        }}
      />

     <Header
  className={styles.blogHeader}
  minimal={false}
  showHero
  heroVariant="default"
  hideButton
  title={
    <>
      <span className={styles.titlePrimary}>Insights That Power</span>
      <br />
      <span className={styles.titleAccent}>Global Payment Growth</span>
    </>
  }
  description="Stay informed with expert insights and trends driving digital payment transformation worldwide, helping businesses scale securely and deliver seamless experiences."
  descriptionClass={styles.descriptionOverride}
/>
      <main className={styles.main}>
        <ChatAssistant />
        <BlogTabs />
      </main>
      <Footer />
    </>
  );
}
