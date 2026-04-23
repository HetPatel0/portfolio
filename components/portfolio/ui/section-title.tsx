import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <MinecraftTag tone="gold">{eyebrow}</MinecraftTag>
      <h2 className="mcui-title mt-3 text-[clamp(1.35rem,3vw,2.55rem)] leading-[1.15] text-[#fbf6eb]">
        {title}
      </h2>
    </div>
  );
}
