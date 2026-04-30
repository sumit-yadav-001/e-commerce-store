import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ UPDATED LOGIC ONLY
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("loading");
      setError("");

      // 🔍 Validation
      if (!name.trim()) {
        throw new Error("Full name is required");
      }

      if (!email.includes("@")) {
        throw new Error("Please enter a valid email");
      }

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      // ⏳ Fake API
      await new Promise((res) => setTimeout(res, 1200));

      // ❌ Example duplicate check
      if (email === "test@gmail.com") {
        throw new Error("User already exists");
      }

      // ✅ Success

      setStatus("success");

      setTimeout(() => {
        navigate("/home");
      }, 1500);

    } catch (err) {
      setError(err.message || "Signup failed");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* SUCCESS */}
        {status === "success" && (
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A]">
              Account Created
            </h2>
            <p className="text-gray-500 mt-2">Redirecting...</p>
          </div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <div className="text-center">
            <div className="text-red-500 text-5xl mb-4">✕</div>
            <h2 className="text-2xl font-semibold text-[#1A1A1A]">
              Signup Failed
            </h2>
            <p className="text-gray-500 mt-2">{error}</p>

            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* FORM */}
        {(status === "idle" || status === "loading") && (
          <>
            <div className="mb-6">
              <h1 className="text-[32px] font-semibold tracking-[-0.05em] text-[#1A1A1A]">
                Create an account
              </h1>
              <p className="text-[16px] text-gray-500 mt-2">
                Let’s create your account.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Full Name */}
              <div>
                <label className="text-[14px] text-[#1A1A1A] mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[14px] text-[#1A1A1A] mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-[14px] text-[#1A1A1A] mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
                />

                {/* Terms */}
                <p className="text-[14px] text-gray-500 mt-3 leading-[1.4]">
                  By signing up you agree to our{" "}
                  <span className="font-medium underline text-black cursor-pointer">
                    Terms
                  </span>
                  ,{" "}
                  <span className="font-medium underline text-black cursor-pointer">
                    Privacy Policy
                  </span>
                  , and{" "}
                  <span className="font-medium underline text-black cursor-pointer">
                    Cookie Use
                  </span>
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[54px] bg-black text-white rounded-xl text-[16px] font-medium hover:bg-gray-900 transition"
              >
                {status === "loading" ? "Creating..." : "Create Account"}
              </button>
            </form>

            {/* SOCIAL */}
            <div className="mt-6 space-y-4">

              <button className="w-full h-[56px] border border-[#CCCCCC] rounded-xl flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign Up with Google
              </button>

              <button className="w-full h-[56px] rounded-xl flex items-center justify-center gap-3 text-white bg-[#1877F2] hover:bg-[#166fe0] transition">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z"/>
                </svg>
                Sign Up with Facebook
              </button>
            </div>

            <p className="text-center text-[16px] text-black/60 mt-4">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-black font-medium cursor-pointer hover:underline"
              >
                Log In
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;