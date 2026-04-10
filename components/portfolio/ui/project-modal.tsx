"use client";

import { useEffect } from "react";
import { playSynth } from "@/components/portfolio/lib/audio";
import type { Project } from "@/components/portfolio/types";

type ProjectModalProps = {
  project: Project | null;
  soundEnabled: boolean;
  onClose: () => void;
};

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
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="crafting-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="crafting-header">
          <span>Crafting Table</span>
          <button
            type="button"
            className="slot-button"
            onClick={() => {
              if (soundEnabled) {
                playSynth(240, 0.06);
              }
              onClose();
            }}
          >
            X
          </button>
        </div>
        <div className="crafting-grid">
          <div className={`crafting-preview accent-${project.accent}`}>
            <span>{project.title}</span>
          </div>
          <div className="crafting-info">
            <h3 id="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="modal-links">
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
