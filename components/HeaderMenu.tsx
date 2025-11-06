"use client";
import { headerLinks } from "@/constants/data";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 capitalize text-lightColor font-normal">
      {headerLinks.map((item, index) => (
        <Link
          className={`hover:text-shop-light-green hoverEffect group relative
            ${pathName === item?.href ? "text-shop-light-green" : ""}`}
          href={item.href}
          key={index}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 
          bg-shop-light-green group-hover:w-1/2 hoverEffect 
          ${pathName === item?.href ? "w-1/2" : ""}`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 
          bg-shop-light-green group-hover:w-1/2 hoverEffect
          ${pathName === item?.href ? "w-1/2" : ""}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
