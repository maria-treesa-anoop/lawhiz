import React, {useState} from "react";

import { Link, NavLink } from "react-router-dom"

import "./navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <nav>
            <Link to="/" className="title">LAW-WHIZ</Link>
            <div className="menu" onClick={() =>{setMenuOpen(!menuOpen);} }>
                
                <span></span>
                <span></span>
                <span></span>
                

            </div>
            <ul className={menuOpen ? "open" : ""}>
               <li><NavLink to="/about">About</NavLink></li>
               <li><NavLink to="/login">Login</NavLink></li>
               <li><NavLink to="/chatbot">Chatbot</NavLink></li>
               
            </ul>
        </nav>

     
    )
}

export default Navbar