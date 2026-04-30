"use client";
import { useEffect, useRef, useState } from "react";
import { education, organizations, languages } from "@/app/lib/data";
import { GraduationCap, Users, Globe } from "lucide-react";

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      <div style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {/* Education */}
        <div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 28, color: "var(--text-primary)" }}>
            <span className="section-title">Education</span>
          </h2>
          {education.map((edu, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: 24,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, background: "var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GraduationCap size={20} color="var(--accent)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 500 }}>{edu.institution}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: 2 }}>{edu.period}</p>
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--text-secondary)", fontStyle: "normal" }}>Thesis: </strong>
                  {edu.thesis}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Organizations + Languages */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 28, color: "var(--text-primary)" }}>
              <span className="section-title">Organizations</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {organizations.map((org, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: 20,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.2 + i * 0.1}s, transform 0.5s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: "var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Users size={16} color="var(--accent)" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)", lineHeight: 1.35 }}>
                        {org.name}
                      </h3>
                      <p style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 500, marginTop: 2 }}>{org.role}</p>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 2 }}>{org.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 28, color: "var(--text-primary)" }}>
              <span className="section-title">Languages</span>
            </h2>
            <div
              className="card"
              style={{
                padding: 20,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.4s",
              }}
            >
              {languages.map((lang, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Globe size={16} color="var(--accent)" />
                  <div>
                    <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>{lang.name}</p>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
