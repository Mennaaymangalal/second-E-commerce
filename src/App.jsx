import { HeroUIProvider } from '@heroui/react'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Shop from './pages/Shop/Shop'


function App() {

 const router = createBrowserRouter([
    {path:'/' , element:<MainLayout/>, children:[
      {index:true , element:<Home/>},
      {path:'/shop' , element:<Shop/>},
      {path:'/login' , element:<Login/>},
      {path:'/register' , element:<Register/>}
    ]}
  ])  

  return (
    <>
     <HeroUIProvider>
      <RouterProvider router={router}></RouterProvider>    
     </HeroUIProvider>
     
    </>
  )
}

export default App
