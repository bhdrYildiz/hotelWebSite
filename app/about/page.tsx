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
                    <h1 className="text-[#1f2c42] text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                        About Us
                    </h1>
                </section>

                {/* Content Section */}
                <section className="container max-w-[1200px] min-h-[600px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-2">
                    {/* Text Content */}
                    <div className="space-y-6 text-[#1f2c42]">
                        <p className="text-sm uppercase tracking-widest text-[#b99365] font-semibold">
                            Unutulmaz Konaklama Deneyimi
                        </p>
                        <h2 className="text-4xl font-bold leading-snug mb-4">YILDIZ OTEL</h2>

                        <p className="text-base leading-relaxed">
                            Özgün ve çağdaş mimarinin, usta ellerin estetik dokunuşlarıyla buluşması sonucu,
                            birbirinden farklı ve özel olarak tasarlanan 11 odası ile, lüksün ve konforun tanımını
                            yeniden değiştiren VIA REGIA HOTEL CAPPADOCIA, milyonlarca yıllık geçmişi, olağanüstü
                            güzel doğası ve tarihin bütünleştiği, Kapadokya bölgesinin en özel yeri olan Uçhisar
                            kalesinin yanı başında konumlanmıştır.
                        </p>

                        <p className="text-base leading-relaxed">
                            Kapadokya’nın benzersiz vadilerini, Uçhisar Kalesini, Peri Bacalarını ve sabah gün doğumunu
                            ile gökyüzünde muhteşem bir görsel şölen oluşturan balonları, odalarımızdan ve otelimizin
                            her köşesinden, 360 derece nefes kesen panoramik bir manzara seyredebilme ayrıcalığı ile
                            siz değerli misafirlerimize her anınızı özel hissedeceğiniz büyüleyici ve masalsı bir deneyim sunuyoruz.
                        </p>

                        <p className="text-base leading-relaxed">
                            Muhteşem manzaralar eşliğinde, kaya mağara, bahçe ve terastan oluşan, dünya ve geleneksel
                            Anadolu mutfağının mükemmel lezzetlerini sizlere sunan mistik atmosfere sahip LUUK
                            Restoranımızda ve otelimizde geçireceğiniz keyifli anlarınız ile konaklamanızı unutulmaz
                            kılacak tüm hizmetlerimiz VIA REGIA HOTEL CAPPADOCIA’da sizleri beklemektedir.
                        </p>

                        <div className='flex flex-row justify-start gap-6'>
                            <div className="mt-2">
                                <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                                    <PhoneCall size={20} className="text-[#c1a37b]" /> Rezervasyon:
                                </h4>
                                <p className="text-[#1f2c42] text-lg font-semibold">
                                    +90 384 551 22 22 <br />
                                </p>
                            </div>
                            <div className="mt-2">
                                <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
                                    <Mail size={20} className="text-[#c1a37b]" /> Contact:
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
                            <Image src="/images/slider2.jpeg" alt="Hotel Front View" fill className="object-cover" />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative w-full h-[200px] overflow-hidden shadow-lg"
                            >
                                <Image src="/images/tour1.jpg" alt="Rock View" fill className="object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative w-full h-[200px] overflow-hidden shadow-lg"
                            >
                                <Image src="/images/balon.png" alt="Terrace Breakfast" fill className="object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </section>
                {/* Services Section */}
                <section className="container max-w-[1200px] mx-auto px-6 py-12 mb-4">
                    <h2 className="text-3xl font-bold text-[#111827] mb-8">SERVICES</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className="bg-[#e2e2e2] backdrop-blur-md p-6 rounded-xl shadow-inner text-center border border-[#f8f8f3]/30 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <div className="text-[#1f2c42] mb-3">{s.icon}</div>
                                <p className="text-[#c1a37b] text-sm font-semibold">{s.label}</p>
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
