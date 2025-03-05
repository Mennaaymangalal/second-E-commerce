import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function Cart() {
    const [cartId ,setCartId] = useState(null)
    const [cartItem , setCartItem] = useState(null)
    const [cartDate , setCartData] = useState([])

    useEffect(()=>{
        getCartItems()
    },[])
    function getCartItems(){
        const token = Cookies.get("token");
        axios.get("https://test-ecomerce.xn--hrt-w-ova.de/api/cart/items",{
            headers: {
                Authorization: `Bearer ${token}`, // ✅ Fix: Correct Authorization format
                "Country-Id": 1,
                "Content-Type": "application/json", // ✅ Ensure JSON format
              },
        }) .then(({ data }) => {
            if (data.data && data.data.cart_items) {
                setCartItem(data.data.cart_items); // ✅ Set the array correctly
                
                // ✅ If cart_items is an array, get first item ID
                if (Array.isArray(data.data.cart_items) && data.data.cart_items.length > 0) {
                    setCartId(data.data.cart_items[0].id);
                }

                setCartData(data.data); // ✅ Store the whole cart data
                // console.log("Cart Data:", data.data);
                console.log("Cart Items:", data.data.cart_items);
                // console.log("First Cart Item ID:", data.data.cart_items[0]?.id); // ✅ Safely accessing first item's ID
            } else {
                console.warn("Cart is empty or API response is incorrect.");
            }
        })
        .catch((err) => {
            console.error("Error fetching cart items:", err.response?.data || err.message);
        });
    }

    if(cartItem == 0){
        return <h1 className='text-center text-3xl font-bold py-10'>No Product In Your Cart</h1>
    } 
  return (
    <>
    <div className="container text-gray-900 dark:text-white min-h-screen">
      <section className="py-24 relative">
       
       
            <div  className="w-full max-w-6xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center">
              Shopping Cart 
            </h2>
  
          {
            cartItem?.map((product , index)=>(
                <div key={index} className="">
              {/* First Product */}
              <div className="rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
              <div className="col-span-12 lg:col-span-2">
                <img
                  src="https://pagedone.io/asset/uploads/1701162826.png"
                  alt="Round white portable speaker"
                  className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-10 w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9">{product.name}</h5>
                  
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 dark:text-gray-300 mb-6">
                 About The Chair                 
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                  <i className="fa-solid fa-trash text-2xl"></i>
                    <button className="group rounded-full border border-gray-200 dark:border-gray-600 p-2.5 flex items-center justify-center bg-white dark:bg-gray-700 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <svg className="stroke-gray-900 dark:stroke-white transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    <input type="text" className="border border-gray-200 dark:border-gray-600 rounded-full w-10 aspect-square outline-none text-gray-900 dark:text-white font-semibold text-sm py-1.5 px-3 bg-gray-100 dark:bg-gray-700 text-center" placeholder="2" />
                    <button className="group rounded-full border border-gray-200 dark:border-gray-600 p-2.5 flex items-center justify-center bg-white dark:bg-gray-700 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <svg className="stroke-gray-900 dark:stroke-white transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <h6 className=" text-black dark:text-white font-semibold text-2xl leading-9 text-right">${product.price}</h6>
                </div>
              </div>
            </div>       
          </div>
            ))
          }
          <div className="border-b-2 my-6 border-gray-500"></div>

              {/* Subtotal Section */}
              <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6  max-lg:max-w-lg max-lg:mx-auto">
              <h5 className="font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">Total</h5>
              <div className="flex items-center justify-between gap-5">              
                <h6 className="font-manrope font-semibold text-2xl lead-10 text-black dark:text-white ">$440</h6>
              </div>
            </div>
  
            {/* Checkout Section */}
            <div className="max-lg:max-w-lg max-lg:mx-auto">           
              <button className="rounded-full py-3 px-6 bg-orange-500 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-orange-400">Place Order</button>
            </div>

          
          </div>
     
      </section>
    </div> 
    </>
  )
}
