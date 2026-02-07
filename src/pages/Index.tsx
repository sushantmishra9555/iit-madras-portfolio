import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import ThreeDHero from "@/components/ThreeDHero";
// import VRMotionSection from "@/components/VRMotionSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AuroraFlow from "@/components/ui/aurora-flow";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Aurora Background - fixed behind everything */}
      <AuroraFlow />

      <Navbar />
      <HeroSection />
      {/* <ThreeDHero /> */}
      {/* <VRMotionSection /> */}

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />

      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Index;