import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Spacer,
  Flex,
  Heading,
  border,
} from '@chakra-ui/react'

  import './Navbar.css';

export function NewItem() {

    return (
      
      <Box className='Modalbox1' >
       <Menu isLazy>
  <MenuButton>New!</MenuButton>

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

 // border:'2px solid red',
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
 marginLeft:'100%',
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