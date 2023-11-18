"use client";
import Navbar from "../../comp/Navbar";
import Address from "../comp/Address";
import Aside from "../comp/Aside";
import Summary from "../comp/Summary";
import Payment from "../comp/Payment";
import { useState } from "react";

export default function Checkout() {
  const [isAddressCompleted, setIsAddressCompleted] = useState(false);
  const [isSummaryChecked, setIsSummaryChecked] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const charges = 60;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-4 pb-6">
        <div className="setWidth flex flex-row checkoutWrap justify-between gap-4 ">
          <div className="flex flex-col flex-1">
            <Address
              isAddressCompleted={isAddressCompleted}
              setIsAddressCompleted={setIsAddressCompleted}
            />
            <Summary
              isAddressCompleted={isAddressCompleted}
              isSummaryChecked={isSummaryChecked}
              setIsSummaryChecked={setIsSummaryChecked}
            />
            <Payment
              isAddressCompleted={isAddressCompleted}
              isSummaryChecked={isSummaryChecked}
              isPaymentDone={isPaymentDone}
              setIsPaymentDone={setIsPaymentDone}
            />
          </div>
          <Aside charges={charges} />
        </div>
      </main>
    </>
  );
}
