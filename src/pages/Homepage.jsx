import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [notifications, setNotifications] = useState(0);

  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const [savedItems, setSavedItems] = useState([]);

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProducts();
        setProducts(data || []);
        setFiltered(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  /* ================= SEARCH DEBOUNCE ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  /* ================= SAVED SYNC (FIXED) ================= */
  useEffect(() => {
    const syncSaved = () => {
      const saved = JSON.parse(localStorage.getItem("saved")) || [];
      setSavedItems(saved);
    };

    syncSaved();
    window.addEventListener("storage", syncSaved);

    return () => window.removeEventListener("storage", syncSaved);
  }, []);

  /* ================= CATEGORY MAP ================= */
  const categoryMap = {
    Tshirts: ["tshirt", "t-shirt", "shirt"],
    Jeans: ["jeans", "denim"],
    Shoes: ["shoes", "sneakers", "footwear"],
  };

  /* ================= FILTER LOGIC ================= */
  useEffect(() => {
    let res = [...products];

    if (category !== "All") {
      const keywords = categoryMap[category] || [category.toLowerCase()];
      res = res.filter((p) =>
        keywords.some((key) =>
          (p.category || "").toLowerCase().includes(key)
        )
      );
    }

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      res = res.filter(
        (p) =>
          (p.title || "").toLowerCase().includes(q) ||
          (p.category || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q)
      );
    }

    res = res.filter((p) => {
      const price = Number(p.price || 0);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (sort === "low") {
      res.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      res.sort((a, b) => b.price - a.price);
    }

    setFiltered(res);
  }, [category, debouncedSearch, products, sort, priceRange]);

  /* ================= NOTIFICATIONS ================= */
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    setNotifications(cart.length + orders.length);
  }, []);

  /* ================= SAVE TOGGLE ================= */
  const toggleSave = (item) => {
    let saved = JSON.parse(localStorage.getItem("saved")) || [];

    const exists = saved.some((p) => p.id === item.id);

    if (exists) {
      saved = saved.filter((p) => p.id !== item.id);
    } else {
      saved = [...saved, item];
    }

    localStorage.setItem("saved", JSON.stringify(saved));
    setSavedItems(saved);
  };

  /* ================= ONLY ADD: NOTIFICATION CLICK LOGIC ================= */
  const openNotifications = () => {
    navigate("/notifications");
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-24">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[28px] md:text-[34px] font-semibold text-[#1A1A1A]">
            Discover
          </h1>

          {/* ONLY LOGIC ADDED */}
          <div
            onClick={openNotifications}
            className="relative w-10 h-10 flex items-center justify-center bg-white border border-[#E6E6E6] rounded-xl shadow-sm"
          >
            <BellIcon />

            {notifications > 0 && (
              <span className="absolute top-2 right-2 min-w-[16px] h-[16px] px-[4px] text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full">
                {notifications}
              </span>
            )}
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-3">

          <div className="flex items-center flex-1 h-12 px-4 bg-white border border-[#E6E6E6] rounded-xl shadow-sm">
            <SearchIcon />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-3 text-sm outline-none"
            />

            <MicIcon />
          </div>

          <button
            onClick={() => setShowFilter(true)}
            className="w-12 h-12 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center"
          >
            <FiFilter size={18} />
          </button>

        </div>

        {/* CATEGORY */}
        <div className="flex gap-2 overflow-x-auto mt-5 pb-1">
          {["All", "Tshirts", "Jeans", "Shoes"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm border ${
                category === cat
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-white text-[#1A1A1A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">

          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-44 w-full rounded-xl" />
              ))
            : filtered.map((item) => {
                const isSaved = savedItems.some((p) => p.id === item.id);

                return (
                  <div key={item.id} className="relative bg-white rounded-xl">

                    {/* HEART */}
                    <button
                      onClick={() => toggleSave(item)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md"
                    >
                      <AiOutlineHeart
                        className={isSaved ? "fill-black text-red-500" : ""}
                      />
                    </button>

                    <ProductCard item={item} />
                  </div>
                );
              })}
        </div>

      </div>

      {/* FILTER DRAWER (UNCHANGED) */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
          <div className="bg-white w-full max-w-md rounded-t-2xl p-5">

            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              <button onClick={() => setShowFilter(false)}>✕</button>
            </div>

            <div className="flex gap-2 mb-4">
              <button onClick={() => setSort("popular")}>Popular</button>
              <button onClick={() => setSort("low")}>Low</button>
              <button onClick={() => setSort("high")}>High</button>
            </div>

            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([0, Number(e.target.value)])
              }
              className="w-full"
            />

            <button
              onClick={() => setShowFilter(false)}
              className="w-full mt-4 py-3 bg-black text-white rounded-xl"
            >
              Apply
            </button>

          </div>
        </div>
      )}

      {/* BOTTOM NAV (UNCHANGED COMPLETELY) */}
      <div className="fixed bottom-0 left-0 w-full h-[70px] bg-white border-t flex justify-around items-center">

        <button onClick={() => navigate("/home")}>
          <SlHome size={20} />
        </button>

        <button onClick={() => navigate("/search")}>
          <FiSearch size={20} />
        </button>

        <button onClick={() => navigate("/saved-items")}>
          <AiOutlineHeart size={20} />
        </button>

        <button onClick={() => navigate("/cart")}>
          <BsCart size={20} />
        </button>

        <button onClick={() => navigate("/account")}>
          <FiUser size={20} />
        </button>

      </div>

    </div>
  );
};

export default HomePage;