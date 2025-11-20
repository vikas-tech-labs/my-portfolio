import React from 'react';
import { html } from '../utils.js';

const Skills = () => {
    return html`
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="glass-card skill-category">
                        <h3>Cloud & Infrastructure</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Google Cloud (GCP)</span>
                            <span className="skill-tag">Azure</span>
                            <span className="skill-tag">Kubernetes (EKS, GKE)</span>
                            <span className="skill-tag">Docker</span>
                            <span className="skill-tag">Terraform</span>
                            <span className="skill-tag">NGINX</span>
                        </div>
                    </div>
                    <div className="glass-card skill-category">
                        <h3>Backend & API</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">.NET 6.0/8.0</span>
                            <span className="skill-tag">.NET Core</span>
                            <span className="skill-tag">C#</span>
                            <span className="skill-tag">ASP.NET</span>
                            <span className="skill-tag">Kafka</span>
                            <span className="skill-tag">RabbitMQ</span>
                            <span className="skill-tag">Entity Framework</span>
                        </div>
                    </div>
                    <div className="glass-card skill-category">
                        <h3>DevOps & Security</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">GitHub Actions</span>
                            <span className="skill-tag">CI/CD</span>
                            <span className="skill-tag">OAuth/Auth0</span>
                            <span className="skill-tag">JWT</span>
                            <span className="skill-tag">Datadog</span>
                            <span className="skill-tag">Veracode</span>
                        </div>
                    </div>
                    <div className="glass-card skill-category">
                        <h3>Architecture</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Microservices</span>
                            <span className="skill-tag">Event-Driven (EDA)</span>
                            <span className="skill-tag">Distributed Systems</span>
                            <span className="skill-tag">System Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Skills;
