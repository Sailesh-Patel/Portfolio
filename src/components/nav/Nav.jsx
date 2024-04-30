import React from 'react';
import './Nav.css';

function Nav() {

        function toggleMenu() {
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            menu.classList.toggle("open")
            icon.classList.toggle("open")
        }

    return (
        <div>
            <nav id="desktop-nav">
                <div className="logo">Sailesh Patel</div>
                <div >
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
            <div className="logo">Sailesh Patel</div>
            <div className="hamburger-menu">
                <div className="hamburger-icon" onClick={() => toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links">
                <li><a href="#about" onClick={() => toggleMenu()}>About</a></li>
                        <li><a href="#experience" onClick={() => toggleMenu()}>Experience</a></li>
                        <li><a href="#projects" onClick={() => toggleMenu()}>Project</a></li>
                        <li><a href="#contact" onClick={() => toggleMenu()}>Contact</a></li>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Nav
