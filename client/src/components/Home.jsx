import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Home.css'; // Import the CSS file

const HomePage = () => {
    const handleLogout = () => {
        // Perform logout logic here
        console.log("Logout clicked"); // Example: Logging to the console
    }

    return (
        <div className="home-page">
            <nav>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
            <div className="welcome-text">
                <h1>Welcome</h1>
            </div>
        </div>
    );
}

export default HomePage;
