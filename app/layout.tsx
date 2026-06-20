import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Akshay Obulapuram — AI Systems Engineer",
  description: "AI Systems Engineer & Full Stack Developer building intelligent systems, cybersecurity platforms, and cinematic digital experiences.",
  keywords: ["AI Systems","Cybersecurity","Computer Vision","Full Stack","Next.js","Portfolio"],
  authors: [{ name: "Akshay Obulapuram" }],
  icons: {
    icon: "/favicon_red.png",
    apple: "/favicon_red.png",
  },
  openGraph: {
    title: "Akshay Obulapuram — AI Systems Engineer",
    description: "Building intelligent systems that interpret complexity in real time.",
    url: "https://akshay00706.github.io/",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — Syne, Outfit, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* CDN Fonts — Monument Extended & General Sans (free, no download) */}
        <link
          href="https://fonts.cdnfonts.com/css/monument-extended"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/general-sans"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon_red.png" type="image/png" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScroll />
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}