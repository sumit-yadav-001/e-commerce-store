import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/api";
import Button from "../components/ui/Button";
import Skeleton from "../components/ui/Skeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adding, setAdding] = useState(false);

  // size state
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["S", "M", "L", "XL"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleProduct(id);
        if (!data) setError("Product not found");
        else setProduct(data);
      } catch (err) {
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      navigate("/cart");
    }, 500);
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Skeleton className="w-full aspect-square rounded-2xl" />
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-lg text-gray-500 mb-4">{error}</p>
        <Button onClick={() => navigate("/home")} variant="outline">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-[90px]">

      {/* ================= HEADER ================= */}
      <h1 className="text-[24px] font-semibold text-[#1A1A1A] mb-4">
        Product Details
      </h1>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center md:sticky md:top-24">
          <img
            src={product?.image || product?.thumbnail}
            className="w-full h-full object-contain"
            alt={product?.title}
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col">

          {/* CATEGORY */}
          <span className="text-sm text-gray-500 uppercase">
            {product?.category}
          </span>

          {/* TITLE */}
          <h1 className="text-[24px] md:text-[28px] font-semibold leading-[120%] mt-2">
            {product?.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[16px] font-medium text-[#1A1A1A]">
              4.0/5
            </span>
            <span className="text-gray-500 text-sm">
              (45 reviews)
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[16px] text-gray-600 mt-3 leading-[140%]">
            {product?.description}
          </p>

          {/* ================= SIZE SECTION ================= */}
          <div className="mt-6">

            <h2 className="text-[20px] font-semibold mb-3">
              Choose size
            </h2>

            <div className="flex gap-3">

              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-[50px] h-[42px] border rounded-lg text-sm font-medium transition
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-black border-[#E6E6E6]"
                    }
                  `}
                >
                  {size}
                </button>
              ))}

            </div>
          </div>

          {/* ================= PRICE + BUTTON ================= */}
          <div className="mt-8 border-t pt-6">

            <div className="flex justify-between items-center mb-4">

              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold">
                  ${product?.price}
                </p>
              </div>

              {product?.stock < 10 && (
                <p className="text-red-500 text-sm">
                  Only {product?.stock} left
                </p>
              )}

            </div>

            {/* BUTTON */}
            <button
              onClick={handleAddToCart}
              disabled={adding}
              className="w-full h-[54px] bg-[#1A1A1A] text-white rounded-[10px] font-semibold text-[16px] shadow-[0px_11px_14px_0px_#52525240]"
            >
              {adding ? "Added to Cart" : "Add to Cart"}
            </button>

          </div>

        </div>
      </div>

      {/* ================= RELATED ================= */}
      <div className="mt-14 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">
          You might also like
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="bg-gray-50 aspect-square rounded-xl flex items-center justify-center">
                <img
                  src={`https://dummyjson.com/image/200x200?text=Product+${i}`}
                  className="w-full h-full object-contain"
                  alt="related"
                />
              </div>
              <h3 className="text-sm font-medium mt-2">
                Related Item {i}
              </h3>
              <p className="text-gray-500 text-xs">$99</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;