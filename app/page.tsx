"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import ProjectModal from "@/components/ui/ProjectModal";
import ResumeModal from "@/components/ui/ResumeModal";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Background Glow Mesh */}
      <BackgroundGlow />

      {/* Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Certifications />
        <Services />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
