// import { useNavigation } from "react-router-dom";
import "./Products.css";

import { useContext } from 'react';
import { AuthContext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

export function Buyproduct(){
    const {singleProduct}=useContext(AuthContext)
console.log(singleProduct);
    const navigate=useNavigate()

    return <div className="buy-box">
        <div className="buy-part">
            {/* Product Data Part */}
            <div className="product-data-box">
        <div className="Delivery-Options"> 
            <h1 style={{color:'black',fontSize:"15px",fontWeight:"600"}}>Basket</h1>
           <a href="#">Delivery Options</a>
        </div>


        <div className="Item-Quantity">
            <div className="Item"> 
                <p>Item</p>
            </div>
            <div className="Quantity">
                <p>Item Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
            </div>
        </div>

{/* render part start */}

<div className="img-box">
    <div className="all-product-details">
        <div className="main-img-box" >
            <img src="https://images.urbndata.com/is/image/Anthropologie/83181636_012_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540" alt="" />
        </div>

        <div className="item-detalis">
            <h6>Birkenstock Arizona EVA Sandals</h6>
            <p>Style # 66436783</p>
            <p>Color: GOLD</p>
            <p>Size 37</p>
        </div>
    </div>

    <div className="Quantity">
        <p>$ 50</p>
         <select style={{padding:"5px",height:"35px"}} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <p>$ 300</p>
    </div>
</div>






<div className="Discount">
 <div style={{width:"20%"}}></div>

 <div className="remove-box">
    <div>
        <p>Discounts Do Not Apply</p>
    </div>
    <div className="Remove">
    <button className='add-cart-btn'>Remove</button>
            <a href="#">
         Save for Late
            </a>
    </div>
    </div>

</div>

{/* Render part End */}



 <div>
    <div className="heading-manage">

    <h1 style={{color:'black'}}>Saved for Later</h1>
    </div>
    <div className="you-save">
        <p>Your saved for later is currently empty. Add items here that you like, but aren't ready to buy.</p>
    </div>
 </div>



            </div>


{/* Payment Part */}

            <div className="payment-part-box">
  <div className="order-samary">
    <h1 style={{color:'black',fontSize:"18px",fontWeight:"500"}}>Order Summary</h1>
    <p style={{color:'black',fontSize:"18px",fontWeight:"500"}}>
    800.309.2500
    </p>
  </div>

  <div className="pay-method">


<div className="mupliple-option">
    <p>  Subtotal</p>
    <p>$1,000.00</p>
</div>
<div className="mupliple-option">
<p>Shipping</p>
    <p>TBD</p>
</div>
<div className="mupliple-option">
<p>Estimated Tax</p>
    <p>$0.00</p>
</div>
<div className="mupliple-option">
<p style={{fontWeight:"500",fontSize:"16px"}}>Total</p>
<p style={{fontWeight:"500",fontSize:"16px"}}>$1,000.00</p>
</div>
  </div>
  <div style={{marginTop:"10px"}}>
    <p>Or 4 interest-free installments of $250.00 with</p>
  </div>
  <div style={{display:"flex",gap:"5px"}}>
    <p>Klarna </p>
    <p style={{fontSize:"14px"}}>or</p>
    <p>Afterpay </p>
  </div>
  <div className="pay-btn" style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
  <button onClick={()=>{navigate('/Payment')}} className='add-cart-btn'>PROCEED TO CHECKOUT</button>
  <button className='add-cart-btn'>PAY</button>
  </div>

            </div>
        </div>
     
    </div>
}