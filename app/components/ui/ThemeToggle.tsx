"use client";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        border: "1px solid var(--border)",
        background: "var(--bg-subtle)",
        color: "var(--text-secondary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color =
          "var(--text-secondary)";
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--border)";
      }}
    >
      <span className="theme-icon-sun" aria-hidden="true">
        <Sun size={16} />
      </span>
      <span className="theme-icon-moon" aria-hidden="true">
        <Moon size={16} />
      </span>
    </button>
  );
}
