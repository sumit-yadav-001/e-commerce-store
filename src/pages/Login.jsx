import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((res) => setTimeout(res, 800));

    navigate("/home");
    setLoading(false);
  };

  return (
   
      <div className="w-full max-w-md mx-auto px-6">

        {/* HEADER */}
        <div className="mt-[59px]">
          <h1 className="text-[32px] font-semibold text-[#1A1A1A] leading-[100%] tracking-[-0.05em]">
            Login to your account
          </h1>

          <p className="text-[16px] text-[#808080] mt-2 leading-[140%]">
            It’s great to see you again.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6 mt-10" onSubmit={handleSubmit}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[52px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
          />

          {/* 🔥 Figma Row (width:341, height:20, space-between) */}
          <div className="w-full flex justify-center">
            <div className="w-[341px] h-[20px] flex justify-between items-center">
              
              <span className="text-[14px] text-[#808080]">
                Forgot your password?
              </span>

              <span
                onClick={() => navigate("/forgot-password")}
                className="text-[14px] text-black underline cursor-pointer"
              >
                Reset password
              </span>

            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={!email || !password}
            className={`w-full sm:w-[341px] h-[54px] mx-auto flex items-center justify-center rounded-[10px] text-[16px] font-medium transition
              ${
                !email || !password
                  ? "bg-[#CCCCCC] text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              }
            `}
          >
            Login
          </button>
        </form>

        {/* GOOGLE LOGIN */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="w-full sm:w-[341px] h-[56px] border border-[#CCCCCC] rounded-[10px] flex items-center justify-center gap-3 text-[16px] font-medium"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </div>

        {/* FACEBOOK LOGIN */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="w-full sm:w-[341px] h-[56px] bg-[#1877F2] text-white rounded-[10px] flex items-center justify-center gap-3 text-[16px] font-medium"
          >
            Login with Facebook
          </button>
        </div>

        {/* SIGNUP */}
        <p className="text-center mt-6 text-[16px] text-[#1A1A1A]">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="font-medium underline cursor-pointer"
          >
            Join
          </span>
        </p>

      </div>
  
  );
};

export default Login;