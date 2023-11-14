import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

export default function Aside({ charges }) {
  const { cartItems, totalCartPrice } = useContext(DataContext);
  return (
    <aside className="border-2 border-border-clr bg-white h-[80vh] shadow-lg rounded-md w-1/3 px-4 sticky top-24">
      <h2 className="text-3xl text-black/60 py-4 font-semibold">
        Price details
      </h2>
      <p className="flex justify-between text-xl text-black/70 py-4 font-medium">
        <span>Price({`${cartItems.length} items`})</span>
        <span>₹{totalCartPrice}</span>
      </p>

      <p className="flex justify-between text-xl text-black/70 py-4 font-medium">
        <span>Delivery charges</span>
        <span>{charges === 0 ? "FREE" : `₹${charges.toFixed(2)}`}</span>
      </p>
      <p className="flex justify-between text-xl text-black/70 py-4 font-medium">
        <span>Amount Payable</span>
        <span>₹{+totalCartPrice + charges}</span>
      </p>
    </aside>
  );
}
