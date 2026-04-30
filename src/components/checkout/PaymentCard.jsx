

export default function PaymentCard() {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">Payment Details</h2>

      {/* Card Number */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      {/* Card Holder */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Card Holder Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      {/* Expiry + CVV */}
      <div className="flex gap-4 mb-6">
        <div className="w-1/2">
          <label className="text-sm text-gray-600">Expiry</label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        <div className="w-1/2">
          <label className="text-sm text-gray-600">CVV</label>
          <input
            type="password"
            placeholder="123"
            className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-black outline-none"
          />
        </div>
      </div>

      {/* Pay Button */}
      <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
        Pay ₹999
      </button>
    </div>
  );
}