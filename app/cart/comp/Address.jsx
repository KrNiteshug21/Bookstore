import { useState, useMemo } from "react";
import { FaCheck } from "react-icons/fa";

const addressSchema = {
  name: "",
  mobile: "",
  pinCode: "",
  locality: "",
  area: "",
  city: "",
  state: "",
};

export default function Address({ isAddressCompleted, setIsAddressCompleted }) {
  const [address, setAddress] = useState(addressSchema);
  const [showTick, setShowTick] = useState(false);

  const checkAddress = () => {
    const foundEmpty = Object.values(address).filter((val) => val === "");
    if (foundEmpty.length === 0) return true;
    else return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", JSON.stringify(address));
    console.log(address);
    setAddress(addressSchema);
    setIsAddressCompleted(checkAddress());
    setShowTick(true);
  };

  const handleChangeClick = () => {
    setIsAddressCompleted(false);
    setShowTick(false);
  };

  return (
    <section className="border-2 border-border-clr">
      {isAddressCompleted ? (
        <div className="flex content-center justify-between gap-4 w-full bg-white/90 px-2 py-4 my-4">
          <div className="flex gap-2">
            <h2 className="text-2xl text-black/80">
              <span className="text-white bg-black/80 px-2 rounded">1</span>{" "}
              Delivery Address
            </h2>
            <p>
              {Object.values(address).forEach((val, i) => {
                return <span key={i}>{val},</span>;
              })}
            </p>
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
              <span className="bg-white text-black/80 px-2 rounded">1</span>{" "}
              Delivery Address
            </h2>
          </div>
          <form className="p-4">
            <div className="addResponsive flex flex-row gap-4 py-2">
              <input
                required
                className="flex-auto h-10 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
                type="text"
                placeholder="Name"
              />
              <input
                required
                className="flex-auto h-10 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.mobile}
                onChange={(e) =>
                  setAddress({ ...address, mobile: e.target.value })
                }
                type="text"
                placeholder="10 digit mobile number"
              />
            </div>
            <div className="addResponsive flex flex-row gap-4 py-2">
              <input
                required
                className="flex-auto h-10 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.pinCode}
                onChange={(e) =>
                  setAddress({ ...address, pinCode: e.target.value })
                }
                type="text"
                placeholder="PIN code"
              />
              <input
                required
                className="flex-auto h-10 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.locality}
                onChange={(e) =>
                  setAddress({ ...address, locality: e.target.value })
                }
                type="text"
                placeholder="Locality"
              />
            </div>
            <div className="addResponsive flex flex-row gap-4 py-2">
              <textarea
                className="flex-auto h-40 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.area}
                onChange={(e) =>
                  setAddress({ ...address, area: e.target.value })
                }
                type="text"
                placeholder="Address(Area and Street)"
                required
              />
            </div>
            <div className="addResponsive flex flex-row gap-4 py-2">
              <input
                required
                className="flex-auto h-10 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                type="text"
                placeholder="City/District/Town"
              />
              <input
                required
                className="flex-auto h-10 px-4 py-2 text-lg outline-none border-b-2 rounded-lg border-primary-clr-dark"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                type="text"
                placeholder="State"
              />
            </div>
            <button
              disabled={checkAddress() ? false : true}
              className="bg-primary-clr-dark cursor-pointer text-white/90 my-2 px-4 py-2 rounded-md"
              onClick={(e) => handleSubmit(e)}
              style={{
                backgroundColor: checkAddress()
                  ? "rgb(54, 59, 64)"
                  : "rgb(54, 59, 64, 0.8)",
              }}
            >
              Deliver Here
            </button>
          </form>
        </>
      )}
    </section>
  );
}
