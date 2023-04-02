import { useNavigate } from "react-router-dom";
import "./Payment.css";
export function Payment(){

    const navigate=useNavigate()
    return <div className="main-container"> 
 <div className="Payment-Method">
   <div className="Creadit-Debit">
        <p id="heading">Credit/Debit Card</p>
    </div>

    <form action="" id="form-data">
        <input type="text" className="Card-name" id="Card-name" placeholder="Name on card" required />
 
        <p className="Sow-Error"></p>


<div id="Card-number-1" className="Card-number-1">
   


<div className="vallet">
    <input type="text" name="" id="cvv" className="cvv" placeholder="CVV" />

    <i className="fa-solid fa-wallet icon"></i>
</div>


</div>
<p className="Sow-Error2"></p>


<div className="Expiry-MM" id="Expiry-MM">
   
    <input type="text" className="Expiry-mm" id="Expiry-mm" placeholder="Expiry MM" required/>
    <input type="text" className="Expiry-mm" id="Expiry-YY" placeholder="Expiry YY" required/>
</div>
   
<div id="check-box" className="check-box">
    <input type="checkbox" name="" id="checkbox-inp" className="checkbox-inp"/>

<p className="sujession">Save card for future use</p>
</div>
</form>
<button id="btn-1" className="btn-1" onClick={()=>{navigate('/')}} >Pay $ 147</button>

</div>

<div class="upi" id="upi">


  <div id="Upi">
    <p class="upi-heading">UPI</p>
  </div>


  <div className="upi-option" id="upi-option-1" onclick="upi()">
    <img className="logo-img" src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1554965305_google-pay.png" alt="" />

<p>upi</p>
  </div>


  <div className="upi-option" id="upi-option-2" onclick="Google()">
    <img className="logo-img" src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1577193138_bhim-upi.png" alt="" />

<p> Payment UPI</p>
  </div>


  <div className="upi-option" id="upi-option-3" onclick="Payment()">
    <img className="logo-img" src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1558704583_paytmupi.png" alt="" />
 
    <p>Google Pay</p>
  </div>

</div>


<div id="cash-delivery" className="cash-delivery">
<div style={{marginBottom:"10px",padding:"8px"}} className="cash">
  <p className="cash-heading">Cash on Delivery</p>
</div>
<div className="Delivery">
  <i className="fa-solid fa-sack-dollar Cash"></i>
  <p>Pay on Delivery</p>
</div>
</div>





<div className="upi-box-popup" id="upi-popup">
<p className="your"></p>
<input type="text" name="" id="Upi-id" className="Upi-id" placeholder="eg.abc" />

<button id="btn-2" className="btn-2" onclick="remove()">PAY rs.175</button>

</div>


</div>
    
 
}