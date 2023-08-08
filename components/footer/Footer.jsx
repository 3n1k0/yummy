import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <div className={styles.footerItem}>
            <Link className={styles.footerLink} href="/categories">
              Categories
            </Link>
          </div>
          <div className={styles.footerItem}>
            <Link className={styles.footerLink} href="/about">
              About
            </Link>
          </div>
          <div className={styles.footerItem}>
            <Link className={styles.footerLink} href="/blog">
              Blog
            </Link>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footerItem}>
            <Link className={styles.footerLink} href="/privacy">
              Privacy
            </Link>
          </div>
          <div className={styles.footerItem}>
            <Link className={styles.footerLink} href="/terms">
              Terms
            </Link>
          </div>
          <div className={styles.footerItem}>
            <Link className={styles.footerLink} href="/security">
              Security
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerSocialIcons}>
        <a href="#" data-testid="facebook-icon" className={styles.socialIcon}>
          <FaFacebook />
        </a>
        <a href="#" data-testid="twitter-icon"  className={styles.socialIcon}>
          <FaTwitter />
        </a>
        <a href="#" data-testid="instagram-icon"  className={styles.socialIcon}>
          <FaInstagram />
        </a>
      </div>
      <p className={styles.footerCopyright}>
        &copy; 2023 Your Company Name. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
