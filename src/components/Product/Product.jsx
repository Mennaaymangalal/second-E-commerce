import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
  return (
    <article className="rounded-xl dark:bg-slate-950 bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
     
      <Link to={"/productdetails"} className="relative flex items-end overflow-hidden rounded-xl">
        {
          product.productimage.map((productImage, index) => (
            <img
              key={index}
              src={`https://test-ecomerce.xn--hrt-w-ova.de/${productImage.link}`}
              alt={productImage.title}
              className="w-full h-48 object-contain mb-2"
            />
          ))
        }
      </Link>

      <div className="mt-1 p-2">
        <h2 className="text-slate-700"></h2>
        <p className="mt-1 text-sm text-slate-400">{product.title}</p>
        <p className="text-lg line-clamp-2">{product.description}</p>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold">${product.price}</p>
          <button className="flex items-center space-x-1.5 text-2xl rounded-lg px-4 py-1.5">
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>
      </div>
    </article>
  )
}
