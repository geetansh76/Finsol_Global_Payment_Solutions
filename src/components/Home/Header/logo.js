
import Image from 'next/image';
import styles from './Header.module.css'; // Make sure this is imported

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/logo.png"
        alt="Finsol Logo"
        fill
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default Logo;
