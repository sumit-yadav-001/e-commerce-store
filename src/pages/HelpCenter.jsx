import { Link, useNavigate } from "react-router-dom"; // ✅ added
import {
  FiHeadphones,
  FiMessageCircle,
  FiGlobe,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiHome,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiArrowLeft,
  FiBell,
} from "react-icons/fi";

const HelpCenter = () => {
  const navigate = useNavigate(); // ✅ added

  /* ================= NAV HANDLER ================= */
  const handleNav = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* MAIN WRAPPER */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-4 pb-28">

        {/* HEADER */}
        <div className="flex items-center justify-between pt-6">
          <FiArrowLeft
            onClick={() => navigate(-1)} // ✅ back
            className="text-xl cursor-pointer"
          />

          <h1 className="text-xl md:text-2xl font-semibold">
            Help Center
          </h1>

          <FiBell
            onClick={() => navigate("/notifications")} // ✅
            className="text-xl cursor-pointer"
          />
        </div>

        {/* SEARCH */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full px-5 py-3 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* SUPPORT GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <SupportCard
            icon={<FiHeadphones />}
            label="Customer Support"
            onClick={() => navigate("/customer-service")}
          />

          <SupportCard
            icon={<FiMessageCircle />}
            label="WhatsApp Help"
            onClick={() => window.open("https://wa.me/", "_blank")}
          />

          <SupportCard
            icon={<FiGlobe />}
            label="Website Support"
            onClick={() => window.open("/", "_blank")}
          />

          <SupportCard
            icon={<FiFacebook />}
            label="Facebook Support"
            onClick={() => window.open("https://facebook.com", "_blank")}
          />

          <SupportCard
            icon={<FiTwitter />}
            label="Twitter Support"
            onClick={() => window.open("https://twitter.com", "_blank")}
          />

          <SupportCard
            icon={<FiInstagram />}
            label="Instagram Support"
            onClick={() => window.open("https://instagram.com", "_blank")}
          />

        </div>

        {/* QUICK LINKS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link
            to="/faqs" // ✅ FIXED
            className="border rounded-2xl p-6 text-center hover:shadow-md transition"
          >
            FAQs
          </Link>

          <Link
            to="/orders" // ✅ FIXED
            className="border rounded-2xl p-6 text-center hover:shadow-md transition"
          >
            Orders
          </Link>

          <Link
            to="/customer-service" // ✅ FIXED
            className="border rounded-2xl p-6 text-center hover:shadow-md transition"
          >
            Contact
          </Link>

        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-3 text-gray-500">

        <NavItem icon={<FiHome />} label="Home" onClick={() => handleNav("/home")} />
        <NavItem icon={<FiSearch />} label="Search" onClick={() => handleNav("/search")} />
        <NavItem icon={<FiHeart />} label="Saved" onClick={() => handleNav("/saved-items")} />
        <NavItem icon={<FiShoppingCart />} label="Cart" onClick={() => handleNav("/cart")} />
        <NavItem icon={<FiUser />} label="Account" active onClick={() => handleNav("/account")} />

      </div>
    </div>
  );
};

export default HelpCenter;

/* ================= COMPONENTS ================= */

const SupportCard = ({ icon, label, onClick }) => {
  return (
    <div
      onClick={onClick} // ✅ clickable
      className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:shadow-sm transition cursor-pointer"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <div
      onClick={onClick} // ✅ navigation
      className={`flex flex-col items-center cursor-pointer ${
        active ? "text-black" : ""
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
};