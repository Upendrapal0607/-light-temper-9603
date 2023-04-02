import { Routes,Route } from "react-router-dom"
import Usernavbar from "../Headers/Usernavbar"
import Navbar from "../Headers/Navbar"


import {AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
import { Allproduct } from "../Productpage/Allproduct";
import { LandingPage } from "../Mainsection/Landing";
import { Cartpage } from "../Productpage/Cart";
import { TopratedProduct } from "../Productpage/Toprated";
import { Shoese } from "../Productpage/Shoese";
import { Belts } from "../Productpage/Belts";
import { Jewelry } from "../Productpage/Jewelary";
import { Newproduct } from "../Productpage/Newproduct";
// import { Dresses } from "../Headers/Modelnew";
import { Dresses2 } from "../Productpage/Dresses";
// import { Buyproduct } from "../Productpage/Buyproduct";
import { Payment } from "../Productpage/Paymentpage";
import { Buyproduct } from "../Productpage/Buyproduct";
// import { Toprated } from "../Headers/Modelnew";
// import { Toprated } from "../Headers/Modelnew";

export default function Allroute(){
const {isAuth}=useContext(AuthContext)
    return (
     <Routes>
      {/* <Route path="/" element={isAuth? <Navbar />:<Usernavbar />}></Route> */}
      <Route path="/" element={<LandingPage />}></Route>
      <Route path= '/Cart' element={<Cartpage />}></Route>
      <Route path= '/Belts' element={<Belts />}></Route>
      <Route path= '/Shoese' element={<Shoese />}></Route>
      <Route path= '/Jewelry' element={<Jewelry />}></Route>
      <Route path= '/Dresses' element={<Dresses2 />}></Route>
      <Route path= '/Newproduct' element={<Newproduct />}></Route>
    
      <Route path="/Product" element ={<Allproduct />}></Route>
      <Route path="/Toprated" element ={<TopratedProduct />}></Route>
      <Route path="/Buypage" element ={<Buyproduct />}></Route>
      <Route path="/Payment" element ={<Payment />}></Route>
     </Routes>
    )
}