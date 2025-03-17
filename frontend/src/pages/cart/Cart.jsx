import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { food_list, cartItems, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart</h2>
      
      <div className="cart-table">
        {/* Table Header */}
        <div className="cart-header">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart Items */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-row">
                <img src={url+"/images/"+item.image} alt={item.name} className="cart-item-image" />
                <p>{item.name}</p>
                <p>₹{item.price.toFixed(2)}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{(item.price * cartItems[item._id]).toFixed(2)}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
  
        <div className="cart-total-deails">
          <b> Total</b>
          <b> {getTotalCartAmount()}</b>
        </div>
      </div>
      <button onClick={()=>{navigate('/placeOrder')}}>Procced to checkout</button>
    </div>
  );
}
