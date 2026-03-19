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
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Yıldız Otel Kapadokya",
  "url": "https://www.yildizhotelcappadocia.com",
  "telephone": "+903843414610",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kavaklıönü Mah., Atatürk Blv. No:61",
    "addressLocality": "Ürgüp",
    "addressRegion": "Nevşehir",
    "postalCode": "50400",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.6416",
    "longitude": "34.9147"
  },
  "sameAs": [
    "https://www.instagram.com/urgupyildizhotel/",
    "https://www.facebook.com/urgupyildizhotel/",
    "https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${playfairDisplay.variable} overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
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
