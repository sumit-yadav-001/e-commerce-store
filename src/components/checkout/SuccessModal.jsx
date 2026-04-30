

import { CheckCircle } from "lucide-react";

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-sm text-center shadow-2xl animate-scaleIn">
        
        {/* Icon */}
        <CheckCircle className="text-green-500 mx-auto mb-4" size={60} />

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          Payment Successful 🎉
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Your order has been placed successfully.
        </p>

        {/* Button */}
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}