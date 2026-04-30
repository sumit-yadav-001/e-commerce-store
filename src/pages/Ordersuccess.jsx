import React, { useState } from "react";

const CheckoutSuccess = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = 5870;
  const shipping = 80;
  const vat = 0;

  const total = subtotal + shipping - discount + vat;

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(500);
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const placeOrder = () => {
    setShowSuccess(true);
  };

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100">
      {/* PHONE FRAME */}
      <div className="relative w-[390px] min-h-[844px] bg-white rounded-[20px] overflow-hidden">

        {/* HEADER */}
        <div className="absolute top-[59px] left-[24px] w-[341px] flex justify-between items-center">
          <span className="text-black text-xl">←</span>
          <h1 className="text-[24px] font-semibold">Checkout</h1>
          <span>🔔</span>
        </div>

        {/* ADDRESS */}
        <div className="absolute top-[132px] left-[24px] font-semibold">Delivery Address</div>

        <div className="absolute top-[170px] left-[56px] text-sm">
          <div className="font-semibold">Home</div>
          <div className="text-gray-500">925 S Chugach St, Alaska</div>
        </div>

        {/* PAYMENT */}
        <div className="absolute top-[254px] left-[24px] font-semibold">
          Payment Method
        </div>

        <div className="absolute top-[292px] left-[24px] flex gap-3">

          <button
            onClick={() => setSelectedPayment("card")}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedPayment === "card" ? "bg-black" : "bg-gray-300 text-black"
            }`}
          >
            Card
          </button>

          <button
            onClick={() => setSelectedPayment("cash")}
            className={`px-4 py-2 rounded-lg ${
              selectedPayment === "cash" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Cash
          </button>

        </div>

        {/* ORDER SUMMARY */}
        <div className="absolute top-[436px] left-[24px] font-semibold">
          Order Summary
        </div>

        <div className="absolute top-[474px] left-[24px] w-[341px] flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="absolute top-[512px] left-[24px] w-[341px] flex justify-between">
          <span>VAT</span>
          <span>${vat}</span>
        </div>

        <div className="absolute top-[550px] left-[24px] w-[341px] flex justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>

        <div className="absolute top-[604px] left-[24px] w-[341px] flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>

        {/* COUPON */}
        <div className="absolute top-[642px] left-[24px] flex gap-2">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Discount Code"
            className="border px-3 py-2 rounded-lg w-[200px]"
          />

          <button
            onClick={applyCoupon}
            className="bg-black text-white px-4 rounded-lg"
          >
            Apply
          </button>
        </div>

        {/* PLACE ORDER BUTTON */}
        <button
          onClick={placeOrder}
          className="absolute top-[759px] left-[24px] w-[341px] bg-black text-white py-3 rounded-xl"
        >
          Place Order
        </button>

        {/* HOME INDICATOR */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full"></div>

        {/* ================= SUCCESS MODAL ================= */}
        {showSuccess && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

            <div className="w-[341px] bg-white rounded-[20px] p-6 flex flex-col items-center gap-5">

              {/* ICON */}
              <div className="w-[78px] h-[78px] rounded-full bg-green-100 flex items-center justify-center">
                <div className="text-green-600 text-3xl">✔</div>
              </div>

              {/* TEXT */}
              <div className="text-center">
                <h2 className="text-xl font-semibold">Congratulations!</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Your order has been placed.
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-black text-white py-3 rounded-xl"
              >
                Continue
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutSuccess;