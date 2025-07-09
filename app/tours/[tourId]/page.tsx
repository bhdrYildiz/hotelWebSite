'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Accordion, AccordionItem } from '../../components/ui/accordion';
import { BadgeCheck, CreditCard, Mail, MapPin, Phone, Star } from 'lucide-react';
import PhotoGallery from '../PhotoGallery';
import { getTourById } from '@/app/data/tours';

const TourDetailPage = () => {
    const params = useParams();
    const tourId = params?.tourId as string;
    const tour = getTourById(tourId);

    if (!tour) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-[#1f2c42]">Tour not found.</p>
            </main>
        );
    }

    return (
        <>
            <Header />
            <main className="bg-[#f8f8f3] font-cormorant">
                {/* Banner */}
                <section
                    className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/banner.jpg')" }}
                >
                    <h1 className="text-[#1f2c42] text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                        {tour.title}
                    </h1>
                </section>
                {/* Main Content */}
                <section className="max-w-[1200px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
                    {/* Left - Content */}
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1f2c42]">Tur Detayları</h2>
                            <p className="text-[#1f2c42] mt-4 leading-relaxed">{tour.description}</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-[#1f2c42] mb-4">Tur Programı</h3>
                            <Accordion>
                                {tour.program.map((item, i) => (
                                    <AccordionItem key={i} title={item.title} defaultOpen={true} >
                                        <p className="text-base text-gray-700">{item.description}</p>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>


                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-xl font-semibold text-[#1f2c42] mb-2">Dahiller</h4>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    {tour.included.map((inc, i) => <li key={i}>{inc}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#1f2c42] mb-2">Hariçler</h4>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    {tour.excluded.map((exc, i) => <li key={i}>{exc}</li>)}
                                </ul>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div>
                            <h3 className="text-2xl font-semibold text-[#1f2c42] mb-4">Fotoğraf Galerisi</h3>
                            <PhotoGallery images={tour.gallery} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-[#1f2c42] mb-4">Yorumlar</h3>
                            <div className="bg-white rounded-lg p-4 shadow">
                                <div className="flex items-center gap-2 text-[#b99365]">
                                    {Array(5).fill(0).map((_, i) => <Star key={i} size={16} fill="#b99365" />)}
                                </div>
                                <p className="mt-2 text-gray-800">Muhteşem mekanlar ve harika rehberlerle muhteşem bir deneyim.</p>
                                <span className="block mt-1 text-sm text-gray-500">– Yusuf Al Haddad, 15 Mart 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Booking Sidebar */}
                    <div className="space-y-6 sticky top-24 self-start">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold text-[#1f2c42] mb-2">Online Rezervasyon</h4>
                            <p className="text-[#b99365] text-2xl font-bold mb-1">{tour.price}</p>
                            <p className="text-sm text-gray-600 mb-4">Kişi başı – 24 saat öncesine kadar ücretsiz iptal</p>
                            <input type="date" className="w-full mb-2 p-2 border border-gray-300 rounded" />
                            <div className="mb-4">
                                <label htmlFor="personCount" className="block text-gray-500 mb-1">
                                    Kişi Sayısı*
                                </label>
                                <input
                                    type="number"
                                    id="personCount"
                                    min="1"
                                    max="10"
                                    className="w-full p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-[#b99365] transition"
                                    placeholder="1"
                                />
                            </div>
                            <button className="w-full cursor-pointer bg-[#b99365] hover:bg-[#a98256] text-[#f8f8f3] py-2 rounded transition-all duration-300">
                                Müsaitliği Kontrol Et
                            </button>
                        </div>
                        <div className="space-y-3 text-[#1f2c42] text-sm">
                            <div className="flex items-center gap-2">
                                <BadgeCheck size={16} className="text-[#1f2c42]" />
                                <span>Ücretsiz İptal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CreditCard size={16} className="text-[#1f2c42]" />
                                <span>Sonra Ödeme Seçeneği</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-[#1f2c42]" />
                                <span>Otelden alma hizmeti dahildir</span>
                            </div>

                            {/* İletişim Bilgileri */}
                            <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <Phone size={16} className="text-[#1f2c42]" />
                                    <a href="tel:+905551112233" className="hover:underline">+90 530 389 7163</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-[#1f2c42]" />
                                    <a href="mailto:info@cappadociatours.com" className="hover:underline">info@yildizhotel.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default TourDetailPage;
