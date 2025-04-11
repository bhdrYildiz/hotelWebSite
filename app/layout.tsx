// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Infant, Cormorant_SC } from "next/font/google";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  // CSS değişkeni olarak tanımlıyoruz
  variable: "--font-cormorant-infant",
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-sc",
});

export const metadata: Metadata = {
  title: "Otel Web Sitesi",
  description: "Otelimiz için modern ve dinamik web sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantInfant.variable} ${cormorantSC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
