export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="font-[var(--font-display)] text-[0.58rem] uppercase tracking-[0.08em] text-[#ffe7a6]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-display)] text-[clamp(1.35rem,3vw,2.55rem)] leading-[1.15] text-[#fbf6eb] [text-shadow:3px_3px_0_rgba(0,0,0,0.28)]">
        {title}
      </h2>
    </div>
  );
}
