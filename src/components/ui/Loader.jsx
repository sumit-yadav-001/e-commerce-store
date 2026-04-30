import React from "react";

const Loader = ({ fullScreen = false, variant = "default" }) => {
  const spinner = (
    <div className="relative flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 rounded-full"></div>
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
    </div>
  );

  const darkLoader = (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Replace this with your logo */}
      <img
        src="/logo-white.png"
        alt="logo"
        className="w-20 h-20 object-contain animate-pulse"
      />

      {/* Optional subtle loader */}
      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center ${
          variant === "dark"
            ? "bg-black"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        {variant === "dark" ? darkLoader : spinner}
      </div>
    );
  }

  return spinner;
};

export default Loader;