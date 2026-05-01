import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { FiArrowLeft, FiSearch, FiUser } from "react-icons/fi";
import { SlHome } from "react-icons/sl";
import { BsCart } from "react-icons/bs";

const SavedItems = () => {
  const navigate = useNavigate();

  const [savedItems, setSavedItems] = useState([]);

  /* ================= LOAD FROM STORAGE ================= */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("saved")) || [];
    setSavedItems(data);
  }, []);

  /* ================= REMOVE ITEM ================= */
  const removeItem = (id) => {
    const updated = savedItems.filter((item) => item.id !== id);
    setSavedItems(updated);
    localStorage.setItem("saved", JSON.stringify(updated));
  };

  /* ================= ADD (FOR TEST / FUTURE USE) ================= */
  const addItem = (item) => {
    const exists = savedItems.find((i) => i.id === item.id);
    if (!exists) {
      const updated = [...savedItems, item];
      setSavedItems(updated);
      localStorage.setItem("saved", JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[90px]">

      {/* CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6">

        {/* HEADER */}
        <div className="relative flex items-center justify-center mb-6">

          <div
            onClick={() => navigate(-1)}
            className="absolute left-0 w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <FiArrowLeft size={24} />
          </div>

          <h1 className="text-[20px] font-semibold text-center">
            Saved Items
          </h1>

          <div className="absolute right-0">🔔</div>
        </div>

        {/* EMPTY STATE */}
        {savedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-24 text-center">
            <AiOutlineHeart size={64} className="text-gray-400 mb-3" />
            <h2 className="text-[20px] font-semibold">
              No Saved Items!
            </h2>
            <p className="text-[16px] text-gray-500 px-6 mt-2">
              You don’t have any saved items. Go to home and add some.
            </p>
          </div>
        ) : (
          /* ✅ RESPONSIVE GRID (FIGMA MATCH) */
          <div className="grid grid-cols-2 gap-4">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 rounded-xl shadow flex flex-col"
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="w-full h-[120px] bg-gray-200 rounded-lg mb-2" />

                <h3 className="text-sm font-semibold">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mb-2">
                  ${item.price}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-xs font-medium mt-auto"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="fixed bottom-0 left-0 w-full h-[65px] bg-white border-t flex justify-around items-center sm:hidden z-50">

        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <SlHome size={20} />
          Home
        </button>

        <button
          onClick={() => navigate("/search")}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <FiSearch size={20} />
          Search
        </button>

        <button
          onClick={() => navigate("/saved-items")}
          className="flex flex-col items-center text-xs text-black"
        >
          <AiOutlineHeart size={20} />
          Saved
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <BsCart size={20} />
          Cart
        </button>

        <button
          onClick={() => navigate("/account")}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <FiUser size={20} />
          Account
        </button>

      </div>

    </div>
  );
};

export default SavedItems;