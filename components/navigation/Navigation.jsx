import { useState } from 'react';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = ({navigationItems}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className={styles.logo}>
        <Link href="/">
          <div >Logo</div>
        </Link>
      </div>
      <div className={`${styles.burger} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li>
          <div>
            <Link href="/">Home</Link>
          </div>
        </li>
        <li>
          <div>
            <Link href="/about">About</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
