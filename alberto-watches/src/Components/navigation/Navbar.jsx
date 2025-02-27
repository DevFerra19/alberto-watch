import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import "./navbar.css";
import Logo from "/logo.png";
import Log from "../CountLog.jsx/Log";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="visit-count">
            <Log />
        </div>

      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Navigation Menu */}
      <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <ul className="menu-list">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/technology" onClick={() => setMenuOpen(false)}>
              Technology
            </Link>
          </li>
          <li>
            <Link to="/store" onClick={() => setMenuOpen(false)}>
              Store Locator
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
