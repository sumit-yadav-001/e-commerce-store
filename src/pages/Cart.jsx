import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { SlHome } from "react-icons/sl";
import { FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

export default function CartPage() {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Regular Fit Slogan",
      size: "Size L",
      price: 1190,
      qty: 1,
    },
    {
      id: 2,
      name: "Regular Fit Polo",
      size: "Size M",
      price: 1190,
      qty: 2,
    },
    {
      id: 3,
      name: "Casual Shirt",
      size: "Size L",
      price: 1190,
      qty: 1,
    },
  ]);

  /* ================= LOGIC ================= */

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  /* ================= UI ================= */

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-28">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 pt-6 pb-4 border-b">

        <HiArrowLeft size={22} />

        <h1 className="text-xl font-semibold">My Cart</h1>

        <div className="w-6 h-6" />
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-32 px-6 text-center">

          <BsCart size={60} className="text-gray-300 mb-4" />

          <h2 className="text-lg font-semibold">
            Your Cart Is Empty!
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            When you add products, they’ll appear here.
          </p>
        </div>
      )}

      {/* CART ITEMS */}
      {cart.length > 0 && (
        <>
          <div className="space-y-4 px-4 mt-4">

            {cart.map(item => (
              <div
                key={item.id}
                className="flex gap-4 border rounded-xl p-4"
              >

                {/* IMAGE */}
                <div className="w-20 h-20 bg-gray-100 rounded-md" />

                {/* DETAILS */}
                <div className="flex-1 flex flex-col justify-between">

                  {/* TOP */}
                  <div className="flex justify-between">

                    <div>
                      <h4 className="text-sm font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.size}
                      </p>
                    </div>

                    <button onClick={() => removeItem(item.id)}>
                      <MdDeleteOutline size={18} className="text-red-500" />
                    </button>

                  </div>

                  {/* BOTTOM */}
                  <div className="flex justify-between items-center mt-2">

                    <span className="text-sm font-semibold">
                      ${item.price}
                    </span>

                    {/* QTY */}
                    <div className="flex items-center gap-2">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-6 h-6 border rounded flex items-center justify-center"
                      >
                        -
                      </button>

                      <span className="text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-6 h-6 border rounded flex items-center justify-center"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="px-4 mt-6 space-y-3">

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Sub-total</span>
              <span className="font-medium">${subtotal}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping fee</span>
              <span className="font-medium">${shipping.toFixed(2)}</span>
            </div>

            <div className="border-t" />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total}</span>
            </div>

          </div>

          {/* CHECKOUT */}
          <div className="px-4">
            <button className="w-full mt-6 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2">
            Go To  Checkout
              <HiArrowRight size={18} />
            </button>
          </div>
        </>
      )}

      {/* 🔥 BOTTOM NAV (EXACT SAME STYLE) */}
      <div className="fixed bottom-0 left-0 w-full h-[65px] bg-white border-t flex justify-around items-center sm:hidden z-50">

        <button className="flex flex-col items-center text-xs text-gray-500">
          <SlHome size={20} />
          Home
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          <FiSearch size={20} />
          Search
        </button>

        <button className="flex flex-col items-center text-xs text-gray-500">
          <AiOutlineHeart size={20} />
          Saved
        </button>

        {/* ACTIVE CART */}
        <div className="flex flex-col items-center text-xs text-black">
          <div className="flex items-center gap-1">
            <BsCart size={20} />
      
          </div>
          Cart
        </div>

        <button className="flex flex-col items-center text-xs text-gray-500">
          <FiUser size={20} />
          Account
        </button>

      </div>

    </div>
  );
}