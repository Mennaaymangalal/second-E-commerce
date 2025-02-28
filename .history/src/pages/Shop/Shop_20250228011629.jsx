import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shop() {
  const [isLoading , setIsLoading] = useState(false)
  const [products , setProducts] = useState("")

  function getAllProduct(){
    setIsLoading(true)
    axios.get("http://test-ecomerce.xn--hrt-w-ova.de/api/product/get",
     { headers: {
        "Country-Id": "1",
        "Accept-Language": "en"
      }}
    ).then(({data})=>{     
      setProducts(data.data)
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
    
      {/* Product List */}
      <section className="py-10 bg-gray-100">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((_, index) => (
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
