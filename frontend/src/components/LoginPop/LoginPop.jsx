import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
const LoginPop = ({setShowLogin}) => {
 const [currentState,setcurrentState]=useState('Sign Up')
  return (
    <div  className='login-popup'>
          <form action="" className="login-popup-container">
            <div className="login-popup-title">
               <h2>{currentState}</h2>
               <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-pop-inputs">
                <input type="text" required />
                <input type="email" name="" id="" required/>
                <input type="password" />
            </div>
            
            <button>{currentState==="Sign Up"?"Create Account":"Log in"}</button>
            <div className="login-popup-condtion">
                <input type="checkbox" required name="" id="" />
                <p>By Continuing i am agree with this terms and condition</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new Account? <span onClick={()=>{setcurrentState("Sign Up")}}>Click Here</span></p>
            :<p>Already have an account <span onClick={()=>{setcurrentState("Login")}}>Login Here</span></p>} 

          </form>
    </div>
  )
}

export default LoginPop
