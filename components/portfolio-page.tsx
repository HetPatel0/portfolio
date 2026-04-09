"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type SectionId = "home" | "about" | "projects" | "skills" | "contact";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  accent: string;
};

type Skill = {
  name: string;
  item: string;
  level: number;
  description: string;
};

const navItems: { id: SectionId; label: string; icon: string }[] = [
  { id: "home", label: "Home", icon: "01" },
  { id: "about", label: "About", icon: "02" },
  { id: "projects", label: "Projects", icon: "03" },
  { id: "skills", label: "Skills", icon: "04" },
  { id: "contact", label: "Contact", icon: "05" }
];

const projects: Project[] = [
  {
    title: "Biome Builder",
    description:
      "A placeholder showcase for a world-building dashboard with map overlays, terrain tools, and live collaboration.",
    stack: ["Next.js", "TypeScript", "Three.js", "Supabase"],
    github: "#",
    demo: "#",
    accent: "grass"
  },
  {
    title: "Redstone Automations",
    description:
      "A placeholder product page for automation flows, event triggers, and command-style workflow customization.",
    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "#",
    demo: "#",
    accent: "lava"
  },
  {
    title: "Crafting Commerce",
    description:
      "A placeholder e-commerce experience focused on playful UX, animated cards, and rapid storefront customization.",
    stack: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    github: "#",
    demo: "#",
    accent: "diamond"
  }
];

const skills: Skill[] = [
  { name: "Frontend", item: "Pickaxe", level: 92, description: "Next.js, React, responsive UI systems" },
  { name: "UI Animation", item: "Sword", level: 85, description: "Motion, transitions, interactive storytelling" },
  { name: "Backend", item: "Shovel", level: 76, description: "APIs, auth, data modeling, integrations" },
  { name: "Design Systems", item: "Totem", level: 88, description: "Scalable components and visual consistency" }
];

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" }
];

const introText = "I build interactive products with game-like feedback, strong frontend craft, and a bias for memorable interfaces.";

function useTyping(text: string, speed = 24) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return typed;
}

