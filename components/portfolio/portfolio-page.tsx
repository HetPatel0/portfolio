"use client";

import { useEffect, useMemo, useState } from "react";
import { introText, navItems, projects, skills, socialLinks } from "@/components/portfolio/data";
import { useTyping } from "@/components/portfolio/hooks/use-typing";
import { playSynth } from "@/components/portfolio/lib/audio";
import { AboutSection } from "@/components/portfolio/sections/about-section";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { SiteFooter } from "@/components/portfolio/sections/site-footer";
import { SkillsSection } from "@/components/portfolio/sections/skills-section";
import type { Project, SectionId } from "@/components/portfolio/types";
import { FloatingControls } from "@/components/portfolio/ui/floating-controls";
import { HotbarNav } from "@/components/portfolio/ui/hotbar-nav";
import { LoadingScreen } from "@/components/portfolio/ui/loading-screen";
import { ProjectModal } from "@/components/portfolio/ui/project-modal";

export function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [dayMode, setDayMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [playerX, setPlayerX] = useState(48);
  const [isJumping, setIsJumping] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const typedIntro = useTyping(introText);

  useEffect(() => {
    setMounted(true);
    const timer = window.setTimeout(() => setLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);

      const entries = navItems
        .map(({ id }) => {
          const section = document.getElementById(id);
          if (!section) {
            return null;
          }

          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - 140);
          return { id, distance };
        })
        .filter((entry): entry is { id: SectionId; distance: number } => entry !== null)
        .sort((a, b) => a.distance - b.distance);

      if (entries[0]) {
        setActiveSection(entries[0].id);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key.toLowerCase() === "a" || event.key === "ArrowLeft") {
        setPlayerX((value) => Math.max(8, value - 8));
      }

      if (event.key.toLowerCase() === "d" || event.key === "ArrowRight") {
        setPlayerX((value) => Math.min(84, value + 8));
      }

      if ((event.key === " " || event.key === "ArrowUp" || event.key.toLowerCase() === "w") && !isJumping) {
        setIsJumping(true);
        window.setTimeout(() => setIsJumping(false), 620);
        if (soundEnabled) {
          playSynth(520, 0.1);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isJumping, soundEnabled]);

  const currentTheme = dayMode ? "theme-day" : "theme-night";

  const terrainStyle = useMemo(
    () => ({
      transform: `translateY(${scrollY * 0.12}px)`
    }),
    [scrollY]
  );

  const skyStyle = useMemo(
    () => ({
      transform: `translateY(${scrollY * 0.06}px)`
    }),
    [scrollY]
  );

  const handleNavigate = (id: SectionId) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (soundEnabled) {
      playSynth(380, 0.08);
    }
  };

  const handleToggle = (callback: () => void, frequency: number) => {
    callback();
    if (soundEnabled) {
      playSynth(frequency, 0.08);
    }
  };

  const handleSelectProject = (project: Project, index: number) => {
    setSelectedProject(project);
    if (soundEnabled) {
      playSynth(320 + index * 60, 0.09);
    }
  };

  const handleSkillHover = (index: number) => {
    if (soundEnabled) {
      playSynth(420 + index * 45, 0.05);
    }
  };

  const handleExecuteCommand = () => {
    if (soundEnabled) {
      playSynth(580, 0.1);
    }
  };

  return (
    <main className={`portfolio-shell ${currentTheme}`}>
      {loading ? <LoadingScreen /> : null}

      <div className="background-layer background-sky" style={skyStyle} />
      <div className="background-layer background-clouds" />
      <div className="background-layer background-terrain" style={terrainStyle} />

      <FloatingControls
        dayMode={dayMode}
        soundEnabled={soundEnabled}
        onToggleDayMode={() => handleToggle(() => setDayMode((value) => !value), 460)}
        onToggleSound={() => handleToggle(() => setSoundEnabled((value) => !value), 280)}
      />

      <HotbarNav items={navItems} activeSection={activeSection} onNavigate={handleNavigate} />

      <HeroSection
        onNavigate={handleNavigate}
        playerX={playerX}
        isJumping={isJumping}
        dayMode={dayMode}
        mounted={mounted}
      />

      <AboutSection typedIntro={typedIntro} />
      <ProjectsSection projects={projects} onSelectProject={handleSelectProject} />
      <SkillsSection skills={skills} onHoverSkill={handleSkillHover} />
      <ContactSection onExecuteCommand={handleExecuteCommand} />
      <SiteFooter socialLinks={socialLinks} />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} soundEnabled={soundEnabled} />
    </main>
  );
}
