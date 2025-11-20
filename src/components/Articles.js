import React from 'react';
import { html } from '../utils.js';

const Articles = () => {
    const articles = [
        {
            title: "Building a Secure DevSecOps Pipeline on AWS",
            summary: "A comprehensive guide to implementing a secure CI/CD pipeline using Terraform, GitHub Actions, and Amazon Cognito.",
            link: "https://medium.com/@vikas_kulkarni/building-a-secure-devsecops-pipeline-on-aws-with-terraform-github-actions-and-cognito-17b0aeda292c",
            date: "Nov 2025",
            platform: "Medium",
            tags: ["AWS", "DevSecOps", "Terraform"]
        },
        // Placeholder for future articles
        {
            title: "Architecting for High Availability",
            summary: "Strategies for designing resilient distributed systems that can withstand regional failures and traffic spikes.",
            link: "#",
            date: "Coming Soon",
            platform: "Blog",
            tags: ["Architecture", "Cloud", "Resilience"]
        }
    ];

    return html`
        <section id="articles" className="section">
            <div className="container">
                <h2 className="section-title">Tech Articles</h2>
                <div className="grid">
                    ${articles.map(article => html`
                        <div className="glass-card article-card">
                            <div style=${{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <span className="tag">${article.platform}</span>
                                <span style=${{ color: '#888', fontSize: '0.9rem' }}>${article.date}</span>
                            </div>
                            <h3 style=${{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>
                                <a href=${article.link} target="_blank" style=${{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    ${article.title}
                                </a>
                            </h3>
                            <p style=${{ color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                ${article.summary}
                            </p>
                            <div style=${{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                ${article.tags.map(tag => html`
                                    <span style=${{
            fontSize: '0.8rem',
            padding: '0.2rem 0.8rem',
            borderRadius: '15px',
            background: 'rgba(255,255,255,0.05)',
            color: 'var(--accent-secondary)'
        }}>${tag}</span>
                                `)}
                            </div>
                            <a href=${article.link} target="_blank" className="btn" style=${{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                                Read Article →
                            </a>
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Articles;
