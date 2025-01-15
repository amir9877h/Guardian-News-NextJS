"use client";
import React from "react";
import { useMenu } from "./MenuContext";
import Menu from ".";
import SearchModal from "../Search/SearchModal";
import { useSearch } from "../Search/SearchContext";

const MenuWrapper = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isSearchModalOpen, setIsSearchModalOpen } = useSearch();

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <>
      <SearchModal
        isSearchOpen={isSearchModalOpen}
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
