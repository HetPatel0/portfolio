export type SectionId = "home" | "about" | "projects" | "skills" | "contact";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  accent: string;
};

export type Skill = {
  name: string;
  item: string;
  level: number;
  description: string;
};

export type NavItem = {
  id: SectionId;
  label: string;
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
