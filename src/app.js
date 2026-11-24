import React from 'react';
import { createRoot } from 'react-dom/client';
import { html } from './utils.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import BackgroundEffect from './components/BackgroundEffect.js?v=2';
import Articles from './components/Articles.js';
import Certifications from './components/Certifications.js';
import Projects from './components/Projects.js';
import Hobbies from './components/Hobbies.js';

const App = () => {
    return html`
        <${React.Fragment}>
            <${BackgroundEffect} />
            <${Header} />
            <${Hero} />
            <${About} />
            <${Projects} />
            <${Experience} />
            <${Skills} />
            <${Certifications} />
            <${Articles} />
            <${Hobbies} />
            <${Contact} />
        </${React.Fragment}>
    `;
};

const root = createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
