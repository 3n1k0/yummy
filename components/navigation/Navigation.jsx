import { useState } from "react";
import Link from "next/link";

import styles from "./Navigation.module.scss";

const Navigation = ({ navigationItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.burger} onClick={toggleMenu}>
        <div className={`${styles.line1} ${menuOpen ? styles.rotate1 : ""}`}></div>
        <div className={`${styles.line2} ${menuOpen ? styles.hideLine : ""}`}></div>
        <div className={`${styles.line3} ${menuOpen ? styles.rotate3 : ""}`}></div>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
      <p className={styles.navLogo}>LOGO</p>
        <ul className={styles.navLinkWrapper}>
        {navigationItems.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <Link href={item.url}>{item.label}</Link>
              </div>
            </li>
          );
        })}
        </ul>
      </div>

      <div className={styles.logo}>
        <Link href="/">
          <p>yummy</p>
        </Link>
      </div>

      <div className={styles.icons}>
        <Link href="/">
          <div>Icon 1</div>
        </Link>
        <Link href="/">
          <div>Icon 2</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
