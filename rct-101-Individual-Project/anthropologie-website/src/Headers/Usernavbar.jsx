import {
  Stack,
  HStack,
  
  VStack,
  Box,
  StackDivider,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Grid,
  Select,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  SimpleGrid,
  Image,
  Link,
} from "@chakra-ui/react";


import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";
import "./Navbar.css";
import Product1 from "../db.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NewItem, Toprated, Dresses, Login, Signin } from "./Modelnew";

import { LandingPage } from "../Mainsection/Landing";
import { Navigate, useNavigate } from "react-router-dom";

export default function Usernavbar() {
  const{data2,name,setname,setisAuth}= useContext(AuthContext)

  const navigate=useNavigate()
  return (
    <div className="nav-bar">
   
      <div className="nav-top-box">
      <div >

      </div>

      <div className="nav-top-box-1">
      <div className="Lunguage-Icon">
            <FontAwesomeIcon icon={faGlobe} />
            <select style={{padding:'2px',outline:"none",border:'1px solid gray'}}>
            <option>English($)</option>
            <option>Hindi(H)</option>
            <option>French(F)</option>
            <option>Arabic(A)</option>
            <option>Russian(R)</option>
            <option>Spanish(S)</option>
          </select>
          </div>
          <div className="login-box" style={{display:'flex',alignItems:"center"}}>
          <div style={{fontSize:"20px"}}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div style={{display:"flex",gap:"10px"}}>
          <div color="gray.500" className="SignUp">
            {name}
           </div>
           <Text onClick={()=>{
                setname('');
                setisAuth(true)
                navigate('/')
        }} className="SignUp">Logout</Text>
           
        </div>
          </div>
      </div>

      </div>

{/* first nav end */}


{/* second nav start */}
<div className="fixing-nav">

      <div className="second-nav-box position">
  <div className="second-nav-item search">
  <p className="logo-name">ANTHROPOLOGIE</p>
            <br />
            <p className="logo-style">ANTHROPOLOGIE</p>
  </div>

  <div style={{display:"flex",gap:"12px"}}>
            <InputGroup size="sm" alignItems="center">
              <Input placeholder="Search anthologie" pt={4} pb={4} w={300} />
              <InputRightAddon
                padding={4}
                fontSize={25}
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            </InputGroup>
            <Box onClick={()=>navigate("/Cart")} className="cart-icon" p={6} fontSize={25}>
              <h1 style={{fontWeight:"600",fontSize:"25px",zIndex:"2",marginBottom:"-20px",marginTop:"0px",marginRight:"-30px"}}>{data2.length==0?"":data2.length}</h1>
              <FontAwesomeIcon icon={faCartShopping} />
            </Box>
          </div>
      </div>

{/* Second navbar End  */}

{/* Thired nav bar start */}

      <div  className="third-nav" style={{display:'flex',flexWrap:'wrap'}}>
    
      <Box className="third-nav-box" onClick={()=>navigate("/Product")}>
          New!
          </Box>
      <Box className="third-nav-box" onClick={()=>navigate("/Toprated")}>
            Top-Rared 
          </Box>
          <Box className="third-nav-box" onClick={()=>navigate('/Dresses')}>
           Dresses 
          </Box>
          <Box className="third-nav-box" onClick={()=>navigate('/Product')}>Clothing</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/Jewelry')}>Wedding</Box>
          <Box className="third-nav-box">Home & Furniture</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/Shoese')}>Shoese</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/Jewelry')}>Gift</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/Product')}>Sale</Box>
      </div>


      </div>

    </div>




       
  );
}
