import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBattery, FiWifi } from "react-icons/fi";
import { FiLoader } from "react-icons/fi";

const Splash = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 5;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          navigate("/onboarding", { replace: true });
        }, 300);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">

      {/* ================= BACKGROUND FIGMA LINES ================= */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[600px] border border-white rotate-45 rounded-full"></div>
        <div className="absolute w-[450px] h-[450px] border border-white rotate-45 rounded-full"></div>
        <div className="absolute w-[300px] h-[300px] border border-white rotate-45 rounded-full"></div>
      </div>

      {/* ================= STATUS BAR ================= */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-5 py-3 text-white text-sm">
        <div className="font-semibold">9:41</div>

        <div className="flex items-center gap-2">
          <FiWifi className="text-white text-sm" />
          <FiBattery className="text-white text-sm" />
        </div>
      </div>

      {/* ================= CENTER LOGO ================= */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[134px] h-[134px] bg-white rounded-full flex items-center justify-center">
          <div className="w-[55px] h-[55px] bg-black rounded-full"></div>
        </div>
      </div>

      {/* ================= LOADER (IMPROVED WITH ICON) ================= */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">

        {/* Loader icon */}
        <FiLoader className="text-white text-3xl animate-spin" />

        {/* Progress bar */}
        <div className="w-[160px] md:w-[200px] h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-white/60">{progress}%</p>
      </div>

      {/* ================= HOME INDICATOR ================= */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white rounded-full"></div>

    </div>
  );
};

export default Splash;