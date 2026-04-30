import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { FiArrowLeft, FiBell, FiX } from "react-icons/fi";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= FILTER STATE (NEW) =================
  const [showFilters, setShowFilters] = useState(false);
  const [status, setStatus] = useState("In Transit");

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 800));

    if (orderId.trim()) {
      setTracking({
        id: orderId,
        status: "In Transit",
        estimatedDelivery: new Date(
          Date.now() + 86400000 * 3
        ).toLocaleDateString(),
        steps: [
          { status: "Order Placed", date: "Oct 24, 10:00 AM", completed: true },
          { status: "Processing", date: "Oct 24, 02:00 PM", completed: true },
          { status: "Shipped", date: "Oct 25, 09:00 AM", completed: true },
          { status: "In Transit", date: "Oct 26, 08:00 AM", completed: true },
          { status: "Out for Delivery", date: "Pending", completed: false },
          { status: "Delivered", date: "Pending", completed: false },
        ],
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between px-4 py-4 border-b bg-white sticky top-0 z-50">
        <FiArrowLeft className="text-xl cursor-pointer" />
        <h1 className="text-lg font-semibold">Track Order</h1>
        <FiBell className="text-xl" />
      </div>

      {/* ================= MAP (FIGMA STYLE) ================= */}
      <div className="relative w-full h-[300px] md:h-[450px] bg-gray-200 border-t">

        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Map View
        </div>

        {/* markers */}
        <div className="absolute top-20 left-1/2 text-2xl">🚚</div>
        <div className="absolute top-10 right-10 text-xl">📍</div>
        <div className="absolute bottom-10 left-10 text-xl">🏬</div>

        {/* Filter button */}
        <button
          onClick={() => setShowFilters(true)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm"
        >
          Order Status
        </button>
      </div>

      {/* ================= TRACK INPUT ================= */}
      <div className="max-w-2xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white border rounded-2xl p-4 shadow-sm">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <Input
              label="Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter order id"
            />
            <Button type="submit" isLoading={loading}>
              Track
            </Button>
          </form>
        </div>
      </div>

      {/* ================= RESULT ================= */}
      {tracking && (
        <div className="max-w-2xl mx-auto px-4 mt-6">

          <div className="border rounded-2xl p-5">
            <h2 className="font-bold">Order #{tracking.id}</h2>
            <p className="text-gray-500 text-sm mt-1">
              Delivery: {tracking.estimatedDelivery}
            </p>
          </div>

        </div>
      )}

      {/* ================= FILTER DRAWER (FIGMA EXACT LOGIC) ================= */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">

          <div className="w-full max-w-md bg-white rounded-t-2xl p-5 animate-slideUp">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Order Status</h2>
              <FiX
                className="text-xl cursor-pointer"
                onClick={() => setShowFilters(false)}
              />
            </div>

            <div className="border-t pt-4 space-y-4">

              {/* OPTION 1 */}
              {[
                { label: "Packing", sub: "2336 Jack Warren Rd..." },
                { label: "Picked", sub: "2417 Tongass Ave..." },
                { label: "In Transit", sub: "16 RR 2 Alaska..." },
                { label: "Delivered", sub: "925 S Chugach St..." },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setStatus(item.label)}
                  className="flex gap-3 cursor-pointer"
                >

                  <div className="mt-1">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        status === item.label
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {status === item.label && (
                        <div className="w-2.5 h-2.5 bg-black rounded-full" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>

                </div>
              ))}

            </div>

            {/* BUTTON */}
            <button
              onClick={() => setShowFilters(false)}
              className="w-full mt-5 bg-black text-white py-3 rounded-xl"
            >
              Apply Filter
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default TrackOrder;