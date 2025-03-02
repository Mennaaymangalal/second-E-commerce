import React from 'react'

export default function Categories({product}) {
  return (
    <>
      {
         <article 
            
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

             <div className="mt-3 flex items-center  text-orange-500  dark:text-orange-500 ">
               <p className="text-lg font-bold">More Info</p>               
               <button className="flex items-center space-x-1.5 text-2xl rounded-lg px-4 py-1.5">
               <i className="fa-solid fa-arrow-right"></i>
               </button>
             </div>
           </div>
         </a>
       </article>
      }
    </>
  )
}
