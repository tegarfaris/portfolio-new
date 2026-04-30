"use client";
import { useEffect, useRef, useState } from "react";
import { certificates } from "@/app/lib/data";
import { Award, Calendar, Hash } from "lucide-react";

export default function CertificatesSection() {
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

  return (
    <section id="certificates" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }} ref={ref}>
      <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: 48, color: "var(--text-primary)" }}>
        <span className="section-title">Certificates</span>
      </h2>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {certificates.map((cert, i) => (
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
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "var(--accent-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Award size={18} color="var(--accent)" />
              </div>
              <div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.35 }}>
                  {cert.name}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 500, marginTop: 2 }}>
                  {cert.issuer}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--text-muted)" }}>
                <Calendar size={12} />
                {cert.period}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "monospace" }}>
                <Hash size={11} />
                {cert.certNo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
