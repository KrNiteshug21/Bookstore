"use client";
import Link from "next/link";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { MdOutlineAccountCircle } from "react-icons/MD";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Navbar() {
  const { cartItems } = useContext(DataContext);

  return (
    <header className="bg-primary-clr-dark text-white/80 text-4xl p-4 fixed w-screen">
      <div className="setWidth flex flex-row justify-between content-center flex-wrap">
        <Link href="/" className="">
          BookStore
        </Link>
        <nav className="flex flex-row gap-4 justify-between">
          <Link href="/cart" className="no-underline hover:underline relative">
            Cart
            <p className="fixed top-0 right-0">
              {cartItems.length !== 0 ? cartItems.length : ""}
            </p>
          </Link>
          <Link
            href="/api/auth/signout"
            className="no-underline hover:underline"
          >
            SignOut
          </Link>
        </nav>
      </div>
    </header>
  );
}
