import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation = ({ navigationItems }) => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.menuItems}>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
        <div className={styles.userLogin}>
          <Link data-testid="login" href="login">
            <a>Login</a>
          </Link>
          <Link data-testid="register" href="register">
            <a>Register</a>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
