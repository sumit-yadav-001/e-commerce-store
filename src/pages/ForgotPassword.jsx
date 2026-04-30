import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError("");

    try {
      await new Promise((res) => setTimeout(res, 1000));

      // simple validation
      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      setStatus("success");

      setTimeout(() => {
        navigate("/verify-code", { state: { email } });
      }, 1200);

    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6">

      {/* HEADER */}
      <div className="mt-[99px] w-full max-w-md mx-auto">

        <h1 className="text-[32px] font-semibold text-[#1A1A1A] leading-[100%] tracking-[-0.05em]">
          Forgot Password
        </h1>

        <p className="text-[16px] text-[#808080] mt-2 leading-[140%]">
          Enter your email for verification. We will send a 4-digit code to your email address.
        </p>

      </div>

      {/* SUCCESS UI */}
      {status === "success" && (
        <div className="w-full max-w-md mx-auto mt-10 text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-xl font-semibold text-[#1A1A1A]">
            Code Sent
          </h2>
          <p className="text-[#808080] mt-2">
            Redirecting to verification screen...
          </p>
        </div>
      )}

      {/* ERROR UI */}
      {status === "error" && (
        <div className="w-full max-w-md mx-auto mt-10 text-center">
          <div className="text-red-500 text-5xl mb-4">✕</div>
          <h2 className="text-xl font-semibold text-[#1A1A1A]">
            Something went wrong
          </h2>
          <p className="text-[#808080] mt-2">{error}</p>

          <button
            onClick={() => setStatus("idle")}
            className="mt-4 underline text-sm"
          >
            Try Again
          </button>
        </div>
      )}

      {/* FORM */}
      {(status === "idle" || status === "loading") && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto mt-10 space-y-6"
        >

          {/* EMAIL FIELD */}
          <div className="flex flex-col gap-2">

            <label className="text-[14px] font-medium text-[#1A1A1A]">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="cody.fisher45@example.com"
              className="w-full h-[54px] px-4 border border-[#CCCCCC] rounded-[10px] focus:outline-none focus:border-black text-[16px]"
            />

          </div>

          {/* SEND CODE BUTTON */}
          <button
            type="submit"
            disabled={!email || status === "loading"}
            className={`w-full h-[54px] rounded-[10px] text-[16px] font-medium transition
              ${
                !email || status === "loading"
                  ? "bg-[#CCCCCC] text-white cursor-not-allowed"
                  : "bg-[#1A1A1A] text-white hover:bg-black"
              }
            `}
          >
            {status === "loading" ? "Sending..." : "Send Code"}
          </button>

        </form>
      )}

      {/* BACK TO LOGIN */}
      <div className="mt-auto pb-6 flex justify-center">
        <p className="text-[16px] text-[#1A1A1A]">
          Back to{" "}
          <span
            onClick={() => navigate("/login")}
            className="underline cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>

    </div>
  );
};

export default ForgotPassword;