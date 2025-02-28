import { HeroUIProvider } from '@heroui/react'
import './App.css'
import NavbarComponent from './components/Navbar/NavbarComponent'
import { createBrowserRouter } from 'react-router-dom'


function App() {

  createBrowserRouter([
    {path:'/' , }
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
