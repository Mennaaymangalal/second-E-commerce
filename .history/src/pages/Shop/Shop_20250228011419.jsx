import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shop() {
  const [isLoading , setIsLoading] = useState(false)

  function getAllProduct(){
    setIsLoading(true)
    axios.get("http://test-ecomerce.xn--hrt-w-ova.de/api/product/get",
     { headers: {
        "Country-Id": "1",
        "Accept-Language": "en"
      }}
    ).then(({data})=>{     
      console.log(data.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  useEffect(()=>{
    getAllProduct()
  },[])

  return (
    <>
      <div className="bg-white">
      {/* Header Navbar */}
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-3 h-6 text-blue-500 sm:h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            <span className="self-center whitespace-nowrap text-xl font-semibold">Termcode</span>
          </a>

          <div className="mt-2 sm:mt-0 sm:flex md:order-2">
            <button className="hidden border border-blue-700 py-1.5 px-6 text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg">
              Login
            </button>
            <button className="hidden bg-blue-700 py-1.5 px-6 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Title */}
      <div className="pt-32 bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
      </div>

      {/* Tab Menu */}
      <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800">
        {["Architecto", "Corrupti", "Excepturi", "Consectetur"].map((tab, index) => (
          <a key={index} href="#" className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600">
            <span>{tab}</span>
          </a>
        ))}
      </div>

      {/* Product List */}
      <section className="py-10 bg-gray-100">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4].map((_, index) => (
            <article
              key={index}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={`https://source.unsplash.com/random/300x200?sig=${index}`}
                    alt="Product"
                    className="w-full"
                  />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-700">Product {index + 1}</h2>
                  <p className="mt-1 text-sm text-slate-400">Location</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-blue-500">$450</p>
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

     
    </div>
    </>
  )
}
