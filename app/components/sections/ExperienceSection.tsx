"use client";
import { useEffect, useRef, useState } from "react";
import { workExperiences } from "@/app/lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
      ref={ref}
    >
      <h2
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 800,
          marginBottom: 48,
          color: "var(--text-primary)",
        }}
      >
        <span className="section-title">Work Experience</span>
      </h2>

      <div style={{ position: "relative" }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            left: 19,
            top: 8,
            bottom: 8,
            width: 2,
            background:
              "linear-gradient(to bottom, var(--accent), var(--accent-light), transparent)",
            borderRadius: 2,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {workExperiences.map((exp, i) => (
            <div
              key={exp.id}
              style={{
                paddingLeft: 56,
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-24px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: 10,
                  top: 16,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: i === 0 ? "var(--accent)" : "var(--bg-card)",
                  border: `3px solid var(--accent)`,
                  boxShadow: i === 0 ? "0 0 0 4px var(--accent-glow)" : "none",
                  transition: "box-shadow 0.3s",
                  zIndex: 1,
                }}
              />

              <div className="card" style={{ padding: "24px 28px" }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          color: "var(--accent)",
                          fontSize: "0.95rem",
                          fontFamily: "Syne, sans-serif",
                        }}
                      >
                        {exp.company}
                      </span>
                      {exp.companyNote && (
                        <span
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                            fontStyle: "italic",
                          }}
                        >
                          ({exp.companyNote})
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--text-muted)",
                        fontSize: "0.82rem",
                      }}
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--text-muted)",
                        fontSize: "0.82rem",
                      }}
                    >
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        padding: "2px 10px",
                        borderRadius: 999,
                        background: "var(--accent-glow)",
                        color: "var(--accent)",
                        fontWeight: 600,
                        border:
                          "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {exp.responsibilities.map((item, ri) => (
                    <li
                      key={ri}
                      style={{
                        display: "flex",
                        gap: 10,
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: 6,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--accent-light)",
                          display: "inline-block",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
