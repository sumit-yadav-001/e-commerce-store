import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiArrowLeft,
  FiBell,
  FiChevronRight,
  FiBox,
  FiMapPin,
  FiCreditCard,
  FiHelpCircle,
  FiLogOut,
  FiPhone,
} from "react-icons/fi";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "My Orders", icon: FiBox, path: "/orders" },
    { label: "My Details", icon: FiUser, path: "/my-details" },
    { label: "Address Book", icon: FiMapPin, path: "/address" },
    { label: "Payment Methods", icon: FiCreditCard, path: "/payment" },
    { label: "Notifications", icon: FiBell, path: "/notifications" },
    { label: "FAQs", icon: FiHelpCircle, path: "/faqs" },
    { label: "Help Center", icon: FiPhone, path: "/help" },
  ];

  const navItems = [
    { icon: FiHome, label: "Home", path: "/" },
    { icon: FiSearch, label: "Search", path: "/search" },
    { icon: FiHeart, label: "Saved", path: "/saved" },
    { icon: FiShoppingCart, label: "Cart", path: "/cart" },
    { icon: FiUser, label: "Account", path: "/account" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">

      {/* MAIN WRAPPER */}
      <div className="w-full sm:max-w-[390px] md:max-w-[500px] lg:max-w-[560px] bg-white min-h-screen relative pb-24">

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <FiArrowLeft
            className="text-xl cursor-pointer"
            onClick={() => navigate(-1)}
          />

          <h1 className="text-[20px] font-semibold text-gray-900">
            Account
          </h1>

          <FiBell className="text-xl cursor-pointer text-gray-900" />
        </div>

        {/* MENU LIST */}
        <div className="divide-y divide-gray-100">

          {menuItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                onClick={() => navigate(item.path)}
                className="flex items-center justify-between px-4 py-5 cursor-pointer hover:bg-gray-50 active:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-xl text-gray-800" />
                  <span className="text-[16px] text-gray-900">
                    {item.label}
                  </span>
                </div>

                <FiChevronRight className="text-gray-400" />
              </div>
            );
          })}

        </div>

        {/* LOGOUT */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 px-4 py-5 text-red-500 cursor-pointer hover:bg-red-50"
        >
          <FiLogOut className="text-xl" />
          <span className="text-[16px] font-medium">Logout</span>
        </div>

        {/* BOTTOM NAV (mobile only) */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center md:hidden">

          <div className="w-full max-w-[390px] bg-white border-t border-gray-200 flex justify-between px-6 py-3">

            {navItems.map((item, i) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <div
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Icon
                    className={`text-xl ${
                      active ? "text-black" : "text-gray-400"
                    }`}
                  />

                  <span
                    className={`text-[11px] mt-1 ${
                      active ? "text-black font-medium" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Account;