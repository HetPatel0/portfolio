import { SectionTitle } from "@/components/portfolio/ui/section-title";

type AboutSectionProps = {
  typedIntro: string;
};

export function AboutSection({ typedIntro }: AboutSectionProps) {
  return (
    <section id="about" className="content-section">
      <SectionTitle eyebrow="About" title="Written In A Pixel Book" />
      <div className="book-card">
        <div className="book-page">
          <span className="book-label">Player Log</span>
          <p>{typedIntro}</p>
          <p>
            Placeholder bio text lives here so you can replace it with your own story, background, and what kind of
            work you want to attract.
          </p>
        </div>
        <div className="signboard">
          <span>Current Quest</span>
          <strong>Building memorable digital spaces.</strong>
        </div>
      </div>
    </section>
  );
}
