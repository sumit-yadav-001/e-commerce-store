import React, { useState } from "react";
import { FiArrowLeft, FiBell } from "react-icons/fi";

const AddCardPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill all fields");
      return;
    }

    // fake API simulation
    setTimeout(() => {
      setShowSuccess(true);
    }, 300);
  };

  const resetForm = () => {
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative font-[General Sans]">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <FiArrowLeft className="text-xl" />
        <h1 className="text-lg font-semibold">New Card</h1>
        <FiBell className="text-xl" />
      </div>

      {/* TITLE */}
      <div className="px-4 mt-5">
        <h2 className="text-base font-semibold">Add Debit or Credit Card</h2>
      </div>

      {/* FORM */}
      <div className="px-4 mt-6 space-y-5">

        {/* CARD NUMBER */}
        <div>
          <label className="text-sm font-medium">Card Number</label>
          <input
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="0000 0000 0000 0000"
            className="w-full mt-1 border rounded-xl px-4 py-3 outline-none"
          />
        </div>

        {/* EXPIRY + CVV */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-sm font-medium">Expiry</label>
            <input
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              className="w-full mt-1 border rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">CVV</label>
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="***"
              className="w-full mt-1 border rounded-xl px-4 py-3 outline-none"
            />
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 py-4 rounded-xl bg-black text-white font-medium"
        >
          Add Card
        </button>
      </div>

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          {/* Frame 24 */}
          <div className="bg-white w-[341px] rounded-[20px] p-6 flex flex-col items-center gap-6">

            {/* Icon */}
            <div className="w-[78px] h-[78px] bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-green-600 rounded-full" />
            </div>

            {/* TEXT */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Congratulations!</h2>
              <p className="text-sm text-gray-500">
                Your new card has been added.
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={resetForm}
              className="w-full py-4 bg-black text-white rounded-xl"
            >
              Done
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default AddCardPage;