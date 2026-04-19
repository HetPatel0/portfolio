import { SectionTitle } from "@/components/portfolio/ui/section-title";
import { minecraftButtonClass, minecraftPanelClass, sectionShellClass } from "@/components/portfolio/lib/styles";

type ContactSectionProps = {
  onExecuteCommand: () => void;
};

export function ContactSection({ onExecuteCommand }: ContactSectionProps) {
  return (
    <section id="contact" className={`${sectionShellClass} pt-8`}>
      <SectionTitle eyebrow="Contact" title="Send A Command" />
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className={`${minecraftPanelClass} overflow-hidden bg-[rgba(19,18,24,0.92)]`}>
          <div className="bg-black/45 px-4 py-3 [font-family:var(--font-display)] text-[0.6rem] uppercase tracking-[0.08em] text-[#ffe093]">
            Server Chat
          </div>
          <div className="min-h-full border-4 border-black/30 bg-[rgba(38,34,45,0.85)] p-4">
            <p className="text-[1.3rem] leading-[1.12] text-[#f4efe4] sm:text-[1.45rem]">
              <span className="mr-1 inline text-[1.25rem] text-[#fff0b6] sm:text-[1.35rem]">[Visitor]</span> /msg
              YourName Let&apos;s build something ambitious.
            </p>
            <p className="mt-3 text-[1.3rem] leading-[1.12] text-[#f4efe4] sm:text-[1.45rem]">
              <span className="mr-1 inline text-[1.25rem] text-[#fff0b6] sm:text-[1.35rem]">[System]</span> Fill the
              command block below and swap in your real links.
            </p>
          </div>
        </div>

        <form
          className={`${minecraftPanelClass} grid gap-3 bg-[linear-gradient(180deg,rgba(91,102,117,0.88),rgba(34,44,58,0.92))] p-4`}
        >
          <label className="grid gap-1.5 text-[1.25rem] leading-[1.1] text-[#fff2c9] sm:text-[1.35rem]">
            Name
            <input
              type="text"
              placeholder="PlayerOne"
              className="border-4 border-black/35 bg-[rgba(14,20,28,0.82)] px-4 py-3 text-[#f7f5eb] outline-none placeholder:text-[#cdd8e2]/65"
            />
          </label>
          <label className="grid gap-1.5 text-[1.25rem] leading-[1.1] text-[#fff2c9] sm:text-[1.35rem]">
            Email
            <input
              type="email"
              placeholder="player@example.com"
              className="border-4 border-black/35 bg-[rgba(14,20,28,0.82)] px-4 py-3 text-[#f7f5eb] outline-none placeholder:text-[#cdd8e2]/65"
            />
          </label>
          <label className="grid gap-1.5 text-[1.25rem] leading-[1.1] text-[#fff2c9] sm:text-[1.35rem]">
            Message
            <textarea
              rows={5}
              placeholder="/tell YourName I have a project idea..."
              className="border-4 border-black/35 bg-[rgba(14,20,28,0.82)] px-4 py-3 text-[#f7f5eb] outline-none placeholder:text-[#cdd8e2]/65"
            />
          </label>
          <button type="button" className={minecraftButtonClass} onClick={onExecuteCommand}>
            Execute Command
          </button>
        </form>
      </div>
    </section>
  );
}
