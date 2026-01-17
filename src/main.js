import "./style.css";
import githubIcon from "./github.js";
import mailIcon from "./mail.js";
import linkedinIcon from "./linkedin.js";
import telegramIcon from "./telegram.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <!-- 0. Introduction Section -->
    <section class="section intro-section">
      <h1 class="name">Akgurban Jumayev</h1>
      <p class="title">Software Engineer</p>
      <p class="subtitle">Ashgabat, Turkmenistan</p>
      
      <div class="contact-info">
        <div class="contact-item">
          <span class="icon-wrapper">${mailIcon}</span>
          <a href="mailto:akgurbanjumayev@gmail.com">akgurbanjumayev@gmail.com</a>
        </div>
        <div class="contact-item">
          <span class="icon-wrapper">${telegramIcon}</span>
          <a href="https://t.me/akgurban" target="_blank">t.me/akgurban</a>
        </div>
        <div class="contact-item">
          <span class="icon-wrapper">${githubIcon}</span>
          <a href="https://github.com/Akgurban" target="_blank">github.com/Akgurban</a>
        </div>
        <div class="contact-item">
          <span class="icon-wrapper">${linkedinIcon}</span>
          <a href="https://www.linkedin.com/in/akgurban-jumayev-707859260/" target="_blank">linkedin.com/in/akgurban-jumayev</a>
        </div>
      </div>
    </section>

    <!-- 1. Known Languages Section -->
    <section class="section">
      <h2 class="section-title">Used Technologies</h2>
      <div class="skills-grid">
        <div class="skill-item">JavaScript</div>
        <div class="skill-item">TypeScript</div>
        <div class="skill-item">Vue.js</div>
        <div class="skill-item">Nuxt.js</div>
        <div class="skill-item">React.js</div>
        <div class="skill-item">Next.js</div>
        <div class="skill-item">Websocket</div>
        <div class="skill-item">Firebase</div>
        <div class="skill-item">Express.js</div>
        <div class="skill-item">Go</div>
        <div class="skill-item">Nginx</div>
        <div class="skill-item">Docker</div>
        <div class="skill-item">Git</div>
        <div class="skill-item">CI/CD</div>
        <div class="skill-item">SQL</div>
        <div class="skill-item">MongoDB</div>
        <div class="skill-item">Redis</div>
        <div class="skill-item">Minio</div>
      </div>
    </section>

    <!-- 2. Working Companies Section -->
    <section class="section">
      <h2 class="section-title">Working Companies</h2>
      <div class="companies-list">
        <div class="company-item">
          <img src="/salam.png" alt="Salam ES" class="company-logo">
          <div class="company-content">
            <h3 class="company-name">Salam ES</h3>
            <p class="company-role">Frontend Developer</p>
            <p class="company-description">Developed and maintained a comprehensive CRM system for the company. Implemented real-time communication features using WebSocket protocols with both Java and Go backend services. Integrated Firebase for secure authentication and database management. Managed application deployment and monitoring using PM2 process manager.</p>
            <p class="company-period">2022.06 - 2023.03</p>
          </div>
        </div>
        <div class="company-item">
          <img src="/belli.png" alt="Belli Creative" class="company-logo">
          <div class="company-content">
            <h3 class="company-name">Belli Creative</h3>
            <p class="company-role">Frontend Developer</p>
            <p class="company-description">Built and maintained multiple web applications including news portals and e-commerce platforms for the company. Containerized applications using Docker and orchestrated deployments with Kubernetes. Configured and managed Ubuntu servers, implemented performance optimizations, and reduced server load through efficient caching strategies and code optimization.</p>
            <p class="company-period">2023.03 - 2024.01</p>
          </div>
        </div>
        <div class="company-item">
          <img src="/onki.png" alt="Onki OÜ" class="company-logo">
          <div class="company-content">
            <h3 class="company-name">Onki OÜ</h3>
            <p class="company-role">Backend Developer</p>
            <p class="company-description">Developed scalable backend systems for game leaderboards using Go, handling high-traffic real-time score tracking and ranking. Designed and implemented secure payment processing systems with transaction management. Built OTP (One-Time Password) authentication systems and recommendation engines to enhance user engagement and platform functionality.</p>
            <p class="company-period">2024.01 - 2025.01</p>
          </div>
        </div>
        <div class="company-item">
          <img src="/setir.jpeg" alt="Setir Technology" class="company-logo">
          <div class="company-content">
            <h3 class="company-name">Setir Technology</h3>
            <p class="company-role">Fullstack Developer/Team Lead</p>
            <p class="company-description">Leading technical initiatives focused on code quality improvement and architecture optimization. Analyzing codebases to identify and implement best practices. Working across the full stack with clean architecture principles, developing scalable backend services, responsive frontend applications, and efficient database solutions.</p>
            <p class="company-period">2025.01 - Present</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Achievements</h2>
      <div class="achievements-list">
        <div class="achievement-item">
          <div class="achievement-icon">🥉</div>
          <div class="achievement-content">
            <h3 class="achievement-name">2021 Iranian Geometry Olympiad Bronze Medal</h3>
          </div>
        </div>
        <div class="achievement-item">
          <div class="achievement-icon">🏆</div>
          <div class="achievement-content">
            <h3 class="achievement-name">2021 National Math Olympiad 3rd place</h3>
          </div>
        </div>
        <div class="achievement-item">
          <div class="achievement-icon">⭐</div>
          <div class="achievement-content">
            <h3 class="achievement-name">2020 International Mathematical Olympiad Honorable Mention</h3>
          </div>
        </div>
        <div class="achievement-item">
          <div class="achievement-icon">🥈</div>
          <div class="achievement-content">
            <h3 class="achievement-name">2020 National Math Olympiad 2nd place</h3>
          </div>
        </div>
      </div>
    </section>
    
  </div>
`;
