import React from 'react';
import { html } from '../utils.js';

const Header = () => {
    return html`
        <header>
            <div className="container">
                <nav>
                    <div className="logo">VK.</div>
                    <div className="nav-links">
                        <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                        <li><a href="#articles">Articles</a></li>
                        <li><a href="#contact" className="btn-small">Contact</a></li>
                    </ul></div>
                </nav>
            </div>
        </header>
    `;
};

export default Header;
