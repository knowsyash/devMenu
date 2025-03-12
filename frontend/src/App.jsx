import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPop from './components/LoginPop/LoginPop'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (<>
  { showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
    </div>b
    <Footer/>
     </>
  )
}

export default App
