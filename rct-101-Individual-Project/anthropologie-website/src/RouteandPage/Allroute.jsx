import { Routes,Route } from "react-router-dom"
import Usernavbar from "../Headers/Usernavbar"
import Navbar from "../Headers/Navbar"

// import Home from "../pages/Home"
// import Product from "../pages/Product"
// import User from "../pages/User"
import {AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
import { Allproduct } from "../Productpage/Allproduct";

export default function Allroute(){
const {isAuth}=useContext(AuthContext)
    return (
     <Routes>
      <Route path="/" element={isAuth? <Navbar />:<Usernavbar />}></Route>
      <Route path="/login" element={<Allproduct />}></Route>
      {/* <Route path= '/Contact' element={<Contact />}></Route> */}
      {/* <Route path="/User" element ={<User />}></Route> */}
      {/* <Route path="/Product" element ={<Product />}></Route> */}
     </Routes>
    )
}