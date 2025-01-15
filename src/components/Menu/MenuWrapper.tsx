"use client";
import React from "react";
import { useMenu } from "./MenuContext";
import Menu from ".";

const MenuWrapper = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  return <Menu isOpen={isMenuOpen} toggle={toggleMenu} />;
};

export default MenuWrapper;
