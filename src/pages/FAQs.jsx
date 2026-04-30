import { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiChevronUp,
  FiArrowLeft,
} from "react-icons/fi";

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("home");

  const faqs = [
    {
      q: "How do I make a purchase?",
      a: "Tap product → Add to cart → Checkout → Fill details → Pay.",
    },
    {
      q: "What payment methods are accepted?",
      a: "UPI, Card, Net Banking, Wallets are accepted.",
    },
    {
      q: "How do I track my orders?",
      a: "Go to Orders section → Click Track Order.",
    },
    {
      q: "Can I cancel or return an order?",
      a: "Yes, before shipping you can cancel easily.",
    },
    {
      q: "How can I contact customer support?",
      a: "Use Help section or chat with support.",
    },
  ];

  const filtered = faqs.filter((item) => {
    const matchSearch = item.q
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      activeFilter === "All" ||
      (activeFilter === "Orders" &&
        (item.q.toLowerCase().includes("order") ||
          item.q.toLowerCase().includes("cancel"))) ||
      (activeFilter === "Payments" &&
        item.q.toLowerCase().includes("payment")) ||
      (activeFilter === "Shipping" &&
        item.q.toLowerCase().includes("track"));

    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-white px-4 md:px-10 py-6 pb-24">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <FiArrowLeft className="text-xl cursor-pointer" />
        <h1 className="text-xl md:text-2xl font-semibold">FAQs</h1>
        <FiBell className="text-xl" />
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-2 border rounded-xl px-3 py-2 mb-4">
        <FiSearch />
        <input
          className="w-full outline-none text-sm"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 overflow-x-auto mb-6">
        {["All", "Orders", "Payments", "Shipping"].map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1 rounded-full border text-sm whitespace-nowrap ${
              activeFilter === f ? "bg-black text-white" : ""
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* FAQ LIST */}
      <div className="space-y-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 cursor-pointer transition"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-sm md:text-base">
                {item.q}
              </h3>
              {open === idx ? (
                <FiChevronUp />
              ) : (
                <FiChevronDown />
              )}
            </div>

            {open === idx && (
              <p className="text-gray-500 text-sm mt-2">{item.a}</p>
            )}
          </div>
        ))}
      </div>

      {/* SUPPORT BOX */}
      <div className="mt-10 text-center bg-gray-50 p-6 rounded-xl">
        <h2 className="font-semibold text-lg">Still need help?</h2>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          Contact our support team anytime
        </p>
        <button className="bg-black text-white px-5 py-2 rounded-lg text-sm">
          Contact Support
        </button>
      </div>

      {/* ✅ BOTTOM NAVIGATION */}
      <div className="fixed bottom-0 left-0 w-full border-t bg-white flex justify-around py-3 text-xs">

        <div
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center ${
            activeTab === "home" ? "text-black" : "text-gray-400"
          }`}
        >
          <AiOutlineHome size={22} />
          <span>Home</span>
        </div>

        <div
          onClick={() => setActiveTab("search")}
          className={`flex flex-col items-center ${
            activeTab === "search" ? "text-black" : "text-gray-400"
          }`}
        >
          <AiOutlineSearch size={22} />
          <span>Search</span>
        </div>

        <div
          onClick={() => setActiveTab("saved")}
          className={`flex flex-col items-center ${
            activeTab === "saved" ? "text-black" : "text-gray-400"
          }`}
        >
          <AiOutlineHeart size={22} />
          <span>Saved</span>
        </div>

        <div
          onClick={() => setActiveTab("cart")}
          className={`flex flex-col items-center ${
            activeTab === "cart" ? "text-black" : "text-gray-400"
          }`}
        >
          <AiOutlineShoppingCart size={22} />
          <span>Cart</span>
        </div>

        <div
          onClick={() => setActiveTab("account")}
          className={`flex flex-col items-center ${
            activeTab === "account" ? "text-black" : "text-gray-400"
          }`}
        >
          <AiOutlineUser size={22} />
          <span>Account</span>
        </div>

      </div>
    </div>
  );
};

export default FAQ;