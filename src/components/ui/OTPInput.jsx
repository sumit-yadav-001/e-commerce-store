import { useState, useEffect, useRef } from "react";
import Button from "./Button";

const OTPInput = ({ length = 4, onComplete, isLoading }) => {
  const [code, setCode] = useState(Array(length).fill(""));
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef(Array(length).fill(null));

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Prevent pasting full strings into one box
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-advance
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newCode.every(v => v !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCode(Array(length).fill(""));
    inputRefs.current[0].focus();
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-8">
        {code.map((digit, idx) => (
          <input
            key={idx}
            ref={el => inputRefs.current[idx] = el}
            type="text"
            inputMode="numeric"
            className="w-16 h-16 text-center text-2xl font-bold rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            maxLength={1}
            required
            disabled={isLoading}
          />
        ))}
      </div>
      
      <div className="text-center">
        {timer > 0 ? (
          <p className="text-sm font-medium text-gray-500">
            Resend code in 00:{timer.toString().padStart(2, "0")}
          </p>
        ) : (
          <button 
            type="button" 
            onClick={handleResend}
            disabled={isLoading}
            className="text-sm font-bold text-black hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default OTPInput;