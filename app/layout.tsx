import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import LenisProvider from "@/components/lenis-provoder";

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${dmSerif.variable} antialiased`}>

        <Script id="theme-init" strategy="beforeInteractive">
         
        </Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisProvider>

        {children}
          </LenisProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
