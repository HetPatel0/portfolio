import { SectionTitle } from "@/components/portfolio/ui/section-title";
import { minecraftInputClass, sectionShellClass } from "@/components/portfolio/lib/styles";
import { MinecraftButton } from "@/components/portfolio/ui/minecraft/button";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";
import { MinecraftTag } from "@/components/portfolio/ui/minecraft/tag";

type ContactSectionProps = {
  onExecuteCommand: () => void;
};

export function ContactSection({ onExecuteCommand }: ContactSectionProps) {
  return (
    <section id="contact" className={`${sectionShellClass} pt-8`}>
      <SectionTitle eyebrow="Contact" title="Send A Command" />
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <MinecraftPanel tone="dark" className="overflow-hidden">
          <div className="bg-black/45 px-4 py-3 [font-family:var(--font-display)] text-[0.6rem] uppercase tracking-[0.08em] text-[#ffe093]">
            <MinecraftTag tone="gold">Server Chat</MinecraftTag>
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
        </MinecraftPanel>

        <MinecraftPanel tone="default" className="grid gap-3 p-4">
          <label className="grid gap-1.5 text-[1.25rem] leading-[1.1] text-[#fff2c9] sm:text-[1.35rem]">
            Name
            <input
              type="text"
              placeholder="PlayerOne"
              className={minecraftInputClass}
            />
          </label>
          <label className="grid gap-1.5 text-[1.25rem] leading-[1.1] text-[#fff2c9] sm:text-[1.35rem]">
            Email
            <input
              type="email"
              placeholder="player@example.com"
              className={minecraftInputClass}
            />
          </label>
          <label className="grid gap-1.5 text-[1.25rem] leading-[1.1] text-[#fff2c9] sm:text-[1.35rem]">
            Message
            <textarea
              rows={5}
              placeholder="/tell YourName I have a project idea..."
              className={minecraftInputClass}
            />
          </label>
          <MinecraftButton type="button" onClick={onExecuteCommand}>
            Execute Command
          </MinecraftButton>
        </MinecraftPanel>
      </div>
    </section>
  );
}
