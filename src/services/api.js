const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return Array.isArray(data?.products) ? data.products : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getSingleProduct = async (id) => {
  if (!id) return null;
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    return data || null;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};

export const searchProducts = async (query) => {
  if (!query) return [];
  try {
    const res = await fetch(`${BASE_URL}/products/search?q=${query}`);
    if (!res.ok) throw new Error("Failed to search products");
    const data = await res.json();
    return Array.isArray(data?.products) ? data.products : [];
  } catch (error) {
    console.error(`Error searching products for "${query}":`, error);
    return [];
  }
};