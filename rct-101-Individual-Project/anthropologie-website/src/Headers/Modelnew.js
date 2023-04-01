import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Checkbox,
  Input,
  FormLabel,
  Box,
  Spacer,
  Text,
  FormControl,
  Flex,
  Heading,
  border,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'



  import './Navbar.css';
import React, { useContext } from 'react';


import {AuthContext } from '../Context/Authcontext';


export function NewItem() {
const {setisAuth}=useContext(AuthContext)
    return (
      
      <Box className='Modalbox1' >
       <Menu isLazy>
  <MenuButton>New! Item list 12</MenuButton>

  <Flex>
  <MenuList style={{
   
    // border:'2px solid red',
    border:'none',
    width:'50%'
    ,marginTop:'6%',
    height:'50px'
    
  }}>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem >Shop By Categary</MenuItem>
    <div style={{width:'90%', border:'0.5px solid #BDBDBD'}}></div>
    <MenuItem>Accessaries</MenuItem>
    <MenuItem>Clothing</MenuItem>
    <MenuItem>Dresses</MenuItem>
    <MenuItem>Home % Furniture</MenuItem>
    <MenuItem>Jewelary</MenuItem>
    <MenuItem>Petites</MenuItem>
    <MenuItem>Plus</MenuItem>
    <MenuItem>Shop</MenuItem>
    <MenuItem>Wedding</MenuItem>
  </MenuList>
  
  <MenuList style={{
    
    // border:'2px solid red',
    border:'none',
    
    marginTop:'6%',
    marginLeft:'100%',
    width:'50%',height:'50px'
    
  }}>
  <MenuItem >Feachured</MenuItem>
  
  <div style={{width:'90%', border:'0.5px solid #BDBDBD'}}></div>
  <MenuItem onClick={()=>{alert('Hii Upendra')}}>Meave</MenuItem>
    <MenuItem>Good Americans</MenuItem>
    <MenuItem>Denimist</MenuItem>
    <MenuItem>Joe's Jeans</MenuItem>
    <MenuItem>Uncommon James</MenuItem>
  </MenuList>
  <MenuList style={{
    border:'none',
   
    // border:'2px solid red',
   
    marginTop:'2%',
    marginLeft:'80%',
    width:'50%'
    ,height:'50px'

  }}>
  <MenuItem > Disigner Spotline</MenuItem>
  <div style={{width:'90%', border:'1px solid #BDBDBD'}}></div>
  

    <MenuItem>Mother's Day Gift Shop</MenuItem>
    <MenuItem>Spring Occasion</MenuItem>
    <MenuItem>Paradise Prints</MenuItem>
    <MenuItem>Franisca Kaye</MenuItem>
    <MenuItem>Ellen Marchant</MenuItem>
    <MenuItem>Entertaining</MenuItem>
    <MenuItem>Tik-Tok Beauty Trends</MenuItem>
  </MenuList>
  </Flex>
</Menu>
      </Box>
    
    )
  }










  // Function for top Rated product

 export function Toprated() {
  return (
      
    <Box className='Modalbox1' >
     <Menu isLazy>
<MenuButton>Top-Rated</MenuButton>

<Flex>
<MenuList style={{
 
  border:'none',
  width:'50%'
  ,marginTop:'6%',
  height:'50px'
  
}}>
  {/* MenuItems are not rendered unless Menu is open */}
  <MenuItem >Shop By Categary</MenuItem>
  <div style={{width:'100%', border:'1px solid #BDBDBD'}}></div>
  <MenuItem>Shop All Top-Rated</MenuItem>
  <MenuItem>Top-Rated Dresses</MenuItem>
  <MenuItem>Top-Rated Clothing</MenuItem>
  <MenuItem>Home % Furniture</MenuItem>
  <MenuItem>Top-Rated Shoes</MenuItem>

</MenuList>

<MenuList style={{
  border:'none',
 
  // border:'2px solid red',
 
  marginTop:'9.5%',
  marginLeft:'80%',
  width:'50%'
  ,height:'50px'

}}>
<MenuItem ></MenuItem>
<div style={{width:'90%', border:'0.5px solid #BDBDBD'}}></div>


  <MenuItem>Top-Rated Accessories</MenuItem>
  <MenuItem>Top-Rated Wedding</MenuItem>
  <MenuItem>Top-Rated Home & Furniture</MenuItem>
  <MenuItem>Top-Rated Beuty</MenuItem>
  <MenuItem>Ellen Marchant</MenuItem>

</MenuList>
</Flex>
</Menu>
    </Box>
  
  )
  }





