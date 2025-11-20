import React from 'react';
import { html } from '../utils.js';

const Projects = () => {
    const projects = [
        {
            title: "Cloud-Native Logistics Platform",
            description: "A microservices-based platform for real-time shipment tracking and inventory management. Built with .NET Core and Kubernetes.",
            tech: ["Kubernetes", ".NET Core", "Kafka", "React"],
            link: "#"
        },
        {
            title: "Serverless FinTech Dashboard",
            description: "Real-time financial analytics dashboard processing millions of transactions using AWS Lambda and DynamoDB.",
            tech: ["AWS Lambda", "DynamoDB", "TypeScript", "Next.js"],
            link: "#"
        },
        {
            title: "AI-Driven Security Auditor",
            description: "Automated tool that scans infrastructure as code (IaC) for security vulnerabilities using custom policy engines.",
            tech: ["Python", "Terraform", "OpenAI API"],
            link: "#"
        }
    ];

    return html`
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Personal Projects</h2>
                <div className="grid">
                    ${projects.map(project => html`
                        <div className="glass-card project-card">
                            <h3 style=${{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                                ${project.title}
                            </h3>
                            <p style=${{ color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                ${project.description}
                            </p>
                            <div style=${{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                ${project.tech.map(t => html`
                                    <span style=${{
            fontSize: '0.85rem',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            background: 'rgba(0, 242, 255, 0.1)',
            color: 'var(--accent-primary)',
            border: '1px solid rgba(0, 242, 255, 0.2)'
        }}>${t}</span>
                                `)}
                            </div>
                            <a href=${project.link} className="btn" style=${{ background: 'transparent', border: '1px solid var(--text-color)', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                                View Details
                            </a>
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Projects;
