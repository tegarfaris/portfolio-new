export function generateCVHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #fff;
    color: #1a1a18;
    font-size: 10.5pt;
    line-height: 1.55;
    padding: 32px 36px;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px;
    border-bottom: 3px solid #2d6a4f;
    margin-bottom: 22px;
  }
  .header-left h1 {
    font-family: 'Syne', sans-serif;
    font-size: 22pt;
    font-weight: 800;
    color: #1a1a18;
    letter-spacing: -0.5px;
    margin-bottom: 2px;
  }
  .header-left .title {
    font-family: 'Syne', sans-serif;
    font-size: 11pt;
    font-weight: 600;
    color: #2d6a4f;
    margin-bottom: 8px;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px 20px;
    font-size: 8.5pt;
    color: #5a5a52;
  }
  .contact-grid span { display: flex; align-items: center; gap: 4px; }
  .contact-grid a { color: #2d6a4f; text-decoration: none; }

  /* Section */
  .section { margin-bottom: 18px; }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 9.5pt;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2d6a4f;
    border-bottom: 1.5px solid #2d6a4f;
    padding-bottom: 3px;
    margin-bottom: 10px;
  }

  /* Summary */
  .summary p {
    font-size: 9.5pt;
    color: #3a3a32;
    line-height: 1.65;
  }

  /* Experience */
  .exp-item { margin-bottom: 14px; }
  .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px; }
  .exp-role { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 10.5pt; color: #1a1a18; }
  .exp-meta { font-size: 8pt; color: #8a8a7e; text-align: right; }
  .exp-company { font-size: 9.5pt; font-weight: 600; color: #2d6a4f; margin-bottom: 6px; }
  .exp-company span { font-weight: 400; color: #8a8a7e; font-style: italic; font-size: 8.5pt; }
  ul.bullets { padding-left: 0; list-style: none; }
  ul.bullets li {
    font-size: 9pt;
    color: #3a3a32;
    padding-left: 12px;
    position: relative;
    margin-bottom: 2px;
    line-height: 1.5;
  }
  ul.bullets li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #52b788;
    font-size: 7pt;
    top: 2px;
  }

  /* Skills grid */
  .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 24px; }
  .skill-group-label { font-size: 8pt; font-weight: 700; color: #8a8a7e; text-transform: uppercase; letter-spacing: 0.06em; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 3px; margin-top: 3px; }
  .skill-tag {
    font-size: 8pt;
    padding: 1px 8px;
    border-radius: 99px;
    background: #e8f5ee;
    color: #2d6a4f;
    border: 1px solid #b7dfc9;
    font-weight: 500;
  }

  /* Certs */
  .cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 20px; }
  .cert-item {}
  .cert-name { font-weight: 600; font-size: 9pt; color: #1a1a18; }
  .cert-sub { font-size: 8pt; color: #8a8a7e; }

  /* Two col layout for edu/org/lang */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .edu-item, .org-item { margin-bottom: 8px; }
  .edu-degree { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 10pt; color: #1a1a18; }
  .edu-school { font-size: 9pt; font-weight: 600; color: #2d6a4f; }
  .edu-period, .org-period { font-size: 8pt; color: #8a8a7e; }
  .edu-thesis { font-size: 8pt; color: #5a5a52; margin-top: 4px; font-style: italic; line-height: 1.5; }
  .org-name { font-weight: 600; font-size: 9.5pt; color: #1a1a18; }
  .org-role { font-size: 8.5pt; color: #2d6a4f; font-weight: 500; }
  .lang-item { display: flex; justify-content: space-between; font-size: 9pt; padding: 3px 0; border-bottom: 1px solid #ede9e2; }
  .lang-item:last-child { border-bottom: none; }

  /* Footer */
  .cv-footer {
    margin-top: 18px;
    padding-top: 10px;
    border-top: 1px solid #ede9e2;
    font-size: 7.5pt;
    color: #b0afa8;
    text-align: center;
  }
</style>
</head>
<body>

<!-- HEADER -->
<div class="header">
  <div class="header-left">
    <h1>Tegar Faris Nurhakim</h1>
    <div class="title">Frontend Developer</div>
    <div class="contact-grid">
      <span>📧 <a href="mailto:tegarfarisn@gmail.com">tegarfarisn@gmail.com</a></span>
      <span>💼 <a href="https://www.linkedin.com/in/tegarfarisn/">linkedin.com/in/tegarfarisn</a></span>
      <span>📍 Bandung, Indonesia</span>
      <span>🐙 <a href="https://github.com/tegarfaris">github.com/tegarfaris</a></span>
    </div>
  </div>
</div>

<!-- SUMMARY -->
<div class="section summary">
  <div class="section-title">Professional Summary</div>
  <p>With over 3.5 years of experience in Frontend Development, I specialize in JavaScript, particularly React.js and Next.js. I have contributed to diverse web projects, including Management, B2B, and B2C products. My adaptability and quick learning enable me to excel with various technologies and frameworks. I am eager to bring my passion for frontend excellence to new challenges and the ever-evolving field of web development.</p>
</div>

<!-- EXPERIENCE -->
<div class="section">
  <div class="section-title">Work Experience</div>

  <div class="exp-item">
    <div class="exp-header">
      <div class="exp-role">Frontend Developer</div>
      <div class="exp-meta">Oct 2025 – Present · Bandung</div>
    </div>
    <div class="exp-company">PT Jagoo IT <span>(Placement at PT Neuronworks)</span></div>
    <ul class="bullets">
      <li>Slicing Figma designs into pixel-perfect, responsive code</li>
      <li>Refactoring legacy/inherited codebase for better maintainability</li>
      <li>Leading the frontend team and conducting code reviews</li>
      <li>Setting up global component architecture and design system</li>
      <li>Redesigning key interfaces for improved UX</li>
      <li>Light backend involvement for fast data needs and bug fixes</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <div class="exp-role">Frontend Developer</div>
      <div class="exp-meta">Sep 2023 – Oct 2025 · Bandung</div>
    </div>
    <div class="exp-company">PT Dochek Bagi Indonesia <span>(wool)</span></div>
    <ul class="bullets">
      <li>Executed UI/UX design transformation to code using Next.js and TypeScript; enhanced page load speed by 40%</li>
      <li>Integration with REST API and Redux Toolkit for state management</li>
      <li>Created responsive, mobile-friendly interfaces for tablets and mobile</li>
      <li>Improved overall website performance by 30%</li>
      <li>Performed CI/CD deployment</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <div class="exp-role">Frontend Developer</div>
      <div class="exp-meta">Feb 2021 – Feb 2022 · Bandung</div>
    </div>
    <div class="exp-company">PT Padepokan Tujuh Sembilan <span>(IT Consultant)</span></div>
    <ul class="bullets">
      <li>Created views according to requirements and mockup designs from the UI/UX team</li>
      <li>Data integration using Axios and Postman for API management</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <div class="exp-role">Freelance Frontend Developer / Web Dev</div>
      <div class="exp-meta">Various Projects · Remote</div>
    </div>
    <ul class="bullets">
      <li>Developed company profile for PT. INKA (BUMN) using Next.js</li>
      <li>Created influencer marketing platform using Vue.js</li>
    </ul>
  </div>
</div>

<!-- SKILLS -->
<div class="section">
  <div class="section-title">Technical Skills</div>
  <div class="skills-grid">
    <div>
      <div class="skill-group-label">Core</div>
      <div class="skill-tags">
        <span class="skill-tag">HTML</span>
        <span class="skill-tag">CSS</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">TypeScript</span>
      </div>
    </div>
    <div>
      <div class="skill-group-label">Frameworks & Libraries</div>
      <div class="skill-tags">
        <span class="skill-tag">React.js</span>
        <span class="skill-tag">Next.js</span>
        <span class="skill-tag">Vue.js</span>
        <span class="skill-tag">Redux</span>
      </div>
    </div>
    <div style="margin-top:6px">
      <div class="skill-group-label">Tools</div>
      <div class="skill-tags">
        <span class="skill-tag">Git</span>
        <span class="skill-tag">GitHub</span>
      </div>
    </div>
    <div style="margin-top:6px">
      <div class="skill-group-label">Soft Skills</div>
      <div class="skill-tags">
        <span class="skill-tag">Scrum</span>
        <span class="skill-tag">Teamwork</span>
        <span class="skill-tag">Communication</span>
      </div>
    </div>
  </div>
</div>

<!-- CERTIFICATES -->
<div class="section">
  <div class="section-title">Certificates</div>
  <div class="cert-grid">
    <div class="cert-item">
      <div class="cert-name">Web Application Fundamentals with React</div>
      <div class="cert-sub">Dicoding Indonesia · 10/2023–10/2026 · #JLX1W4R45P72</div>
    </div>
    <div class="cert-item">
      <div class="cert-name">Build Web Applications with React</div>
      <div class="cert-sub">Dicoding · 07/2023–07/2026 · #EYX468Q5JPDL</div>
    </div>
    <div class="cert-item">
      <div class="cert-name">Web Programming Basics</div>
      <div class="cert-sub">Dicoding · 05/2023–05/2026 · #81P233O3NXOY</div>
    </div>
    <div class="cert-item">
      <div class="cert-name">TOEIC</div>
      <div class="cert-sub">ETS · 04/2023–04/2025 · Score: 455</div>
    </div>
  </div>
</div>

<!-- EDUCATION / ORGANIZATIONS / LANGUAGES -->
<div class="section">
  <div class="two-col">
    <div>
      <div class="section-title">Education</div>
      <div class="edu-item">
        <div class="edu-degree">D3 Informatics Engineering</div>
        <div class="edu-school">Politeknik Negeri Bandung (Politeknik ITB)</div>
        <div class="edu-period">Sep 2020 – Aug 2023</div>
        <div class="edu-thesis">Thesis: Making a Web-Based TifCareer Application as a Media Facilitator Between Applicants and Companies in the Employee Recruitment Process using React.js & Laravel</div>
      </div>
    </div>
    <div>
      <div class="section-title">Organizations</div>
      <div class="org-item">
        <div class="org-name">Paguyuban Mahasiswa Garut (PAMAGAR)</div>
        <div class="org-role">Vice Chairman</div>
        <div class="org-period">Aug 2021 – Nov 2022</div>
      </div>
      <div class="org-item" style="margin-top:8px">
        <div class="org-name">Himpunan Mahasiswa Komputer Politeknik Negeri Bandung</div>
        <div class="org-role">Expert Staff of Member Resource Development</div>
        <div class="org-period">Jan 2021 – Apr 2023</div>
      </div>
      <div style="margin-top:12px">
        <div class="section-title">Languages</div>
        <div class="lang-item"><span>Bahasa Indonesia</span><span style="color:#8a8a7e">Native / Bilingual</span></div>
        <div class="lang-item"><span>English</span><span style="color:#8a8a7e">Professional Working</span></div>
      </div>
    </div>
  </div>
</div>

<div class="cv-footer">Generated from tegarfaris.dev · tegarfarisn@gmail.com</div>

</body>
</html>`;
}
