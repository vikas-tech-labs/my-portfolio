import React from 'react';
import { html } from '../utils.js';

const About = () => {
    return html`
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                
                <div className="glass-card" style=${{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    <div className="about-intro">
                        <h3 style=${{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                            Architecting the Future of Cloud Logistics
                        </h3>
                        <p style=${{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#e0e0e0' }}>
                            Building resilient systems requires more than just code; it demands clear vision and empowered teams. With over <strong>17 years</strong> of experience, I specialize in guiding engineering organizations through complex cloud transformations, turning legacy challenges into scalable opportunities.
                        </p>
                        <p style=${{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                            My focus is on aligning <strong>technical strategy</strong> with <strong>business goals</strong>. By fostering a culture of engineering excellence and automation, I help teams deliver high-velocity solutions—from slashing cloud costs by 45% to ensuring zero downtime during critical peaks. It's about creating platforms that enable the business to thrive.
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
                        <div className="stat-item" style=${{ textAlign: 'center' }}>
                            <div style=${{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-secondary)' }}>17+</div>
                            <div style=${{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years Experience</div>
                        </div>
                        <div className="stat-item" style=${{ textAlign: 'center' }}>
                            <div style=${{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-primary)' }}>3</div>
                            <div style=${{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cloud Migrations</div>
                        </div>
                        <div className="stat-item" style=${{ textAlign: 'center' }}>
                            <div style=${{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-secondary)' }}>45%</div>
                            <div style=${{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cost Reduction</div>
                        </div>
                        <div className="stat-item" style=${{ textAlign: 'center' }}>
                            <div style=${{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-primary)' }}>99.9%</div>
                            <div style=${{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Uptime Delivered</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
};

export default About;
