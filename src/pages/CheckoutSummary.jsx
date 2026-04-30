import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiBell, HiArrowRight } from "react-icons/hi";
import { FiMapPin, FiCreditCard } from "react-icons/fi";
import { BsCashStack } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { FaApple } from "react-icons/fa";

const CheckoutSummary = () => {

  const [items] = useState([
    {
      id: 1,
      title: "Premium Wireless Headphones",
      qty: 1,
      price: 299.99,
      thumbnail: "https://via.placeholder.com/150",
    }
  ]);

  const [shippingAddress] = useState({
    label: "Home",
    street: "925 S Chugach St",
    city: "Alaska",
    zip: "99645",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [savedCards] = useState([{ number: "**** **** **** 2512" }]);
  const [coupon, setCoupon] = useState("");

  const navigate = useNavigate();

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = total * 0.08;
  const discount = coupon === "SAVE10" ? 10 : 0;
  const finalTotal = total + tax + 80 - discount;

  const getPaymentDisplay = () => {
    if (paymentMethod === "card") return savedCards[0].number;
    if (paymentMethod === "apple") return "Apple Pay";
    return "Cash on Delivery";
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl pb-28">

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b">
          <HiArrowLeft size={22} onClick={() => navigate(-1)} />
          <h1 className="text-lg md:text-xl font-semibold">Checkout</h1>
          <HiBell size={20} />
        </div>

        {/* CONTENT GRID (Desktop) */}
        <div className="md:grid md:grid-cols-2 md:gap-10">

          {/* LEFT SIDE */}
          <div>
            {/* ADDRESS */}
            <div className="px-4 md:px-0 mt-5">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-sm">Delivery Address</h2>
                <button className="text-sm underline">Change</button>
              </div>

              <div className="flex gap-3 mt-3">
                <FiMapPin size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="font-semibold text-sm">{shippingAddress.label}</p>
                  <p className="text-xs text-gray-500">
                    {shippingAddress.street}, {shippingAddress.city} {shippingAddress.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="px-4 md:px-0 mt-6">
              <h2 className="font-semibold text-sm mb-3">Payment Method</h2>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs ${
                    paymentMethod === "card" ? "bg-black text-white" : "border"
                  }`}
                >
                  <FiCreditCard size={16} /> Card
                </button>

                <button
                  onClick={() => setPaymentMethod("cash")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs ${
                    paymentMethod === "cash" ? "bg-black text-white" : "border"
                  }`}
                >
                  <BsCashStack size={16} /> Cash
                </button>

                <button
                  onClick={() => setPaymentMethod("apple")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs ${
                    paymentMethod === "apple" ? "bg-black text-white" : "border"
                  }`}
                >
                  <FaApple size={16} /> Pay
                </button>
              </div>

              <div className="mt-4 border rounded-xl px-4 py-3 flex justify-between">
                <span className="text-sm">{getPaymentDisplay()}</span>
                <span className="text-sm">Edit</span>
              </div>
            </div>

            {/* PROMO */}
            <div className="px-4 md:px-0 mt-6 flex gap-2">
              <div className="flex items-center border rounded-xl px-3 flex-1">
                <MdLocalOffer className="text-gray-400 mr-2" size={18} />
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter Promo Code"
                  className="w-full py-3 text-sm outline-none"
                />
              </div>

              <button className="bg-black text-white px-5 rounded-xl text-sm">
                Apply
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (ORDER SUMMARY) */}
          <div className="px-4 md:px-0 mt-8 md:mt-5">
            <h2 className="font-semibold text-sm mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Sub-total</span>
                <span className="text-black font-medium">${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>VAT</span>
                <span className="text-black font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-black font-medium">$80</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- ${discount}</span>
                </div>
              )}

              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FIXED BUTTON */}
      <div className="fixed bottom-0 md:bottom-6 left-0 w-full flex justify-center px-4">
        <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl">
          <button
            onClick={() => navigate("/order-success")}
            className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            Place Order
            <HiArrowRight />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CheckoutSummary;