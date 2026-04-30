import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  if (!item) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
      <Link to={`/product/${item?.id}`} className="relative bg-gray-50 aspect-square flex items-center justify-center p-6 overflow-hidden">
        <img
          src={item?.thumbnail || "https://via.placeholder.com/400"}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          alt={item?.title || "Product"}
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col flex-grow p-5">
        <Link to={`/product/${item?.id}`} className="mb-1">
          <h2 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-black/70 transition-colors">
            {item?.title || "Unknown Product"}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item?.description || "No description available."}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            ${item?.price || 0}
          </span>
          <button 
            onClick={handleAddToCart}
            className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all"
            aria-label="Add to cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;