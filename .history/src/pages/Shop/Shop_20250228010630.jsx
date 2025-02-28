import axios from 'axios'
import React from 'react'

export default function Shop() {

  function getAllProduct(){
    axios.get("http://test-ecomerce.xn--hrt-w-ova.de/api/product/get")
    .then(({data})=>{
      console.log(data)
    }).catch((err)=>{
      console.lo
    })
  }

  return (
    <>
     <h1>Shop Component</h1> 
    </>
  )
}
