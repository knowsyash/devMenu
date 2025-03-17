import React, { useState, useEffect, useContext } from 'react';
import './LoginPop.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";


const LoginPop = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);  // ✅ Extract setToken from context
  const [currentState, setCurrentState] = useState('Sign Up');

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value })); // ✅ Corrected state update
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      let newUrl = url;
      if (currentState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
      console.log("API Call:", newUrl);

      const response = await axios.post(newUrl, data);
      console.log("API Response:", response.data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message || "Login/Register failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Check console for details.");
    }
  };

  useEffect(() => {
    console.log("Form Data:", data);
  }, [data]);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-pop-inputs">
          {currentState === "Sign Up" && (
            <input name="name" placeholder="Your name here" value={data.name} onChange={onChangeHandler} type="text" required />
          )}
          <input type="email" name="email" placeholder="Email here" value={data.email} onChange={onChangeHandler} required />
          <input type="password" name="password" placeholder="Password here" value={data.password} onChange={onChangeHandler} required />
        </div>
        <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Log in"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree with the terms and conditions.</p>
        </div>
        {currentState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
