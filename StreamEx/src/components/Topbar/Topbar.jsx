import React, { useEffect, useState } from "react";
import styles from "./Topbar.module.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.topbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.topbarContent}>
        
        <Link className={styles.logoLink} to="/">
          <img src="/MovieNiacLogo.png" alt="MovieNiac Logo" />
          <p className={styles.logo}>
            movie<span>niac</span>
          </p>
        </Link>

        <h3 className={styles.userName}>Renato</h3>
      </div>
    </div>
  );
};

export default Topbar;
