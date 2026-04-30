import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiArrowLeft,
  FiBell,
} from "react-icons/fi";

const Orders = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("ongoing");

  const [showReview, setShowReview] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const orders = [
    { id: 1, title: "Regular Fit Slogan", size: "L", price: 1190, status: "ongoing", img: "https://via.placeholder.com/150" },
    { id: 2, title: "Urban Oversized Hoodie", size: "M", price: 1990, status: "ongoing", img: "https://via.placeholder.com/150" },
    { id: 3, title: "Classic White Shirt", size: "S", price: 999, status: "ongoing", img: "https://via.placeholder.com/150" },

    { id: 4, title: "Regular Fit Black", size: "L", price: 1690, status: "completed", img: "https://via.placeholder.com/150" },
    { id: 5, title: "Premium Denim Jacket", size: "XL", price: 2490, status: "completed", img: "https://via.placeholder.com/150" },
    { id: 6, title: "Summer Cotton Tee", size: "M", price: 799, status: "completed", img: "https://via.placeholder.com/150" },
  ];

  const navItems = [
    { icon: FiHome, label: "Home", path: "/" },
    { icon: FiSearch, label: "Search", path: "/search" },
    { icon: FiHeart, label: "Saved", path: "/saved" },
    { icon: FiShoppingCart, label: "Cart", path: "/cart" },
    { icon: FiUser, label: "Account", path: "/account" },
  ];

  const filteredOrders = orders.filter(o => o.status === activeTab);

  const openReview = (order) => {
    setSelectedOrder(order);
    setShowReview(true);
  };

  const submitReview = () => {
    console.log({ selectedOrder, rating, reviewText });
    setShowReview(false);
    setRating(0);
    setReviewText("");
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">

      {/* MAIN CONTAINER (RESPONSIVE WRAPPER) */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl pb-[100px]">

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 pt-6">
          <FiArrowLeft className="w-6 h-6 cursor-pointer" onClick={() => navigate(-1)} />

          <h1 className="text-[22px] md:text-[26px] font-semibold">
            My Orders
          </h1>

          <FiBell className="w-6 h-6" />
        </div>

        {/* TOGGLE */}
        <div className="flex bg-[#E6E6E6] rounded-[10px] mx-4 mt-4 p-2">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`flex-1 py-2 rounded-[6px] text-[14px] ${
              activeTab === "ongoing" ? "bg-white text-black" : "text-gray-500"
            }`}
          >
            Ongoing
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2 rounded-[6px] text-[14px] ${
              activeTab === "completed" ? "bg-white text-black" : "text-gray-500"
            }`}
          >
            Completed
          </button>
        </div>

        {/* ORDERS */}
        <div className="px-4 mt-6 space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 border rounded-[10px] border-gray-200"
              >
                <img
                  src={item.img}
                  className="w-[80px] h-[80px] rounded-md object-cover"
                />

                <div className="flex flex-col justify-between flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-[14px] font-semibold">{item.title}</h2>
                      <p className="text-[12px] text-gray-500">Size {item.size}</p>
                    </div>

                    <span className="text-[10px] px-2 py-1 rounded bg-gray-200 text-gray-600">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">₹ {item.price}</p>

                    {activeTab === "ongoing" ? (
                      <button className="text-[10px] px-3 py-1 bg-black text-white rounded-md">
                        Track
                      </button>
                    ) : (
                      <button
                        onClick={() => openReview(item)}
                        className="text-[10px] px-3 py-1 bg-green-600 text-white rounded-md"
                      >
                        Review
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-10 text-gray-500">
              No {activeTab} orders
            </div>
          )}
        </div>

        {/* REVIEW MODAL */}
        {showReview && (
          <div className="fixed inset-0 flex items-end md:items-center justify-center bg-black/40">

            <div className="w-full md:w-[420px] bg-white rounded-t-[20px] md:rounded-[20px] p-5">

              <h2 className="text-[18px] font-semibold">Leave a Review</h2>
              <p className="text-[13px] text-gray-500">{selectedOrder?.title}</p>

              {/* Stars */}
              <div className="flex gap-2 mt-3">
                {[1,2,3,4,5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className="text-2xl cursor-pointer"
                  >
                    {star <= rating ? "⭐" : "☆"}
                  </span>
                ))}
              </div>

              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write review..."
                className="w-full mt-3 border p-3 rounded-md h-[100px]"
              />

              <button
                onClick={submitReview}
                className="w-full mt-4 bg-black text-white py-3 rounded-md"
              >
                Submit Review
              </button>

            </div>

          </div>
        )}

        {/* BOTTOM NAV */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-center">
          <div className="w-full max-w-md flex justify-between px-6 py-3">

            {navItems.map((item, i) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <div
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Icon className={`w-5 h-5 ${active ? "text-black" : "text-gray-400"}`} />
                  <span className="text-[11px]">{item.label}</span>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Orders;