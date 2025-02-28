import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  function getAllProduct() {
    setIsLoading(true);
    axios
      .get("http://test-ecomerce.xn--hrt-w-ova.de/api/product/get", {
        headers: {
          "Country-Id": "1",
          "Accept-Language": "en",
        },
      })
      .then(({ data }) => {
        console.log("Fetched Data:", data.data); // 🔍 Debugging: Check API response
        setProducts(data.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="py-5">
      {isLoading ? (
        <p className="text-center text-lg font-semibold">Loading products...</p>
      ) : (
        <section className="py-5">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// 🖼 Product Card: Show Only First Image
const ProductCard = ({ product }) => {
  // Extract first image from categories
  const firstImage =
    product.categories?.length > 0
      ? `http://test-ecomerce.xn--hrt-w-ova.de/${product.categories.image}`
      : "https://via.placeholder.com/300"; // Default placeholder image

  return (
    <article className="rounded-xl dark:bg-slate-950 bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <a href="#">
        <div className="relative flex items-center justify-center overflow-hidden rounded-xl">
          {/* 🖼 Display first image only */}
          <img
            src={firstImage}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700 font-bold">{product.title}</h2>
          <p className="text-sm text-slate-400">{product.description}</p>

          <div className="mt-3 flex items-end justify-between">
            <p className="text-lg font-bold text-blue-500">${product.price}</p>
            <button className="flex items-center space-x-1.5 text-2xl rounded-lg px-4 py-1.5">
              <i className="fa-solid fa-circle-plus"></i>
            </button>
          </div>
        </div>
      </a>
    </article>
  );
};
