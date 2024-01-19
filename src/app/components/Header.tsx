import Image from "next/image";
import React from "react";
import { HeaderLinks } from "./HeaderLinks";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  // header consists of a logo on the left, a line that looks like a divider in the middle but it's horizontal, and a menu on the right

  return (
    <header className="flex justify-between items-center h-24 pl-[39px] lg:pl-[55px]">
      <Image src="/assets/shared/logo.svg" alt="Logo" width={32} height={32} />
      <div className="hidden lg:block h-px bg-[#979797] w-full ml-16 mr-[-100px] z-10"></div>
      <HeaderLinks />
      <BurgerMenu />
    </header>
  );
};
