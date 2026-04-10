import type { SocialLink } from "@/components/portfolio/types";

type SiteFooterProps = {
  socialLinks: SocialLink[];
};

export function SiteFooter({ socialLinks }: SiteFooterProps) {
  return (
    <footer className="footer">
      <span>Crafted in the Overworld with Next.js</span>
      <div>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
