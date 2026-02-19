import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Het Bhuva | Portfolio",
  description:
    "Portfolio of Het Bhuva, AI/ML learner and full-stack developer building clear, thoughtful digital products.",
};

const themeInitScript = `
(() => {
  const root = document.documentElement;
  const key = "portfolio-theme";

  const readThemeCookie = () => {
    const cookieEntry = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(key + "="));
    if (!cookieEntry) {
      return null;
    }

    const cookieValue = decodeURIComponent(cookieEntry.split("=")[1] ?? "");
    return cookieValue === "light" || cookieValue === "dark" ? cookieValue : null;
  };

  const applyTheme = (theme) => {
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    document.cookie = key + "=" + encodeURIComponent(theme) + "; path=/; max-age=31536000; SameSite=Lax";
  };

  try {
    let saved = null;
    try {
      const stored = window.localStorage.getItem(key);
      saved = stored === "light" || stored === "dark" ? stored : null;
    } catch {}

    if (!saved) {
      saved = readThemeCookie();
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved ?? (prefersDark ? "dark" : "light");
    applyTheme(theme);

    try {
      window.localStorage.setItem(key, theme);
    } catch {}
  } catch {
    applyTheme("light");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${dmSerif.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
