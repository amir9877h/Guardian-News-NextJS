import React from "react";
import styles from "./menu.module.scss";
import MenuLink from "./MenuLink";
import OrderBy from "../OrderBy";
import MenuToggle from "./MenuToggle";

const Menu = ({ isOpen, toggle }) => {
  return (
    <nav className={[isOpen ? styles.active : ``, styles.nav].join(" ")} >
      <div className={[`g-container`, styles.wrapper].join(" ")}>
        <div className={styles.linksWrapper}>
          <div className={styles.menuBtn}>{isOpen && <MenuToggle />}</div>
          <div className={[`flex gap-4`, styles.navLinks].join(" ")}>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/sport">Sport</MenuLink>
            <MenuLink href="/games">Games</MenuLink>
            <MenuLink href="/technology">Technology</MenuLink>
            <MenuLink href="/politics">Politics</MenuLink>
            <MenuLink href="/science">Science</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </div>
        </div>
        <div className={styles.orderBy}>
          <OrderBy />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
