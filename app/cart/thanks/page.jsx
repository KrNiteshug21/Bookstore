"use client";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";

export default function ThankPage() {
  const { setCartItems, setTotalCartPrice } = useContext(DataContext);
  const [trigger, setTrigger] = useState(false);
  // const handleClick = () => {
  //   const newCartItems = [];
  //   setCartItems(() => newCartItems);
  //   setTotalCartPrice(() => 0);
  //   localStorage.removeItem("books");
  // };

  useEffect(() => {
    setCartItems(() => []);
    localStorage.removeItem("books");
    setTimeout(() => {
      setTrigger(false);
    }, 1000);
  }, [trigger]);

  return (
    <section className="grid place-content-center min-h-screen">
      <div className="text-center leading-5">
        <h2 className="text-3xl py-2">Transaction Successful</h2>
        <p className="text-xl">Thanks for purchasing books from our Site</p>
        <p className="text-xl">Come again</p>
        <Link
          href="/books"
          onClick={() => setTrigger(true)}
          className="text-2xl no-underline hover:underline"
        >
          Back to HomePage
        </Link>
      </div>
    </section>
  );
}
