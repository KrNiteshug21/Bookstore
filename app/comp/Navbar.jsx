"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary-clr-dark text-white/80 text-4xl p-4 sticky top-0 z-10">
      <div className="setWidth flex flex-row justify-between content-center flex-wrap">
        <Link href="/" className="">
          BookStore
        </Link>
        <nav className="flex flex-row gap-4 justify-between">
          <Link href="/cart" className="no-underline hover:underline">
            Cart
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
