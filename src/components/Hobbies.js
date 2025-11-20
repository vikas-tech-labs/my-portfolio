import React from 'react';
import { html } from '../utils.js';

const Hobbies = () => {
    const hobbies = [
        {
            icon: "📸",
            title: "Photography",
            desc: "Capturing landscapes and urban architecture. Exploring the world through a lens."
        },
        {
            icon: "🎵",
            title: "Music",
            desc: "Listening mostly but I can sing 🎤"
        }
    ];

    return html`
        <section id="hobbies" className="section">
            <div className="container">
                <h2 className="section-title">Beyond the Code</h2>
                <div className="grid" style=${{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    ${hobbies.map(hobby => html`
                        <div className="glass-card" style=${{ textAlign: 'center', padding: '2rem' }}>
                            <div style=${{ fontSize: '3rem', marginBottom: '1rem' }}>${hobby.icon}</div>
                            <h3 style=${{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>${hobby.title}</h3>
                            <p style=${{ color: '#aaa', fontSize: '0.9rem' }}>${hobby.desc}</p>
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Hobbies;
