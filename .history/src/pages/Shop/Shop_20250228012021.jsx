import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shop() {
  const [isLoading , setIsLoading] = useState(false)
  const [products , setProducts] = useState(null)

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
   {
    products.ma
   }

     
    </div>
    </>
  )
}
