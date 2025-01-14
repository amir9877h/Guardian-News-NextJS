"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu-link.module.scss";

const MenuLink = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={[styles.link, path === href ? styles.active : ""].join(" ")}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
