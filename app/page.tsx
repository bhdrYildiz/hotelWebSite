// app/page.tsx

export const generateMetadata = () => ({
  title: "Yıldız Otel Ürgüp | Kapadokya Jakuzili ve Taş Odalar",
  description:
    "Kapadokya'nın kalbinde, jakuzili taş odalar ve huzur dolu atmosferiyle Yıldız Otel Ürgüp sizi bekliyor. Balayı çiftleri ve tatilciler için ideal konaklama!",
  keywords: [
    "kapadokya otel", "jakuzili oda", "ürgüp otelleri", "balayı oteli",
    "taş oda", "yıldız otel", "yıldız otel kapadokya", "kapadokya tatil"
  ],
  alternates: {
    canonical: "https://yildizhotelcappadocia.com",
  },
  openGraph: {
    title: "Yıldız Otel Ürgüp | Kapadokya Jakuzili Taş Odalar",
    description:
      "Jakuzili ve taş mimarili özel odalar ile Kapadokya'da unutulmaz bir tatil deneyimi. Yıldız Otel Ürgüp'te huzur sizi bekliyor.",
    url: "https://yildizhotelcappadocia.com",
    siteName: "Yıldız Otel Kapadokya",
    images: [
      {
        url: "https://yildizhotelcappadocia.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Yıldız Otel Ürgüp Kapadokya",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
});

import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import CallToActionBanner from "./components/CallToActionBanner";
import ToursSection from "./components/ToursSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yıldız Otel Ürgüp</title>
        <meta name="description" content="Yıldız Otel Cappadocia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-0">
        <section className="relative">
          <Slider />
          <AboutSection />
          <RoomsSection />
          <div
            className="relative h-[500px] bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/bahce/slide6.webp')" }}
          >
          </div>
          <TestimonialsSection />
          <ToursSection />
          <CallToActionBanner />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
