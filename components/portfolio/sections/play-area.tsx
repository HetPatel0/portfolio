import Image from "next/image";
import { minecraftPanelClass } from "@/components/portfolio/lib/styles";

type PlayAreaProps = {
  playerX: number;
  isJumping: boolean;
  dayMode: boolean;
  mounted: boolean;
};

export function PlayArea({ playerX, isJumping, dayMode, mounted }: PlayAreaProps) {
  return (
    <div className="grid gap-4">
      <div className={`${minecraftPanelClass} avatar-card relative min-h-96 overflow-hidden bg-[#203245] p-5`}>
        <Image
          src={dayMode ? "/minecraft/panorama/panorama_0.png" : "/minecraft/panorama/panorama_1.png"}
          alt="Minecraft game panorama background"
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
        <div className="absolute bottom-[5.2rem] left-4 bg-[rgba(21,16,12,0.82)] px-2.5 py-1 [font-family:var(--font-display)] text-[0.55rem] uppercase tracking-[0.08em] text-[#ffe093]">
          Use A / D / Space to move and jump
        </div>
      </div>

      <div
        className={`${minecraftPanelClass} grid gap-2 bg-[linear-gradient(180deg,rgba(18,29,39,0.86),rgba(16,20,28,0.86))] p-4`}
      >
        <div>
          <span className="[font-family:var(--font-display)] text-[0.56rem] uppercase tracking-[0.08em] text-[#ffe093]">
            Biome
          </span>
          <strong className="block text-[1.35rem] text-[#fff0b6] sm:text-[1.45rem]">
            {dayMode ? "Overworld" : "Moonlit Plains"}
          </strong>
        </div>
        <div>
          <span className="[font-family:var(--font-display)] text-[0.56rem] uppercase tracking-[0.08em] text-[#ffe093]">
            Focus
          </span>
          <strong className="block text-[1.35rem] text-[#fff0b6] sm:text-[1.45rem]">UI Systems + Creative Dev</strong>
        </div>
        <div>
          <span className="[font-family:var(--font-display)] text-[0.56rem] uppercase tracking-[0.08em] text-[#ffe093]">
            Mode
          </span>
          <strong className="block text-[1.35rem] text-[#fff0b6] sm:text-[1.45rem]">
            {mounted ? "Interactive" : "Loading"}
          </strong>
        </div>
      </div>
    </div>
  );
}
