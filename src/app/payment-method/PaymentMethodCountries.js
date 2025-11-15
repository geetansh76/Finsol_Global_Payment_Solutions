'use client';

import styles from './PaymentMethodCountries.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const countriesByContinent = {
  Asia: [
    'Japan','Thailand','Vietnam','Russia','Philippines','Turkey','Singapore','Malaysia','Indonesia',
  ],
  Europe: [
    'United-Kingdom ','France','Germany','Spain','Italy','Sweden','Netherlands','Ireland','Finland','Russia',
    'Hungary','Belgium','Turkey',
  ],
  Africa: ['Nigeria', 'Ghana', 'Kenya'],
  Oceania: ['Australia', 'New-Zealand'],
  "Latin-America": ['Canada', 'USA', 'Brazil'],
};

/* Build a safe URL slug: lowercase, remove accents/punct, spaces→hyphens */
const slugify = (str = '') =>
  str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // strip accents
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')     // keep alnum/space/hyphen
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const allCountries = [];
for (const [continent, countries] of Object.entries(countriesByContinent)) {
  countries.forEach((country) => allCountries.push({ continent, country }));
}

// Ensure exactly 28
const visibleCountries = allCountries.slice(0, 28);
const firstRowCountries = visibleCountries.slice(0, 3);
const remainingCountries = visibleCountries.slice(3);

/* Keep your existing flag folder logic (spaces removed) */
const getFlagSrc = (continent, country) => {
  const folder = continent.toLowerCase().replace(/\s+/g, '');
  const file = country.toLowerCase().replace(/\s+/g, '') + '.png';
  return `/icons/countries-icon/${folder}/${file}`;
};

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 12 } },
};

// Motion-enabled Link
const MotionLink = motion(Link);

export default function PaymentMethodCountries() {
  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        🌍 Countries
      </motion.h2>

      {/* First row */}
      <motion.div className={styles.firstRow} variants={containerVariants}>
        {firstRowCountries.map(({ continent, country }, index) => {
          const href = `/coverage/${slugify(continent)}/${slugify(country)}`;
          return (
            <MotionLink
              key={index}
              href={href}
              className={styles.countryButton}
              variants={buttonVariants}
              whileHover={{ scale: 1.12, rotate: -2, boxShadow: '0px 8px 20px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.95, rotate: 0 }}
            >
              <Image
                src={getFlagSrc(continent, country)}
                alt={country}
                width={32}
                height={24}
                className={styles.flag}
              />
              <span>{country}</span>
            </MotionLink>
          );
        })}
      </motion.div>

      {/* Remaining grid */}
      <motion.div className={styles.grid} variants={containerVariants}>
        {remainingCountries.map(({ continent, country }, index) => {
          const href = `/coverage/${slugify(continent)}/${slugify(country)}`;
          return (
            <MotionLink
              key={index}
              href={href}
              className={styles.countryButton}
              variants={buttonVariants}
              whileHover={{ scale: 1.1, rotate: 3, boxShadow: '0px 6px 15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.96 }}
            >
              <Image
                src={getFlagSrc(continent, country)}
                alt={country}
                width={32}
                height={24}
                className={styles.flag}
              />
              <span>{country}</span>
            </MotionLink>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