// Function for Dresses



export function Dresses() {
  return(
    
    <Box className='Modalbox1' >
    <Menu isLazy>
<MenuButton>Dresses</MenuButton>

<Flex>
<MenuList style={{
 border:'none',
 width:'50%'
 ,marginTop:'6%',
 height:'50px'
 
}}>
 {/* MenuItems are not rendered unless Menu is open */}
 
 <MenuItem >Shop By Categary</MenuItem>
 <div style={{width:'90%', border:'0.5px solid #BDBDBD'}}></div>
 <MenuItem>Shop All Dresses</MenuItem>
 <MenuItem>New! </MenuItem>
 <MenuItem>Top-Rated Dresses</MenuItem>
 <MenuItem>Formal Dresses</MenuItem>
 <MenuItem>Jumpsuits</MenuItem>
 <MenuItem>Long & Casual Dresses</MenuItem>
 <MenuItem>Midi Dresses</MenuItem>
 <MenuItem>Mini & Tunic Dresses</MenuItem>
 <MenuItem>Plus Dresses</MenuItem>
 <MenuItem>Wedding Dresses</MenuItem>
 <MenuItem>Wedding Guest Dresses</MenuItem>
</MenuList>

<MenuList style={{
 
 // border:'2px solid red',
 border:'none',
 
 marginTop:'6%',
 marginLeft:'95%',
 width:'50%',height:'50px'
 
}}>
<MenuItem >Feachured Shop</MenuItem>

<div style={{width:'90%', border:'0.5px solid #BDBDBD'}}></div>
<MenuItem onClick={()=>{alert('Hii Upendra')}}>Bold & Bright Dresses</MenuItem>
 <MenuItem>Shirt Dresses</MenuItem>
 <MenuItem>Trending: Tull & Sheer</MenuItem>
 <MenuItem>Little Black Dresses</MenuItem>
 <MenuItem>Little Whilte Dresses</MenuItem>
</MenuList>
<MenuList style={{
 border:'none',

 // border:'2px solid red',

 marginTop:'2%',
 marginLeft:'80%',
 width:'50%'
 ,height:'50px'

}}>
<MenuItem>What To Wear</MenuItem>
<div style={{width:'90%', border:'1px solid #BDBDBD'}}></div>


 <MenuItem>A Special Occasion</MenuItem>
 <MenuItem>Prom Dresses</MenuItem>
 <MenuItem>At-Work Style</MenuItem>
 <MenuItem>Vacation Ready</MenuItem>
 <MenuItem>Bridle Shower Chic</MenuItem>
 <MenuItem>Data Nights, Defined</MenuItem>

</MenuList>
</Flex>
</Menu>
   </Box>
  )
}




export function Signin() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {setname,setisAuth,setTocken,name,tocken}=useContext(AuthContext)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

const changehandle=(e)=>{
setTocken(e.target.value)
}
const changehandle2=(e)=>{
  setname(e.target.value)
}

console.log(tocken);

