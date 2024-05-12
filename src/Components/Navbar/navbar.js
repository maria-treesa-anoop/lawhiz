import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Check if the current route is the home page ("/")
    const isHomePage = location.pathname === "/home";
    const isLoginPage = location.pathname === "/login";
    const isSignupPage = location.pathname === "/signup";


    // Conditional rendering: show the navbar only if it's not the home page
    if (isHomePage) {
        return null;
    }
    if (isLoginPage) {
        return null;
    }
    if (isSignupPage) {
        return null;
    }

    return (
        <nav>
            <Link to="/" className="title">LAW-WHIZ</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/chatbot">Chatbot</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
