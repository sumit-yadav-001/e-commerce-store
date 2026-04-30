import { useState, useEffect } from "react";
import { searchProducts } from "../services/api";
import ProductCard from "../components/product/ProductCard";
import Skeleton from "../components/ui/Skeleton";
import { FiSearch, FiMic, FiArrowLeft, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RECENT_KEY = "recent_searches";

const Search = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recent, setRecent] = useState([]);

  /* ================= LOAD RECENT SEARCHES ================= */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    setRecent(stored);
  }, []);

  /* ================= SAVE RECENT ================= */
  const saveRecent = (text) => {
    if (!text.trim()) return;

    let updated = [text, ...recent.filter((i) => i !== text)];
    updated = updated.slice(0, 5); // max 5 items

    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  /* ================= CLEAR RECENT ================= */
  const clearRecent = () => {
    setRecent([]);
    localStorage.removeItem(RECENT_KEY);
  };

  /* ================= SEARCH API ================= */
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await searchProducts(query);
        setResults(data || []);
        saveRecent(query);
      } catch (err) {
        setError("Error fetching search results");
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-white px-4 py-6">

      {/* ================= HEADER ================= */}
      <div className="relative flex items-center justify-center h-[60px] mb-4">
        <FiArrowLeft
          size={24}
          className="absolute left-0 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-[24px] font-semibold">Search</h1>
      </div>

      {/* ================= SEARCH BAR ================= */}
      <div className="w-full max-w-[341px] h-[52px] mx-auto flex items-center gap-2 border rounded-xl px-3">
        <FiSearch className="text-gray-400" size={18} />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 outline-none text-sm"
        />

        <FiMic className="text-gray-400" size={18} />
      </div>

      {/* ================= RECENT SEARCHES ================= */}
      {!query && recent.length > 0 && (
        <div className="max-w-[341px] mx-auto mt-6">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[16px] font-semibold">Recent Searches</h2>

            <button
              onClick={clearRecent}
              className="text-sm text-black underline"
            >
              Clear all
            </button>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-2">
            {recent.map((item, index) => (
              <div
                key={index}
                onClick={() => setQuery(item)}
                className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg cursor-pointer"
              >
                <span className="text-sm text-gray-700">{item}</span>

                <FiX
                  size={14}
                  className="text-gray-400 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const updated = recent.filter((r) => r !== item);
                    setRecent(updated);
                    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= EMPTY STATE ================= */}
      {!query && recent.length === 0 && (
        <div className="text-center mt-16 text-gray-400 text-sm">
          Start searching to see results...
        </div>
      )}

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-xl" />
          ))}
        </div>
      )}

      {/* ================= RESULTS ================= */}
      {!loading && results.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {results.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* ================= NO RESULTS ================= */}
      {!loading && query && results.length === 0 && (
        <div className="text-center mt-20">
          <div className="w-[64px] h-[64px] bg-gray-100 rounded-full mx-auto flex items-center justify-center">
            <FiSearch className="text-gray-400" size={24} />
          </div>

          <h2 className="mt-4 text-[20px] font-semibold">
            No Results Found!
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Try another keyword
          </p>

          <p className="text-[#808080] text-[16px] mt-3 max-w-[252px] mx-auto">
            Try a similar word or something more general.
          </p>
        </div>
      )}

    </div>
  );
};

export default Search;