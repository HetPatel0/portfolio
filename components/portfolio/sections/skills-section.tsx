import type { Skill } from "@/components/portfolio/types";
import { SectionTitle } from "@/components/portfolio/ui/section-title";

type SkillsSectionProps = {
  skills: Skill[];
  onHoverSkill: (index: number) => void;
};

export function SkillsSection({ skills, onHoverSkill }: SkillsSectionProps) {
  return (
    <section id="skills" className="content-section">
      <SectionTitle eyebrow="Skills" title="Tools In Inventory" />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-card" onMouseEnter={() => onHoverSkill(index)}>
            <div className="skill-item">
              <span>{skill.item}</span>
              <strong>{skill.name}</strong>
            </div>
            <p>{skill.description}</p>
            <div className="xp-track" aria-label={`${skill.name} proficiency ${skill.level}%`}>
              <div className="xp-fill" style={{ width: `${skill.level}%` }} />
            </div>
            <small>{skill.level}% mastery</small>
          </div>
        ))}
      </div>
    </section>
  );
}
