import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBell,
  FaCreditCard,
  FaMoneyBillWave
} from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("card1");

  const cards = [
    { id: "card1", brand: "VISA", number: "**** **** **** 2512" },
    { id: "card2", brand: "MASTERCARD", number: "**** **** **** 5421" },
    { id: "card3", brand: "VISA", number: "**** **** **** 4242" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4">
        <FaArrowLeft
          className="text-xl cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <h1 className="text-lg md:text-xl font-semibold">
          Payment Method
        </h1>

        <FaBell className="text-xl" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-4 pb-24">

        {/* SAVED CARDS */}
        <h2 className="font-semibold mb-3">Saved Cards</h2>

        <div className="space-y-3">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelected(card.id)}
              className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer ${
                selected === card.id
                  ? "border-black"
                  : "border-gray-200"
              }`}
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-lg" />

                <div>
                  <p className="text-sm font-medium">
                    {card.number}
                  </p>
                  <p className="text-xs text-gray-500">
                    {card.brand}
                  </p>
                </div>
              </div>

              {/* RADIO */}
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                selected === card.id ? "border-black" : "border-gray-300"
              }`}>
                {selected === card.id && (
                  <div className="w-2.5 h-2.5 bg-black rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ADD NEW CARD */}
        <button
          onClick={() => navigate("/add-card")}
          className="w-full mt-4 border border-dashed rounded-xl py-4 text-sm font-medium"
        >
          + Add New Card
        </button>

        {/* OTHER METHODS */}
        <div className="mt-6 space-y-3">

          {/* UPI */}
          <div
            onClick={() => setSelected("upi")}
            className={`flex items-center justify-between border rounded-xl px-4 py-4 cursor-pointer ${
              selected === "upi"
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <MdAccountBalanceWallet className="text-xl" />
              <div>
                <p className="font-medium">UPI / Wallet</p>
                <p className="text-xs text-gray-500">
                  Google Pay, PhonePe
                </p>
              </div>
            </div>

            <div className="w-5 h-5 border rounded-full flex items-center justify-center">
              {selected === "upi" && (
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
              )}
            </div>
          </div>

          {/* COD */}
          <div
            onClick={() => setSelected("cod")}
            className={`flex items-center justify-between border rounded-xl px-4 py-4 cursor-pointer ${
              selected === "cod"
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-xl" />
              <div>
                <p className="font-medium">Cash on Delivery</p>
                <p className="text-xs text-gray-500">
                  Pay when delivered
                </p>
              </div>
            </div>

            <div className="w-5 h-5 border rounded-full flex items-center justify-center">
              {selected === "cod" && (
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BUTTON */}
      <div className="fixed bottom-0 left-0 w-full bg-white px-4 py-4">
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-black text-white py-4 rounded-xl font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;