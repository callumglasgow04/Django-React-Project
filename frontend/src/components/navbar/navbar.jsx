import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Name</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Teams</a></li>
                <li><a href="/">Class</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Join</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;