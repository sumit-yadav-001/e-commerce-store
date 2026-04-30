import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiArrowLeft, FiSearch, FiUser } from "react-icons/fi";
import { SlHome } from "react-icons/sl";
import { BsCart } from "react-icons/bs";

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([
    { id: 1, title: "Nike Air Shoes", price: 299 },
    { id: 2, title: "Apple Watch Series 9", price: 499 },
  ]);

  const removeItem = (id) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[90px]">

      {/* CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6">

        {/* HEADER */}
        <div className="relative flex items-center justify-center mb-6">

          <div className="absolute left-0 w-6 h-6 flex items-center justify-center">
            <FiArrowLeft size={24} />
          </div>

          <h1 className="text-[20px] font-semibold text-center">
            Saved Items
          </h1>

          <div className="absolute right-0">
            🔔
          </div>

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
          <div className="space-y-3">

            {savedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-3 rounded-xl shadow"
              >

                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-500">${item.price}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-xs font-medium"
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

        <button className="flex flex-col items-center text-xs text-black">
          <SlHome size={20} />
          Home
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          <FiSearch size={20} />
          Search
        </button>

        <button className="flex flex-col items-center text-xs text-black">
          <AiOutlineHeart size={20} />
          Saved
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          <BsCart size={20} />
          Cart
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          <FiUser size={20} />
          Account
        </button>

      </div>

    </div>
  );
};

export default SavedItems;