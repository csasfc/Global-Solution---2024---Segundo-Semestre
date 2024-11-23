import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaTachometerAlt,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <header className="header">
      <Link to="/" className="header-title">
        <FaHome className="icon" /> <h4>Home</h4>
      </Link>
      <nav>
        <ul className="nav-links">
          {isAuthenticated ? (
            <li>
              <Link to="/dashboard">
                <FaTachometerAlt className="icon" /> Dashboard
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/auth/login">
                  <FaSignInAlt className="icon" /> Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register">
                  <FaUserPlus className="icon" /> Faça Seu Registro
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
