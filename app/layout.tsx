import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mugilan M | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Mugilan M — Computer Science Engineering student passionate about full-stack development, AI, NLP, RAG systems, real-time applications and problem solving.",
  keywords: [
    "Mugilan M",
    "Full Stack Developer",
    "AI Developer",
    "Software Engineer",
    "Computer Science Student",
    "Chennai Institute of Technology",
    "RAG",
    "NLP",
    "React.js",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Mugilan M" }],
  openGraph: {
    title: "Mugilan M | Full Stack Developer & AI Engineer",
    description:
      "Building intelligent digital experiences with code & AI. CS Student @ Chennai Institute of Technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#080c14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
