import product from '../db.json'
import "./Products.css";
export function Allproduct(){
    let data=product.All_Product
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
        <p>{item.price}</p>
        <p>{item.rating==5?"★★★★★":item.rating==4?"★★★★":"★★★"}</p>
        <button className='add-cart-btn'>Add to cart</button>
       </div>
       </div>
        </div>
      }
      )}
        </div> 
       
    </div>
}