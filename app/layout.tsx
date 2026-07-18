
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const inter = Inter({
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Haroun | Frontend Developer",
    template: "%s | Haroun",
  },

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and responsive web development. Explore my portfolio and projects.",

  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Haroun Draoui",
    },
  ],

  creator: "Haroun Draoui",

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Haroun Portfolio",

  themeColor: "#0F172A",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={inter.className}>
          {children}
          <Toaster position="bottom-right" toastOptions={{duration: 2000,}} />
      </body>
    </html>
  );
}
