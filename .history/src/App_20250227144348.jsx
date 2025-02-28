import { HeroUIProvider } from '@heroui/react'
import './App.css'
import NavbarComponent from './components/Navbar/NavbarComponent'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'


function App() {

  createBrowserRouter([
    {path:'/' , element:<MainLayout/>, children:[
      {index:true , element:<}
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
