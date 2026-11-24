import React from 'react';
import { html } from '../utils.js';

const Certifications = () => {
    const certs = [
        {
            title: "AWS Certified Solutions Architect",
            level: "Associate",
            issuer: "Amazon Web Services",
            date: "Earned 2024",
            link: "https://www.credly.com/badges/9bc94e0f-c826-49ea-9892-834ed9195354/linked_in?t=sdthwe",
            color: "#FF9900",
            icon: html`<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS Logo" style=${{ width: '50px', height: '50px', filter: 'brightness(0) invert(1)' }} />`
        },
        {
            title: "Professional Cloud Architect",
            level: "Professional",
            issuer: "Google Cloud",
            date: "Earned 2024",
            link: "https://www.credly.com/badges/8fe15e77-134b-454a-81ba-ce621a0eb63e/linked_in?t=sem11k",
            color: "#4285F4",
            icon: html`<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP Logo" style=${{ width: '50px', height: '50px' }} />`
        }
    ];

    return html`
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="grid" style=${{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    ${certs.map(cert => html`
                        <div className="glass-card cert-card" style=${{
            borderLeft: `4px solid ${cert.color}`,
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
        }}>
                            <div style=${{
            fontSize: '2.5rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                                ${cert.icon}
                            </div>
                            <div>
                                <h3 style=${{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>
                                    ${cert.title}
                                </h3>
                                <div style=${{ color: '#aaa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                    ${cert.issuer} • <span style=${{ color: cert.color, fontWeight: '600' }}>${cert.level}</span> • ${cert.date}
                                </div>
                                <a href=${cert.link} target="_blank" className="btn-text" style=${{ color: cert.color, fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600' }}>
                                    View Credential →
                                </a>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Certifications;
