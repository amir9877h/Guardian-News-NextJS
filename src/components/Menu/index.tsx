import React from "react";
import styles from "./menu.module.scss";
import MenuLink from "./MenuLink";
import OrderBy from "../OrderBy";
import { sortOptions } from "@/constants";

const Menu = () => {
  return (
    <nav className="py-3">
      <div className="g-container flex items-center justify-between">
        <div>
          <div></div>
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
        <div>
          <OrderBy />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
