import product from '../db.json'
import "./Products.css";

import { AuthContext } from '../Context/Authcontext';
import { useContext } from 'react';

export function Dresses2(){
  const {data2,setData2}=useContext(AuthContext)

  let data=product.Dresses

const AddtoCartHandle=(Item)=>{
  console.log(Item);
  let flag=false
  if(data2.length!=0){
for(let i=0;i<data2.length;i++){
 if(Item.id==data2[i].id){
     flag=true
    }
   }
  
}
if(!flag){
console.log(flag);
  setData2([...data2,Item])
  alert('Product Added into cart')
}
else{
console.log(flag);
  alert("Product already added in Cart")
}
}


console.log(data2);


    return <div className="all-product">
    <div className="product-list">
      {data?.map((item)=>
      {
      return   <div key={item.id} >
       <div className='product-card'>
       <div>
           <img src={item.image} alt={item.name} />
       </div>
       <div>
        <h1 style={{color:"black"}}>{item.name}</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <p style={{color:"#455A64",fontSize:'15px', fontWeight:"500"}}>Price :</p>
         <p>{item.price}</p>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <p style={{color:"#455A64",fontSize:'15px', fontWeight:"500"}}>Rating :</p>
        <p>{item.rating==5?"★★★★★":item.rating==4?"★★★★":"★★★"}</p>
        
        </div>
        <p>{item.details}</p>
        <button onClick={()=>{AddtoCartHandle(item)}} className='add-cart-btn'>Add to cart</button>
       </div>
       </div>
        </div>
      }
      )}
        </div> 
       
    </div>
}