function playSynth(frequency: number, duration = 0.08) {
  if (typeof window === "undefined") {
    return;
  }

  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.value = 0.03;

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();

  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.stop(context.currentTime + duration);
  window.setTimeout(() => {
    oscillator.disconnect();
    gain.disconnect();
    void context.close();
  }, duration * 1000 + 40);
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  soundEnabled
}: {
  project: Project | null;
  onClose: () => void;
  soundEnabled: boolean;
}) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="crafting-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="crafting-header">
          <span>Crafting Table</span>
          <button
            type="button"
            className="slot-button"
            onClick={() => {
              if (soundEnabled) {
                playSynth(240, 0.06);
              }
              onClose();
            }}
          >
            X
          </button>
        </div>
        <div className="crafting-grid">
          <div className={`crafting-preview accent-${project.accent}`}>
            <span>{project.title}</span>
          </div>
          <div className="crafting-info">
            <h3 id="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="modal-links">
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  return (
    <main className={`portfolio-shell ${currentTheme}`}>
      {loading ? (
        <div className="loading-screen" aria-live="polite">
          <div className="loading-panel">
            <span>Generating World...</span>
            <div className="loading-bar">
              <div className="loading-bar-fill" />
            </div>
          </div>
        </div>
      ) : null}

      <div className="background-layer background-sky" style={skyStyle} />
      <div className="background-layer background-clouds" />
      <div className="background-layer background-terrain" style={terrainStyle} />

      <div className="floating-controls">
        <button
          type="button"
          className="slot-button"
          onClick={() => handleToggle(() => setDayMode((value) => !value), 460)}
        >
          {dayMode ? "Night" : "Day"}
        </button>
        <button
          type="button"
          className="slot-button"
          onClick={() => handleToggle(() => setSoundEnabled((value) => !value), 280)}
        >
          SFX {soundEnabled ? "On" : "Off"}
        </button>
      </div>

      <nav className="hotbar" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`hotbar-slot ${activeSection === item.id ? "active" : ""}`}
            onClick={() => handleNavigate(item.id)}
          >
            <span>{item.icon}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Spawn Point</p>
          <h1>Hi, I&apos;m Your Name</h1>
          <p className="hero-subtitle">I build worlds in code.</p>
          <p className="hero-description">
            Frontend engineer crafting immersive interfaces, polished interactions, and systems that scale.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => handleNavigate("about")}>
              Start Exploring
            </button>
            <button type="button" className="secondary-button" onClick={() => handleNavigate("projects")}>
              View Builds
            </button>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="avatar-card">
            <Image
              src="/minecraft/overworld-bg.svg"
              alt="Minecraft-inspired overworld background"
              fill
              priority
              className="avatar-scene-image"
            />
            <div className="avatar-scene-overlay" />
            <div className={`pixel-avatar ${isJumping ? "jumping" : ""}`} style={{ left: `${playerX}%` }}>
              <span className="avatar-head" />
              <span className="avatar-body" />
            </div>
            <div className="avatar-ground">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="player-hint">Use A / D / Space to move and jump</div>
          </div>
          <div className="status-panel">
            <div>
              <span>Biome</span>
              <strong>{dayMode ? "Overworld" : "Moonlit Plains"}</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>UI Systems + Creative Dev</strong>
            </div>
            <div>
              <span>Mode</span>
              <strong>{mounted ? "Interactive" : "Loading"}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <SectionTitle eyebrow="About" title="Written In A Pixel Book" />
        <div className="book-card">
          <div className="book-page">
            <span className="book-label">Player Log</span>
            <p>{typedIntro}</p>
            <p>
              Placeholder bio text lives here so you can replace it with your own story, background, and what kind of
              work you want to attract.
            </p>
          </div>
          <div className="signboard">
            <span>Current Quest</span>
            <strong>Building memorable digital spaces.</strong>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <SectionTitle eyebrow="Projects" title="Open The Chests" />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`project-chest accent-${project.accent}`}
              onClick={() => {
                setSelectedProject(project);
                if (soundEnabled) {
                  playSynth(320 + index * 60, 0.09);
                }
              }}
            >
              <div className="project-chest-art">
                <Image
                  src="/minecraft/chest.svg"
                  alt={`${project.title} chest`}
                  width={220}
                  height={220}
                  className="chest-image"
                />
              </div>
              <strong>{project.title}</strong>
              <small>Click to craft details</small>
            </button>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <SectionTitle eyebrow="Skills" title="Tools In Inventory" />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              onMouseEnter={() => {
                if (soundEnabled) {
                  playSynth(420 + index * 45, 0.05);
                }
              }}
            >
              <div className="skill-item">
                <span>{skill.item}</span>
                <strong>{skill.name}</strong>
              </div>
              <p>{skill.description}</p>
              <div className="xp-track" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                <div className="xp-fill" style={{ width: `${skill.level}%` }} />
              </div>
              <small>{skill.level}% mastery</small>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section">
        <SectionTitle eyebrow="Contact" title="Send A Command" />
        <div className="contact-shell">
          <div className="chat-window">
            <div className="chat-header">Server Chat</div>
            <div className="chat-body">
              <p>
                <span className="chat-name">[Visitor]</span> /msg YourName Let&apos;s build something ambitious.
              </p>
              <p>
                <span className="chat-name">[System]</span> Fill the command block below and swap in your real links.
              </p>
            </div>
          </div>

          <form className="command-form">
            <label>
              Name
              <input type="text" placeholder="PlayerOne" />
            </label>
            <label>
              Email
              <input type="email" placeholder="player@example.com" />
            </label>
            <label>
              Message
              <textarea rows={5} placeholder="/tell YourName I have a project idea..." />
            </label>
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                if (soundEnabled) {
                  playSynth(580, 0.1);
                }
              }}
            >
              Execute Command
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span>Crafted in the Overworld with Next.js</span>
        <div>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} soundEnabled={soundEnabled} />
    </main>
  );
}
