import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AICore3D from "@/components/sections/AICore3D";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperimentalProjects from "@/components/sections/ExperimentalProjects";
import TechCapabilities from "@/components/sections/TechCapabilities";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AICore3D />
      <FeaturedProjects />
      <ExperimentalProjects />
      <TechCapabilities />
      <Experience />
      <Contact />
    </main>
  );
}
