import { CarIcon, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag />
      <span
        className="absolute h-3.5 w-3.5 bg-shop-dark-green 
      rounded-full -right-1 -top-1 items-center
       flex justify-center text-xs text-white font-semibold"
      >
        0
      </span>
    </Link>
  );
};

export default CartIcon;
