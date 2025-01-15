import React from "react";
import ThemeToggle from "../ThemeToggle";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Search from "../Search";
import MenuToggle from "../Menu/MenuToggle";
import { MenuProvider } from "../Menu/MenuContext";
import MenuWrapper from "../Menu/MenuWrapper";
import { SearchProvider } from "../Search/SearchContext";

const Navbar = () => {
  return (
    <header className="py-3 bg-header !text-white max-lg:px-2 relative">
      <MenuProvider>
        <SearchProvider>
          <div className="flex items-center justify-between g-container border-b border-gray-100 !border-opacity-15 max-lg:border-transparent py-2">
            <MenuToggle />
            <div>
              <Image src={Logo} width={300} height={44} alt="Guardian News" />
            </div>
            <div className="flex items-center">
              <div className="border-r border-gray-100 px-2 border-opacity-30">
                <Search className={"max-lg:hidden"} />
              </div>
              <ThemeToggle />
            </div>
          </div>
          <MenuWrapper />
        </SearchProvider>
      </MenuProvider>
    </header>
  );
};

export default Navbar;
