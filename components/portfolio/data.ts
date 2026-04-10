import type { NavItem, Project, Skill, SocialLink } from "@/components/portfolio/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "01" },
  { id: "about", label: "About", icon: "02" },
  { id: "projects", label: "Projects", icon: "03" },
  { id: "skills", label: "Skills", icon: "04" },
  { id: "contact", label: "Contact", icon: "05" }
];

export const projects: Project[] = [
  {
    title: "Biome Builder",
    description:
      "A placeholder showcase for a world-building dashboard with map overlays, terrain tools, and live collaboration.",
    stack: ["Next.js", "TypeScript", "Three.js", "Supabase"],
    github: "#",
    demo: "#",
    accent: "grass"
  },
  {
    title: "Redstone Automations",
    description:
      "A placeholder product page for automation flows, event triggers, and command-style workflow customization.",
    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "#",
    demo: "#",
    accent: "lava"
  },
  {
    title: "Crafting Commerce",
    description:
      "A placeholder e-commerce experience focused on playful UX, animated cards, and rapid storefront customization.",
    stack: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    github: "#",
    demo: "#",
    accent: "diamond"
  }
];

export const skills: Skill[] = [
  { name: "Frontend", item: "Pickaxe", level: 92, description: "Next.js, React, responsive UI systems" },
  { name: "UI Animation", item: "Sword", level: 85, description: "Motion, transitions, interactive storytelling" },
  { name: "Backend", item: "Shovel", level: 76, description: "APIs, auth, data modeling, integrations" },
  { name: "Design Systems", item: "Totem", level: 88, description: "Scalable components and visual consistency" }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" }
];

export const introText =
  "I build interactive products with game-like feedback, strong frontend craft, and a bias for memorable interfaces.";
