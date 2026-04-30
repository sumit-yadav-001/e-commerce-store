import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const code = otp.join("");
    if (code.length !== 4) return;

    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    setLoading(false);
    navigate("/reset-password");
  };

  const handleResend = async () => {
    setResendLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    setOtp(["", "", "", ""]);
    setResendLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">

      {/* HEADER */}
      <div className="mt-[99px] w-full max-w-md mx-auto text-center">

        {/* 🔥 UPDATED TEXT */}
        <h1 className="text-[32px] font-semibold text-[#1A1A1A]">
          Enter 4 digit code
        </h1>

        <p className="text-[16px] text-[#808080] mt-2 leading-[140%]">
          We sent a 4-digit code to your email. Enter it below.
        </p>

      </div>

      {/* OTP BOXES */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto mt-10 flex flex-col items-center gap-8"
      >

        <div className="flex gap-3">

          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-[64px] h-[60px] border border-[#CCCCCC] rounded-[10px] text-center text-[18px] font-medium focus:outline-none focus:border-black"
            />
          ))}

        </div>

        {/* RESEND */}
        <div className="text-center">

          <p className="text-[16px] text-[#808080]">
            Email not received?
          </p>

          <button
            type="button"
            onClick={handleResend}
            className="text-[16px] font-medium text-[#1A1A1A] underline mt-1"
          >
            {resendLoading ? "Resending..." : "Resend code"}
          </button>

        </div>

        {/* CONTINUE */}
        <button
          type="submit"
          disabled={otp.join("").length !== 4 || loading}
          className={`w-full sm:w-[341px] h-[54px] flex items-center justify-center gap-2 rounded-[10px] text-[16px] font-medium transition
            ${
              otp.join("").length !== 4 || loading
                ? "bg-[#CCCCCC] text-white cursor-not-allowed"
                : "bg-[#1A1A1A] text-white hover:bg-black"
            }
          `}
        >
          {loading ? "Verifying..." : "Continue"}

          {/* Arrow */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>

        </button>

      </form>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-[61px] left-[24px]"
      >
        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

    </div>
  );
};

export default VerifyCode;