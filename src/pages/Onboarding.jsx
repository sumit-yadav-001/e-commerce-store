import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

import image1 from "../assets/image.png";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-8 flex flex-col justify-between">

      {/* Skip */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-6 right-6 text-sm text-gray-500 hover:text-black"
      >
        Skip
      </button>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-10 md:gap-20">

        {/* LEFT - TEXT */}
        <div className="w-full md:w-1/2">
          <h1
            className="
              text-[#1A1A1A]
              font-semibold
              leading-[0.8]
              tracking-[-0.05em]
              text-[42px]
              md:text-[72px]
              lg:text-[96px]
              max-w-[600px]
            "
            style={{ fontFamily: "General Sans, sans-serif" }}
          >
            Define yourself in your unique way.
          </h1>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div
            className="
              w-full 
              max-w-[280px] 
              md:max-w-[420px] 
              lg:max-w-[520px]
            "
            style={{
              boxShadow: "60px 10px 80px 0px #00000066",
            }}
          >
            <img
              src={image1}
              alt="onboarding"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
        <div className="w-full max-w-sm">
          <Button
            onClick={() => navigate("/signup")}
            fullWidth
            className="bg-black text-white hover:bg-gray-900 flex items-center justify-between px-6 py-4 rounded-xl"
          >
            <span>Get Started</span>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Onboarding;