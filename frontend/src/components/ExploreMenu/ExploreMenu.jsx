import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu</p>
 
      {/* Scrollable Container */}
      <div className="explore-menu-list-container">
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div 
              key={index} 
              className={`explore-menu-list-item ${category === item.menu_name ? "active-item" : ""}`}
              onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)}
            >
              <img 
                className={category === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <hr />
    </div>
  );
}
