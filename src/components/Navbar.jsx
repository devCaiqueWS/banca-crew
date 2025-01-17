import React from 'react';
import './style/Navbar.css';
import logo from '../assets/logo.png';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Streetwear Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/lookbook">Lookbook</a></li>
        <li>
          <a href="/cart" className="cart-icon">
            <BsCart3 size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
