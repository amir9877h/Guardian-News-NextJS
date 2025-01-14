import React from "react";
import ThemeToggle from "../ThemeToggle";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Menu from "../Menu";

const Navbar = () => {
  return (
    <header className="py-3 bg-header !text-white">
      <div className="flex items-center justify-between g-container border-b border-gray-100 !border-opacity-15 py-2">
        <div>
          <Image src={Logo} width={300} height={44} alt="Guardian News" />
        </div>
        <div className="flex items-center">
          <div className="border-r border-gray-100 px-2 border-opacity-30">
            profile and search
          </div>
          <ThemeToggle />
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Navbar;
