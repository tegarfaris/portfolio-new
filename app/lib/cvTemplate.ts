import {
  certificates,
  education,
  languages,
  organizations,
  personalInfo,
  skills,
  workExperiences,
} from "@/app/lib/data";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const groupedSkills = {
  Core: skills
    .filter((skill) => skill.category === "core")
    .map((skill) => skill.name),
  "Frameworks and Libraries": skills
    .filter((skill) => skill.category === "framework")
    .map((skill) => skill.name),
  Tools: skills
    .filter((skill) => skill.category === "tools")
    .map((skill) => skill.name),
  "Soft Skills": skills
    .filter((skill) => skill.category === "soft")
    .map((skill) => skill.name),
};

export function generateCVHTML(): string {
  const experienceHTML = workExperiences
    .map(
      (experience) => `
      <div class="entry">
        <div class="entry-header">
          <div>
            <div class="entry-title">${escapeHtml(experience.role)}</div>
            <div class="entry-subtitle">${escapeHtml(experience.company)}${
              experience.companyNote
                ? `, ${escapeHtml(experience.companyNote)}`
                : ""
            }</div>
          </div>
          <div class="entry-meta">${escapeHtml(experience.period)} | ${escapeHtml(
            experience.location,
          )}</div>
        </div>
        <ul>
          ${experience.responsibilities
            .map((responsibility) => `<li>${escapeHtml(responsibility)}</li>`)
            .join("")}
        </ul>
      </div>`,
    )
    .join("");

  const skillsHTML = Object.entries(groupedSkills)
    .map(
      ([label, values]) => `
      <p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(values.join(", "))}</p>`,
    )
    .join("");

  const certificatesHTML = certificates
    .map(
      (certificate) => `
      <div class="entry compact-entry">
        <div class="entry-title small">${escapeHtml(certificate.name)}</div>
        <div class="entry-subtitle">${escapeHtml(certificate.issuer)} | ${escapeHtml(
          certificate.period,
        )} | ${escapeHtml(certificate.certNo)}</div>
      </div>`,
    )
    .join("");

  const educationHTML = education
    .map(
      (item) => `
      <div class="entry compact-entry">
        <div class="entry-header">
          <div>
            <div class="entry-title small">${escapeHtml(item.degree)}</div>
            <div class="entry-subtitle">${escapeHtml(item.institution)}</div>
          </div>
          <div class="entry-meta">${escapeHtml(item.period)}</div>
        </div>
        <p>${escapeHtml(item.thesis)}</p>
      </div>`,
    )
    .join("");

  const organizationsHTML = organizations
    .map(
      (organization) => `
      <div class="entry compact-entry">
        <div class="entry-header">
          <div>
            <div class="entry-title small">${escapeHtml(organization.name)}</div>
            <div class="entry-subtitle">${escapeHtml(organization.role)}</div>
          </div>
          <div class="entry-meta">${escapeHtml(organization.period)}</div>
        </div>
      </div>`,
    )
    .join("");

  const languagesHTML = languages
    .map(
      (language) =>
        `<p><strong>${escapeHtml(language.name)}:</strong> ${escapeHtml(language.level)}</p>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(personalInfo.name)} - CV</title>
<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 28px 32px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10.5pt;
    line-height: 1.45;
    color: #111111;
    background: #ffffff;
  }

  h1 {
    font-size: 20pt;
    margin: 0 0 4px;
    font-weight: 700;
  }

  .headline {
    font-size: 11pt;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .contact {
    font-size: 9pt;
    margin-bottom: 18px;
  }

  .contact a {
    color: #111111;
    text-decoration: none;
  }

  .section {
    margin-bottom: 16px;
  }

  .section-title {
    font-size: 10pt;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #111111;
    padding-bottom: 4px;
    margin-bottom: 8px;
    letter-spacing: 0.04em;
  }

  .entry {
    margin-bottom: 10px;
  }

  .compact-entry {
    margin-bottom: 8px;
  }

  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 4px;
  }

  .entry-title {
    font-weight: 700;
    font-size: 10pt;
  }

  .entry-title.small {
    font-size: 9.5pt;
  }

  .entry-subtitle {
    font-size: 9.25pt;
  }

  .entry-meta {
    font-size: 9pt;
    white-space: nowrap;
    text-align: right;
  }

  p {
    margin: 0 0 6px;
  }

  ul {
    margin: 4px 0 0 18px;
    padding: 0;
  }

  li {
    margin-bottom: 4px;
  }
</style>
</head>
<body>
  <header>
    <h1>${escapeHtml(personalInfo.name)}</h1>
    <div class="headline">${escapeHtml(personalInfo.title)}</div>
    <div class="contact">
      ${escapeHtml(personalInfo.email)} | ${escapeHtml(personalInfo.location)} | 
      <a href="${escapeHtml(personalInfo.linkedin)}">${escapeHtml(personalInfo.linkedin)}</a> | 
      <a href="${escapeHtml(personalInfo.github)}">${escapeHtml(personalInfo.github)}</a>
    </div>
  </header>

  <section class="section">
    <div class="section-title">Professional Summary</div>
    <p>${escapeHtml(personalInfo.summary)}</p>
  </section>

  <section class="section">
    <div class="section-title">Work Experience</div>
    ${experienceHTML}
  </section>

  <section class="section">
    <div class="section-title">Technical Skills</div>
    ${skillsHTML}
  </section>

  <section class="section">
    <div class="section-title">Education</div>
    ${educationHTML}
  </section>

  <section class="section">
    <div class="section-title">Certifications</div>
    ${certificatesHTML}
  </section>

  <section class="section">
    <div class="section-title">Organizations</div>
    ${organizationsHTML}
  </section>

  <section class="section">
    <div class="section-title">Languages</div>
    ${languagesHTML}
  </section>
</body>
</html>`;
}
