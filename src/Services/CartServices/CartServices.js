import axios from "axios";
import { Bounce, toast } from "react-toastify";
import Cookies from 'js-cookie'

export function addProductToCart(CountryId){   
    const token = Cookies.get("token");

    axios.post("https://test-ecomerce.xn--hrt-w-ova.de/api/cart/add-item",{
      item_id : CountryId,
      qty : 1,
    },{
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Fix: Correct Authorization format
        "Country-Id": CountryId,
        "Content-Type": "application/json", // ✅ Ensure JSON format
      },
    },{
      Authorization: Cookies.get("token") ,
    }).then(({data})=>{      
      if(data.isSuccessful == true){
        toast.success('Product Added Successfuly in you Cart', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        
      }       
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }