import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-[rgba(7,11,9,0.82)] backdrop-blur-md" aria-live="polite">
      <MinecraftPanel tone="dark" className="w-[min(34rem,92vw)] p-6 text-center">
        <MinecraftTag tone="green" className="mb-4">
          Loading
        </MinecraftTag>
        <span className="mcui-title mb-4 block text-[clamp(0.85rem,2vw,1.2rem)] text-[#fff0cf]">
          Generating World...
        </span>
        <div className="h-5 overflow-hidden border-[3px] border-black/60 bg-black/40">
          <div className="loading-bar-fill h-full w-3/5" />
        </div>
      </MinecraftPanel>
    </div>
  );
}
