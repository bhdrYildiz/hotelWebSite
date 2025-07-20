import "./global.css";
import type { Metadata } from "next";
import { Cormorant_Infant, Cormorant_SC } from "next/font/google";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-infant",
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-sc",
});

export const metadata: Metadata = {
  title: "Yıldız Otel Cappadocia",
  description: "Kapadokyada unutulmaz bir tatil deneyimi..",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "W1lKX5tF_py6MEepHknRQp89CgXDSV-p8hdDrTEwx0M",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantInfant.variable} ${cormorantSC.variable}`}>
      <body>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SFGQLN589J"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SFGQLN589J');
            `,
          }}
        />
        {/* Site içeriği */}
        {children}
        <WhatsappButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
