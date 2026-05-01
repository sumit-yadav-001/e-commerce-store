import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added
import {
  FiHome,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiBell,
  FiArrowLeft,
  FiChevronDown,
  FiCalendar,
  FiFlag,
} from "react-icons/fi";

/* ================= INPUT FIELD ================= */
const InputField = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-900">{label}</label>
      <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white">
        {children}
      </div>
    </div>
  );
};

/* ================= BOTTOM NAV ================= */
const BottomNav = () => {
  const navigate = useNavigate(); // ✅ added

  const items = [
    { icon: <FiHome />, label: "Home", path: "/home" },
    { icon: <FiSearch />, label: "Search", path: "/search" },
    { icon: <FiHeart />, label: "Saved", path: "/saved-items" },
    { icon: <FiShoppingCart />, label: "Cart", path: "/cart" },
    { icon: <FiUser />, label: "Account", path: "/account", active: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-between px-6 py-3">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)} // ✅ navigation added
            className={`flex flex-col items-center text-xs cursor-pointer ${
              item.active ? "text-black" : "text-gray-400"
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const MyDetails = () => {
  const navigate = useNavigate(); // ✅ added

  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 453 231 506",
    gender: "Male",
    dob: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  /* ✅ PRODUCTION LEVEL SUBMIT */
  const handleSubmit = () => {
    // basic validation
    if (!form.name || !form.email) {
      alert("Please fill required fields");
      return;
    }

    // simulate API save
    localStorage.setItem("userDetails", JSON.stringify(form));

    alert("Details updated successfully");

    // optional redirect
    navigate("/account");
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">

      <div className="w-full max-w-md md:max-w-2xl px-4 pb-28 pt-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <FiArrowLeft
            className="text-2xl cursor-pointer"
            onClick={() => navigate(-1)} // ✅ back
          />
          <h1 className="text-xl font-semibold">My Details</h1>
          <FiBell className="text-2xl cursor-pointer" />
        </div>

        <div className="border-b border-gray-200 mb-6" />

        {/* FORM */}
        <div className="flex flex-col gap-4">

          <InputField label="Full Name">
            <input
              className="w-full outline-none text-sm"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </InputField>

          <InputField label="Email Address">
            <input
              className="w-full outline-none text-sm"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </InputField>

          <InputField label="Gender">
            <select
              className="w-full outline-none text-sm bg-transparent"
              value={form.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <FiChevronDown />
          </InputField>

          <InputField label="Date of Birth">
            <div className="flex items-center gap-2 w-full">
              <FiCalendar className="text-gray-500" />
              <input
                type="date"
                className="w-full outline-none text-sm"
                value={form.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
              />
            </div>
          </InputField>

          <InputField label="Phone Number">
            <div className="flex items-center gap-2 w-full">
              <FiFlag className="text-gray-500" />
              <FiChevronDown />
              <input
                className="w-full outline-none text-sm"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </InputField>

          {/* ✅ SUBMIT FIXED */}
          <button
            onClick={handleSubmit}
            className="mt-6 bg-black text-white py-3 rounded-xl w-full text-sm font-medium active:scale-95 transition"
          >
            Submit
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MyDetails;