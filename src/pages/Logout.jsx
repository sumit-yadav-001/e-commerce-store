import { useNavigate } from "react-router-dom";
import { FiXCircle, FiLogOut } from "react-icons/fi";
import { useState } from "react";

const Logout = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;

    setLoading(true);

    try {
      // ✅ 1. Clear auth data (production safe)
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      localStorage.removeItem("chat_messages");

      // ✅ 2. Optional: API logout call (future ready)
      // await fetch("/api/logout", { method: "POST" });

      // ✅ 3. Small delay for UX smoothness
      setTimeout(() => {
        navigate("/login", { replace: true }); // ✅ prevent back navigation
      }, 500);

    } catch (err) {
      console.error("Logout error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* Card */}
      <div
        className="
          relative
          bg-white
          w-full max-w-[341px]
          rounded-[20px]
          p-6
          flex flex-col
          items-center
          gap-6
          shadow-sm
        "
      >

        {/* Icon */}
        <div className="flex flex-col items-center gap-3">

          <div className="relative w-[78px] h-[78px] flex items-center justify-center">
            <FiXCircle className="text-red-500 w-[78px] h-[78px] opacity-90" />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-2 text-center">

            <h1 className="text-[20px] font-semibold text-[#1A1A1A]">
              Logout?
            </h1>

            <p className="text-[16px] text-[#808080]">
              Are you sure you want to logout?
            </p>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-3">

          {/* Logout */}
          <button
            onClick={handleLogout}
            disabled={loading}
            className="
              flex items-center justify-center gap-2
              w-full h-[54px]
              bg-[#ED1010]
              text-white
              rounded-[10px]
              font-medium text-[16px]
              hover:opacity-90
              transition
              disabled:opacity-60
            "
          >
            <FiLogOut />
            {loading ? "Logging out..." : "Logout"}
          </button>

          {/* Cancel */}
          <button
            onClick={() => navigate(-1)}
            className="
              flex items-center justify-center
              w-full h-[54px]
              border border-[#CCCCCC]
              text-[#1A1A1A]
              rounded-[10px]
              font-medium text-[16px]
              hover:bg-gray-100
              transition
            "
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
};

export default Logout;