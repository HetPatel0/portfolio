import type { SocialLink } from "@/components/portfolio/types";
import { sectionShellClass } from "@/components/portfolio/lib/styles";
import { MinecraftButton } from "@/components/portfolio/ui/minecraft/button";
import { MinecraftPanel } from "@/components/portfolio/ui/minecraft/panel";

type SiteFooterProps = {
  socialLinks: SocialLink[];
};

export function SiteFooter({ socialLinks }: SiteFooterProps) {
  return (
    <MinecraftPanel
      tone="dark"
      className={`${sectionShellClass} mt-10 flex flex-col justify-between gap-4 p-4 sm:flex-row`}
      as="footer"
    >
      <span className="mcui-title text-[0.58rem] text-[#ffe093]">
        Crafted in the Overworld with Next.js
      </span>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <MinecraftButton key={link.label} href={link.href} variant="clear">
            {link.label}
          </MinecraftButton>
        ))}
      </div>
    </MinecraftPanel>
  );
}
