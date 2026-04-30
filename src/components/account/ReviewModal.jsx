import { useState } from "react";

const ReviewModal = ({ open, onClose }) => {
  const [rating, setRating] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center z-50">

      {/* Modal */}
      <div className="bg-white w-full md:max-w-md rounded-t-2xl md:rounded-2xl p-5 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Leave a Review</h2>
          <button onClick={onClose} className="text-gray-400 text-xl">×</button>
        </div>

        {/* Rating */}
        <div className="flex justify-center gap-2 text-3xl">
          {[1,2,3,4,5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={star <= rating ? "text-yellow-400" : "text-gray-300"}
            >
              ★
            </button>
          ))}
        </div>

        {/* Input */}
        <textarea
          placeholder="Write your review..."
          className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-full border py-2 rounded-lg text-sm"
          >
            Cancel
          </button>

          <button className="w-full bg-black text-white py-2 rounded-lg text-sm">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReviewModal;