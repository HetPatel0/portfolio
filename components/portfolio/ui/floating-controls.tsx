import { MinecraftButton } from "@/components/portfolio/ui/minecraft/button";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";

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
    <MinecraftPanel
      tone="default"
      className="fixed right-4 top-4 z-20 flex gap-3 p-2 max-sm:static max-sm:mx-auto max-sm:mt-4 max-sm:w-fit"
    >
      <MinecraftButton type="button" variant="secondary" onClick={onToggleDayMode}>
        {dayMode ? "Night" : "Day"}
      </MinecraftButton>
      <MinecraftButton type="button" onClick={onToggleSound}>
        SFX {soundEnabled ? "On" : "Off"}
      </MinecraftButton>
    </MinecraftPanel>
  );
}
