import { minecraftButtonClass, minecraftPanelClass } from "@/components/portfolio/lib/styles";

type FloatingControlsProps = {
  dayMode: boolean;
  soundEnabled: boolean;
  onToggleDayMode: () => void;
  onToggleSound: () => void;
};

export function FloatingControls({
  dayMode,
  soundEnabled,
  onToggleDayMode,
  onToggleSound
}: FloatingControlsProps) {
  return (
    <div
      className={`${minecraftPanelClass} fixed right-4 top-4 z-20 flex gap-3 bg-[image:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.3)),var(--texture-stone)] bg-[length:auto,32px_32px] bg-center p-2 max-sm:static max-sm:mx-auto max-sm:mt-4 max-sm:w-fit`}
    >
      <button type="button" className={minecraftButtonClass} onClick={onToggleDayMode}>
        {dayMode ? "Night" : "Day"}
      </button>
      <button type="button" className={minecraftButtonClass} onClick={onToggleSound}>
        SFX {soundEnabled ? "On" : "Off"}
      </button>
    </div>
  );
}
