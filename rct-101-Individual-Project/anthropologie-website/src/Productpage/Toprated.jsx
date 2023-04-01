import product from '../db.json'
import "./Products.css";
export function TopratedProduct(){
    let data=product.Top_rated_picked
    console.log(data);
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
        <button className='add-cart-btn'>Add to cart</button>
       </div>
       </div>
        </div>
      }
      )}
        </div> 
       
    </div>
}