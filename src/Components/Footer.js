import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        {/* Quick Links */}
        <ul className="list-inline mb-3">
          <li className="list-inline-item">
            <Link to="/" className="text-light text-decoration-none">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/gallery" className="text-light text-decoration-none">Gallery</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contactus" className="text-light text-decoration-none">Contact Us</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/dashboard" className="text-light text-decoration-none">Dashboard</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/signup" className="text-light text-decoration-none">Sign Up</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/login" className="text-light text-decoration-none">Login</Link>
          </li>
        </ul>

        {/* Divider */}
        <hr className="border-light" />

        {/* Copyright */}
        <p className="mb-0">&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
