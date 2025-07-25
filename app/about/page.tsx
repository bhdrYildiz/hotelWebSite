'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import {
    Car,
    Wifi,
    Martini,
    Snowflake,
    Tv,
    ParkingSquare,
    Utensils,
    BedDouble,
    PhoneCall,
    Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    { icon: <Car size={24} />, label: 'Airport Pickup' },
    { icon: <Wifi size={24} />, label: 'Wi-Fi' },
    { icon: <Martini size={24} />, label: 'Bar' },
    { icon: <Snowflake size={24} />, label: 'Air Conditioner' },
    { icon: <Tv size={24} />, label: 'Widescreen TV' },
    { icon: <ParkingSquare size={24} />, label: 'Car Parking' },
    { icon: <Utensils size={24} />, label: 'Breakfast' },
    { icon: <BedDouble size={24} />, label: 'Long Beds' },
];

const AboutPage = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col font-cormorant bg-[#f8f8f3]">
                {/* Banner */}
                <section
                    className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/banner.jpg')" }}
                >
                    <h1 className="text-[#1f2c42] text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                        Hakkımızda
                    </h1>
                </section>

                {/* Content Section */}
                <section className="container max-w-[1200px] min-h-[600px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-2">
                    {/* Text Content */}
                    <div className="space-y-6 text-[#1f2c42]">
                        <p className="text-sm uppercase tracking-widest text-[#421f1f] font-semibold text-center md:text-left">
                            Kapadokya&apos;da Unutulmaz Konaklama Deneyimi
                        </p>
                        <h2 className="text-4xl font-bold leading-snug mb-4 text-center md:text-left">YILDIZ OTEL</h2>

                        <p className="text-base leading-relaxed">
                            Kapadokya&apos;nın büyüleyici atmosferinde, geleneksel taş mimari ile modern konforu bir araya getiren YILDIZ OTEL CAPPADOCIA, bölgenin en özel noktalarından biri olan Ürgüp&apos;te konumlanmıştır. Her biri özenle tasarlanmış odalarımızda, huzur ve estetiği bir arada yaşarken, doğanın kalbinde benzersiz bir konaklama deneyimi sizleri bekliyor.
                        </p>

                        <p className="text-base leading-relaxed">
                            Ürgüp&apos;ün tam merkezinde yer alan konumumuz sayesinde, bölgenin öne çıkan noktalarına—Göreme, Avanos, Uçhisar ve Peri Bacaları gibi eşsiz destinasyonlara—kolaylıkla ulaşabilirsiniz. Restoranlar, kafeler, alışveriş ve gezi alanlarına yürüme mesafesinde bulunan otelimiz, bölgeyi keşfetmek isteyen misafirler için ideal bir başlangıç noktasıdır.
                        </p>

                        <p className="text-base leading-relaxed">
                            Misafirlerimizin konforunu ön planda tutan hizmet anlayışımızla, jakuzili, balkonlu ve özel teraslı odalarımızda her anınızı özel hissetmeniz için tüm detaylar düşünüldü. Sessizlik, sakinlik ve zarafet arayanlara özel olarak tasarlanan YILDIZ OTEL CAPPADOCIA, Kapadokya&apos;nın ruhunu hissedebileceğiniz ayrıcalıklı bir deneyim sunuyor.
                        </p>


                        <div className='flex flex-row justify-start gap-6'>
                            <div className="mt-2">
                                <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                                    <PhoneCall size={20} className="text-[#421f1f]" /> Rezervasyon:
                                </h4>
                                <p className="text-[#1f2c42] text-lg font-semibold">
                                    +90 530 389 71 63 <br />
                                </p>
                            </div>
                            <div className="mt-2">
                                <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                                    <Mail size={20} className="text-[#421f1f]" /> İletişim:
                                </h4>
                                <p className="text-[#1f2c42] text-lg font-semibold">
                                    info@yildizhotel.com <br />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full h-[300px] relative overflow-hidden shadow-lg"
                        >
                            <Image src="/images/bahce/slide5.jpg" alt="Kapadokya Jakuzili Taş Oda - Yıldız Otel Ürgüp" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
                                className="object-cover" />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative w-full h-[200px] overflow-hidden shadow-lg"
                            >
                                <Image src="/images/turlar/tur21.jpg" alt="Kapadokya Tatili - Yıldız Otel Ürgüp" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
                                    className="object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative w-full h-[200px] overflow-hidden shadow-lg"
                            >
                                <Image src="/images/bahce/slide2.jpg" alt="Ürgüp Tatilinizi Cave odalarda gerçekleştirin - Yıldız Otel Ürgüp" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
                                    className="object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </section>
                {/* Services Section */}
                <section className="container max-w-[1200px] mx-auto px-6 py-12 mb-4">
                    <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center md:text-left">HİZMETLERİMİZ</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className="bg-[#e2e2e2]/40 backdrop-blur-md p-6 rounded-xl shadow-inner text-center border border-[#f8f8f3]/30 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <div className="text-[#1f2c42] mb-3">{s.icon}</div>
                                <p className="text-[#421f1f] text-sm font-semibold">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
