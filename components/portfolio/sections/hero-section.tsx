import { PlayArea } from "@/components/portfolio/sections/play-area";
import { sectionShellClass } from "@/components/portfolio/lib/styles";
import { MinecraftButton } from "@/components/portfolio/ui/minecraft/button";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

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
      <MinecraftPanel tone="dark" className="p-4 sm:p-5">
        <MinecraftTag tone="green">Spawn Point</MinecraftTag>
        <h1 className="mcui-title mt-4 text-[clamp(1.9rem,5vw,3.9rem)] leading-[1.15] text-[#fff4d1]">
          Hi, I&apos;m Het Bhuva
        </h1>
        <p className="mt-4 text-[clamp(1rem,2vw,1.5rem)] text-[#fff7e5]">
          I build worlds in code.
        </p>
        <p className="mt-3 max-w-136 text-[1.35rem] leading-[1.15] text-[rgba(255,248,224,0.92)] sm:text-[1.5rem]">
          Frontend engineer crafting immersive interfaces, polished
          interactions, and systems that scale.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <MinecraftButton type="button" onClick={() => onNavigate("about")}>
            Start Exploring
          </MinecraftButton>
          <MinecraftButton type="button" variant="secondary" onClick={() => onNavigate("projects")}>
            View Builds
          </MinecraftButton>
        </div>
      </MinecraftPanel>

      <PlayArea
        playerX={playerX}
        isJumping={isJumping}
        dayMode={dayMode}
        mounted={mounted}
      />
    </section>
  );
}
