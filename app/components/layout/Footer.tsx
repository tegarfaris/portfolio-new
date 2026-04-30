"use client";
import { personalInfo } from "@/app/lib/data";
import { Mail, GitBranch, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        marginTop: 40,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--text-primary)" }}>
            TFN<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 4 }}>
            © {new Date().getFullYear()} Tegar Faris Nurhakim
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--accent)")} onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text-muted)")}>
            <Mail size={18} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--accent)")} onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text-muted)")}>
            <GitBranch size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--accent)")} onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text-muted)")}>
            <ExternalLink size={18} />
          </a>
        </div>

        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          Built with <Heart size={12} color="var(--accent)" fill="var(--accent)" /> Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
