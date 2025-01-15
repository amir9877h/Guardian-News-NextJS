"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu-link.module.scss";
import { useMenu } from "./MenuContext";

const MenuLink = ({ children, href }) => {
  const path = usePathname();
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <Link
      href={href}
      className={[styles.link, path === href ? styles.active : ""].join(" ")}
      onClick={() => isMenuOpen && toggleMenu()}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
