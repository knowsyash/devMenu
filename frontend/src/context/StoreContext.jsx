import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets"; // Ensure correct path

// Create Context
export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // ✅ Increase item count
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId] || prev[itemId] === 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 }; // ✅ Decrease item count
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = food_list.find((product) => product._id === itemId);
        
        if (itemInfo) {  // Ensure itemInfo is not undefined
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
  
    return totalAmount;
  };
  
  // Context value
  const contextValue = {
    food_list, // ✅ Providing the food list
    cartItems, // ✅ Providing the cart state
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use StoreContext
export const useStore = () => useContext(StoreContext);

export default StoreContextProvider;
