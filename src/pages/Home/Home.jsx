import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'


export default function Home() {
  const [isLoading , setIsLoading] = useState(false)
  const [products , setProducts] = useState([])

  function getAllProduct(){
    setIsLoading(true)
    axios.get("http://test-ecomerce.xn--hrt-w-ova.de/api/category/get",
     { headers: {       
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
  <main className="hero">
   <h1 className='main1'>Make your interior more
     minimalistic & modern</h1>
  </main>
  
   
    <div className="mx-auto grid my-16 max-w-6xl grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex lg:items-end ">
      <h4 className='text-3xl font-semibold lg:mb-4'>Our <br/>
      Categories</h4>
    </div>
       
      {
        products.map((product,index)=>{
          return   <article key={index}
            
          className=" rounded-xl dark:bg-slate-950 bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <a href="#">
            <div className="relative flex items-end overflow-hidden rounded-xl">
            <img                                           
                       src={`http://test-ecomerce.xn--hrt-w-ova.de/${product.image}`}
                       alt={product.title}
                       className="w-full h-48 object-cover mb-2"
                     />
            </div>

            <div className="mt-1 p-2">
              <h2 className="text-slate-700"></h2>
              <p className="mt-1 text-sm text-slate-400">{product.title}</p>
              <p className="text-lg line-clamp-2 ">{product.description}</p>

              <div className="mt-3 flex items-center  text-orange-500  dark: text-orange-500 ">
                <p className="text-lg font-bold">More Info</p>               
                <button className="flex items-center space-x-1.5 text-2xl rounded-lg px-4 py-1.5">
                <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </a>
        </article>
        })
      }
       
      </div>

 
    </>
  )
}
