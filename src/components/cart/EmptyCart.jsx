import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">

      <div className="text-7xl animate-bounce">🛒</div>

      <h2 className="text-xl font-semibold mt-4">
        Your cart is empty
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        Add products to start shopping
      </p>

      <Link to="/search">
        <button className="mt-5 bg-black text-white px-6 py-2 rounded-lg">
          Start Shopping
        </button>
      </Link>

    </div>
  );
};

export default EmptyCart;