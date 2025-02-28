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
   <Navbar onMenuOpenChange={setIsMenuOpen}>
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
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={"foreground"}
              to={item == "Home" ? "/" : "/"}
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
