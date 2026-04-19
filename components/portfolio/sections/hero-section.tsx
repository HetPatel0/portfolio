import { PlayArea } from "@/components/portfolio/sections/play-area";
import {
  minecraftButtonClass,
  sectionShellClass,
} from "@/components/portfolio/lib/styles";

type HeroSectionProps = {
  onNavigate: (id: "about" | "projects") => void;
  playerX: number;
  isJumping: boolean;
  dayMode: boolean;
  mounted: boolean;
};

export function HeroSection({
  onNavigate,
  playerX,
  isJumping,
  dayMode,
  mounted,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className={`${sectionShellClass} grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16`}
    >
      <div>
        <p className="[font-family:var(--font-display)] text-[0.6rem] uppercase tracking-[0.08em] text-[#ffe093]">
          Spawn Point
        </p>
        <h1 className="mt-4 [font-family:var(--font-display)] text-[clamp(1.9rem,5vw,3.9rem)] leading-[1.15] text-[#fff4d1] [text-shadow:4px_4px_0_rgba(0,0,0,0.3)]">
          Hi, I&apos;m Het Bhuva
        </h1>
        <p className="mt-4 text-[clamp(1rem,2vw,1.5rem)] text-[#fff7e5]">
          I build worlds in code.
        </p>
        <p className="mt-3 max-w-136 text-[1.35rem] leading-[1.15] text-[rgba(255,248,224,0.92)] sm:text-[1.5rem]">
          Frontend engineer crafting immersive interfaces, polished
          interactions, and systems that scale.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <button
            type="button"
            className={minecraftButtonClass}
            onClick={() => onNavigate("about")}
          >
            Start Exploring
          </button>
          <button
            type="button"
            className={`${minecraftButtonClass} text-[#ffe08a]`}
            onClick={() => onNavigate("projects")}
          >
            View Builds
          </button>
        </div>
      </div>

      <PlayArea
        playerX={playerX}
        isJumping={isJumping}
        dayMode={dayMode}
        mounted={mounted}
      />
    </section>
  );
}
