import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ProjectScrollCards } from "@/components/project-scroll-cards";

const projects = [
  {
    name: "ML Simulation",
    description:
      "An interactive simulation app that visualizes machine learning model behavior and pairs every demo with clear theory notes.",
    proof:
      "Built to translate technical ideas into an interface that feels intuitive and educational.",
    liveUrl: "https://mlsimulation.vercel.app/",
    siteImage: "/projects/ml-simulation.png",
    tags: ["Next.js", "Tailwind", "Learning UX"],
  },
  {
    name: "Expense Tracker",
    description:
      "A focused expense tracker that monitors spending patterns and gives AI-based feedback for better day-to-day financial decisions.",
    proof:
      "Shows product thinking, practical UI flow, and clean state handling for real usage.",
    liveUrl: "https://stacksup.vercel.app/",
    siteImage: "/projects/expense-tracker.png",
    tags: ["Full-Stack", "AI Feedback", "Product UX"],
  },
  {
    name: "CardioCheck",
    description:
      "An AI/ML project that predicts potential heart disease risk from user inputs like age, blood pressure, and related metrics.",
    proof:
      "Combines model-backed prediction with a simple, trust-focused user input experience.",
    liveUrl: "https://cardiocheckai.vercel.app/",
    siteImage: "/projects/cardio-check.png",
    tags: ["Machine Learning", "Healthcare", "Predictive Model"],
  },
];

const principles = [
  {
    title: "Clarity first",
    text: "I design screens so users understand the next action without guessing.",
  },
  {
    title: "Systems over quick fixes",
    text: "I prefer reusable patterns and consistent components over one-off styling.",
  },
  {
    title: "Explain complex work simply",
    text: "I enjoy turning technical depth into interfaces people can read and trust.",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_90%,#ffffff_40%,#1d9bf0_100%)] transition-all duration-700 ease-in-out dark:bg-[radial-gradient(125%_125%_at_50%_90%,#15181c_40%,#2563eb_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-64 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <header
          className="reveal flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "50ms" }}
        >
          <p className="font-medium tracking-[0.16em] text-muted-foreground uppercase">
            Het Bhuva
          </p>
          <nav className="flex flex-wrap items-center gap-3 text-muted-foreground sm:gap-4">
            <Link className="transition-colors hover:text-foreground" href="#projects">
              Projects
            </Link>
            <Link className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <section
          className="reveal mt-16 max-w-4xl md:mt-24"
          style={{ animationDelay: "130ms" }}
        >
          <Badge variant="subtle" className="rounded-full px-3 py-1">
            AI/ML Learner and Full-Stack Developer
          </Badge>
          <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Building digital work that feels calm, sharp, and genuinely useful.
          </h1>
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            <TextGenerateEffect words="I am Het Bhuva. I blend frontend precision with machine learning curiosity,
            creating products that not only work well, but also explain complex ideas
            in a clean and human way."/>
            
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#projects">View Featured Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:hetp5852@gmail.com">Start a Conversation</a>
            </Button>
          </div>
        </section>

        <Separator className="reveal my-14 md:my-20" style={{ animationDelay: "280ms" }} />

        <section id="projects" className="reveal" style={{ animationDelay: "340ms" }}>
          <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Selected Projects
          </p>
          <ProjectScrollCards projects={projects} />
        </section>

        <section className="reveal mt-16 grid gap-5 md:mt-20 md:grid-cols-3" style={{ animationDelay: "420ms" }}>
          {principles.map((principle) => (
            <Card key={principle.title} className="section-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{principle.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section
          id="contact"
          className="reveal mt-16 rounded-2xl border border-border/80 section-card p-8 md:mt-20 md:p-10"
          style={{ animationDelay: "500ms" }}
        >
          <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Open to opportunities where good engineering and thoughtful design meet.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="mailto:hetp5852@gmail.com">hetp5852@gmail.com</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/HetPatel0" target="_blank" rel="noreferrer">
                github.com/HetPatel0
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
