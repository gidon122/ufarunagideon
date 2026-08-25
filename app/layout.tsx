import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gideon Ufaruna | Full-Stack Developer & AI Engineer",
  description:
    "Personal developer portfolio of Ufaruna Gideon - Computer Engineering Student at FUT Minna, Full-Stack Developer & Aspiring AI Engineer building modern web applications and intelligent digital products.",
  keywords: [
    "Gideon Ufaruna",
    "Ufaruna Gideon",
    "Full-Stack Developer",
    "AI Engineer",
    "Computer Engineering",
    "FUT Minna",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Agentic AI",
    "Portfolio",
  ],
  authors: [{ name: "Ufaruna Gideon" }],
  creator: "Ufaruna Gideon",
  metadataBase: new URL("https://gideonufaruna.vercel.app"),
  openGraph: {
    title: "Gideon Ufaruna | Full-Stack Developer & AI Engineer",
    description:
      "Computer Engineering student at FUT Minna, Full-Stack Developer & Aspiring AI Engineer building modern web apps and intelligent tools.",
    url: "https://gideonufaruna.vercel.app",
    siteName: "Gideon Ufaruna Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gideon Ufaruna | Full-Stack Developer & AI Engineer",
    description:
      "Computer Engineering student at FUT Minna building web applications, cloud backends, and AI products.",
    creator: "@ufarunagideon",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
