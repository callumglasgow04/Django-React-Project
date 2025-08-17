import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
    const [ismobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
            <nav className="navbar">
                <h1>MindSpark</h1>
                {ismobile && (
                    <div>
                    <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars className="hamburger-icon" />
                    </button>
                    {menuOpen && (
                    <ul className="mobile-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Teams</a></li>
                        <li><a href="/">Class</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Join</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                )}
                </div>
            )}
                {!ismobile && (
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Teams</a></li>
                        <li><a href="/">Class</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Join</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                )}
            </nav>
    );
}
export default Navbar;