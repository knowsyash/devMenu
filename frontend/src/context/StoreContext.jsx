import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // Ensure correct path
import axios from "axios";

// Create Context
export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token,setToken] = useState("")
  const [food_list,serFoodList]=useState([])
  const url = 'http://localhost:4000'
  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // ✅ Increase item count
    }));
  };
  const fetchFoodList = async ()=>{
    const response = await axios.get(url+"/api/food/list");
    serFoodList(response.data.data)
  }
  useEffect(()=>{
  
    async function loaddata() {

      await fetchFoodList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    loaddata()
  },[])

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
    getTotalCartAmount,
    url,
    token,
    setToken
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
