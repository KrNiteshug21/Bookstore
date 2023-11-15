import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { FaCheck } from "react-icons/fa";
import CartCard from "./CartCard";

export default function Summary({
  isAddressCompleted,
  isSummaryChecked,
  setIsSummaryChecked,
}) {
  const [showTick, setShowTick] = useState(false);
  const { cartItems } = useContext(DataContext);

  const handleClick = () => {
    setShowTick(true);
    setIsSummaryChecked(true);
  };

  const handleChangeClick = () => {
    setIsSummaryChecked(false);
    setShowTick(false);
  };

  return (
    <section className="border-2 border-border-clr">
      {isSummaryChecked ? (
        <div className="flex content-center justify-between gap-4 w-full bg-white/90 px-2 py-4 my-4">
          <div className="flex gap-2">
            <h2 className="text-2xl text-black/80">
              <span className="text-white bg-black/80 px-2 rounded">2</span>{" "}
              Order Summary
            </h2>
            {showTick && (
              <span>
                <FaCheck size={32} color="black" />
              </span>
            )}
          </div>
          <button
            className="border-2 border-primary-clr-purple text-primary-clr-purple px-2 py-1 mr-2"
            onClick={handleChangeClick}
          >
            CHANGE
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-row gap-4 w-full bg-primary-clr-purple px-2 py-4">
            <h2 className="text-2xl text-white">
              <span className="bg-white text-black/80 px-2 rounded">2</span>{" "}
              Order Summary
            </h2>

            {showTick && (
              <span>
                <FaCheck size={32} color="white" />
              </span>
            )}
          </div>
          <div>
            {cartItems.map((book) => {
              return <CartCard key={book.id} book={book} />;
            })}
          </div>
          <button
            disabled={isAddressCompleted ? false : true}
            className="py-2 ml-4 my-2 bg-primary-clr-dark rounded-lg cursor-pointer w-24 text-white/90 text-lg"
            style={{
              backgroundColor: isAddressCompleted
                ? "rgb(54, 59, 64)"
                : "rgb(54, 59, 64, 0.8)",
            }}
            onClick={handleClick}
          >
            Continue
          </button>
        </>
      )}
    </section>
  );
}
