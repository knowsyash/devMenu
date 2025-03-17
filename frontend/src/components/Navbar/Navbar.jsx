import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export default function Navbar({ setShowLogin }) {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate('/');
    };

    return (
        <div className='Navbar'>
            {/* Logo */}
            <Link to={'/'}> 
                <img src={assets.logo} alt="Logo" className="navbar-logo" />
            </Link>

            {/* Navbar Menu */}
            <ul className='navbar-menu'>
                <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>

            {/* Right Side (Search, Cart, Profile) */}
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" className="navbar-icon" />

                <div className="navbar-cart">
                    <Link to={'/cart'}>
                        <img src={assets.basket_icon} alt="Cart" className="navbar-icon" />
                    </Link>
                    {getTotalCartAmount() !== 0 && <div className='dot'></div>}
                </div>

                {!token ? (
                    <button className="sign-in-btn" onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="Profile" className="navbar-icon" />
                        <div className="nav-profile-dropdown">
                            <li> <img src={assets.profile_icon} alt="Profile" /> Profile</li>
                            <li> <img src={assets.bag_icon} alt="Orders" /> Orders</li>
                            <li onClick={logout}> <img src={assets.logout_icon} alt="Logout" /> Logout</li>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
