import Image from "next/image";
import Link from "next/link";

import LightRays from "@/components/reactbits/light-rays";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const featuredProjects = [
  {
    name: "ML Simulation",
    summary:
      "An interactive learning product that explains model behavior through visual demos, guided controls, and clear theory notes.",
    details:
      "Built to make technical concepts feel approachable without flattening the depth behind them.",
    impact: "Brings machine learning education into a product experience that feels visual, practical, and calm.",
    liveUrl: "https://mlsimulation.vercel.app/",
    siteImage: "/projects/ml-simulation.png",
    tags: ["Next.js", "Interactive Learning", "UI Systems"],
  },
  {
    name: "Expense Tracker",
    summary:
      "A focused finance tool for daily tracking, pattern awareness, and AI-assisted spending feedback.",
    details:
      "Designed around fast logging, clean information hierarchy, and useful prompts instead of noisy dashboards.",
    impact: "Shows product thinking, full-stack execution, and a sharper approach to financial UX.",
    liveUrl: "https://stacksup.vercel.app/",
    siteImage: "/projects/expense-tracker.png",
    tags: ["Product Design", "Full Stack", "AI Feedback"],
  },
  {
    name: "CardioCheck",
    summary:
      "A prediction-focused healthcare interface that estimates heart disease risk using clinical inputs and model-backed logic.",
    details:
      "Structured to keep trust high by reducing friction and presenting sensitive information with restraint.",
    impact: "Combines machine learning output with an interface that feels understandable and credible.",
    liveUrl: "https://cardiocheckai.vercel.app/",
    siteImage: "/projects/cardio-check.png",
    tags: ["Machine Learning", "Healthcare", "Predictive UX"],
  },
];

const capabilities = [
  {
    title: "Frontend Craft",
    text: "Interfaces with strong hierarchy, cleaner spacing, and interaction patterns that feel deliberate.",
  },
  {
    title: "Product Thinking",
    text: "I care about what a user should notice first, what they should trust, and what should stay quiet.",
  },
  {
    title: "Applied ML",
    text: "I like turning technical models into products people can actually use, understand, and revisit.",
  },
];

const metrics = [
  { value: "3", label: "featured builds shipped end-to-end" },
  { value: "AI/ML", label: "focus area paired with product UI" },
  { value: "Full stack", label: "from interface to logic and deployment" },
];

