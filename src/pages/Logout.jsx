import { useNavigate } from "react-router-dom";
import { FiXCircle, FiLogOut } from "react-icons/fi";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 👉 yaha tum API / token clear logic laga sakte ho
    localStorage.clear();

    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* Card (Figma Frame 24) */}
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

        {/* Warning Icon (Frame 26) */}
        <div className="flex flex-col items-center gap-3">

          <div className="relative w-[78px] h-[78px] flex items-center justify-center">
            <FiXCircle className="text-red-500 w-[78px] h-[78px] opacity-90" />
          </div>

          {/* Title + Subtitle */}
          <div className="flex flex-col items-center gap-2 text-center">

            <h1 className="text-[20px] font-semibold text-[#1A1A1A]">
              Logout?
            </h1>

            <p className="text-[16px] text-[#808080]">
              Are you sure you want to logout?
            </p>

          </div>
        </div>

        {/* Buttons Frame 73 */}
        <div className="flex flex-col w-full gap-3">

          {/* Logout Button (Primary Red) */}
          <button
            onClick={handleLogout}
            className="
              flex items-center justify-center gap-2
              w-full h-[54px]
              bg-[#ED1010]
              text-white
              rounded-[10px]
              font-medium text-[16px]
              hover:opacity-90
              transition
            "
          >
            <FiLogOut />
            Logout
          </button>

          {/* Cancel Button (Secondary) */}
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