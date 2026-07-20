import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.logo}>
          movie<span>niac</span>
        </p>
        <p className={styles.copyright}>Feito com ❤️ por <span>RZ</span></p>
      </div>
    </footer>
  );
};

export default Footer;
