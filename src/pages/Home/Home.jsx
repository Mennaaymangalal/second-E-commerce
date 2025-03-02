import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Categories from '../../components/Categories/Categories'
import img from '../../assets/1dde88ae6788c27acd5fc55158eb2f11.jpeg'


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
    <div className="flex justify-center items-center flex-col">

      <div className="">
      <h1 className='main1 px-5'>Make your interior more <br/>
     minimalistic & modern</h1>
      </div>

     <div className="pt-2 relative mx-auto text-white">
      <input
        className="border-2 placeholder-white border-gray-300 bg-transparent h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <svg
          className="text-white h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
          s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
          s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>

    </div>
  

  </main>  
   
    <div className="mx-auto grid my-16 max-w-6xl grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex lg:items-end ">
      <h4 className='text-3xl font-semibold lg:mb-4'>Our <br/>
      Categories</h4>
    </div>
       
      {
        products.map((product,index)=>{
          return  <Categories key={index} product={product}/>
        })
      }
       
      </div>

    <div className="container grid grid-cols-2 gap-20">
      <div className="my-16 ps-8">
        <img className='rounded-r-3xl'
        src={img}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className='text-3xl font-semibold lg:mb-4'>Furnish Your Dreams, <br/> Choose Wisely</h2>
        <p className='max-w-lg'>Discover quality furniture, curated styles, and exceptional service at Our Store. We make furnishing your home easy and enjoyable.</p>
        <div className="mt-3 flex items-center  text-orange-500  dark:text-orange-500 ">
               <p className="text-lg font-bold cursor-pointer">More Info</p>               
               <button className="flex items-center space-x-1.5 text-2xl rounded-lg px-4 py-1.5">
               <i className="fa-solid fa-arrow-right"></i>
               </button>
             </div>
      </div>      
    </div>  

 
    </>
  )
}
