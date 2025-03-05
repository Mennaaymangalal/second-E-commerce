import axios from 'axios'
import { h1 } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Card, Skeleton} from "@heroui/react";

export default function ProductDetails() {
 const [isLoading, setIsLoading] = useState(false)
 const [productD, setProductD] = useState(null)

  const {id} = useParams()
  
  useEffect(()=>{
    getProductDetails([id])
  },[])

  function getProductDetails(productId){
    setIsLoading(true)
    axios.get("https://test-ecomerce.xn--hrt-w-ova.de/api/product/find/" + productId ,{
        headers:{
             "Accept-Language": "en"
        }
    }).then((data)=>{
        console.log(data.data.data)
        setProductD(data.data.data)
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        setIsLoading(false)
    })
  }
    
  

  return (
    <>
      {
        isLoading ?
        <div className="flex justify-center items-center py-36">       
      <Card className="w-[500px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-28 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-5 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-5 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-5 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card> 

        </div>
        
        :
        <div className="container flex justify-center items-center">
        <div className="flex-col pt-28 md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
          <div className="flex bg-white rounded-lg shadow dark:bg-slate-950 flex-col md:flex-row">
            
            <div className="relative w-full md:w-4/6/6 flex justify-center items-center">
           
                 {
                    productD?.productimage.map((product ,index)=>{
                        return    <img key={index}
                        src={`https://test-ecomerce.xn--hrt-w-ova.de/${product.link}`}
                        alt={`https://test-ecomerce.xn--hrt-w-ova.de/${product.title}`}
                        className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                 
                    })
                 }
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">{productD?.title}</h1>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">${productD?.price}</div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">{productD?.description}</div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                <div className="flex space-x-2">
                  {/* {["XS", "S", "M", "L", "XL"].map((size) => (
                    <label key={size} className="text-center">
                      <input 
                        type="radio" 
                        className="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600" 
                        name="size" 
                        value={size.toLowerCase()} 
                      /> {size}
                    </label>
                  ))} */}
                </div>
                {/* <a href="#" className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">
                  Size Guide
                </a> */}
              </div>
              <div className="flex mb-4 text-sm font-medium">
                <button 
                  type="button"
                  className="py-2 px-4 bg-orange-500 hover:bg-orange-400 focus:ring-orange-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                 Add To Cart
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
            </form>
          </div>
        </div>
        </div>
      }
    </>
  )
}
