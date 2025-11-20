import React from 'react';
import { html } from '../utils.js';

const BackgroundEffect = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Mouse state
        const mouse = { x: null, y: null, radius: 200 }; // Increased radius for better interaction

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 12 + 10; // Font size 10-22px
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                // System Design & Programming Glyphs:
                // {} = Code/API, </> = HTML/XML, 01 = Binary
                // ☁️ = Cloud, ⚙️ = Config/System, 🔒 = Security
                // 📦 = Microservices/Containers, 🔗 = Integration, ⚡ = Events
                // λ = Serverless/Functional, 🖥️ = Server
                this.characters = ['{ }', '</>', '01', '☁️', '⚙️', '🔒', '📦', '🔗', '⚡', 'λ', '🖥️', 'f(x)'];
                this.character = this.characters[Math.floor(Math.random() * this.characters.length)];
                this.color = Math.random() > 0.5 ? '#00f2ff' : '#7000ff'; // Cyan or Purple
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Mouse Interaction (Antigravity/Repulsion)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * 5; // Stronger force
                    const directionY = forceDirectionY * force * 5;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            draw() {
                // Calculate distance to mouse for visibility
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Only draw if within mouse radius (Flashlight effect)
                if (distance < mouse.radius) {
                    const opacity = 1 - (distance / mouse.radius); // Fade out towards edge

                    ctx.fillStyle = this.color;
                    ctx.font = `${this.size}px monospace`;
                    ctx.globalAlpha = opacity;
                    ctx.fillText(this.character, this.x, this.y);
                    ctx.globalAlpha = 1.0; // Reset
                }
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000; // High density for rich spotlight
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return html`
        <canvas 
            ref=${canvasRef} 
            style=${{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)'
        }}
        />
    `;
};

export default BackgroundEffect;
