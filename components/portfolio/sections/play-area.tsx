import Image from "next/image";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

type PlayAreaProps = {
  playerX: number;
  isJumping: boolean;
  dayMode: boolean;
  mounted: boolean;
};

export function PlayArea({ playerX, isJumping, dayMode, mounted }: PlayAreaProps) {
  return (
    <div className="grid gap-4">
      <MinecraftPanel tone="dark" className="avatar-card relative min-h-96 overflow-hidden bg-[#203245] p-5">
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
        <div className="absolute bottom-[5.2rem] left-4">
          <MinecraftTag tone="gold">Use A / D / Space</MinecraftTag>
        </div>
      </MinecraftPanel>

      <div
        className="mcui-panel mcui-panel--default grid gap-2 p-4"
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
