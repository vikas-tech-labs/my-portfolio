# Vikas Kulkarni - Personal Portfolio

A modern, responsive personal portfolio website built with a "No-Build" React approach.

## 🚀 Features
- **Modern Design**: Dark theme with glassmorphism effects.
- **Interactive**: Custom "Antigravity" particle background with mouse interaction.
- **No-Build Architecture**: Uses ES Modules and `htm` to run React directly in the browser without a bundler (Webpack/Vite).
- **Responsive**: Fully optimized for desktop and mobile.

## 🛠️ Tech Stack
- **Frontend**: React, ReactDOM (via CDN)
- **Templating**: `htm` (Hyperscript Tagged Markup)
- **Styling**: Vanilla CSS (Variables, Flexbox, Grid)
- **Icons**: SVG & DevIcon CDN

## 🏃‍♂️ How to Run Locally
Since this project uses ES Modules, it requires a local HTTP server to run (opening `index.html` directly won't work due to CORS).

### Using Python (Pre-installed on Mac)
Run this command in the project directory:
```bash
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

## 📂 Project Structure
```
/
├── index.html          # Main entry point
├── styles.css          # Global styles and theme
├── src/
│   ├── app.js          # Main React App component
│   ├── utils.js        # Helper for 'htm' integration
│   └── components/     # Individual UI sections (Hero, About, etc.)
```

## 📄 License
MIT
