import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Muhammed Nasvih V | DevOps Engineer & Web Developer</title>
        <meta
          name="description"
          content="Muhammed Nasvih V - Self-driven DevOps & IT professional with real-world experience deploying CI/CD pipelines, building cloud-native platforms, and managing multi-client web development projects."
        />
        <meta
          name="keywords"
          content="DevOps Engineer, Web Developer, CI/CD, AWS, Docker, Kubernetes, React, Saudi Arabia"
        />
        <meta property="og:title" content="Muhammed Nasvih V | DevOps Engineer & Web Developer" />
        <meta
          property="og:description"
          content="Self-driven DevOps & IT professional with real-world experience deploying CI/CD pipelines and cloud-native platforms."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nasvih.tech" />
      </Helmet>

      <main className="overflow-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
