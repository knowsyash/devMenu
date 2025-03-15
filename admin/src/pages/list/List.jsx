import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';

const List = () => {
  const url = `http://localhost:4000`; // Backend URL
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      // console.log(response.data); // Debug API response
      setList(response.data.data);
    } catch (err) {
      console.error("Error fetching list:", err);
      alert("Error in fetching list");
    }
  };
  const removeFood = async(foodId)=>{
     const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
     await fetchList();
     if(response.data.success){
      alert("remove succefully")
     }
     else{
      alert("error")
     }

  }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      {/* Table Header */}
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>

      {/* Table Rows */}
      {list.length > 0 ? (
        list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <button  onClick={()=>removeFood(item._id)} className="delete-btn">❌</button>
          </div>
        ))
      ) : (
        <p className="no-data">No items found.</p>
      )}
    </div>
  );
};

export default List;
