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
                    Staff Software Engineer | Distributed Systems & Cloud Architecture
                </h2>
                <p className="hero-description">
                    <span className="hero-highlight">
                    "A well-defined problem is half the solution"</span>.
                    <br/>
                    I design and build the platforms behind modern commerce, from checkout to the warehouse floor to the box on a customer's doorstep. I start with precise problem framing, make the architecture call, and stay hands-on to ship it.
                    <br/>
                    <span className="hero-stats">
                        18+ Years • 43% AWS Cost Reduction • 70% Fewer Inventory Mismatches • 25–30% Faster Picking
                    </span>
                </p>
                <div className="hero-buttons">
                    <a href="#work" className="btn">View My Work</a>
                    <a href="resume.pdf" target="_blank" className="btn btn-outline">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    `;
};

export default Hero;
