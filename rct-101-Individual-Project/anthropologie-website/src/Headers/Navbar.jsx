import {
 
  Box,
  
  Input,
  InputGroup,
 
  InputRightAddon,
 
} from "@chakra-ui/react";


import "./Navbar.css";


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

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div className="nav-bar">
      {/* first nav start */}
      <div className="nav-top-box">
      <div >

      </div>

      <div className="nav-top-box-1">
      <div className="Lunguage-Icon">
            <FontAwesomeIcon icon={faGlobe} />
            <select style={{padding:'2px',outline:"none",border:'1px solid gray'}}>
            <option>English($)</option>
            {/* <option>Hindi(H)</option> */}
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
             <Signin />
           </div>
       <p
           color="gray.500"
            className="SignUp"
          >
           <Login />
          </p>
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
            <Box onClick={()=>navigate("/")} className="cart-icon" p={6} fontSize={25}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Box>
          </div>
      </div>

{/* Second navbar End  */}

{/* Thired nav bar start */}

      <div  className="third-nav" style={{display:'flex',flexWrap:'wrap'}}>
    
      <Box className="third-nav-box" onClick={()=>navigate("/")}>
          New!
          </Box>
      <Box className="third-nav-box" onClick={()=>navigate("/")}>
            Top-Rared 
          </Box>
          <Box className="third-nav-box" onClick={()=>navigate('/')}>
           Dresses 
          </Box>
          <Box className="third-nav-box" onClick={()=>navigate('/')}>Clothing</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/')}>Wedding</Box>
          <Box className="third-nav-box">Home & Furniture</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/')}>Shoese</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/')}>Gift</Box>
          <Box className="third-nav-box" onClick={()=>navigate('/')}>Sale</Box>
      </div>


      </div>

    </div>

  /*  <VStack>
      <Image  />
      <Flex
        alignItems="center"
        minWidth="max-content"
        gap="2"
        bg="gray.100"
        pr={5}
        pl={5}
        width="100%"
      >
         <Box></Box> 
       <Spacer />

        <Flex alignItems="center">
          <Box className="Lunguage-Icon">
            <FontAwesomeIcon icon={faGlobe} />
          </Box>
          <Select p={0}>
            <option>English($)</option>
            <option>Hindi(H)</option>
            <option>French(F)</option>
            <option>Arabic(A)</option>
            <option>Russian(R)</option>
            <option>Spanish(S)</option>
          </Select>
        </Flex>
        <Box>
          <FontAwesomeIcon icon={faUser} />
        </Box>
        <Flex gap={1}>
          <Box color="gray.500" className="SignUp">
             <Signin />
           </Box>
       <Text
           color="gray.500"
            className="SignUp"
          >
           <Login />
          </Text>
        </Flex>
      </Flex>



       Second Navbar Line 
      <Flex className="position">
        <Flex
          className="search"
          borderBottom="1px solid gray"
          alignItems="center"
          minWidth="max-content"
          gap="2"
          pr={5}
          pl={5}
     
        >
          <Flex gap={5}>
            <Box className="logo-name" onClick={()=>Navigate("/cart")}>ANTHROPOLOGIE</Box>
            <Spacer />
            <Box className="logo-style">ANTHROPOLOGIE</Box>
           
           </Flex>
          <Spacer />

          <Flex gap={6}>
            <InputGroup size="sm" alignItems="center">
              <Input placeholder="Search anthologie" p={6} />
              <InputRightAddon
                padding={6}
                fontSize={25}
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            </InputGroup>
            <Box style={{border:'1px solid red'}} className="cart-icon" p={6} fontSize={30}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Box>
          </Flex>
        </Flex> 




        Third Navbar Line 

         <SimpleGrid
          className="third-nav"
          minChildWidth="10%"
          minWidth="max-content"
          
        >
          <Box className="third-nav-box">
            <NewItem />
          </Box>
          <Box className="third-nav-box">
            <Toprated /> 
           <Login /> 
          </Box>
          <Box className="third-nav-box">
            <Dresses />
          </Box>
          <Box className="third-nav-box">Clothing</Box>
          <Box className="third-nav-box">Wedding</Box>
          <Box className="third-nav-box">Home & Furniture</Box>
          <Box className="third-nav-box">Beuty & Wellness</Box>
          <Box className="third-nav-box">Gift & Candles</Box>
          <Box className="third-nav-box">Sale</Box>
        </SimpleGrid>
      </Flex> 

 <LandingPage /> 
<Slider1 /> 
<SliderSpacer />
 <Slider2 /> 
 <SliderSpacer2 /> 
 <MoretoExplore /> 
 <Footer /> 
 <SimpleGrid> 
 {Product1.All_Product?.map((item)=><Box><Image src={item.image}></Image></Box>)}
 </SimpleGrid> 

  //  </VStack> */
  );
}
