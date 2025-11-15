"use client";
import Header from "@/components/Home/Header/Header";
import styles from "./coverage-section.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const coverageData = {
  Asia: [
    "Japan",
    "Thailand",
    "Vietnam",
    "Russia",
    "Philippines",
    "Turkey",
    "Singapore",
    "Malaysia",
    "Indonesia",
  ],

  Europe: [
    "United Kingdom",
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Sweden",
    "Netherlands",
    "Ireland",
    "Finland",
    "Russia",
    "Hungary",
    "Belgium",
    "Turkey",
  ],
  Africa: ["Nigeria", "Ghana", "Kenya"],
  Oceania: ["Australia", "New Zealand"],
  "Latin America": ["Canada", "USA", "Brazil"],
};


const countrySlugOverrides = {
  Netherland: "netherlands",   
  Netherlands: "netherlands",  
  "New Zealand": "newzealand", 
};


const toCountrySlug = (name) =>
  countrySlugOverrides[name] ??
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const toRegionSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

/** Flags keep your original filename pattern (hyphens for spaces) */
const getFlagPath = (country, region) => {
  const fileName = country?.toLowerCase().replace(/\s+/g, "-");
  return `/icons/countries-icon/${region.toLowerCase()}/${fileName}.png`;
};



/* === Animations === */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

export default function CoverageSection({ currentContinent }) {
  const firstRow = ["Asia", "Europe"].filter((c) => c !== currentContinent);
  const secondRow = ["Africa", "Oceania", "Latin America"].filter(
    (c) => c !== currentContinent
  );

  return (
    <motion.section
      className={styles.coverageSection}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className={styles.header}>
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Partnering Businesses Across Borders
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        >
          Grow without limits. Our global payment network empowers businesses to
          operate seamlessly across countries, currencies, and customer
          touchpoints.
        </motion.p>
      </div>

      {/* ===== First row (Asia / Europe) ===== */}
      <motion.div className={styles.firstRow} variants={containerVariants}>
        {firstRow.map((region) => (
          <div key={region} className={styles.continentBlock}>
            <h3>{region}</h3>

            <motion.div className={styles.countryList} variants={containerVariants}>
              {coverageData[region].map((country) => {
                const countrySlug = toCountrySlug(country);
                const regionSlug = toRegionSlug(region);

                return (
                  <Link
                    key={country}
                    href={`/coverage/${regionSlug}/${countrySlug}/`}
                    legacyBehavior
                    passHref
                  >
                    <motion.a
                      className={styles.countryButton}
                      variants={buttonVariants}
                      whileHover={{
                        scale: 1.12,
                        rotate: -2,
                        boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={getFlagPath(country, region)}
                        alt={country}
                        width={20}
                        height={20}
                      />
                      <span>{country}</span>
                    </motion.a>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* ===== Second row (Africa / Oceania / Latin America) ===== */}
      <motion.div className={styles.secondRow} variants={containerVariants}>
        {secondRow.map((region) => {
          const folderName = region.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              key={region}
              className={`${styles.continentBlock} ${
                region === "Africa" || region === "Latin America"
                  ? styles.twoColumnList
                  : ""
              }`}
            >
              <h3>{region}</h3>

              <motion.div className={styles.countryList} variants={containerVariants}>
                {coverageData[region].map((country) => {
                  const countrySlug = toCountrySlug(country);
                  const regionSlug = toRegionSlug(region);

                  return (
                    <Link
                      key={country}
                      href={`/coverage/${regionSlug}/${countrySlug}/`}
                      legacyBehavior
                      passHref
                    >
                      <motion.a
                        className={styles.countryButton}
                        variants={buttonVariants}
                        whileHover={{
                          scale: 1.1,
                          rotate: 3,
                          boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                        }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Image
                          src={getFlagPath(country, folderName)}
                          alt={country}
                          width={20}
                          height={20}
                        />
                        <span>{country}</span>
                      </motion.a>
                    </Link>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <div className={styles.mapWrapper}>
        <Image
          src="/icons/countries-icon/world-map.gif"
          alt="World map"
          width={1440}
          height={274}
        />
      </div>
    </motion.section>
  );
}


