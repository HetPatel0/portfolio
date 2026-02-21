"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export type ProjectCardItem = {
  name: string;
  description: string;
  proof: string;
  liveUrl?: string;
  siteImage?: string;
  tags: string[];
};

type ProjectScrollCardsProps = {
  projects: ProjectCardItem[];
};

export function ProjectScrollCards({ projects }: ProjectScrollCardsProps) {
  return (
    <div className="mt-8 space-y-16 md:space-y-24">
      {projects.map((project, index) => (
        <section key={project.name} className="relative">
          <ContainerScroll
            titleComponent={
              <div className="mx-auto grid max-w-5xl gap-3 px-2 text-left md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-8 md:px-0">
                <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl md:text-4xl">
                  {project.name}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:justify-self-end md:text-base">
                  {project.description}
                </p>
              </div>
            }
          >
            {project.siteImage ? (
              project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live site`}
                  className="block h-full w-full"
                >
                  <Image
                    src={project.siteImage}
                    alt={`${project.name} website preview`}
                    width={1400}
                    height={800}
                    className="h-full w-full object-cover object-top transition-opacity duration-200 hover:opacity-95"
                  />
                </a>
              ) : (
                <Image
                  src={project.siteImage}
                  alt={`${project.name} website preview`}
                  width={1400}
                  height={800}
                  className="h-full w-full object-cover object-top"
                />
              )
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted/70 text-center text-sm font-medium text-muted-foreground">
                Preview unavailable
              </div>
            )}
          </ContainerScroll>

          <div className="mx-auto mt-3 max-w-5xl px-2 sm:mt-2 md:px-0">
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/90 md:text-base">
              {project.proof}
            </p>
          </div>

          <div className="mx-auto mt-5 flex max-w-5xl flex-wrap gap-2 px-2 md:px-0">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          {index < projects.length - 1 ? (
            <div className="mx-auto mt-12 h-px max-w-5xl bg-border/70 md:mt-16" />
          ) : null}
        </section>
      ))}
    </div>
  );
}
