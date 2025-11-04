/* eslint-disable @typescript-eslint/no-explicit-any */
// Package imports

// Custom imports
import PrivacyIcon from "~/res/svgs/privacy";
import styles from "./Footer.module.scss";
import SBV_white from "~/res/svgs/SBV_white";
import Link from "next/link";

const Footer = () => {
  const openConsent = () => {
    // Safeguard if Cookiebot hasn't loaded yet
    if (typeof window !== "undefined" && (window as any).Cookiebot) {
      (window as any).Cookiebot.renew(); // or .show() for CPRA link
    }
  };

  return (
    <div className={styles["footer__container"]}>
      <div className={styles.footer}>
        <div className={styles["footer__top-row"]}>
          <SBV_white />
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@dmvelzy">Medium</Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__bottom-row"]}>
          <button onClick={openConsent} className={styles["privacy-button"]}>
            <PrivacyIcon />
            <p className="b">Privacy choices</p>
          </button>
          <p>
            © {new Date().getFullYear()} Sites by Velzy. All rights reserved.
          </p>
          <p>Designed And Developed By Derek Velzy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
