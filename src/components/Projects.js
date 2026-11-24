import React from 'react';
import { html } from '../utils.js';

const caseStudies = [
    {
        title: "Stord Unbox: Personalized Inserts at Scale",
        org: "Stord · Current, team of 4",
        problem: "Brands wanted every shipped box to become a marketing channel: a printed card with the buyer's name, order details and a QR discount code that brings them back to buy again.",
        approach: "The OMS fans orders out to downstream services. Orders that match a live campaign flow into an event-driven pipeline on AWS Lambda, Step Functions and EventBridge. The WMS then triggers printing of the custom insert at label-print time on dedicated warehouse printers, and won't release a shipment that's missing its insert.",
        result: "One of Stord's top revenue products, with dashboards showing brands which campaigns drove repeat orders. Now extending it with Direct Insert: campaigns mailed to consumers without an order.",
        tech: ["Python", "AWS Lambda", "Step Functions", "EventBridge", "Aurora MySQL", "AWS IoT Core", "MQTT"]
    },
    {
        title: "Centralized Address Validation at the Edge",
        org: "Stord · Design lead",
        problem: "The OMS and parcel systems each called a paid address-validation provider with their own logic, and International Checkout needed a third integration.",
        approach: "Proposed and built one shared API on Cloudflare Workers with a KV cache. An address validated by any system is reused by every other one, and validated addresses are stored in AlloyDB so the API can later be offered as a platform service.",
        result: "One integration instead of three, and no paying twice for the same address.",
        tech: ["Cloudflare Workers", "Hono", "KV", "AlloyDB", "TypeScript"]
    },
    {
        title: "Real-Time Inventory Sync for a Legacy WMS",
        org: "Pitney Bowes",
        problem: "Inventory in a legacy WMS drifted out of sync with newer microservices, causing data mismatches across 5 fulfillment hubs.",
        approach: "Built a Kafka-based change-data-capture pipeline that streams WMS changes to microservices in real time and powers event-based warehouse orchestration.",
        result: "Cut inventory sync lag by 10 minutes and data mismatches by 70% across 5 fulfillment hubs.",
        tech: ["Kafka", "CDC", ".NET Core", "Microservices"]
    },
    {
        title: "Warehouse Pick-Path Redesign",
        org: "Pitney Bowes",
        problem: "After peak season, picking a single shipment took too long, and the next peak was a hard deadline.",
        approach: "Analyzed sales history to find the brand driving about 30% of volume and its fastest-moving products, then worked with the facility manager to move them closer to pack stations. Validated the change on retail orders and walked the floor with operators instead of waiting for peak.",
        result: "Cut average pick time by 25–30% and earned executive recognition for direct operational impact.",
        tech: ["Data analysis", "Warehouse operations", "WMS"]
    },
    {
        title: "International Checkout & Shipment Protection",
        org: "Stord · Teams of 4",
        problem: "Merchants on Shopify needed cross-border duty and tax at checkout, and shoppers needed an option to protect their shipments.",
        approach: "Built Shopify Checkout UI extensions (TypeScript, Preact) under the 64KB bundle limit, backed by HMAC-authenticated edge APIs. International Checkout adds brand-configurable duty and tax display and HS code classification. Shipment Protection prices coverage from cart line items and handles post-purchase claims.",
        result: "Merchants can sell internationally and offer shipment protection without leaving Shopify checkout.",
        tech: ["Shopify Extensions", "TypeScript", "Preact", "Cloudflare Workers", "HMAC"]
    },
    {
        title: "Parcel Audit Rebuild",
        org: "Stord",
        problem: "A legacy SQL Server parcel audit system took an hour per import and slowed revenue recovery.",
        approach: "Replaced cursor-based logic with set-based, concurrency-safe operations.",
        result: "Import time cut from 60 to 7 minutes (~88%), and parcel-level revenue recovery 40% faster on $750M+ in shipments.",
        tech: ["SQL Server", "T-SQL", "Performance tuning"]
    }
];

const sideProjects = [
    {
        title: "Natural-Language-to-SQL with MCP",
        description: "An MCP-based AI integration at Stord that lets people query operational data in SQL Server in plain English, exposed through governed interfaces.",
        tech: ["MCP", "LLM", "SQL Server"]
    },
    {
        title: "Personal AI Agents with Claude",
        description: "Agents and skills that run my day-to-day: inbox triage, scoring recruiter emails against my profile with draft replies I review before sending, and agent-to-agent (A2A) communication built from scratch in Python.",
        tech: ["Python", "Anthropic Claude", "Agents", "A2A"]
    },
    {
        title: "Local AI for Personal Email",
        description: "A local AI prototype that categorizes personal email by intent, so important messages don't get buried.",
        tech: ["Local LLM", "Python"]
    },
    {
        title: "Secure DevSecOps Pipeline on AWS",
        description: "A containerized .NET 8 API deployed to ECS Fargate with Terraform, GitHub Actions using AWS OIDC (no static credentials), Cognito authentication and KMS-encrypted images.",
        tech: ["Terraform", "ECS Fargate", "GitHub Actions", "Cognito"],
        link: "https://medium.com/@vikas_kulkarni/building-a-secure-devsecops-pipeline-on-aws-with-terraform-github-actions-and-cognito-17b0aeda292c"
    },
    {
        title: "Package Management API in Elixir",
        description: "A Phoenix/Elixir API with PostgreSQL, JWT auth, bulk inserts and transaction management, built to learn functional programming.",
        tech: ["Elixir", "Phoenix", "PostgreSQL"]
    }
];

const Tag = (t) => html`<span className="work-tag">${t}</span>`;

const Projects = () => {
    return html`
        <section id="work" className="section">
            <div className="container">
                <h2 className="section-title">Featured Work</h2>
                <div className="case-grid">
                    ${caseStudies.map(c => html`
                        <div className="glass-card case-card">
                            <div className="case-org">${c.org}</div>
                            <h3 className="case-title">${c.title}</h3>
                            <div className="case-row"><span className="case-label">Problem</span><p>${c.problem}</p></div>
                            <div className="case-row"><span className="case-label">Approach</span><p>${c.approach}</p></div>
                            <div className="case-row"><span className="case-label">Result</span><p className="case-result">${c.result}</p></div>
                            <div className="work-tags">${c.tech.map(Tag)}</div>
                        </div>
                    `)}
                </div>

                <h2 className="section-title" style=${{ marginTop: '5rem' }}>AI & Side Projects</h2>
                <div className="grid side-grid">
                    ${sideProjects.map(p => html`
                        <div className="glass-card project-card">
                            <h3 style=${{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--accent-primary)' }}>${p.title}</h3>
                            <p style=${{ color: '#ccc', marginBottom: '1.2rem', lineHeight: '1.6' }}>${p.description}</p>
                            <div className="work-tags">${p.tech.map(Tag)}</div>
                            ${p.link ? html`<a href=${p.link} target="_blank" className="btn-text" style=${{ color: 'var(--accent-primary)', fontWeight: '600', display: 'inline-block', marginTop: '1rem' }}>Read the write-up →</a>` : null}
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Projects;
