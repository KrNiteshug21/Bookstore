"use client";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

export default function Navbar() {
  const { cartItems } = useContext(DataContext);
  console.log("cartItems", typeof cartItems);

  return (
    <header className="bg-primary-clr-dark text-white/80 text-4xl p-4 fixed w-screen">
      <div className="setWidth flex flex-row justify-between content-center flex-wrap">
        <Link href="/" className="">
          BookStore
        </Link>
        <nav className="flex flex-row gap-2 justify-between">
          <Link
            href="/cart"
            className="flex flex-row gap-2 align-middle justify-center"
          >
            <AiOutlineShoppingCart />
            <p>Cart</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
