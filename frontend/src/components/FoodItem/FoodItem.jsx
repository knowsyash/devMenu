import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart,url } = useContext(StoreContext); // ✅ Get global cart state

  return (
    <div className='food-item'>
      <div className="food-item-container">
        <img className='food-item-image' src={url+"/images/"+image} alt={name} />

        <div className="food-item-controls">
          {cartItems[id] > 0 ? (  // ✅ Check if item is in the cart
            <div className="quantity-controls">
              <img 
                className="control-icon remove-icon" 
                onClick={() => removeFromCart(id)} 
                src={assets.remove_icon_red} 
                alt="Remove item" 
              />
              <span className="item-count">{cartItems[id]}</span>  
              <img 
                className="control-icon add-icon" 
                onClick={() => addToCart(id)} 
                src={assets.add_icon_white} 
                alt="Add item" 
              />
            </div>
          ) : (
            <img 
              className="add-icon" 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_white} 
              alt="Add item" 
            />
          )}
        </div>
      </div>

      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <div className="food-item-rating">
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
