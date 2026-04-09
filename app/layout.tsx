import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400"
});

const terminalFont = VT323({
  subsets: ["latin"],
  variable: "--font-terminal",
  weight: "400"
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
      <body className={`${pixelFont.variable} ${terminalFont.variable}`}>{children}</body>
    </html>
  );
}
