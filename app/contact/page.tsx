'use client';

import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="bg-[#f8f8f3] font-cormorant text-[#1f2c42]">
                {/* Banner */}
                <section
                    className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/banner.jpg')" }}
                >
                    <h1 className="text-[#1f2c42] text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                        İletişim
                    </h1>
                </section>

                <section className="max-w-[1200px] mx-auto px-6 py-16 space-y-10">
                    {/* Title & Description */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">Neredeyiz?</h1>
                        <p className="mx-auto text-gray-700 text-start leading-relaxed">
                            Ürgüp&apos;ün büyüleyici zirvesinde yer alan Yıldız Hotel, misafirlerine benzersiz bir deneyim sunuyor. Gün doğumunun ilk ışıklarıyla uyanırken, Kapadokya&apos;nın eşsiz balon manzarasına şahit olabilirsiniz. Akşamları ise, gün batımının sıcak tonları eşliğinde, otelin manzaraya hakim terasında huzuru bulacaksınız. Doğanın sunduğu bu görsel şölen, Yıldız Hotel&apos;in sunduğu lüks ve konforla birleşerek unutulmaz bir konaklama deneyimi yaratıyor.
                        </p>
                    </div>

                    {/* Map & Contact */}
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Google Map Embed */}
                        <div className="w-full h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.67950900664!2d34.91486377633296!3d38.63261497177908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a5cdd1a34f68b%3A0xfba04847217ba7b8!2sY%C4%B1ld%C4%B1z%20Hotel!5e0!3m2!1str!2str!4v1718123456789!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                className="shadow"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Contact Details */}
                        <div className="bg-[#e2e2e2]/40 p-6 shadow space-y-4">
                            <h2 className="text-2xl font-bold mb-4">İletişim</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <Phone size={16} className="text-[#b99365]" />
                                    <Link href="tel:+903842282850" className="hover:underline">
                                        +90 530 389 71 63
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-[#b99365]" />
                                    <Link href="mailto:info@yildizhotel.com.tr" className="hover:underline">
                                        info@yildizhotel.com.tr
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Navigation size={16} className="text-[#b99365]" />
                                    <Link
                                        href="https://www.google.com/maps/place/Y%C4%B1ld%C4%B1z+Hotel/@38.6430322,34.9175703,14z/data=!4m9!3m8!1s0x152a5cdd1a34f68b:0xfba04847217ba7b8!5m2!4m1!1i2!8m2!3d38.6326155!4d34.9160521!16s%2Fg%2F1tglcsdb?entry=ttu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Yol Tarifi
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-[#b99365]" />
                                    <span>Kavaklıönü Mah., Atatürk Blv. No:61, 50400 Ürgüp/Nevşehir</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    );
}
