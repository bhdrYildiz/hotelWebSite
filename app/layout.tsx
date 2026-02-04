import "./global.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Yıldız Otel Kapadokya",
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
    <html lang="tr" className={playfairDisplay.variable}>
      <body className="min-h-screen overflow-x-hidden">
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
        {children}
        <WhatsappButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
