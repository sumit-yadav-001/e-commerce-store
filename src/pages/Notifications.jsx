import { useState } from "react";
import { SlHome } from "react-icons/sl";
import { FiSearch, FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "30% Special Discount!",
      message: "Special promotion only valid today.",
      read: false,
      tag: "Today",
      icon: "🏷️"
    },
    {
      id: 2,
      title: "New Service Available!",
      message: "Now you can track order in real-time.",
      read: false,
      tag: "Today",
      icon: "📍"
    },
    {
      id: 3,
      title: "Top Up E-wallet Successfully!",
      message: "You have top up your e-wallet.",
      read: true,
      tag: "Yesterday",
      icon: "💳"
    },
    {
      id: 4,
      title: "Account Setup Successfully!",
      message: "Your account has been created.",
      read: false,
      tag: "Yesterday",
      icon: "👤"
    },
    {
      id: 5,
      title: "Credit Card Connected!",
      message: "Your payment method is now active.",
      read: false,
      tag: "Yesterday",
      icon: "💳"
    }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden sm:flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-lg font-semibold">My Store</h1>

        <div className="flex gap-6 text-sm">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/search")}>Search</button>
          <button>Saved</button>
          <button onClick={() => navigate("/cart")}>Cart</button>
          <button onClick={() => navigate("/account")}>Account</button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-md sm:max-w-2xl mx-auto px-4 py-6 pb-[90px]">

        {/* HEADER */}
        <h1 className="text-[24px] font-semibold text-center mb-6">
          Notifications
        </h1>

        {/* SECTIONS */}
        {["Today", "Yesterday"].map((section) => (
          <div key={section} className="mb-6">

            <h2 className="text-[16px] font-semibold mb-3">
              {section}
            </h2>

            <div className="flex flex-col gap-[13px]">
              {notifications
                .filter((n) => n.tag === section)
                .map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => handleMarkAsRead(notif.id)}
                    className={`flex gap-[13px] p-4 rounded-xl border cursor-pointer ${
                      notif.read
                        ? "bg-white border-gray-100"
                        : "bg-[#F5F5F5]"
                    }`}
                  >
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      {notif.icon}
                    </div>

                    <div className="flex flex-col gap-[2px]">
                      <h3 className="text-[14px] font-semibold">
                        {notif.title}
                      </h3>
                      <p className="text-[12px] text-gray-500">
                        {notif.message}
                      </p>
                    </div>

                    {!notif.read && (
                      <div className="ml-auto w-2 h-2 bg-black rounded-full mt-1"></div>
                    )}
                  </div>
                ))}
            </div>

          </div>
        ))}
      </div>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="fixed bottom-0 left-0 w-full h-[65px] bg-white border-t flex justify-around items-center sm:hidden z-50">

        <button onClick={() => navigate("/home")} className="flex flex-col items-center text-xs">
          <SlHome size={20} />
          Home
        </button>

        <button onClick={() => navigate("/search")} className="flex flex-col items-center text-xs">
          <FiSearch size={20} />
          Search
        </button>

        <button className="flex flex-col items-center text-xs">
          <AiOutlineHeart size={20} />
          Saved
        </button>

        <button onClick={() => navigate("/cart")} className="flex flex-col items-center text-xs">
          <BsCart size={20} />
          Cart
        </button>

        <button onClick={() => navigate("/account")} className="flex flex-col items-center text-xs">
          <FiUser size={20} />
          Account
        </button>

      </div>

    </div>
  );
};

export default Notifications;