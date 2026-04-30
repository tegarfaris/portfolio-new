import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import CertificatesSection from "./components/sections/CertificatesSection";
import EducationSection from "./components/sections/EducationSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificatesSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
