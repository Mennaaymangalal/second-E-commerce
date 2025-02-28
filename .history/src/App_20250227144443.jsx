import { HeroUIProvider } from '@heroui/react'
import './App.css'
import NavbarComponent from './components/Navbar/NavbarComponent'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home/Home'


function App() {

  createBrowserRouter([
    {path:'/' , element:<MainLayout/>, children:[
      {index:true , element:<Home/>},
      {path:'/login' , element:}
    ]}
  ])  

  return (
    <>
     <HeroUIProvider>
     <NavbarComponent/> 
     </HeroUIProvider>
     
    </>
  )
}

export default App
