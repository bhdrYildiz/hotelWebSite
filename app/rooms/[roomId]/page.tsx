'use client';

import { useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { rooms } from '@/app/data/rooms';
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FullScreenSlider from '@/app/components/ui/FullScreenSlider';
import { iconMap } from '@/app/constant/iconMap';

const RoomDetailPage = () => {
    const { roomId } = useParams();
    const room = rooms.find((room) => room.id === roomId);
    const otherRooms = rooms.filter((r) => r.id !== roomId);
    const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

    const amenities = [
        { icon: "Coffee", label: "Nespresso" },
        { icon: "Tv", label: "TV" },
        { icon: "Wifi", label: "Ücretsiz internet" },
        { icon: "Thermometer", label: "Klima" },
        { icon: "Minibar", label: "Minibar" },
        { icon: "RoomService", label: "7/24 Oda Servisi" },
        { icon: "HairDryer", label: "Saç Kurutma" },
        { icon: "Mirror", label: "Makyaj Aynası" },
        { icon: "Shower", label: "Duş" },
        { icon: "Safe", label: "Özel Kasa" },
        { icon: "Bath", label: "Küvet" },
    ];

    if (!room) {
        return <div className="text-center py-20">Room not found</div>;
    }

    return (
        <>
            <Header />
            <main className="font-cormorant bg-[#f8f8f3] text-[#1f2c42]">
                <section className="w-full h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
                    <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md ">{room.name}</h1>
                </section>

                <section className="w-full bg-[#e2e2e2]/40 py-12">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
                        autoplay={{ delay: 4500 }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={12}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="relative w-full"
                    >
                        {room.images.map((img, index) => (
                            <SwiperSlide key={index} className="rounded-md overflow-hidden shadow-md cursor-pointer" style={{ width: 'auto' }} onClick={() => setFullscreenIndex(index)}>
                                <div className="relative h-[500px] w-[600px]">
                                    <Image src={img} alt={`${room.name} fotoğraf ${index + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px" className="object-cover rounded-md" />
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-[#1f2c42] hover:bg-[#b99365] hover:text-white rounded-full p-1 shadow-md cursor-pointer">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                        </div>
                        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-[#1f2c42] hover:bg-[#b99365] hover:text-white rounded-full p-1 shadow-md cursor-pointer">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
                        </div>
                    </Swiper>
                </section>

                <section className="max-w-[1200px] mx-auto px-6 py-12">
                    <h2 className="text-4xl font-bold mb-6 text-center md:text-left">{room.name}</h2>
                    <p className="text-base text-[#111827] leading-relaxed mb-10 max-w-full text-center md:text-left">{room.description}</p>

                    <div className="border-t-1 border-t-gray-300 pt-10">
                        <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">Oda Özellikleri</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {room.features.map((feature, i) => {
                                const matchedAmenity = amenities.find((a) => a.icon === feature);
                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 border border-gray-200 rounded-xl px-6 py-4 shadow-sm bg-[#e2e2e2]/40 hover:shadow-md transition"
                                    >
                                        {iconMap[feature]?.()}
                                        <span className="text-sm font-medium text-[#1f2c42]">
                                            {matchedAmenity?.label ?? feature}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="max-w-[1200px] mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-[#1f2c42] mb-12 text-center">Diğer Odalarımız</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherRooms.slice(0, 3).map((room) => (
                            <div key={room.id} className="bg-[#e2e2e2]/40 shadow-md overflow-hidden hover:scale-[1.02] transition-all duration-300">
                                <div className="relative h-[360px]">
                                    <Image src={room.images[0]} alt={`Yıldız Otel - ${room.name} odası görseli`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px" className="object-cover" />
                                </div>
                                <div className="p-6 space-y-3 text-[#111827]">
                                    <h3 className="text-xl font-semibold">{room.name}</h3>
                                    <div className="flex flex-wrap gap-2 text-sm text-[#c1a37b]">
                                        {room.features.slice(0, 6).map((feature, i) => (
                                            <span key={i}>{iconMap[feature]?.()}</span>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/rooms/${room.id}`}
                                        className="mt-2 inline-block px-10 py-2 bg-[#1f2c42] text-white relative overflow-hidden z-0 group cursor-pointer"
                                        aria-label={`${room.name} odasının detay sayfasını aç`}
                                    >
                                        <span className="relative z-10">Detayları Gör</span>
                                        <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
            {fullscreenIndex !== null && (
                <FullScreenSlider images={room.images} startIndex={fullscreenIndex} onClose={() => setFullscreenIndex(null)} />
            )}
        </>
    );
};

export default RoomDetailPage;