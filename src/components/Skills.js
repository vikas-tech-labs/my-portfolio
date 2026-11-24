import React from 'react';
import { html } from '../utils.js';

const groups = [
    { title: "Languages", items: ["Python", "TypeScript", "C#", "Java", "SQL"] },
    { title: "Cloud & Serverless", items: ["AWS", "Google Cloud (GCP)", "Lambda", "Step Functions", "EventBridge", "Cloudflare Workers", "Kubernetes (EKS, GKE)", "Docker", "Terraform"] },
    { title: "Backend & Data", items: [".NET 8 / .NET Core", "Spring Boot", "REST & HMAC-signed APIs", "Kafka", "RabbitMQ", "Aurora MySQL", "PostgreSQL", "AlloyDB", "SQL Server", "MongoDB"] },
    { title: "Frontend & Commerce", items: ["Angular", "Preact", "Micro-frontends", "Shopify Checkout & UI Extensions"] },
    { title: "AI & LLM", items: ["Anthropic Claude", "Model Context Protocol (MCP)", "Natural-language-to-SQL", "AI Agents"] },
    { title: "Architecture & Practices", items: ["Distributed Systems", "Event-Driven Architecture", "Microservices", "System Design", "Edge APIs & Caching", "Cloud Cost Optimization"] },
    { title: "DevOps, Security & Observability", items: ["GitHub Actions", "CI/CD", "OAuth / Auth0", "JWT", "Datadog", "Dash0", "Grafana", "Veracode"] }
];

const Skills = () => {
    return html`
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    ${groups.map(g => html`
                        <div className="glass-card skill-category">
                            <h3>${g.title}</h3>
                            <div className="skill-tags">
                                ${g.items.map(i => html`<span className="skill-tag">${i}</span>`)}
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Skills;
