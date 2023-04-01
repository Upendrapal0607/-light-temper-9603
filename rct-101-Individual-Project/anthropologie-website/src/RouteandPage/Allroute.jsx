import { Routes,Route } from "react-router-dom"
import Usernavbar from "../Headers/Usernavbar"
import Navbar from "../Headers/Navbar"


import {AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
import { Allproduct } from "../Productpage/Allproduct";
import { LandingPage } from "../Mainsection/Landing";
import { Cartpage } from "../Productpage/Cart";
import { TopratedProduct } from "../Productpage/Toprated";
// import { Toprated } from "../Headers/Modelnew";
// import { Toprated } from "../Headers/Modelnew";

export default function Allroute(){
const {isAuth}=useContext(AuthContext)
    return (
     <Routes>
      {/* <Route path="/" element={isAuth? <Navbar />:<Usernavbar />}></Route> */}
      <Route path="/" element={<LandingPage />}></Route>
      <Route path= '/Cart' element={<Cartpage />}></Route>
      {/* <Route path="/User" element ={<User />}></Route> */}
      <Route path="/Product" element ={<Allproduct />}></Route>
      <Route path="/Toprated" element ={<TopratedProduct />}></Route>
     </Routes>
    )
}