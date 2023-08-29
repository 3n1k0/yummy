import { useState } from "react";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import styles from "./Navigation.module.scss";

const Navigation = ({ navigationItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.burger} onClick={toggleMenu}>
        <div
          className={`${styles.line1} ${menuOpen ? styles.rotate1 : ""}`}
        ></div>
        <div
          className={`${styles.line2} ${menuOpen ? styles.hideLine : ""}`}
        ></div>
        <div
          className={`${styles.line3} ${menuOpen ? styles.rotate3 : ""}`}
        ></div>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <p className={styles.navLogo}>YUMMY</p>
        <ul className={styles.navLinkWrapper}>
          {navigationItems.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Link href={item.url} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.logo}>
        <Link href="/">
          <h1>yummy</h1>
        </Link>
      </div>

      <div className={styles.authenticationContainer}>
        <Link data-testid="login" className={styles.itemWrapper} href="/login">
          <p>Login</p>
          <div className={styles.iconWrapper}>
            <BiLogIn />
          </div>
        </Link>
        <Link
          data-testid="register"
          className={styles.itemWrapper}
          href="/register"
        >
          <p>Register</p>
          <div className={styles.iconWrapper}>
            <RiAccountPinBoxLine />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
