import React from "react";
import styles from "./menu.module.scss";
import MenuLink from "./MenuLink";

const Menu = () => {
  return (
    <nav className="py-3">
      <div className="g-container">
        <div></div>
        <div className={[`flex gap-4`, styles.navLinks].join(" ")}>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/about">About</MenuLink>
          <MenuLink href="/contact">Contact</MenuLink>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
