import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, 
  Button,
} from "@heroui/react";
import { NavLink } from "react-router-dom";
export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    
    const menuItems = [
      "Home",
      "Shop",      
    ];
  return (
    <>
   <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>          
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
       {menuItems.map((item , index)=>(
         <NavbarItem key={index}>      
         <NavLink color="foreground" to={item == "Home" ? "/" : "/" + item.toLowerCase()}>
         {item}
         </NavLink>              
        </NavbarItem>
         ))}     

      </NavbarContent>

      <NavbarContent justify="end">

        
      <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-800">
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {/* Light Mode Icon */}
        <svg
          className={`fill-violet-700 ${isDark ? "hidden" : "block"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>

        {/* Dark Mode Icon */}
        <svg
          className={`fill-yellow-500 ${isDark ? "block" : "hidden"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>


        <NavbarItem className="flex">
          <NavLink to="/login">Login</NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button  color="primary" href="#" variant="flat">
          <NavLink to="/register">
          Sign Up
          </NavLink>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem onClick={()=> setIsMenuOpen(false)} key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={"foreground"}
              to={item == "Home" ? "/" : "/" + item.toLowerCase()}
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>   
    </>
  )
}
