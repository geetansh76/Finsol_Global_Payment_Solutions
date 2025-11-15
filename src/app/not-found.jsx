import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrap} aria-labelledby="nf-title">
      <div className={styles.backGlow} aria-hidden="true" />
      <section className={styles.card}>
        {/* 404 Graphic */}
        <div className={styles.illustration} aria-hidden="true">
          <div className={styles.heroWrap} aria-hidden="true">
            <div className={styles.hero404}>404</div>
            <div className={styles.heroRule} />
          </div>
        </div>

        <h1 id="nf-title" className={styles.title}>
          Page not found
        </h1>
        <p className={styles.lead}>
          The link you followed may be broken or the page may have been moved.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
            Go to Home
          </Link>
         
        </div>

        <div className={styles.tips}>
          <span>Tip:</span> Check the URL for typos, or use the buttons above.
        </div>
      </section>
    </main>
  );
}
