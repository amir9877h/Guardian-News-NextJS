"use client";
import React from "react";
import styles from "./menu-toggle.module.scss";
import { useMenu } from "./MenuContext";

const MenuToggle: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <button
      className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""} lg:!hidden`}
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </button>
  );
};

export default MenuToggle;
