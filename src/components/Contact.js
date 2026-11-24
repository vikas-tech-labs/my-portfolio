import React from 'react';
import { html } from '../utils.js';

const Contact = () => {
    return html`
        <section id="contact" className="section">
            <div className="container contact-content">
                <h2 className="section-title">Get In Touch</h2>
                <p style=${{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Hiring for a Staff or Principal role, or want to talk distributed systems, commerce or logistics? Let's connect.
                </p>
                <div className="social-links" style=${{ flexDirection: 'column', gap: '1rem' }}>
                    <a href="mailto:vikas_kulkarni@hotmail.com" className="social-link" style=${{ fontSize: '1.5rem' }}>
                        vikas_kulkarni@hotmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/vikas-kulkarni-82802b57/" target="_blank" className="social-link" title="LinkedIn">
                        LinkedIn Profile
                    </a>
                    <a href="resume.pdf" target="_blank" className="social-link" title="Resume">
                        Download Resume (PDF)
                    </a>
                </div>
                <p style=${{ marginTop: '2rem', color: '#666' }}>
                    &copy; ${new Date().getFullYear()} Vikas Kulkarni. All rights reserved.
                </p>
            </div>
        </section>
    `;
};

export default Contact;
