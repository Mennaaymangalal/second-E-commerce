import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shop() {
  const [isLoading , setIsLoading] = useState(false)
  const [products , setProducts] = useState([])

  function getAllProduct(){
    setIsLoading(true)
    axios.get("http://test-ecomerce.xn--hrt-w-ova.de/api/product/get",
     { headers: {
        "Country-Id": "1",
        "Accept-Language": "en"
      }}
    ).then(({data})=>{     
      setProducts(data.data)
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
      <div className="">
    
      {/* Product List */}
  
      <section  className="py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
      {
        products.map((product,index)=>{
          return   <article key={index}
            
          className="rounded-xl dark:bg-slate-950 bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <a href="#">
            <div className="relative flex items-end overflow-hidden rounded-xl">
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
              <h2 className="text-slate-700"></h2>
              <p className="mt-1 text-sm text-slate-400">{product.title}</p>

              <div className="mt-3 flex items-end justify-between">
                <p className="text-lg font-bold">${product.price}</p>
                <button className="flex items-center space-x-1.5  rounded-lg px-4 py-1.5">
                <i className="fa-solid fa-circle-plus w-20 h-20"></i>
                </button>
              </div>
            </div>
          </a>
        </article>
        })
      }
       
      </div>
    </section>
   
     
    </div>
    </>
  )
}
