import React from 'react';
import { html } from '../utils.js';

const jobs = [
    {
        role: "Staff Software Engineer",
        company: "STORD INC. (formerly Pitney Bowes Inc.) | Austin, TX",
        date: "Sept 2024 – Present",
        summary: "Lead engineering teams of 4 across Stord's commerce products and set architecture direction across 3–5 squads, while staying hands-on in Python, TypeScript, .NET and Java.",
        points: [
            "Lead Stord Unbox, an event-driven Python platform on AWS (Lambda, Step Functions, EventBridge) for personalized insert campaigns. A core commerce product used by Stord's brand customers.",
            "Designed a centralized address validation API on Cloudflare Workers with a KV cache, replacing three separate integrations with a paid provider.",
            "Led International Checkout (duty and tax, HS code classification) and Shipment Protection on Shopify Checkout UI extensions and edge APIs.",
            "Cut AWS spend 43% across 12 services (40+ workloads) and migrated Pro-Pack Logistics' 7 apps to Google Cloud.",
            "Rebuilt a parcel audit system to cut imports from 60 to 7 minutes, and unified auth across 2 acquired systems on Auth0 (80% faster provisioning)."
        ]
    },
    {
        role: "Technical Lead / Solutions Architect",
        company: "PITNEY BOWES INC. | Austin, TX",
        date: "Aug 2020 – Sept 2024",
        summary: "Worked side by side with U.S. warehouse teams and led the modernization of legacy WMS systems across 3 agile teams.",
        points: [
            "Cut average warehouse pick time 25–30% by redesigning pick-path logic with item-frequency heatmaps.",
            "Built a Kafka-based CDC pipeline that cut inventory data mismatches 70% across 5 fulfillment hubs.",
            "Rebuilt the OMS as .NET Core microservices, cutting response time 45% and handling 35%+ peak volume.",
            "Migrated monoliths to EC2 and GKE-managed Kubernetes, cutting deployment time 20%, and delivered a unified Angular micro-frontend platform across 4 business units."
        ]
    },
    {
        role: "Senior Consultant",
        company: "KFORCE (DELL) | Austin, TX",
        date: "Jan 2020 – Aug 2020",
        summary: "Rebuilt core workflows in Dell's sales application with Angular and microservices, reducing page load times, and added automated test suites."
    },
    {
        role: "Technical Analyst/Lead",
        company: "MPHASIS CORPORATION (CHARLES SCHWAB) | Austin, TX",
        date: "Mar 2014 – Dec 2019",
        summary: "Modernized legacy Schwab platforms with microservices (.NET Core, Angular, event-driven). Designed the Schwab Equity Award platform, built a unified customer and agent interface that cut repeat complaints 54%, and shortened release cycles 20% with automated pipelines."
    },
    {
        role: "Senior Software Engineer",
        company: "HEXAWARE TECHNOLOGIES (ERNST & YOUNG) | India",
        date: "July 2010 – Feb 2014",
        summary: "Built enterprise web apps with AD/SSO and led a team of 3 automating finance and reporting workflows that replaced error-prone spreadsheets."
    },
    {
        role: "Software Engineer",
        company: "JOHN DEERE INDIA PVT LTD. | India",
        date: "Apr 2008 – June 2010",
        summary: "Wrote technical plans and user-flow blueprints for internal software tools and pilot deployments."
    }
];

const Experience = () => {
    return html`
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    ${jobs.map(j => html`
                        <div className="timeline-item">
                            <div className="role">${j.role}</div>
                            <div className="company">${j.company}</div>
                            <div className="date">${j.date}</div>
                            <p>${j.summary}</p>
                            ${j.points ? html`<ul className="timeline-points">${j.points.map(p => html`<li>${p}</li>`)}</ul>` : null}
                        </div>
                    `)}
                </div>
            </div>
        </section>
    `;
};

export default Experience;
