import { minecraftPanelClass } from "@/components/portfolio/lib/styles";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-[rgba(7,11,9,0.82)] backdrop-blur-md" aria-live="polite">
      <div className={`${minecraftPanelClass} w-[min(34rem,92vw)] bg-[linear-gradient(180deg,rgba(67,53,37,0.96),rgba(42,32,22,0.96))] p-6 text-center`}>
        <span className="mb-4 block font-[var(--font-display)] text-[clamp(0.85rem,2vw,1.2rem)] text-[#fff0cf]">
          Generating World...
        </span>
        <div className="h-5 overflow-hidden border-[3px] border-black/60 bg-black/40">
          <div className="loading-bar-fill h-full w-3/5" />
        </div>
      </div>
    </div>
  );
}
