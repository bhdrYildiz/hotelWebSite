'use client';

import { useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { rooms } from '@/app/data/rooms';
import { useState } from 'react';
import Link from 'next/link';
import { iconMap } from '@/app/constant/iconMap';
import { Bed, ChevronUp, ChevronDown, Square } from 'lucide-react';
import PageHero from '@/app/components/PageHero';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays as dfAddDays, startOfDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";


const RoomDetailPage = () => {
    const { roomId } = useParams();
    const room = rooms.find((room) => room.id === roomId);
    const otherRooms = rooms.filter((r) => r.id !== roomId);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);

    const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));


    const today = startOfDay(new Date());

    const [checkInDate, setCheckInDate] = useState<Date>(today);
    const [checkOutDate, setCheckOutDate] = useState<Date>(dfAddDays(today, 1));

    const checkInRef = React.useRef<any>(null);
    const checkOutRef = React.useRef<any>(null);


    if (!room) {
        return <div className="text-center py-20 text-lg">Oda bulunamadı.</div>;
    }

    return (
        <>
            <Header />
            <main className="font-cormorant bg-white text-[#1c2c34]">
                <PageHero
                    title={room.name}
                    subtitle="- ODA DETAYLARINI İNCELEYİN -"
                    backgroundImage="/images/otelBahce/resim12.jpeg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'ODALAR', href: '/rooms' },
                        { label: room.name },
                    ]}
                />

                <section className="max-w-[1320px] mx-auto px-6 py-16">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-[60%] space-y-8">
                            <div
                                onClick={() => setFullscreenIndex(selectedImage)}
                                className="relative w-full h-[500px] mb-4 overflow-hidden cursor-pointer group"
                            >
                                <Image
                                    key={selectedImage}
                                    src={room.images[selectedImage]}
                                    alt={`${room.name}`}
                                    fill
                                    className={`object-cover transition-all duration-500 ${isImageLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                                        } group-hover:scale-110`}
                                    onLoadingComplete={() => setIsImageLoading(false)}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center justify-center transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2">
                                        <span className="text-white text-5xl font-light transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-4 mb-8">
                                {room.images.slice(0, 4).map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setIsImageLoading(true);
                                            setTimeout(() => setSelectedImage(index), 50);
                                        }}
                                        className={`relative h-[120px] overflow-hidden cursor-pointer transition-all duration-300 ${selectedImage === index ? 'ring-1 ring-[#1f2d34] scale-105' : 'opacity-70 hover:opacity-100 hover:scale-105'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${room.name} thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-[40%] space-y-8">
                            <div className="bg-[#f5f5f0] border border-gray-200 p-8">
                                <p className="text-5xl font-bold text-[#c9b896] text-center">{room.price} <span className="text-lg text-gray-600">$</span></p>
                                <p className="text-lg font-semibold text-gray-700 mb-2 text-center">Çift Kişilik Fiyat</p>
                            </div>

                            <div className="bg-white border border-gray-200 p-8">
                                <h3 className="text-2xl font-bold mb-6 text-[#1c2c34]">Özellikler:</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Square size={24} className="text-gray-600 flex-shrink-0" />
                                        <span className="text-base text-gray-800">Alan: {room.size}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Bed size={24} className="text-gray-600 flex-shrink-0" />
                                        <span className="text-base text-gray-800">Yatak Tipi: King Size</span>
                                    </div>

                                    {room.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-gray-600 flex-shrink-0">{iconMap[feature]?.()}</span>
                                            <span className="text-base text-gray-800">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#2c3e45] w-full py-12">
                    <div className="max-w-[1280px] mx-auto px-8 text-white">
                        <h2 className="text-3xl leading-relaxed tracking-wide font-semibold text-white">" {room.name} sizi bekliyor ! "</h2>
                        <p className="text-base text-white leading-8 tracking-wide mt-4">
                            {room.description}
                        </p>
                        <p className="text-sm leading-7 tracking-wide mb-8 text-white mt-6">
                            Otelimiz içerisinde 7/24 güvenlik kamerası ile korunan otopark alanımız mevcuttur.
                            Otelimiz 24 saat açık olup her hangi bir sorunuz olduğunda resepsiyonumuzda size yardımcı olabiliriz.
                            Fiyatlarımıza açık büfe kahvaltı ve KDV dahildir.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-8 text-base tracking-wide leading-7">
                            <div>
                                <p>Giriş Saati: 14:00</p>
                            </div>
                            <div>
                                <p>Evcil Hayvanlar Kabul Edilmez</p>
                            </div>
                            <div>
                                <p>Çıkış Saati: 11:30</p>
                            </div>
                            <div>
                                <p>Oda içerisinde sigara içilmez</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-600 pt-6">
                            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">İptal POLİTİKAMIZ</h4>
                            <p className="text-base leading-relaxed tracking-wide text-white">
                                Rezervasyon yapılan tarihe 1 hafta kala iptallerde ücret iadesi yapılmamaktadır.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white w-full py-24 mt-12 mb-12">
                    <div className="max-w-[1320px] mx-auto px-8">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="w-full lg:w-[40%] space-y-6">
                                <p className="text-sm tracking-widest text-[#ab9a8b] uppercase">YILDIZ OTEL ÜRGÜP</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1c2c34]">Müsaitliği Kontrol Et</h2>
                                <p className="text-base text-[#1c2c34] leading-relaxed tracking-wide">
                                    Müsaitliği kontrol etmek için tarih ve oda türünü seçip kontrol edebilirsiniz veya telefon ile aşağıdaki numaradan bize ulaşabilirsiniz.
                                </p>

                                <div className="flex items-center gap-4 pt-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#1c2c34] uppercase tracking-wider">Bilgi ve Rezervasyon</p>
                                        <p className="text-2xl font-bold text-[#1c2c34]">+90 532 564 52 77</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-[60%] bg-white p-8 shadow-lg">
                                <div className="mb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>

                                            <div className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#1f2d34]">
                                                <DatePicker
                                                    ref={checkInRef}
                                                    selected={checkInDate}

                                                    onChange={(date: Date | null) => {
                                                        if (!date) return;

                                                        const nextIn = startOfDay(date);
                                                        setCheckInDate(nextIn);

                                                        // checkout en az 1 gün sonrası
                                                        const minOut = dfAddDays(nextIn, 1);
                                                        if (checkOutDate < minOut) setCheckOutDate(minOut);
                                                    }}
                                                    minDate={today}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="w-full bg-transparent outline-none text-gray-800"
                                                    calendarClassName="rounded-xl shadow-xl"
                                                    popperClassName="z-50"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() => checkInRef.current?.setOpen?.(true)}
                                                    className="ml-3 text-gray-500 hover:text-gray-700"
                                                    aria-label="Takvimi aç (check-in)"
                                                >
                                                    <CalendarIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>


                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>

                                            <div className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#1f2d34]">
                                                <DatePicker
                                                    ref={checkOutRef}
                                                    selected={checkOutDate}

                                                    onChange={(date: Date | null) => {
                                                        if (!date) return;
                                                        setCheckOutDate(startOfDay(date));
                                                    }}
                                                    minDate={dfAddDays(checkInDate, 1)}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="w-full bg-transparent outline-none text-gray-800"
                                                    calendarClassName="rounded-xl shadow-xl"
                                                    popperClassName="z-50"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() => checkOutRef.current?.setOpen?.(true)}
                                                    className="ml-3 text-gray-500 hover:text-gray-700"
                                                    aria-label="Takvimi aç (check-out)"
                                                >
                                                    <CalendarIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                                        <div className="md:col-span-1">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Oda Türü
                                            </label>
                                            <select className="w-full px-2 py-4 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1f2d34]">
                                                <option>{room.name}</option>
                                            </select>
                                        </div>

                                        {/* ADULTS */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Yetişkin</label>

                                            <div className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#1f2d34]">
                                                <button
                                                    type="button"
                                                    onClick={() => setAdults((v) => clamp(v - 1, 1, 6))}
                                                    className="h-9 w-9 rounded-full border border-gray-300 grid place-items-center hover:bg-gray-50 transition-colors"
                                                    aria-label="Yetişkin azalt"
                                                >
                                                    <ChevronDown className="h-4 w-4 text-gray-700" />
                                                </button>

                                                <span className="text-lg font-semibold text-gray-800">{adults}</span>

                                                <button
                                                    type="button"
                                                    onClick={() => setAdults((v) => clamp(v + 1, 1, 6))}
                                                    className="h-9 w-9 rounded-full border border-gray-300 grid place-items-center hover:bg-gray-50 transition-colors"
                                                    aria-label="Yetişkin artır"
                                                >
                                                    <ChevronUp className="h-4 w-4 text-gray-700" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* CHILDREN */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Çocuk</label>

                                            <div className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#1f2d34]">
                                                <button
                                                    type="button"
                                                    onClick={() => setChildren((v) => clamp(v - 1, 0, 6))}
                                                    className="h-9 w-9 rounded-full border border-gray-300 grid place-items-center hover:bg-gray-50 transition-colors"
                                                    aria-label="Çocuk azalt"
                                                >
                                                    <ChevronDown className="h-4 w-4 text-gray-700" />
                                                </button>

                                                <span className="text-lg font-semibold text-gray-800">{children}</span>

                                                <button
                                                    type="button"
                                                    onClick={() => setChildren((v) => clamp(v + 1, 0, 6))}
                                                    className="h-9 w-9 rounded-full border border-gray-300 grid place-items-center hover:bg-gray-50 transition-colors"
                                                    aria-label="Çocuk artır"
                                                >
                                                    <ChevronUp className="h-4 w-4 text-gray-700" />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <Link href="/reservation" className="block" prefetch={false}>
                                    <button
                                        type="button"
                                        className="w-full cursor-pointer py-4 bg-[#1f2d34] text-white text-lg font-semibold tracking-wider uppercase hover:bg-[#2a3d47] transition-colors"
                                    >
                                        Rezervasyon Yap
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white w-full py-12">
                    <div className="max-w-[1280px] mx-auto px-8">
                        <p className="text-sm tracking-widest text-[#ab9a8b] uppercase mb-4">YILDIZ OTEL</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1c2c34] mb-12">Benzer Odalar</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherRooms.slice(0, 3).map((r, index) => (
                                <Link
                                    key={r.id}
                                    href={`/rooms/${r.id}`}
                                    className="group relative block overflow-hidden"
                                    prefetch={false}
                                >
                                    <div className="relative h-[460px] overflow-hidden">
                                        <Image
                                            src={r.images[0]}
                                            alt={r.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>

                                        <div className="absolute bottom-8 left-0 right-0 px-8 text-white flex flex-col transition-all duration-500 group-hover:bottom-12">
                                            <p className="text-sm tracking-wider font-bold mb-2 uppercase">{r.price} $ / Gecelik Fiyat</p>
                                            <h3 className="text-2xl font-bold">{r.name}</h3>

                                            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-20 group-hover:mt-4">
                                                <span className="text-sm tracking-wider uppercase relative pb-1 inline-block">
                                                    Daha Fazla Bilgi
                                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 delay-100 group-hover:w-full"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

            {fullscreenIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-8 md:p-12"
                    onClick={() => setFullscreenIndex(null)}
                >
                    <div
                        className="relative w-full max-w-6xl h-[55vh] flex items-center justify-center gallery-lightbox"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="gallery-lightbox__toolbar">
                            <div className="gallery-lightbox__counter">
                                {fullscreenIndex + 1} / {room.images.length}
                            </div>
                            <button
                                className="gallery-lightbox__close"
                                onClick={() => setFullscreenIndex(null)}
                                aria-label="Kapat"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid w-full h-full grid-cols-[64px_1fr_64px] items-center gap-6 px-2 md:grid-cols-[80px_1fr_80px] md:gap-8">
                            <button
                                className="gallery-lightbox__nav"
                                onClick={() => {
                                    const prevIndex = (fullscreenIndex - 1 + room.images.length) % room.images.length;
                                    setFullscreenIndex(prevIndex);
                                }}
                                aria-label="Önceki"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M15 19L8 12l7-7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <div className="flex h-full w-full items-center justify-center">
                                <img
                                    src={room.images[fullscreenIndex]}
                                    alt={`${room.name} - ${fullscreenIndex + 1}`}
                                    className="gallery-lightbox__image shadow-2xl"
                                />
                            </div>

                            <button
                                className="gallery-lightbox__nav"
                                onClick={() => {
                                    const nextIndex = (fullscreenIndex + 1) % room.images.length;
                                    setFullscreenIndex(nextIndex);
                                }}
                                aria-label="Sonraki"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RoomDetailPage;
