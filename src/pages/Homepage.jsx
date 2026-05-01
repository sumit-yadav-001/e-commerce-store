import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added
import { getProducts } from "../services/api";
import ProductCard from "../components/product/ProductCard";
import Skeleton from "../components/ui/Skeleton";

// icons
import { SlHome } from "react-icons/sl";
import { FiSearch, FiUser, FiMic, FiFilter } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

/* ================= ICONS ================= */

const BellIcon = () => (
  <IoMdNotificationsOutline size={20} className="text-[#1A1A1A]" />
);

const SearchIcon = () => (
  <FiSearch size={18} className="text-[#999999]" />
);

const MicIcon = () => (
  <FiMic size={18} className="text-[#999999]" />
);

/* ================= PAGE ================= */

const HomePage = () => {
  const navigate = useNavigate(); // ✅ added

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts();
      setProducts(data || []);
      setFiltered(data || []);
      setLoading(false);
    };
    fetch();
  }, []);

  /* ================= FILTER LOGIC (UNCHANGED) ================= */
  useEffect(() => {
    let res = [...products];

    if (category !== "All") {
      res = res.filter((p) =>
        (p.category || "").toLowerCase().includes(category.toLowerCase())
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      res = res.filter(
        (p) =>
          (p.title || "").toLowerCase().includes(q) ||
          (p.category || "").toLowerCase().includes(q)
      );
    }

    setFiltered(res);
  }, [category, search, products]);

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">

      {/* CENTER WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-24">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[28px] md:text-[34px] font-semibold tracking-[-0.05em] text-[#1A1A1A]">
            Discover
          </h1>

          <div className="relative w-10 h-10 flex items-center justify-center bg-white border border-[#E6E6E6] rounded-xl shadow-sm">
            <BellIcon />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex items-center gap-3">

          <div className="flex items-center flex-1 h-12 px-4 bg-white border border-[#E6E6E6] rounded-xl shadow-sm">
            <SearchIcon />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-3 text-sm outline-none text-[#1A1A1A]"
            />

            <MicIcon />
          </div>

          <button className="w-12 h-12 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition">
            <FiFilter size={18} />
          </button>

        </div>

        {/* CATEGORY */}
        <div className="flex gap-2 overflow-x-auto mt-5 pb-1">
          {["All", "Tshirts", "Jeans", "Shoes"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap border transition-all ${
                category === cat
                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                  : "bg-white text-[#1A1A1A] border-[#E6E6E6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <h2 className="mt-6 mb-3 text-[16px] font-semibold text-[#1A1A1A]">
          Trending
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-44 w-full rounded-xl" />
              ))
            : filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-[#F0F0F0] overflow-hidden"
                >
                  <ProductCard item={item} />
                </div>
              ))}
        </div>

      </div>

      {/* ✅ BOTTOM NAV WITH LOGIC */}
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-white border-t border-[#E6E6E6] flex justify-around items-center sm:hidden z-50">

        <button onClick={() => navigate("/home")} className="flex flex-col items-center text-xs text-[#1A1A1A]">
          <SlHome size={20} />
          Home
        </button>

        <button onClick={() => navigate("/search")} className="flex flex-col items-center text-xs text-[#999999]">
          <FiSearch size={20} />
          Search
        </button>

        <button onClick={() => navigate("/saved-items")} className="flex flex-col items-center text-xs text-[#999999]">
          <AiOutlineHeart size={20} />
          Saved
        </button>

        <button onClick={() => navigate("/cart")} className="flex flex-col items-center text-xs text-[#999999]">
          <BsCart size={20} />
          Cart
        </button>

        <button onClick={() => navigate("/account")} className="flex flex-col items-center text-xs text-[#999999]">
          <FiUser size={20} />
          Account
        </button>

      </div>

    </div>
  );
};

export default HomePage;