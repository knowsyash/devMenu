import React from 'react';
import './PlaceOrder.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="checkout-container" style={{ padding: "20px" }}>
      <h3>Delivery Information</h3>
      <div className="delivery-info">
        <input type="text" placeholder="First name" className="input-box" />
        <input type="text" placeholder="Last name" className="input-box" />
        <input type="email" placeholder="Email address" className="input-box" />
        <input type="text" placeholder="Street" className="input-box" />
        <input type="text" placeholder="City" className="input-box" />
        <input type="text" placeholder="State" className="input-box" />
        <input type="text" placeholder="Zip code" className="input-box" />
        <input type="text" placeholder="Country" className="input-box" />
        <input type="text" placeholder="Phone" className="input-box full-width" />
      </div>

      <h2 className="cart-totals">Cart Totals</h2>
      <div className="cart-summary">
        {/* <p>
          <span className="bold">Subtotal</span> 
          <span className="price">{getTotalCartAmount()}</span>
        </p> */}
      
        <p className="total">
          <span className="bold">Total</span> <span className="price">{getTotalCartAmount()}</span>
        </p>
      </div>

      <button className="payment-button">PROCEED TO PAYMENT</button>
    </div>
  );
}

export default PlaceOrder;
