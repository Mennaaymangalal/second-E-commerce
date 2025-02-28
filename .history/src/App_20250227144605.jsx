import { HeroUIProvider } from '@heroui/react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


function App() {

  createBrowserRouter([
    {path:'/' , element:<MainLayout/>, children:[
      {index:true , element:<Home/>},
      {path:'/login' , element:<Login/>},
      {path:'/register' , element:<Register/>}
    ]}
  ])  

  return (
    <>
     <HeroUIProvider>
      <RouterProvider ></RouterProvider>    
     </HeroUIProvider>
     
    </>
  )
}

export default App
