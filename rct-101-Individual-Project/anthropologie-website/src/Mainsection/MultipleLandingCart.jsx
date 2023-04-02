import logo1 from '../Image/TopImagePoster1.jpg';
import logo2 from '../Image/Refarmation.jpg';
import image1 from '../Image/image1.jpg';
import image2 from '../Image/image2.jpg';
import image3 from '../Image/image3.jpg';
import image4 from '../Image/image4.jpg';
import motherimage1 from '../Image/Motherimage.jpg';
import motherimage2 from '../Image/Motherimage1.jpg';
import "./Landing.css";
import Product from "../db.json";
import { Link } from '@chakra-ui/react';

import { Navigate, useNavigate } from "react-router-dom";


export function TopPoster() {
  const navigate = useNavigate()

    return (
        <div>
        <div onClick={()=>navigate("/Product")} className='Poster1-Image'>
            <div className='Image-poster-1'>

            <img  src={logo1} alt="" />
            </div>
            <div onClick={()=>navigate("/Product")} className='Image-poster-2'>
            <img  src={logo2} alt="" />

            </div>
        </div>
        </div>
    )
}

export function ImagePoster(){
  
  const navigate = useNavigate()
  
    return <div>
        <div className='image-poster' style={{marginBottom:"30px"}}>
       
            <div onClick={()=>navigate("/Dresses")} className='image-poster-box' >
           
              <img src={image1} alt="" />
          <div style={{marginTop:"-50px"}}>
          <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Dresses</button>
       
          </div>
            </div>
            <div onClick={()=>navigate("/Product")} className='image-poster-box'><img src={image2} alt="" />
 <div style={{marginTop:"-50px"}}>
          <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop New Clothing</button>
          </div>
            </div>

            <div onClick={()=>navigate("/Jewelry")} className='image-poster-box'><img src={image3} alt="" />
 <div style={{marginTop:"-50px"}}>
          <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Jewelry</button>
          </div>
            </div>
            <div onClick={()=>navigate("/Product")} className='image-poster-box'><img src={image4} alt="" />
             <div style={{marginTop:"-50px"}}>
          <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Refrmation</button>
          </div>
            </div>
        </div>
    </div>
}

export function BigSmallPoster(){
    return   <div>
    <div className='big-image-poster' style={{marginBottom:"30px"}}>
        <div className='big-image-poster-box-1'><img src='https://images.ctfassets.net/5de70he6op10/1V3Atq484hyeMWCw1MVXas/12f900820a162ba443ed50c4fdfd42d3/484733140-ls_m3a.jpg?w=1756&q=80&fm=webp' alt="" />
      <div style={{marginTop:"-50px"}}>
      <button style={{padding:"1% 12%",backgroundColor:"white"}}>The Refarmation Shop</button>
      </div>
        </div>
        <div className='big-image-poster-box-2'><img src='https://images.ctfassets.net/5de70he6op10/3rKgQlzbypafdDTvNckO2q/193350ddf772ecfdc9c89ee5879ff993/484733144-ls_m3b.jpg?w=856&q=80&fm=webp' alt="" />
<div style={{marginTop:"-50px"}}>
      <button style={{padding:"2% 15%",backgroundColor:"white"}}>Shop Wedding</button>
      </div>
        </div> 
    </div>
</div>
}

export function MothersDayImage(){
    return  <div>
    <div className='mother-image-poster' style={{marginBottom:"30px"}}>
        <div className='image-poster-box'><img src={motherimage1} alt="" />
      <div style={{marginTop:"-50px"}}>
      <button style={{padding:"1% 12%",backgroundColor:"white"}}>Mother's Day Gift</button>
      </div>
        </div>
        <div className='image-poster-box'><img src={motherimage2} alt="" />
    <div style={{marginTop:"-50px"}}>
      <button style={{padding:"1% 12%",backgroundColor:"white"}}>Shop Wedding</button>
      </div>
        </div>
    </div>
    <div className='full-image'>
        <div>
  <img src="https://images.ctfassets.net/5de70he6op10/2XUxhNlu24HaHTFRAghRS3/f30d5364574fc72b718e910f087b2685/484733194-ls_m5a.jpg?w=2640&q=80&fm=webp" alt="" />
        </div>
        <div style={{marginTop:"-50px"}}>
      <button className='new-clothing-btn' style={{padding:"5px 4%",backgroundColor:"white"}}>Shop New Clothing</button>
      </div>
    </div>

    <div className='breaking-other-product-1'>
        <h1 style={{color:'black',fontWeight:'500'}}>Top-Rated Picks</h1>
        <a href="" style={{color:"#1E88E5"}}>Shop All</a>
    </div>
</div>
}
 
export function TopRatedPicks(){
  console.log('product',Product.Top_rated_picked);
  // const style1={

  // }
       return <div>
   <div className='top-rated-picked'>
    {Product.Top_rated_picked?.map((item)=>
    {
  return  <div key={item.id} className='top-rated-picked-box'>
  <div className='top-rated-picked-image'>
 <img src={item.image} alt="" />
  </div>
  <div className='top-rated-picked-details'>
 <h1 style={{color:'black'}}>{item.name}</h1>
 <p>{item.title}</p>
 <p>{item.star}</p>
 <p >{item.details}</p>
<div>
 <Link to ='/' style={{color:'blue'}}>Shop Now</Link>
</div>
  </div>
    </div>
    }
    ) 
  }
    </div>
    <div className='space-2'>
<h1 style={{color:"black" ,fontWeight:'500'}}>You May Also Like</h1>
    </div>
  </div>
}


export function MoretoExplore(){
  console.log('product',Product.Top_rated_picked);
  const style1={

  }
       return <div>
   <div className='top-rated-picked-2'>
    {Product.RecentlyViewed?.map((item)=>
    {
  return  <div key={item.id} className='top-rated-picked-box' style={{marginTop:"30px"}}>
  <div className='top-rated-picked-image-2'>
 <img src={item.image} alt="" />
  </div>
  <div className='top-rated-picked-details'>
 <h1 style={{color:'black'}}>{item.name}</h1>
 <p>{item.title}</p>
 <p>{item.star}</p>
 <p >{item.details}</p>
<div>
 <Link to ='/' style={{color:'blue'}}>Shop Now</Link>
</div>
  </div>
    </div>
    }
    ) 
  }
   </div>
 <div className='space-3'>

    </div>
  </div>
}