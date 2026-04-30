"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/app/lib/data";

const categoryLabels: Record<string, string> = {
  core: "Core",
  framework: "Frameworks & Libraries",
  tools: "Tools",
  soft: "Soft Skills",
};

const categoryColors: Record<string, string> = {
  core: "#2d6a4f",
  framework: "#1e6091",
  tools: "#7b4f2d",
  soft: "#4f2d7b",
};

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: 48, color: "var(--text-primary)" }}>
        <span className="section-title">Skills</span>
      </h2>

      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {Object.entries(grouped).map(([cat, catSkills], gi) => (
          <div
            key={cat}
            className="card"
            style={{
              padding: 24,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.5s ease ${gi * 0.1}s, transform 0.5s ease ${gi * 0.1}s`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: categoryColors[cat] ?? "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {categoryLabels[cat] ?? cat}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {catSkills.map((skill, i) => (
                <span
                  key={skill.name}
                  className="tag"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.8)",
                    transition: `opacity 0.4s ease ${(gi * 0.1) + (i * 0.05)}s, transform 0.4s ease ${(gi * 0.1) + (i * 0.05)}s`,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
