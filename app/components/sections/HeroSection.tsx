"use client";
import { useEffect, useRef } from "react";
import { Mail, GitBranch, ExternalLink, MapPin, Download } from "lucide-react";
import { personalInfo } from "@/app/lib/data";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--accent-glow)",
            border:
              "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
            borderRadius: 999,
            padding: "6px 14px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              animation: "pulse-dot 2s infinite",
            }}
          />
          <style>{`@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(0.8);}}`}</style>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              fontFamily: "Syne, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "var(--text-primary)",
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {personalInfo.name}
        </h1>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontWeight: 400,
            color: "var(--text-secondary)",
            marginBottom: 28,
            fontFamily: "Syne, sans-serif",
          }}
        >
          <span className="gradient-text" style={{ fontWeight: 600 }}>
            Frontend Developer
          </span>{" "}
          — crafting delightful web experiences
        </h2>

        {/* Summary */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            maxWidth: 620,
            marginBottom: 36,
          }}
        >
          {personalInfo.summary}
        </p>

        {/* Meta info */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-muted)",
              fontSize: "0.875rem",
            }}
          >
            <MapPin size={14} color="var(--accent)" />
            {personalInfo.location}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-muted)",
              fontSize: "0.875rem",
            }}
          >
            <Mail size={14} color="var(--accent)" />
            {personalInfo.email}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 12,
              background: "var(--accent)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              fontFamily: "Syne, sans-serif",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ExternalLink size={16} />
            LinkedIn
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 12,
              background: "var(--bg-subtle)",
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              fontFamily: "Syne, sans-serif",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <GitBranch size={16} />
            GitHub
          </a>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/api/generate-cv";
              link.download = "Tegar-Faris-Nurhakim-CV.pdf";
              link.click();
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 12,
              background: "transparent",
              color: "var(--accent)",
              fontWeight: 600,
              fontSize: "0.9rem",
              fontFamily: "Syne, sans-serif",
              border: "1px solid var(--accent)",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-glow)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Download size={16} />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
