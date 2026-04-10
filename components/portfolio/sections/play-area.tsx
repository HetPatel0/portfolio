import Image from "next/image";

type PlayAreaProps = {
  playerX: number;
  isJumping: boolean;
  dayMode: boolean;
  mounted: boolean;
};

export function PlayArea({ playerX, isJumping, dayMode, mounted }: PlayAreaProps) {
  return (
    <div className="hero-showcase">
      <div className="avatar-card">
        <Image
          src="/minecraft/panorama/panorama_0.png"
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
  );
}
