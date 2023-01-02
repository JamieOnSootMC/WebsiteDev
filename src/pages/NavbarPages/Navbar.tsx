import React from "react";
import "../../stylesheets/navbar.css";

function Navbar(){
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="about">About</a>
            <a href="info"> Info </a>
            <a href="contact">Contact</a>
        </div>

    );
}

export default Navbar;