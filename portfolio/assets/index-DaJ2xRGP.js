(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const c=` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-github-icon lucide-github"
>
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  <path d="M9 18c-4.51 2-5-2-7-2" />
</svg>`,o=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-mail-icon lucide-mail"
>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
</svg>`,l=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-linkedin-icon lucide-linkedin"
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
</svg>`,r=`<svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Brand" transform="translate(-672.000000, -0.000000)">
            <g id="telegram_line" transform="translate(672.000000, 0.000000)">
                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

</path>
                <path d="M21.8394,6.05639 C22.0315,4.8917 20.8652,3.97177 19.7773,4.42984 L2.67703,11.63 C1.48461,12.132 1.42351,13.8558 2.67788,14.3758 C3.60596,14.7605 5.02633,15.3246 6.45085,15.7943 C7.61932,16.1795 8.8931,16.5371 9.91353,16.6383 C10.1929,16.9725 10.5445,17.2935 10.9017,17.5872 C11.4487,18.0371 12.1074,18.5012 12.7873,18.9455 C14.1489,19.8352 15.6597,20.6865 16.678,21.2396 C17.8949,21.9006 19.3517,21.1395 19.5705,19.8131 L21.8394,6.05639 Z M4.59485,12.9925 L19.7186,6.62459 L17.6009,19.4649 C16.6024,18.9219 15.163,18.1087 13.8813,17.2713 C13.2329,16.8475 12.6407,16.4279 12.172,16.0425 C12.0051,15.9052 11.8638,15.7802 11.7461,15.6683 L15.7072,11.7071 C16.0977,11.3166 16.0977,10.6834 15.7072,10.2929 C15.3167,9.90237 14.6835,9.90237 14.293,10.2929 L9.95476,14.6311 C9.22132,14.5373 8.19888,14.2647 7.07709,13.8949 C6.21377,13.6102 5.34574,13.2869 4.59485,12.9925 Z" id="形状" fill="#09244B">

</path>
            </g>
        </g>
    </g>
</svg>`;document.querySelector("#app").innerHTML=`
  <div class="container">
    <!-- 0. Introduction Section -->
    <section class="section intro-section">
      <h1 class="name">Akgurban Jumayev</h1>
      <p class="title">Software Engineer</p>
      <p class="subtitle">Ashgabat, Turkmenistan</p>
      
      <div class="contact-info">
        <div class="contact-item">
          <span class="icon-wrapper">${o}</span>
          <a href="mailto:akgurbanjumayev@gmail.com">akgurbanjumayev@gmail.com</a>
        </div>
        <div class="contact-item">
          <span class="icon-wrapper">${r}</span>
          <a href="https://t.me/akgurban" target="_blank">t.me/akgurban</a>
        </div>
        <div class="contact-item">
          <span class="icon-wrapper">${c}</span>
          <a href="https://github.com/Akgurban" target="_blank">github.com/Akgurban</a>
        </div>
        <div class="contact-item">
          <span class="icon-wrapper">${l}</span>
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