const principles = [
  "Reduce noise until the core action is obvious.",
  "Give technical work a presentation layer that feels trustworthy.",
  "Use motion and visuals to support clarity, not distract from it.",
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="grain-overlay pointer-events-none fixed inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[48rem] bg-[radial-gradient(circle_at_top,rgba(86,119,184,0.18),transparent_54%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-48 -z-20 h-80 w-80 rounded-full bg-[rgba(93,132,157,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-[28rem] -z-20 h-[28rem] w-[28rem] rounded-full bg-[rgba(42,62,103,0.1)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 md:px-8 lg:px-10">
        <header className="site-frame reveal sticky top-4 z-40 flex items-center justify-between gap-4 rounded-full px-5 py-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
              Het Bhuva
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link className="interactive-link hover:text-foreground" href="#work">
              Work
            </Link>
            <Link className="interactive-link hover:text-foreground" href="#approach">
              Approach
            </Link>
            <Link className="interactive-link hover:text-foreground" href="#contact">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </header>

        <section className="hero-stage relative mt-8 overflow-hidden rounded-[2.5rem] pb-14 pt-10 md:mt-10 md:pb-20 md:pt-14">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <LightRays
              raysOrigin="top-center"
              raysColor="#93a7d8"
              raysSpeed={0.8}
              lightSpread={1.15}
              rayLength={2.2}
              fadeDistance={1.2}
              saturation={0.6}
              mouseInfluence={0.08}
              noiseAmount={0.03}
              distortion={0.04}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(150,170,222,0.18),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(199,214,255,0.14),transparent_20%),linear-gradient(180deg,rgba(6,15,31,0.08),transparent_58%)]" />

          <div className="relative grid gap-8 px-6 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:px-10">
            <div className="reveal space-y-7" style={{ animationDelay: "80ms" }}>
              <Badge
                variant="subtle"
                className="rounded-full border-white/10 bg-white/8 px-4 py-1.5 text-[0.7rem] tracking-[0.18em] text-white/82 uppercase backdrop-blur-md"
              >
                React Bits Powered
              </Badge>
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.24em] text-white/56 uppercase">
                  AI/ML learner and full-stack developer
                </p>
                <h1 className="font-display text-5xl leading-[0.94] tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-[5.5rem]">
                  A more professional portfolio with a stronger visual foundation.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/74 md:text-lg">
                  I build product interfaces that feel structured, premium, and easy to trust.
                  This version uses a React Bits background treatment to give the site a more
                  composed, studio-quality presentation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/92">
                  <Link href="#work">Explore Projects</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border border-white/15 bg-white/6 text-white hover:bg-white/12 dark:text-white"
                >
                  <a href="mailto:hetp5852@gmail.com">hetp5852@gmail.com</a>
                </Button>
              </div>
            </div>

            <aside
              className="reveal grid gap-6 rounded-[2rem] border border-white/10 bg-white/7 p-6 text-white backdrop-blur-xl md:p-7"
              style={{ animationDelay: "160ms" }}
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/54 uppercase">Profile</p>
                <p className="text-lg leading-8 text-white/84">
                  I care about calm interfaces, strong structure, and presenting technical work in a way
                  that people can understand quickly.
                </p>
              </div>
              <Separator className="bg-white/10" />
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-black/12 p-4">
                    <p className="font-display text-3xl leading-none md:text-4xl">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/58">{metric.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="reveal grid gap-5 md:grid-cols-[0.95fr_1.05fr]" style={{ animationDelay: "220ms" }}>
          <div className="surface-panel rounded-[2rem] p-7 md:p-8">
            <p className="eyebrow">Positioning</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              I build products that feel more refined than a standard developer portfolio.
            </h2>
          </div>
          <div className="surface-panel rounded-[2rem] p-7 md:p-8">
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              The focus here is not decoration for its own sake. It is clearer communication, better
              sequencing, cleaner spacing, and interfaces that give technical ideas a more premium presentation.
            </p>
          </div>
        </section>

        <section id="work" className="pt-16 md:pt-24">
          <div className="reveal flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-heading mt-3">Projects with product thinking and technical depth.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Each project balances interface clarity with real implementation work, not just visual polish.
            </p>
          </div>

          <div className="mt-8 space-y-6 md:mt-10">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="reveal project-card grid gap-6 rounded-[2rem] p-5 md:p-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
                style={{ animationDelay: `${300 + index * 80}ms` }}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden rounded-[1.5rem] border border-border/70 bg-[rgba(255,255,255,0.45)]`}>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="group block">
                    <Image
                      src={project.siteImage}
                      alt={`${project.name} preview`}
                      width={1400}
                      height={900}
                      className="h-auto w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </a>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center`}>
                  <p className="eyebrow">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-foreground/90">{project.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{project.details}</p>
                  <p className="mt-5 border-l border-border pl-4 text-sm leading-7 text-foreground/80 md:text-base">
                    {project.impact}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Button asChild variant="outline">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        View live project
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="grid gap-6 pt-16 md:pt-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal space-y-3">
            <p className="eyebrow">Approach</p>
            <h2 className="section-heading">How I make products feel more intentional.</h2>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal surface-panel rounded-[1.75rem] p-6"
                  style={{ animationDelay: `${520 + index * 70}ms` }}
                >
                  <p className="text-sm font-semibold tracking-[0.08em] uppercase text-foreground/75">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="reveal surface-panel rounded-[2rem] p-7 md:p-8" style={{ animationDelay: "700ms" }}>
              <p className="eyebrow">Working principles</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {principles.map((principle) => (
                  <div key={principle} className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4">
                    <p className="text-sm leading-7 text-foreground/85">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pt-16 md:pt-24">
          <div className="reveal contact-panel rounded-[2.5rem] px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="eyebrow text-primary-foreground/70">Contact</p>
                <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-[-0.03em] text-primary-foreground md:text-5xl">
                  Open to roles and collaborations where product quality matters.
                </h2>
              </div>
              <div className="space-y-4 text-primary-foreground/78">
                <p className="text-base leading-8">
                  If you want a portfolio, product, or ML-backed interface to look sharper and feel more
                  considered, I can help build it.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="secondary">
                    <a href="mailto:hetp5852@gmail.com">Email me</a>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <a href="https://github.com/HetPatel0" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
