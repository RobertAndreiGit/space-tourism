/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return isOpen ? (
    <div className="min-h-screen backdrop-blur-[40px] min-w-[70vw] fixed right-0 top-0 mt-[33px] flex flex-col items-left md:hidden">
      <div className="flex justify-end mb-[32px]">
        <img
          src="/assets/shared/icon-close.svg"
          alt="Menu"
          className="mr-[24px] block md:hidden"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <ul className="h-full flex flex-col gap-[32px]">
        <li className="ml-9 hover:border-r-[3px] lg:ml-12">
          <a
            className={`cursor-pointer ${barlowCondensed.className}`}
            href="#home"
          >
            <b>00&nbsp;&nbsp;&nbsp;</b>Home
          </a>
        </li>
        <li className="ml-9 hover:border-r-[3px] lg:ml-12">
          <a
            className={`cursor-pointer ${barlowCondensed.className}`}
            href="#destination"
          >
            <b>01&nbsp;&nbsp;&nbsp;&nbsp;</b>Destination
          </a>
        </li>
        <li className="ml-9 hover:border-r-[3px] lg:ml-12">
          <a
            className={`cursor-pointer ${barlowCondensed.className}`}
            href="#crew"
          >
            <b>02&nbsp;&nbsp;&nbsp;</b>Crew
          </a>
        </li>
        <li className="ml-9 hover:border-r-[3px] lg:ml-12">
          <a
            className={`cursor-pointer ${barlowCondensed.className}`}
            href="#technology"
          >
            <b>03&nbsp;&nbsp;&nbsp;</b>Technology
          </a>
        </li>
      </ul>
    </div>
  ) : (
    <div className="md:hidden">
      <img
        src="/assets/shared/icon-hamburger.svg"
        alt="Menu"
        className="mr-[24px]"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};
