import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">

      {/* LEFT: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img
            src="/HHApurple.png"
            height="100"
            width="100"
            alt="Houston-Hair-Alchemy"
          />
        </Link>
      </div>

      {/* CENTER: Nav Links */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/other">Other</Link></li>
        </ul>
      </div>

      {/* RIGHT: Social / Booking */}
      <div className="navbar-right">
        <a href="https://www.instagram.com/houstonhairalchemy/?hl=en">
          <img src="/instadarkmagenta.png" height="75" width="75" alt="Instagram-Link" />
        </a>

        <a href="https://intheloop.glossgenius.com/services">
          <img src="/Bookhere.png" height="75" width="75" alt="In-the-loop-link" />
        </a>
      </div>

    </nav>
  );
}
