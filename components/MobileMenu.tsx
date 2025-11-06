"use client";
import { AlignLeft, Menu } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <AlignLeft className="hover:text-shop-dark-green hoverEffect md:hidden hover:cursor-pointer md:gap:0" />
      </button>
      <SideMenu
        isOpen={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      />
    </>
  );
};

export default MobileMenu;
