import { SectionTitle } from "@/components/portfolio/ui/section-title";
import { minecraftPanelClass, sectionShellClass } from "@/components/portfolio/lib/styles";

type AboutSectionProps = {
  typedIntro: string;
};

export function AboutSection({ typedIntro }: AboutSectionProps) {
  return (
    <section id="about" className={`${sectionShellClass} pt-8`}>
      <SectionTitle eyebrow="About" title="Written In A Pixel Book" />
      <div
        className={`${minecraftPanelClass} grid grid-cols-1 gap-4 bg-[linear-gradient(180deg,rgba(124,103,80,0.82),rgba(65,50,36,0.9))] p-4 lg:grid-cols-[1.2fr_0.8fr]`}
      >
        <div className="border-4 border-black/35 bg-[linear-gradient(180deg,rgba(244,232,197,0.97),rgba(224,205,161,0.95))] p-5 text-[#17130d]">
          <span className="font-(--font-display) text-[0.58rem] uppercase tracking-[0.08em] text-[#674e2f]">
            Player Log
          </span>
          <p className="mt-3 text-[1.3rem] leading-[1.12] sm:text-[1.5rem]">{typedIntro}</p>
          <p className="mt-4 text-[1.3rem] leading-[1.12] sm:text-[1.5rem]">
            Placeholder bio text lives here so you can replace it with your own story, background, and what kind of
            work you want to attract.
          </p>
        </div>
        <div className="grid content-center gap-3 border-4 border-black/35 bg-[linear-gradient(180deg,rgba(149,104,56,0.96),rgba(110,76,41,0.96))] p-5">
          <span className="font-(--font-display) text-[0.58rem] uppercase tracking-[0.08em] text-[#ffe093]">
            Current Quest
          </span>
          <strong className="block text-[1.35rem] text-[#fff0b6] sm:text-[1.45rem]">
            Building memorable digital spaces.
          </strong>
        </div>
      </div>
    </section>
  );
}
