"use client";

import Image from "next/image";
import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div
      id="preloader"
      className={styles.preloaderRoot}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className={styles.preloaderBox}>
        {/* You can keep your brand image, it will spin */}
        <Image
          src="/images/loader.png"
          alt="Loading"
          width={80}
          height={80}
          priority
          className={styles.spinner}
        />
      </div>
    </div>
  );
}

