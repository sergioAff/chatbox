import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Powered Text-to-Speech App",
  description:
    "Transform text into natural-sounding speech with our AI-powered text-to-speech app. Perfect for accessibility, content creation, and more.",
  keywords:
    "text-to-speech, AI, artificial intelligence, audio generation, accessibility, content creation, TTS app",
  authors: [
    { name: "Sergio Fernández", url: "https://sergiofernandez.netlify.app/" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  icons: "/ico.png",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
