import React from 'react';
import { html } from '../utils.js';

const Experience = () => {
    return html`
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="role">Staff Software Engineer</div>
                        <div className="company">STORD INC. (formerly Pitney Bowes Inc.) | Austin, TX</div>
                        <div className="date">Sept 2024 – Present</div>
                        <p>Steering enterprise cloud and systems architecture through acquisitions. Automated CI/CD pipelines for .NET APIs on AWS ECS FARGATE. Led full-stack migration to Google Cloud, eliminating 99.9% of downtime. Decreased AWS cloud spending by 43% via resource auditing.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="role">Technical Lead / Solutions Architect</div>
                        <div className="company">PITNEY BOWES INC. | Austin, TX</div>
                        <div className="date">Aug 2020 – Sept 2024</div>
                        <p>Led architectural overhaul of legacy WMS systems. Migrated monoliths to EC2 and GKE-managed Kubernetes, lowering deployment time by 20%. Delivered unified Angular micro front-end platform. Declined warehouse pick time by 25-30% through logic redesign.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="role">Senior Consultant</div>
                        <div className="company">KFORCE (DELL) | Austin, TX</div>
                        <div className="date">Jan 2020 – Aug 2020</div>
                        <p>Re-architected core workflows in Dell Sales application using Angular and microservices. Built automated test suites to enhance CI/CD throughput.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="role">Technical Analyst/Lead</div>
                        <div className="company">MPHASIS CORPORATION (CHARLES SCHWAB) | Austin, TX</div>
                        <div className="date">Mar 2014 – Dec 2019</div>
                        <p>Modernized legacy platforms via microservices (.NET Core, Angular, EDA). Designed Schwab Equity Award platform. Shortened release cycles by 20% with automated Bamboo pipelines.</p>
                    </div>
                    <div className="timeline-item">
                        <div className="role">Senior Software Engineer</div>
                        <div className="company">HEXAWARE TECHNOLOGIES (ERNST & YOUNG) | India</div>
                        <div className="date">July 2010 – Feb 2014</div>
                        <p>Championed enterprise web systems. Upgraded VB/ASP.NET platforms with SSO and MVC frameworks.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Experience;
