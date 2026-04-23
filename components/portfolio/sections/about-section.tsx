import { SectionTitle } from "@/components/portfolio/ui/section-title";
import { sectionShellClass } from "@/components/portfolio/lib/styles";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

type AboutSectionProps = {
  typedIntro: string;
};

export function AboutSection({ typedIntro }: AboutSectionProps) {
  return (
    <section id="about" className={`${sectionShellClass} pt-8`}>
      <SectionTitle eyebrow="About" title="Written In A Pixel Book" />
      <MinecraftPanel tone="wood" className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-[1.2fr_0.8fr]">
        <MinecraftPanel tone="paper" className="p-5 text-[#17130d]">
          <MinecraftTag>Player Log</MinecraftTag>
          <p className="mt-3 text-[1.3rem] leading-[1.12] sm:text-[1.5rem]">{typedIntro}</p>
          <p className="mt-4 text-[1.3rem] leading-[1.12] sm:text-[1.5rem]">
            Placeholder bio text lives here so you can replace it with your own story, background, and what kind of
            work you want to attract.
          </p>
        </MinecraftPanel>
        <MinecraftPanel tone="dark" className="grid content-center gap-3 p-5">
          <MinecraftTag tone="gold">Current Quest</MinecraftTag>
          <strong className="block text-[1.35rem] text-[#fff0b6] sm:text-[1.45rem]">
            Building memorable digital spaces.
          </strong>
        </MinecraftPanel>
      </MinecraftPanel>
    </section>
  );
}
