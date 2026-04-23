"use client";

import { useEffect } from "react";
import { playSynth } from "@/components/portfolio/lib/audio";
import type { Project } from "@/components/portfolio/types";
import { MinecraftButton, minecraftButtonClasses } from "@/components/portfolio/ui/minecraft/button";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

type ProjectModalProps = {
  project: Project | null;
  soundEnabled: boolean;
  onClose: () => void;
};

const accentClassMap = {
  grass: "bg-[linear-gradient(180deg,rgba(116,192,80,0.94),rgba(63,111,38,0.94))]",
  lava: "bg-[linear-gradient(180deg,rgba(255,130,62,0.96),rgba(152,56,19,0.96))]",
  diamond: "bg-[linear-gradient(180deg,rgba(91,230,239,0.94),rgba(23,114,122,0.94))]"
} as const;

export function ProjectModal({ project, soundEnabled, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black/65 p-4 backdrop-blur-sm" role="presentation" onClick={onClose}>
      <MinecraftPanel
        tone="dark"
        className="w-full max-w-[52rem] p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-4 [font-family:var(--font-display)] text-[0.7rem] uppercase tracking-[0.04em]">
          <MinecraftTag tone="gold">Crafting Table</MinecraftTag>
          <MinecraftButton
            type="button"
            variant="secondary"
            onClick={() => {
              if (soundEnabled) {
                playSynth(240, 0.06);
              }
              onClose();
            }}
          >
            X
          </MinecraftButton>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <MinecraftPanel
            tone="default"
            className={`${accentClassMap[project.accent as keyof typeof accentClassMap]} grid min-h-[14rem] place-items-center border-4 border-black/30 p-4 text-center [font-family:var(--font-display)] text-[0.8rem]`}
          >
            <span>{project.title}</span>
          </MinecraftPanel>
          <MinecraftPanel tone="window" className="p-4">
            <h3 id="project-title" className="mb-3 [font-family:var(--font-display)] text-[1.2rem]">
              {project.title}
            </h3>
            <p className="text-[1.3rem] leading-[1.12] text-[#f4efe4] sm:text-[1.45rem]">{project.description}</p>
            <div className="my-4 flex flex-wrap gap-2.5">
              {project.stack.map((item) => (
                <MinecraftTag key={item}>{item}</MinecraftTag>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a href={project.github} className={minecraftButtonClasses("secondary")}>
                GitHub
              </a>
              <a href={project.demo} className={minecraftButtonClasses("primary")}>
                Live Demo
              </a>
            </div>
          </MinecraftPanel>
        </div>
      </MinecraftPanel>
    </div>
  );
}
