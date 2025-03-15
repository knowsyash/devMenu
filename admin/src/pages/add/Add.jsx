import React, { useState } from 'react';
import './Add.css';
import upload_area from '../../assets/upload_area.png';
import axios from 'axios';

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (!image) {
      alert("Please upload an image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image); // Ensure only one image is appended

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(false);
        alert("Product added successfully!");
      } else {
        alert("Error adding product.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error! Please try again later.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="file-upload" className="image">
            <img src={image ? URL.createObjectURL(image) : upload_area} alt="Upload Area" />
          </label>
          <input 
            onChange={(e) => setImage(e.target.files[0])} 
            type="file" 
            id="file-upload" 
            className="hidden" 
            accept="image/*" 
            required 
          />

          <div className="add-product-name">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Enter product name" required />
          </div>

          <div className="add-product-description">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" placeholder="Enter product description" required></textarea>
          </div>

          <div className="add-category-price">
            <div className="add-category">
              <p>Product category</p>
              <select name="category" value={data.category} onChange={onChangeHandler}>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div className="add-price flex-col">
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="Enter price" required />
            </div>
          </div>

          <button type="submit" className="add-btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
