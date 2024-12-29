import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
  const location = useLocation(); // Get the current route path
  const { getTotalCartItems } = useContext(ShopContext);

  // Function to check if a menu item is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {isActive("/") ? <hr /> : null}
        </li>
        <li>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {isActive("/mens") ? <hr /> : null}
        </li>
        <li>
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {isActive("/womens") ? <hr /> : null}
        </li>
        <li>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kid
          </Link>
          {isActive("/kids") ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
