import AuthWrapper from "../components/layout/AuthWrapper";
import { useNavigate } from "react-router-dom";

const SignupError = () => {
  const navigate = useNavigate();

  return (
    <AuthWrapper>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center py-10">

        {/* Icon */}
        <div className="text-6xl mb-4">❌</div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
          Signup Failed
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-md">
          We couldn’t create your account. This may happen due to invalid details,
          network issues, or an existing account.
        </p>

        {/* Error Reason (optional but PRO feature) */}
        <div className="mt-4 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-600">
            Reason: Email already exists or invalid input
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-sm">

          {/* Retry */}
          <button
            onClick={() => navigate("/signup")}
            className="
              w-full 
              bg-black 
              text-white 
              py-2.5 
              rounded-lg 
              hover:bg-gray-900 
              transition
            "
          >
            Try Again
          </button>

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="
              w-full 
              border border-gray-300 
              py-2.5 
              rounded-lg 
              hover:bg-gray-100 
              transition
            "
          >
            Go Back
          </button>

        </div>

        {/* Help Text */}
        <p className="mt-6 text-xs text-gray-400">
          If the issue persists, please check your internet connection or contact support.
        </p>

      </div>

    </AuthWrapper>
  );
};

export default SignupError;