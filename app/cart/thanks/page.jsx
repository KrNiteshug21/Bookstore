"use client";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

export default function thankPage() {
  const { setCartItems, setTotalCartPrice } = useContext(DataContext);
  const handleClick = () => {
    const newCartItems = [];
    setCartItems(() => newCartItems);
    setTotalCartPrice(() => 0);
    localStorage.setItem("books", JSON.stringify([{}]));
  };

  return (
    <section className="grid place-content-center min-h-screen">
      <div className="text-center leading-5">
        <h2 className="text-3xl py-2">Transaction Successful</h2>
        <p className="text-xl">Thanks for purchasing books from our Site</p>
        <p className="text-xl">Come again</p>
        <Link
          href="/books"
          onClick={() => handleClick()}
          className="text-2xl no-underline hover:underline"
        >
          Back to HomePage
        </Link>
      </div>
    </section>
  );
}
