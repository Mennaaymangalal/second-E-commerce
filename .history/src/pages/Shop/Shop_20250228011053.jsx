import axios from 'axios'
import React, { useEffect } from 'react'

export default function Shop() {

  function getAllProduct(){
    axios.get("http://test-ecomerce.xn--hrt-w-ova.de/api/product/get",)
    .then(({data})=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{

    })
  }

  useEffect(()=>{
    getAllProduct()
  },[])

  return (
    <>
     <h1>Shop Component</h1> 
    </>
  )
}
