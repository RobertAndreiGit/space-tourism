import { Barlow_Condensed } from "next/font/google";
import React from "react";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const HeaderLinks = () => {
  return (
    <div className="hidden md:h-[96px] md:block md:pr-12 md:pl-3 md:bg-white/[.04] lg:pr-[165px] lg:pl-[123px] lg:backdrop-blur-[40px] ">
      <ul className="h-full flex items-center underline-offset-[39px]">
        <li className="ml-9 lg:ml-12">
          <a
            className={`hover:underline decoration-[3px] cursor-pointer ${barlowCondensed.className}`}
            href="#home"
          >
            <b className="hidden lg:inline">00&nbsp;&nbsp;&nbsp;</b>Home
          </a>
        </li>
        <li className="ml-9 lg:ml-12">
          <a
            className={`hover:underline decoration-[3px] cursor-pointer ${barlowCondensed.className}`}
            href="#destination"
          >
            <b className="hidden lg:inline">01&nbsp;&nbsp;&nbsp;</b>Destination
          </a>
        </li>
        <li className="ml-9 lg:ml-12">
          <a
            className={`hover:underline decoration-[3px] cursor-pointer ${barlowCondensed.className}`}
            href="#crew"
          >
            <b className="hidden lg:inline">02&nbsp;&nbsp;&nbsp;</b>Crew
          </a>
        </li>
        <li className="ml-9 lg:ml-12">
          <a
            className={`hover:underline decoration-[3px] cursor-pointer ${barlowCondensed.className}`}
            href="#technology"
          >
            <b className="hidden lg:inline">03&nbsp;&nbsp;&nbsp;</b>Technology
          </a>
        </li>
      </ul>
    </div>
  );
};
