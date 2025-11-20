import React from 'react';
import { html } from '../utils.js';

const Hero = () => {
    return html`
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-tagline">
                    Code. Architecture. Leadership.
                </p>
                <h1>
                    Vikas Kulkarni 
                </h1>
                <h2 className="hero-subheading">
                    Hands-on Programmer | Technology Consultant | Problem Solver
                </h2>
                <p className="hero-description">
                    <span className="hero-highlight">
                    "A well-defined problem is half the solution"</span>. 
                    <br/>
                    This principle shapes my engineering approach—starting with precise problem framing, technical decomposition, and clear system objectives. With that foundation, complex challenges can be translated into scalable, resilient architectures supported by hands-on, production-grade engineering.
                    <br/>
                    <span className="hero-stats">
                        45% Cost Reduction • 99.9% Uptime • 3 Enterprise Migrations
                    </span>
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn">Get In Touch</a>
                    <a href="#experience" className="btn btn-outline">
                        View Experience
                    </a>
                </div>
            </div>
        </section>
    `;
};

export default Hero;
