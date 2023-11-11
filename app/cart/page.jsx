"use client";
import CartCard from "./comp/CartCard";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartPage() {
  const { cartItems, totalCartPrice } = useContext(DataContext);

  return (
    <main>
      <section className="setWidth pb-8 pt-24">
        <div className="setWidth flex flex-col gap-4 border-2 rounded-lg overflow-hidden min-h-96">
          <div className="flex content-center gap-4 bg-primary-clr-dark text-white/90 px-4 py-4">
            <AiOutlineShoppingCart size={36} />
            <h3 className="text-2xl">Shipping Cart</h3>
          </div>

          {cartItems?.length > 0 ? (
            cartItems?.map((book) => {
              return <CartCard key={book.id} book={book} />;
            })
          ) : (
            <div className="mx-auto text-3xl h-96">
              <p>There is no product in your Cart.</p>
            </div>
          )}
          <div className="text-xl text-right bg-border-clr px-4 py-8 rounded-b-sm">
            <p className="flex content-center">
              Total Price:&nbsp; <b> ₹{cartItems ? totalCartPrice : 0}</b>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
