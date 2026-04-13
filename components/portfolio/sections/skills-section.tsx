import type { Skill } from "@/components/portfolio/types";
import { minecraftPanelClass, sectionShellClass } from "@/components/portfolio/lib/styles";
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
          <div
            key={skill.name}
            className={`${minecraftPanelClass} bg-[linear-gradient(180deg,rgba(44,56,69,0.95),rgba(21,28,37,0.95))] p-4 transition duration-100 hover:-translate-y-1`}
            onMouseEnter={() => onHoverSkill(index)}
          >
            <div className="mb-3 grid gap-1.5">
              <span className="font-[var(--font-display)] text-[0.6rem] uppercase tracking-[0.06em] text-[#a8f7ff]">
                {skill.item}
              </span>
              <strong className="text-[1.55rem] text-white sm:text-[1.7rem]">{skill.name}</strong>
            </div>
            <p className="text-[1.3rem] leading-[1.12] text-[#f4efe4] sm:text-[1.45rem]">{skill.description}</p>
            <div
              className="mt-3 h-[18px] overflow-hidden border-[3px] border-black/40 bg-black/35"
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
          </div>
        ))}
      </div>
    </section>
  );
}