console.log(('up@gmail.com'.includes("(@"&&".com")&&tocken.length>8&&name.length>=4));
const clickLoginHandl=()=>{
  if((tocken.includes("(@"&&".com")&&tocken.length>8&&name.length>=4)){
    setisAuth(false)
  }
  else{
    alert('Please fill correct Infarmation')
  }
  onClose()
}




  return (
    <>
      <Button onClick={onOpen} >Sign In</Button>
      {/* <Button ml={4} ref={finalRef}>
      
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
            <FormControl mt={5}>
              <FormLabel>Email</FormLabel>
              <Input onChange={changehandle} value={tocken} ref={initialRef} placeholder='Email Id' />
            </FormControl>

           <FormControl>
              <FormLabel>Name</FormLabel>
              <Input onChange={changehandle2} value={name} ref={initialRef} placeholder='Name' />
            </FormControl> 
            
  <Checkbox size='md' mt={5} colorScheme='green'>
  Keep me signed in
  </Checkbox>

            <FormControl mt={4}>
          
          <Button onClick={clickLoginHandl} pt={2} width={400} pb={2} alignItems='center' colorScheme='blue'>SUBMIT</Button>
            </FormControl>

            <FormControl mt={4}>
          
          <Button  pt={2} width={400} pb={2}  alignItems='center' className='use-mobile'>USE MOBILE NUMBER INSTREAT</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* <Button  colorScheme='blue' mr={3}>
              Save
            </Button> */}
            <Button width={400} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}



// Mobile Number login

 function Mobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {setisAuth,setTocken, tocken}=useContext(AuthContext)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

const changehandle=(e)=>{

setTocken(e.target.value)
}

console.log(tocken);
const clickLoginHandl=()=>{

  onClose()
}

  return (
    <>
      <Button onClick={onOpen} >Sign In with Mobile Number</Button>
      {/* <Button ml={4} ref={finalRef}>
      
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
            <FormControl mt={5}>
              <FormLabel>Mobile Number</FormLabel>
              <Input onChange={changehandle} value={tocken} ref={initialRef} placeholder='Mobile Number' />
            </FormControl>

           <FormControl>
              <FormLabel>Name</FormLabel>
              <Input  ref={initialRef} placeholder='Name' />
            </FormControl> 
            
  <Checkbox size='md' mt={5} colorScheme='green'>
  Keep me signed in
  </Checkbox>

            <FormControl mt={4}>
          
          <Button pt={2} width={400} pb={2} alignItems='center' colorScheme='blue'>SUBMIT</Button>
            </FormControl>

            <FormControl mt={4}>
          
          <Button pt={2} width={400} pb={2} onClick={()=>{<Login />}} alignItems='center' className='use-mobile'>USE MOBILE NUMBER INSTREAT</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={clickLoginHandl} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}







export function Login() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {setname,setisAuth,setTocken,name, tocken}=useContext(AuthContext)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

const changehandle=(e)=>{
setTocken(e.target.value)
}
const changehandle2=(e)=>{
  setname(e.target.value)
}

console.log(tocken);

// console.log(('up@gmail.com'.includes("(@"&&".com")&&tocken.length>8&&name.length>=4));
const clickLoginHandl=()=>{
  if((tocken.includes("(@"&&".com")&&tocken.length>8&&name.length>=4)){
    setisAuth(false)
  }
  else{
    alert('Please fill correct Infarmation')
  }
  onClose()
}




  return (
    <>
      <Button onClick={onOpen} >Sign Up</Button>
      {/* <Button ml={4} ref={finalRef}>
      
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
            <FormControl mt={5}>
              <FormLabel>Email</FormLabel>
              <Input onChange={changehandle} value={tocken} ref={initialRef} placeholder='Email Id' />
            </FormControl>

           <FormControl>
              <FormLabel>Name</FormLabel>
              <Input onChange={changehandle2} value={name} ref={initialRef} placeholder='Name' />
            </FormControl> 
            
  <Checkbox size='md' mt={5} colorScheme='green'>
  Keep me signed in
  </Checkbox>

            <FormControl mt={4}>
          
          <Button onClick={clickLoginHandl} pt={2} width={400} pb={2} alignItems='center' colorScheme='blue'>SUBMIT</Button>
            </FormControl>

            <FormControl mt={4}>
          
          <Button  pt={2} width={400} pb={2}  alignItems='center' className='use-mobile'>USE MOBILE NUMBER INSTREAT</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* <Button  colorScheme='blue' mr={3}>
              Save
            </Button> */}
            <Button width={400} onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}