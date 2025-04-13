import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
