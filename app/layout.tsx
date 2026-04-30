import type { Metadata } from "next";
import Script from "next/script";
import CursorParticles from "./components/ui/CursorParticles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tegar Faris Nurhakim — Frontend Developer",
  description:
    "Portfolio of Tegar Faris Nurhakim, a Frontend Developer with 3.5+ years of experience specializing in React.js and Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise-bg" suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var s=localStorage.getItem('theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
        <CursorParticles />
        {children}
      </body>
    </html>
  );
}
