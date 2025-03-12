import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <center><h2>Top Dishes</h2></center>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    // ✅ Correct If-Else usage inside map
                    if (category === 'All' || category === item.category) {
                        return (
                            <FoodItem 
                                key={item._id || index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price}  
                                image={item.image}
                            />
                        );
                    } 
                    return null; // Returns nothing if category doesn't match
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
