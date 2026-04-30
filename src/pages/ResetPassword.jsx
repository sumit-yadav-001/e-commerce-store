import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= ICONS ================= */

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10.58 10.58A3 3 0 0 0 13.42 13.42"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M2 12s3.5-7 10-7s10 7 10 7"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
    <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/* ================= PAGE ================= */

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const navigate = useNavigate();

  /* ================= LOGIC ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!password || !confirmPassword) return;

    if (password !== confirmPassword) return;

    setLoading(true);

    // fake API call
    await new Promise((res) => setTimeout(res, 1000));

    // success notification removed

    setLoading(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      {/* CARD (RESPONSIVE) */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">

        {/* HEADER */}
        <div className="mb-6 text-center sm:text-left">

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">
            Reset Password
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-2 leading-relaxed">
            Set a new password for your account to continue safely.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={show1 ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full h-12 border border-gray-200 rounded-xl px-4 pr-10 focus:outline-none focus:border-black transition"
              />

              <button
                type="button"
                onClick={() => setShow1(!show1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                {show1 ? <EyeIcon /> : <EyeOffIcon />}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="relative mt-1">
              <input
                type={show2 ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-full h-12 border border-gray-200 rounded-xl px-4 pr-10 focus:outline-none focus:border-black transition"
              />

              <button
                type="button"
                onClick={() => setShow2(!show2)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                {show2 ? <EyeIcon /> : <EyeOffIcon />}
              </button>
            </div>

            {/* ERROR */}
            {password && confirmPassword && password !== confirmPassword && (
              <p className="text-red-500 text-xs mt-2">
                Passwords do not match
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={
              !password ||
              !confirmPassword ||
              password !== confirmPassword ||
              loading
            }
            className={`w-full h-12 rounded-xl flex items-center justify-center gap-2 font-medium transition
              ${
                !password ||
                !confirmPassword ||
                password !== confirmPassword ||
                loading
                  ? "bg-gray-300 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              }
            `}
          >
            {loading ? "Updating..." : "Continue"}
            <ArrowIcon />
          </button>

        </form>
      </div>
    </div>
  );
};

export default ResetPassword;