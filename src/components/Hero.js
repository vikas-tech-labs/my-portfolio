import React from 'react';
import { html } from '../utils.js';

const Hero = () => {
    return html`
        <section id="home" className="hero">
            <div className="hero-content">
                <p style=${{ color: 'var(--accent-primary)', fontWeight: '600', letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    Code. Architecture. Leadership.
                </p>
                <h1 style=${{ fontSize: '4.5rem', marginBottom: '1rem' }}>
                    Vikas Kulkarni 000 
                </h1>
                <h2 style=${{ fontSize: '1.8rem', color: '#ccc', fontWeight: '300', marginBottom: '2rem' }}>
                    Hands-on Principal Programmer | Engineering Leader | Problem Solver
                </h2>
                <p style=${{ maxWidth: '800px', margin: '0 auto 2.5rem', color: '#e0e0e0', fontSize: '1.2rem', lineHeight: '1.6' }}>
                    I believe <span style=${{ color: '#00f2ff', fontWeight: '600', textShadow: '0 0 10px rgba(0, 242, 255, 0.3)' }}>a well-defined problem is half the solution</span>. I don't just design systems; I build them alongside my teams. Combining deep technical expertise with strategic leadership to turn ambiguous challenges into scalable, resilient software.
                    <br/>
                    <span style=${{ color: 'var(--accent-secondary)', fontSize: '1rem', marginTop: '1.5rem', display: 'block', fontWeight: '600' }}>
                        45% Cost Reduction • 99.9% Uptime • 3 Enterprise Migrations
                    </span>
                </p>
                <div style=${{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="#contact" className="btn">Get In Touch</a>
                    <a href="#experience" className="btn" style=${{ background: 'transparent', border: '2px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
                        View Experience
                    </a>
                </div>
            </div>
        </section>
    `;
};

export default Hero;
