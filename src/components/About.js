import React from 'react';
import { html } from '../utils.js';

const stats = [
    { value: '18+', label: 'Years Experience', color: 'var(--accent-secondary)' },
    { value: '43%', label: 'AWS Cost Reduction', color: 'var(--accent-primary)' },
    { value: '70%', label: 'Fewer Inventory Mismatches', color: 'var(--accent-secondary)' },
    { value: '60→7', label: 'Minutes per Parcel Audit Import', color: 'var(--accent-primary)' }
];

const About = () => {
    return html`
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="glass-card" style=${{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    <div className="about-intro">
                        <h3 style=${{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                            Building Commerce, Fulfillment & Logistics Platforms
                        </h3>
                        <p style=${{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#e0e0e0' }}>
                            I'm a <strong>Staff Software Engineer at Stord</strong> with <strong>18+ years</strong> in software engineering and architecture. I lead engineering teams across three products, Unbox, International Checkout and Shipment Protection, set architecture direction across 3–5 squads, and stay hands-on in Python, TypeScript, .NET and Java.
                        </p>
                        <p style=${{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#ccc' }}>
                            Before Stord, I led the modernization of Pitney Bowes' warehouse systems and worked side by side with warehouse teams to fix real problems on the floor. Earlier, I built trading and equity award platforms at Charles Schwab.
                        </p>
                        <p style=${{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                            <strong>How I work:</strong> I make the architecture call and then help build it. I write design docs people actually use, turn business problems into systems that hold up at peak, and grow engineers into tech leads.
                        </p>
                    </div>

                    <div className="stats-grid" style=${{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '1rem',
            borderTop: '1px solid var(--glass-border)',
            paddingTop: '2rem'
        }}>
                        ${stats.map(s => html`
                            <div className="stat-item" style=${{ textAlign: 'center' }}>
                                <div style=${{ fontSize: '2.5rem', fontWeight: '800', color: s.color }}>${s.value}</div>
                                <div style=${{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>${s.label}</div>
                            </div>
                        `)}
                    </div>

                </div>
            </div>
        </section>
    `;
};

export default About;
