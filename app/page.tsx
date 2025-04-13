// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Otel Web Sitesi</title>
        <meta name="description" content="Otelimiz için modern ve dinamik web sitesi" />
      </Head>
      <Header />
      <main className="mt-0">
        <section className="relative">
          <Slider />
          <AboutSection />
          <RoomsSection />
          <TestimonialsSection />
          <Footer />
        </section>
        {/* Diğer sayfa bölümlerini ekleyebilirsiniz: Hakkımızda, Odalar, Galeri vs. */}
      </main>
    </>
  );
};

export default Home;
