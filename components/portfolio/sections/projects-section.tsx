import Image from "next/image";
import type { Project } from "@/components/portfolio/types";
import { SectionTitle } from "@/components/portfolio/ui/section-title";

type ProjectsSectionProps = {
  projects: Project[];
  onSelectProject: (project: Project, index: number) => void;
};

export function ProjectsSection({ projects, onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="content-section">
      <SectionTitle eyebrow="Projects" title="Open The Chests" />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className={`project-chest accent-${project.accent}`}
            onClick={() => onSelectProject(project, index)}
          >
            <div className="project-chest-art">
              <Image
                src="/minecraft/chest.svg"
                alt={`${project.title} chest`}
                width={220}
                height={220}
                className="chest-image"
              />
            </div>
            <strong>{project.title}</strong>
            <small>Click to craft details</small>
          </button>
        ))}
      </div>
    </section>
  );
}
