import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ icons added
import { FiMapPin, FiCreditCard } from "react-icons/fi";
import { MdOutlineReceiptLong } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Checkout = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("cod");

  // ✅ optional validation logic (no UI change)
  const handleOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">

      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Checkout <MdOutlineReceiptLong />
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* ADDRESS */}
          <div className="bg-white p-5 rounded-xl shadow-sm">

            <h2 className="font-semibold mb-3 flex items-center gap-2">
              Delivery Address <FiMapPin />
            </h2>

            <input className="w-full border p-2 rounded mb-2" placeholder="Full Name" />
            <input className="w-full border p-2 rounded mb-2" placeholder="Phone Number" />
            <input className="w-full border p-2 rounded mb-2" placeholder="Address" />
            <input className="w-full border p-2 rounded mb-2" placeholder="City" />

          </div>

          {/* PAYMENT */}
          <div className="bg-white p-5 rounded-xl shadow-sm">

            <h2 className="font-semibold mb-3 flex items-center gap-2">
              Payment Method <FiCreditCard />
            </h2>

            <div className="space-y-2 text-sm">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                />
                Card Payment
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={payment === "upi"}
                  onChange={() => setPayment("upi")}
                />
                UPI
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                Cash on Delivery
              </label>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-5 rounded-xl shadow-sm h-fit">

          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Order Summary <MdOutlineReceiptLong />
          </h2>

          <div className="text-sm space-y-2">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$1200</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$1200</span>
            </div>

          </div>

          {/* PLACE ORDER */}
          <button
            onClick={handleOrder}
            className="w-full mt-5 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            Place Order <HiOutlineRocketLaunch />
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;