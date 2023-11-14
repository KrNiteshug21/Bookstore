"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Payment({
  isAddressCompleted,
  isSummaryChecked,
  setIsPaymentDone,
}) {
  const [showTick, setShowTick] = useState(false);
  const [pay, setPay] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTick(true);
    setIsPaymentDone(true);
    setTimeout(() => {
      router.push("./thanks");
    }, 2000);
  };

  return (
    <section className="border-2 border-border-clr">
      <div className="flex flex-row gap-4 w-full bg-primary-clr-purple px-2 py-4 ">
        <h2 className="text-2xl text-white">
          <span className="bg-white text-black/80 px-2 rounded">3</span> Payment
        </h2>
        {showTick && (
          <span>
            <FaCheck size={32} color="white" />
          </span>
        )}
      </div>
      <form className="flex flex-col gap-4 p-4">
        <div>
          <input
            onClick={(e) => setPay(e.target.value)}
            type="radio"
            id="upi"
            name="pay_method"
            value="upi"
          />
          <label htmlFor="upi">UPI</label>
        </div>

        <div>
          <input
            onClick={(e) => setPay(e.target.value)}
            type="radio"
            id="wallets"
            name="pay_method"
            value="wallets"
          />
          <label htmlFor="wallets">Wallets</label>
        </div>
        <div>
          <input
            onClick={(e) => setPay(e.target.value)}
            type="radio"
            id="card"
            name="pay_method"
            value="card"
          />
          <label htmlFor="card">Credit/Debit/ATM Card</label>
        </div>
        <div>
          <input
            onClick={(e) => setPay(e.target.value)}
            type="radio"
            id="net_banking"
            name="pay_method"
            value="net_banking"
          />
          <label htmlFor="net_banking">Net Banking</label>
        </div>

        <div>
          <input
            onClick={(e) => setPay(e.target.value)}
            type="radio"
            id="delivery"
            name="pay_method"
            value="delivery"
          />
          <label htmlFor="delivery">Cash on Delivery</label>
        </div>
        <button
          disabled={
            pay && isAddressCompleted && isSummaryChecked ? false : true
          }
          onClick={(e) => handleSubmit(e)}
          className="py-2 bg-primary-clr-dark rounded-lg cursor-pointer w-24 text-white/90 text-lg"
          style={{
            backgroundColor: pay ? "rgb(54, 59, 64)" : "rgb(54, 59, 64, 0.8)",
          }}
        >
          Pay
        </button>
      </form>
    </section>
  );
}
