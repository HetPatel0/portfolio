import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const minecraftFont = localFont({
  src: "./fonts/Monocraft.ttf",
  variable: "--font-minecraft",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Minecraft Portfolio",
  description: "An interactive Minecraft-inspired personal portfolio built with Next.js."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={minecraftFont.variable}>{children}</body>
    </html>
  );
}
