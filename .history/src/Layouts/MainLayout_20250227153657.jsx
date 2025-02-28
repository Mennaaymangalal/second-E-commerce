import React from 'react'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function MainLayout() {
  return (
    <>
    <NavbarComponent/> 
    
    <Footer/>     
    </>
  )
}
