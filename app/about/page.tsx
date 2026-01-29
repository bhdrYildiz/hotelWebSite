'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import {
    BedDouble,
    ShieldCheck,
    KeyRound
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInLeft, fadeInRight, fadeUp, stagger } from '../lib/animations';
import PageHero from '../components/PageHero';

const AboutPage = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col font-cormorant bg-[#ffffff]">
                <PageHero
                    title="HAKKIMIZDA"
                    subtitle="- YILDIZ OTEL&apos;İ KEŞFEDİN -"
                    backgroundImage="/images/otelBahce/resim3.jpg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'HAKKIMIZDA' },
                    ]}
                />

                <section className="bg-white">
                    <motion.div
                        className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="relative pb-4 md:pb-0">
                            <motion.div
                                variants={fadeInLeft}
                                className="relative h-[450px] md:h-[520px] overflow-hidden shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/images/otelBahce/resim11.jpeg"
                                    alt="Yıldız Otel - Lobi"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 520px"
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className="absolute -bottom-24 left-4 md:left-24 h-[280px] w-[280px] md:h-[320px] md:w-[320px] overflow-hidden border-4 border-white shadow-xl bg-white"
                                whileHover={{ scale: 1.03, y: -6 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/images/otelBahce/resim12.jpeg"
                                    alt="Yıldız Otel - Detay"
                                    fill
                                    sizes="(max-width: 768px) 60vw, 260px"
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            variants={fadeInRight}
                            className="text-[#1c2c34]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div variants={stagger} className="space-y-5">
                                <motion.p variants={fadeUp} className="text-base font-bold uppercase tracking-[0.35em] text-[#ab9a8b] uppercase">
                                    YILDIZ OTEL
                                </motion.p>
                                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl tracking-wide">
                                    Tarihçemiz
                                </motion.h2>
                                <motion.p variants={fadeUp} className="text-base leading-relaxed text-[#1c2c34] font-semibold tracking-wide">
                                    Kapadokya&apos;nın kalbi Ürgüp&apos;te yer alan otelimiz, 1989 yılında hizmet vermeye başladı. Bir aile işletmesi olarak, 35 yılı aşkın süredir hizmet veren otelimizde
                                    misafirlerimize hijyenli ve konforlu bir konaklama hizmeti sunuyoruz.
                                    İlk açıldığı günden beri yerli ve yabancı misafirlerine kapılarını hiç kapatmayan otelimizde 2025 senesinde kapsamlı bir restorasyon gerçekleştirildi.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-base leading-relaxed text-[#1c2c34] font-semibold tracking-wide">
                                    Bugün Yıldız Otel Ürgüp, sıcak misafirperverliği ve konforlu hizmet anlayışıyla
                                    misafirlerine özel bir konaklama deneyimi yaşatmaya devam ediyor.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Sticky Gallery Section */}
                <section className="bg-white">
                    <div className="max-w-[1280px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-24 mt-12 items-start">
                        <motion.div
                            className="lg:sticky lg:top-28 space-y-8 text-[#1c2c34]"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.p variants={fadeUp} className="text-base font-semibold tracking-[0.35em] text-[#ab9a8b] uppercase">
                                YILDIZ OTEL
                            </motion.p>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl tracking-wide">
                                Yerel İmkanlar
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-base leading-relaxed text-[#1c2c34] font-semibold tracking-wide">
                                Otelimiz Ürgüp ilçe merkezinde yer almaktadır. Ürgüp otogarına 300 metre mesafede bulunmaktadır. Çarşı merkezine 500 metre mesafede bulunmaktadır.
                                Kapadokya&apos;da yer alan gezi ve örenyerlerine araba ile 10 - 15 dakikada ulaşabilirsiniz.
                            </motion.p>

                            <motion.div variants={fadeUp} className="space-y-5 pt-4">
                                {[
                                    {
                                        title: 'Yerel Restoranlar',
                                        text: 'Çarşı merkezinde yer alan restoranlarımızda yerel lezzetleri deneyimleyebilirsiniz.',
                                    },
                                    {
                                        title: 'Konum',
                                        text: 'Ürgüp otogarından yürüyerek 5 dakikada otelimize ulaşabilirsiniz.',
                                    },
                                    {
                                        title: 'Gezi ve Örenyerleri',
                                        text: 'Kapadokya\'da yer alan gezi ve örenyerlerine araba ile 10 - 15 dakikada ulaşabilirsiniz.',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-[#ab9a8b]">
                                            ★
                                        </div>
                                        <div>
                                            <p className="text-lg tracking-wide text-[#1c2c34] font-bold">{item.title}</p>
                                            <p className="text-sm text-[#1c2c34] font-semibold tracking-wide">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                '/images/otelBahce/resim9.jpeg',
                                '/images/otelBahce/resim14.jpeg',
                                '/images/otelBahce/resim15.jpeg',
                            ].map((src, index) => (
                                <motion.div
                                    key={src}
                                    variants={fadeInRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="relative h-[320px] md:h-[480px] max-w-[560px] overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src={src}
                                        alt={`Yerel imkanlar ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 360px"
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Cards Section */}
                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'GÜVENLİ KONAKLAMA',
                                    text:
                                        'Misafirlerimizin güvenliği için temizlik ve hijyen standartlarını titizlikle uygularız.',
                                    icon: <ShieldCheck className="h-6 w-6" />,
                                },
                                {
                                    title: '24 SAAT İPTAL HAKKI',
                                    text:
                                        'Planlarınız değişirse, uygun koşullarda 24 saat içinde iptal kolaylığı sunuyoruz.',
                                    icon: <KeyRound className="h-6 w-6" />,
                                },
                                {
                                    title: 'TAM ODA DONANIMI',
                                    text:
                                        'Odalarımız konforunuz için gerekli tüm detaylarla donatılmıştır.',
                                    icon: <BedDouble className="h-6 w-6" />,
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="group border border-black/10 bg-white text-[#1c2c34] transition-all duration-600 ease-out hover:-translate-y-2 hover:shadow-2xl hover:bg-[#1c2c34] hover:text-white"
                                >
                                    <div className="px-8 py-12 text-center space-y-6">
                                        <div className="mx-auto h-14 w-14 bg-[#ab9a8b] text-white flex items-center justify-center">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-lg tracking-[0.2em]">{card.title}</h3>
                                        <p className="text-sm leading-relaxed text-[#1c2c34]/70 group-hover:text-white/80 transition-colors duration-800">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Book Direct Section */}
                <section
                    className="relative bg-white overflow-hidden group"
                    style={{
                        backgroundImage: "url('/images/otelBahce/resim11.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/60" />

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
                        {/* Left */}
                        <div className="text-white space-y-4">
                            <p className="text-xs tracking-[0.35em] uppercase text-[#ab9a8b] transition-all duration-500 group-hover:text-white">
                                REZERVASYON
                            </p>
                            <h2 className="text-4xl md:text-5xl tracking-wide leading-snug transition-transform duration-700 ease-out group-hover:-translate-y-0.5">
                                ÖZEL TEKLİFLER İÇİN
                                <br />
                                DOĞRUDAN REZERVASYON
                            </h2>
                            <p className="text-sm text-white/80 max-w-md transition-colors duration-500 group-hover:text-white/90">
                                Doğrudan rezervasyonlarda daha iyi fiyat, öncelikli destek ve özel avantajlar sunuyoruz.
                            </p>
                        </div>

                        <div className="bg-white text-[#1c2c34] p-10 shadow-xl transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl">
                            <div className="space-y-6">
                                {[
                                    { title: "En İyi Fiyat Garantisi", text: "Doğrudan rezervasyonlarda özel fiyat avantajı." },
                                    { title: "Öncelikli Oda Yükseltme", text: "Uygunluk durumuna göre oda yükseltme ayrıcalığı." },
                                    { title: "Yeme-İçme İndirimi", text: "Otel hizmetlerinde indirimli fiyatlar." },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="border-b border-black/10 pb-4 transition-all duration-500 hover:border-black/25"
                                    >
                                        <p className="text-lg tracking-wide text-[#1c2c34] font-bold transition-transform duration-500 hover:translate-x-1">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-[#1c2c34] font-semibold tracking-wide">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Button hover animation */}
                            <Link
                                href="/reservation"
                                prefetch={false}
                                className="mt-6 inline-flex items-center justify-center border border-black/30 px-8 py-3 text-sm tracking-widest text-[#1c2c34]
                                transition-all duration-500 hover:border-black hover:bg-[#1f2d34] hover:text-white hover:-translate-y-0.5"
                            >
                                REZERVASYON YAP
                            </Link>
                        </div>
                    </div>
                </section>


                {/* Social Follow Section */}
                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-20">
                        <div className="space-y-6 text-[#1c2c34] text-center">
                            <h2 className="text-4xl md:text-6xl tracking-wide">
                                Sosyal Medya&apos;da Takip Edin
                            </h2>
                            <p className="text-base text-[#1c2c34]/80">
                                Güncel görseller ve son haberlerimiz sosyal medya hesaplarımızda:
                            </p>
                            <div className="flex items-center justify-center gap-6 text-sm tracking-widest uppercase">
                                <Link
                                    href="https://www.instagram.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.facebook.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Facebook
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-10 w-full">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    '/images/room-106/106-4.jpeg',
                                    '/images/otelBahce/resim2.jpg',
                                    '/images/room-104/104-1.jpg',
                                    '/images/otelBahce/resim4.jpg'
                                ].map((src, index) => (
                                    <div key={index} className="relative aspect-square hover:scale-105 transition-all duration-300 overflow-hidden bg-white">
                                        <Image
                                            src={src}
                                            alt={`Instagram ${index + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
                                <Link
                                    href="https://www.instagram.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-black/40 px-8 py-3 text-sm tracking-widest text-[#1c2c34] transition-all duration-300 hover:border-black hover:bg-[#1c2c34] hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    INSTAGRAM&apos;DA TAKİP ET
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
