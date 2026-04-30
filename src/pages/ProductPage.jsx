// src/pages/ProductPage.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../services/api";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto">

      <img src={product.thumbnail} className="h-60 w-full rounded-xl" />

      <h1 className="text-2xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {product.description}
      </p>

      <p className="text-xl font-bold mt-3">
        ₹{product.price}
      </p>

      <button className="w-full bg-black text-white py-3 rounded-xl mt-4">
        Buy Now
      </button>

    </div>
  );
};

export default ProductPage;