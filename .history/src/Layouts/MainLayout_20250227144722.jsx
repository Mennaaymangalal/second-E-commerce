import React from 'react'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <NavbarComponent/> 
    <Outlet/>     
    </>
  )
}
