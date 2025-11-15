import Image from "next/image";
import Header from "@/components/Home/Header/Header";
import Footer from "@/components/Home/footer/Footer";
import ChatAssistant from "@/components/Home/chat-assistant/ChatAssistant";
import styles from "./author.module.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["800"], display: "swap" });

/* ===== SEO METADATA ===== */
export const metadata = {
  title: "Finsol Author | Insights on Global Digital Payments & Payout Solutions",
  description:
    "Explore expert insights from Finsol. Learn about secure pay-in and payout services, instant gateways & white label platforms for seamless cross-border transactions.",
  keywords:
    "Finsol, Global Digital Payments, Cross-Border Transactions, Instant Payout Gateway, White Label Payment Solutions, International Payment Processing, Pay-In And Payout Services, Secure Online Payments, Digital Payment Innovation",
  alternates: {
    canonical: "https://www.finsol.group/author",
  },
  openGraph: {
    type: "website",
    siteName: "Finsol",
    title: "Finsol Author | Insights on Global Digital Payments & Payout Solutions",
    description:
      "Explore expert insights from Finsol. Learn about secure pay-in and payout services, instant gateways & white label platforms for seamless cross-border transactions.",
    url: "https://www.finsol.group/author",
    images: [
      {
        url: "https://www.finsol.group/images/author-images/about-finsol.png",
        width: 1200,
        height: 630,
        alt: "Finsol Author",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FinsolGroupLLC",
    creator: "@FinsolGroupLLC",
    title: "Finsol Author | Insights on Global Digital Payments & Payout Solutions",
    description:
      "Explore expert insights from Finsol. Learn about secure pay-in and payout services, instant gateways & white label platforms for seamless cross-border transactions.",
    images: [
      "https://www.finsol.group/images/author-images/about-finsol.png",
    ],
  },
};

export default function AuthorPage() {
  const authorName = "Finsol";
  const imageSrc = "/images/author-images/about-finsol.png";

  return (
    <>
      <Header
        minimal
        hideButton
        className={styles.authorHeader}
        title={
          <h1 className={`${styles.authorTitle} ${dmSans.className}`}>
            {authorName}
          </h1>
        }
      />

      <main className={styles.container}>
        <section className={styles.about}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>About {authorName}</h2>

            <p className={styles.aboutP}>
              {authorName} is a trusted name in global digital payments, providing businesses with reliable pay-in and payout services, instant payout gateways, global payout platforms and white label payment solutions. With a strong focus on innovation and security, Finsol delivers scalable payment gateway solutions that simplify cross-border transactions and support businesses in expanding worldwide.
            </p>

            <p className={styles.aboutP}>
        
              Our mission is to make online payments seamless, transparent, and future-ready. By combining expertise in international payment processing, payout automation, and white label platforms,  {authorName} helps startups, enterprises and fintechs accept and disburse payments with confidence. All information and insights shared here reflect our industry knowledge and commitment to empowering global business growth.
            </p>
          </div>

          <figure className={styles.aboutMedia}>
            <Image
              src={imageSrc}
              alt={`About ${authorName}`}
              width={600}
              height={495}
              className={styles.aboutImg}
              priority
            />
          </figure>
        </section>
      </main>

      <ChatAssistant />
      <Footer />
    </>
  );
}
