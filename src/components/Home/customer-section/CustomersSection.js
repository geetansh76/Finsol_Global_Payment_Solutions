'use client';
import Image from 'next/image';
import styles from './CustomersSection.module.css';

const frame7 = new Array(8).fill('/images/customers/customer1.png');
const frame6 = new Array(7).fill('/images/customers/customer2.png');

export default function CustomersSection() {
  return (
    <section className={styles.customers}>
      <div className={styles.header}>
        <h2>Our Customers</h2>
        <p>Powering payments for companies across industries and continents.</p>
      </div>
      
      <div className={styles.frameRow}>
        {frame7.map((src, index) => (
          <div key={index} className={styles.logoBox}>
            <Image src={src} alt={`Customer ${index + 1}`} width={80} height={40} />
          </div>
        ))}
      </div>

      <div className={styles.frameRow}>
        {frame6.map((src, index) => (
          <div key={index} className={styles.logoBox}>
            <Image src={src} alt={`Customer ${index + 9}`} width={80} height={40} />
          </div>
        ))}
      </div>
    </section>
  );
}
