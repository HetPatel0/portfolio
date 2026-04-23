import type { Skill } from "@/components/portfolio/types";
import { sectionShellClass } from "@/components/portfolio/lib/styles";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";
import { SectionTitle } from "@/components/portfolio/ui/section-title";

type SkillsSectionProps = {
  skills: Skill[];
  onHoverSkill: (index: number) => void;
};

export function SkillsSection({ skills, onHoverSkill }: SkillsSectionProps) {
  return (
    <section id="skills" className={`${sectionShellClass} pt-8`}>
      <SectionTitle eyebrow="Skills" title="Tools In Inventory" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <MinecraftPanel
            key={skill.name}
            tone="dark"
            className="p-4 transition duration-100 hover:-translate-y-1"
            onMouseEnter={() => onHoverSkill(index)}
          >
            <div className="mb-3 grid gap-1.5">
              <MinecraftTag tone="blue">{skill.item}</MinecraftTag>
              <strong className="text-[1.55rem] text-white sm:text-[1.7rem]">{skill.name}</strong>
            </div>
            <p className="text-[1.3rem] leading-[1.12] text-[#f4efe4] sm:text-[1.45rem]">{skill.description}</p>
            <div
              className="mt-3 h-4.5 overflow-hidden border-[3px] border-black/40 bg-black/35"
              aria-label={`${skill.name} proficiency ${skill.level}%`}
            >
              <div
                className="h-full bg-[repeating-linear-gradient(90deg,#86ef82_0_14px,#63c75f_14px_28px)]"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <small className="mt-2 block text-[1.05rem] text-[rgba(233,228,215,0.92)] sm:text-[1.1rem]">
              {skill.level}% mastery
            </small>
          </MinecraftPanel>
        ))}
      </div>
    </section>
  );
}
