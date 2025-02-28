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
      <div className="bg-white">
    
      {/* Product List */}
  
      <section  className="py-10 bg-gray-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
        {
          products.map((product , index)=>{
            return
          }
        
       }
       
      </div>
    </section>
   
     
    </div>
    </>
  )
}
