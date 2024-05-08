import React from "react";
import '../App.css'

const LandingPage = () => {
    return(
        // Navbar
        <div id="nav-main">
            <div id="nav">
                <div id="nav-part1">
                    <img src="https://i.pinimg.com/originals/a1/a1/db/a1a1db14e603b105074dfcf3c3fb970c.png" alt="Logo Image" />
                </div>
                <div id="nav-part2">
                    <h3>Menu</h3>
                    <h3>Location</h3>
                    <h3>About</h3>
                    <h3>Contack</h3>
                </div>
                <div id="nav-part3">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
};

export default LandingPage
