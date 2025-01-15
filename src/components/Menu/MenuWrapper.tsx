"use client";
import React, { useState } from "react";
import { useMenu } from "./MenuContext";
import Menu from ".";
import SearchModal from "../Search/SearchModal";

const MenuWrapper = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <SearchModal
        isSearchOpen={isSearchOpen}
        toggleSearchModal={toggleSearchModal}
      />
      <Menu
        isOpen={isMenuOpen}
        toggle={toggleMenu}
        toggleSearchModal={toggleSearchModal}
      />
    </>
  );
};

export default MenuWrapper;
