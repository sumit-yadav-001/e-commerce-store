import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBell } from "react-icons/fi";

const AddCardPage = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  /* ================= FORMAT CARD NUMBER ================= */
  const formatCard = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(formatted);
  };

  /* ================= FORMAT EXPIRY ================= */
  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    let formatted = cleaned;

    if (cleaned.length >= 3) {
      formatted = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    }

    setExpiry(formatted);
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    const card = cardNumber.replace(/\s/g, "");

    if (card.length !== 16) {
      alert("Invalid Card Number");
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      alert("Invalid Expiry Date");
      return false;
    }

    const [mm, yy] = expiry.split("/").map(Number);
    if (mm < 1 || mm > 12) {
      alert("Invalid Month");
      return false;
    }

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (yy < currentYear || (yy === currentYear && mm < currentMonth)) {
      alert("Card Expired");
      return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert("Invalid CVV");
      return false;
    }

    return true;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = () => {
    if (!validate()) return;

    const cardData = {
      cardNumber,
      expiry,
      cvv,
    };

    // simulate API / save
    const existing = JSON.parse(localStorage.getItem("cards")) || [];
    localStorage.setItem("cards", JSON.stringify([...existing, cardData]));

    setTimeout(() => {
      setShowSuccess(true);
    }, 300);
  };

  /* ================= RESET ================= */
  const resetForm = () => {
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setShowSuccess(false);

    navigate(-1); // go back after success
  };

  return (
    <div className="min-h-screen bg-gray-50 relative font-[General Sans]">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <FiArrowLeft
          className="text-xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
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
            onChange={(e) => formatCard(e.target.value)}
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
              onChange={(e) => formatExpiry(e.target.value)}
              placeholder="MM/YY"
              className="w-full mt-1 border rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">CVV</label>
            <input
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
              }
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

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white w-[341px] rounded-[20px] p-6 flex flex-col items-center gap-6">

            <div className="w-[78px] h-[78px] bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-green-600 rounded-full" />
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Congratulations!</h2>
              <p className="text-sm text-gray-500">
                Your new card has been added.
              </p>
            </div>

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