import React, { useState } from "react";
import "./HeroNavbar.css";
import { useNavigate } from "react-router-dom";

const HeroNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
  return (
    <div className="wrapper">
      <div className="main-hero">
        {/* Background Image */}
        <img src="bg.jpg" alt="" className="hero-bg" />

        {/* Top Header (Logo + Navbar + Hamburger) */}
        <div className="header">
          {/* Logo */}
          <div className="logo">
            <img src="logo-white.svg.png" alt="Logo" />
          </div>

          {/* Navbar */}
          <nav className={`navbar ${menuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                Home <img src="_after.png" alt="Dropdown" className="dropdown-icon" />
              </li>
              <li>
                Listings <img src="_after.png" alt="Dropdown" className="dropdown-icon" />
              </li>
              <li>
                Members <img src="_after.png" alt="Dropdown" className="dropdown-icon" />
              </li>
              <li>
                Blog <img src="_after.png" alt="Dropdown" className="dropdown-icon" />
              </li>
              <li>
                Pages <img src="_after.png" alt="Dropdown" className="dropdown-icon" />
              </li>
              <li>Contact</li>
            </ul>

            {/* Contact Info (Included in mobile menu) */}
            <div className="contact-info">
              <div className="phone-info">
                <img src="Vector.png" alt="Phone icon" />
                <span>+68 685 88666</span>
              </div>
              <div className="user-profile">
                <img src="107.png" alt="Profile" className="profile-img" />
              </div>
              <div className="add-property"
               onClick={() => navigate('/add-property')}>
                <span>Add Property</span>
              </div>
            </div>
          </nav>

          {/* Hamburger (Visible only on small devices) */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Button */}
        <div className="btn-2">
          <span>LET US GUIDE YOUR HOME</span>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h2 className="hero-heading">
            Discover a place you'll <br /> love to live
          </h2>
        </div>

        {/* Search Form */}
        <div className="form-item">
          <li style={{ listStyle: "none", textDecoration: "underline", width: "32px", height: "32px" }}>
            Sale
          </li>
          <li style={{ listStyle: "none", width: "32px", height: "32px" }}>
            Rent
          </li>
          <div className="search-form-inner">
            <input type="text" placeholder="Enter name Keywords..." />
            <img src="Button.png" alt="Search button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;