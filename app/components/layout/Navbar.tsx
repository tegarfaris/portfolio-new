"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 90%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "var(--text-primary)",
          }}
        >
          TFN<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ gap: 32, alignItems: "center" }} className="hidden md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color =
                "var(--text-secondary)")
            }
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile */}
      <div style={{ gap: 12, alignItems: "center" }} className="flex md:hidden">
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: 8,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text-primary)",
          }}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="flex flex-col md:hidden"
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px",
            gap: 16,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
