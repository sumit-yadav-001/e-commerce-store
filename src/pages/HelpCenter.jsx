import { Link } from "react-router-dom";
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
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* MAIN WRAPPER (CENTERED ON DESKTOP) */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-4 pb-28">

        {/* HEADER */}
        <div className="flex items-center justify-between pt-6">
          <FiArrowLeft className="text-xl cursor-pointer" />
          <h1 className="text-xl md:text-2xl font-semibold">
            Help Center
          </h1>
          <FiBell className="text-xl cursor-pointer" />
        </div>

        {/* SEARCH */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full px-5 py-3 border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* SUPPORT GRID (RESPONSIVE FRAME 59 REPLACEMENT) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <SupportCard icon={<FiHeadphones />} label="Customer Support" />
          <SupportCard icon={<FiMessageCircle />} label="WhatsApp Help" />
          <SupportCard icon={<FiGlobe />} label="Website Support" />
          <SupportCard icon={<FiFacebook />} label="Facebook Support" />
          <SupportCard icon={<FiTwitter />} label="Twitter Support" />
          <SupportCard icon={<FiInstagram />} label="Instagram Support" />

        </div>

        {/* QUICK LINKS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link className="border rounded-2xl p-6 text-center hover:shadow-md transition">
            FAQs
          </Link>

          <Link className="border rounded-2xl p-6 text-center hover:shadow-md transition">
            Orders
          </Link>

          <Link className="border rounded-2xl p-6 text-center hover:shadow-md transition">
            Contact
          </Link>

        </div>
      </div>

      {/* BOTTOM NAV (ONLY MOBILE STYLE LIKE APP) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-3 text-gray-500">

        <NavItem icon={<FiHome />} label="Home" />
        <NavItem icon={<FiSearch />} label="Search" />
        <NavItem icon={<FiHeart />} label="Saved" />
        <NavItem icon={<FiShoppingCart />} label="Cart" />
        <NavItem icon={<FiUser />} label="Account" active />

      </div>
    </div>
  );
};

export default HelpCenter;

/* ================= COMPONENTS ================= */

const SupportCard = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:shadow-sm transition">
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <div className={`flex flex-col items-center ${active ? "text-black" : ""}`}>
      <span className="text-xl">{icon}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
};