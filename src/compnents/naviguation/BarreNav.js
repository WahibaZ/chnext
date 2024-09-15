import Link from 'next/link';
import styles from './BarreNav.module.css'; 
export default function BarreNav() {
    return (
      <nav className={styles.nav}>
        <h1 className={styles.h1}>Welcome to My Portfolio</h1>
        
        <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.link} href="/">Home</Link></li>
          <li className={styles.li}><Link className={styles.link} href="/about">About</Link></li>
          <li className={styles.li}><Link className={styles.link} href="/projects">Projects</Link></li>
          <li className={styles.li}><Link className={styles.link} href="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }