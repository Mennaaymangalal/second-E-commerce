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
        setProducts(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="bg-white py-10">
      {isLoading ? (
        <p className="text-center text-lg font-semibold">Loading products...</p>
      ) : (
        <section className="bg-gray-100 py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <article
                key={index}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <a href="#">
                  <div className="relative flex items-center justify-center overflow-hidden rounded-xl">
                    {/* 🖼 Display all images from categories */}
                    {product.categories?.length > 0 ? (
                      product.categories.map((category, catIndex) => (
                        <img
                          key={catIndex}
                          src={`http://test-ecomerce.xn--hrt-w-ova.de/${category.image}`}
                          alt={product.title}
                          className="w-full h-48 object-cover mb-2"
                        />
                      ))
                    ) : (
                      <img
                        src="https://via.placeholder.com/300"
                        alt="Default"
                        className="w-full h-48 object-cover"
                      />
                    )}
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700 font-bold">{product.title}</h2>
                    <p className="mt-1 text-sm text-slate-400">{product.description || "No description available"}</p>

                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">
                        ${product.price || "N/A"}
                      </p>
                      <button className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white hover:bg-blue-600">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
