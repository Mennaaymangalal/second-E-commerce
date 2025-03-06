import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import Product from "../../components/Product/Product";
import Cookies from "js-cookie";
import img from "../../assets/image.jpeg"




export default function Shop() {
  const [isLoading , setIsLoading] = useState(false)
  const [products , setProducts] = useState([])  

  function getAllProduct(){
    const token = Cookies.get("token");
    
    if (!token) {
        console.error("No authentication token found! Redirecting to login...");
        alert("Session expired. Please log in again.");
        window.location.href = "/login"; // Redirect to login page
        return;
    }

    setIsLoading(true)
    axios.get("https://test-ecomerce.xn--hrt-w-ova.de/api/product/category?category_id=5&page=1",
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
      {isLoading ? (
      <div className="flex py-40 justify-center items-center">
        <Loading />
      </div>
    ) : 
    <div className="mt-24 my-10">

      <div className="container gap-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col md:justify-center md:ps-10 ">
          <h2 className='font-bold text-2xl'>All Living Room</h2>
          <p className='max-w-lg'> Sofas, loveseats, armchairs, coffee tables, end tables, entertainment centers, bookshelves</p>
        </div>
        <div className="max-w-md md:ps-14 pb-8">
          <img src={img} className='rounded-2xl'/>
        </div>

      </div>
    
      {/* Product List */}
  
      <section  className="container py-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
       
      {
        products.map((product,index)=>{
          return  <Product key={index} product={product}/>
        })
      }
       
      </div>
    </section>
   
     
    </div>

  }
      
    </>
  )
}
