import Image from "next/image";
import { minecraftPanelClass, sectionShellClass } from "@/components/portfolio/lib/styles";
import type { Project } from "@/components/portfolio/types";
import { SectionTitle } from "@/components/portfolio/ui/section-title";

type ProjectsSectionProps = {
  projects: Project[];
  onSelectProject: (project: Project, index: number) => void;
};

const accentClassMap = {
  grass: "from-emerald-200/10 via-lime-300/5 to-emerald-950/15",
  lava: "from-orange-200/10 via-red-300/5 to-red-950/20",
  diamond: "from-cyan-100/10 via-sky-200/5 to-cyan-950/15"
} as const;

export function ProjectsSection({ projects, onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className={`${sectionShellClass} pt-8`}>
      <SectionTitle eyebrow="Projects" title="Open The Chests" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className={`${minecraftPanelClass} group relative min-h-[18rem] overflow-hidden border-2 bg-[image:linear-gradient(180deg,rgba(16,16,16,0.32),rgba(16,16,16,0.72)),var(--texture-stone)] bg-[length:auto,40px_40px] bg-center p-4 text-left transition duration-100 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-px`}
            onClick={() => onSelectProject(project, index)}
          >
            <div
              className={`relative mb-1 grid min-h-[12.8rem] place-items-center overflow-hidden border-2 border-black bg-[image:linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.24)),var(--texture-dirt)] bg-[length:auto,32px_32px] bg-center`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${accentClassMap[project.accent as keyof typeof accentClassMap]}`} />
              <Image
                src="/minecraft/textures/chest_minecart.png"
                alt={`${project.title} chest`}
                width={128}
                height={128}
                className="relative z-[1] h-auto w-[min(100%,170px)] image-rendering-pixelated drop-shadow-[0_18px_24px_rgba(0,0,0,0.4)] transition duration-100 group-hover:-translate-y-1 group-hover:scale-[1.08]"
              />
            </div>
            <strong className="mt-4 block text-[1.45rem] text-white [text-shadow:2px_2px_0_rgba(0,0,0,0.75)] sm:text-[1.52rem]">
              {project.title}
            </strong>
            <small className="mt-2 block text-[1.05rem] text-[rgba(233,228,215,0.92)] sm:text-[1.1rem]">
              Click to craft details
            </small>
          </button>
        ))}
      </div>
    </section>
  );
}
