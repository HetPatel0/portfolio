import type { SocialLink } from "@/components/portfolio/types";
import { minecraftPanelClass, sectionShellClass } from "@/components/portfolio/lib/styles";

type SiteFooterProps = {
  socialLinks: SocialLink[];
};

export function SiteFooter({ socialLinks }: SiteFooterProps) {
  return (
    <footer
      className={`${sectionShellClass} ${minecraftPanelClass} mt-10 flex flex-col justify-between gap-4 bg-[rgba(24,26,27,0.76)] p-4 sm:flex-row`}
    >
      <span className="font-(--font-display) text-[0.58rem] uppercase tracking-[0.08em] text-[#ffe093]">
        Crafted in the Overworld with Next.js
      </span>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-[1.2rem] text-[#f4efe4] sm:text-[1.35rem]">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
