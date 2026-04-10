import { PlayArea } from "@/components/portfolio/sections/play-area";

type HeroSectionProps = {
  onNavigate: (id: "about" | "projects") => void;
  playerX: number;
  isJumping: boolean;
  dayMode: boolean;
  mounted: boolean;
};

export function HeroSection({ onNavigate, playerX, isJumping, dayMode, mounted }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Spawn Point</p>
        <h1>Hi, I&apos;m Your Name</h1>
        <p className="hero-subtitle">I build worlds in code.</p>
        <p className="hero-description">
          Frontend engineer crafting immersive interfaces, polished interactions, and systems that scale.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={() => onNavigate("about")}>
            Start Exploring
          </button>
          <button type="button" className="secondary-button" onClick={() => onNavigate("projects")}>
            View Builds
          </button>
        </div>
      </div>

      <PlayArea playerX={playerX} isJumping={isJumping} dayMode={dayMode} mounted={mounted} />
    </section>
  );
}
