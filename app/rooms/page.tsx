'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { rooms } from '@/app/data/rooms';
import { iconMap } from '../constant/iconMap';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import {
    Tag,
    DoorOpen,
    ParkingCircleIcon,
    Coffee,
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon,
} from 'lucide-react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays as dfAddDays, format, startOfDay } from 'date-fns';

const perks = [
    {
        title: 'En İyi Fiyat Garantisi',
        description: 'Doğrudan rezervasyonlarda %30’a kadar indirim.',
        icon: Tag,
    },
    {
        title: 'İptal Önceliği',
        description: 'Rezervasyon iptalinde %100 geri iade garantisi.  (İptal ücreti yok)',
        icon: DoorOpen,
    },
    {
        title: 'Ücretsiz Otopark',
        description: 'Misafirlerimiz için güvenli ve geniş otopark alanı. 7/24 güvenlik kamerası ile korunan park alanı.',
        icon: ParkingCircleIcon,
    },
    {
        title: 'Kahvaltı Dahil',
        description: 'Güne zengin bir kahvaltıyla başlayın.',
        icon: Coffee,
    },
];

const RoomsPage = () => {
    const today = startOfDay(new Date());

    const [checkInDate, setCheckInDate] = useState<Date>(today);
    const [checkOutDate, setCheckOutDate] = useState<Date>(dfAddDays(today, 1));
    const [adults, setAdults] = useState<number>(2);
    const [children, setChildren] = useState<number>(0);

    const checkInRef = useRef<DatePicker | null>(null);
    const checkOutRef = useRef<DatePicker | null>(null);


    const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));


    return (
        <>
            <Header />
            <main className="font-cormorant bg-[#ffffff]">
                <PageHero
                    title="ODALAR"
                    subtitle="- KONFORU VE ZARAFETI KESFEDIN -"
                    backgroundImage="/images/otelBahce/resim12.jpeg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'ODALAR' },
                    ]}
                />

                <Reveal className="max-w-[1200px] mx-auto px-6 py-20 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1c2c34] tracking-wide uppercase">
                        Neden Web Sitemizden Rezervasyon?
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-[#1c2c34] font-semibold max-w-[760px] mx-auto leading-relaxed">
                        Doğrudan rezervasyon yapan misafirlerimiz icin özel avantajlar sunuyoruz. <br />
                        Ayrıcalıklardan siz de faydalanın.
                    </p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {perks.map((perk) => {
                            const Icon = perk.icon;
                            return (
                                <Reveal key={perk.title} className="group flex flex-col items-center text-center">
                                    <div className="relative overflow-hidden flex items-center justify-center w-[120px] h-[120px] rounded-full border border-[#d7d2cc] bg-white transition-colors duration-700 ease-out group-hover:border-[#a79b8f]">
                                        <div className="absolute inset-0 bg-[#a79b8f] scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center"></div>
                                        <Icon className="relative z-10 h-7 w-7 text-[#1c2c34] transition-colors duration-700 ease-out group-hover:text-white" />
                                    </div>
                                    <h3 className="mt-6 text-lg font-semibold text-[#1c2c34]">{perk.title}</h3>
                                    <p className="mt-2 text-sm text-[#1c2c34] font-semibold leading-relaxed">
                                        {perk.description}
                                    </p>
                                </Reveal>
                            );
                        })}
                    </div>
                </Reveal>

                {/* BOOKING BAR */}
                <Reveal className="px-6 pb-32">
                    <div className="max-w-[1200px] mx-auto bg-[#1f2d34] text-white shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_0.7fr_0.7fr_1fr] divide-y md:divide-y-0 md:divide-x divide-white/20">
                            {/* CHECK - IN */}
                            <div className="p-6 text-left">
                                <p className="text-xs tracking-[0.2em] text-white/70">CHECK - IN</p>
                                <div className="mt-2 flex items-center justify-between gap-4">
                                    <DatePicker
                                        ref={(r) => {
                                            checkInRef.current = r;
                                        }}
                                        selected={checkInDate}
                                        onChange={(date: Date | null) => {
                                            if (!date) return;
                                            const nextIn = startOfDay(date);
                                            setCheckInDate(nextIn);

                                            const minOut = dfAddDays(nextIn, 1);
                                            if (checkOutDate < minOut) setCheckOutDate(minOut);
                                        }}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={today}
                                        className="w-full bg-transparent text-2xl text-white outline-none placeholder:text-white/50"
                                        calendarClassName="rounded-xl shadow-xl"
                                        popperClassName="z-50"
                                    />
                                    <CalendarIcon
                                        className="h-5 w-5 text-white/70 cursor-pointer"
                                        onClick={() => checkInRef.current?.setOpen(true)}
                                    />
                                </div>
                            </div>

                            {/* CHECK - OUT */}
                            <div className="p-6 text-left">
                                <p className="text-xs tracking-[0.2em] text-white/70">CHECK - OUT</p>
                                <div className="mt-2 flex items-center justify-between gap-4">
                                    <DatePicker
                                        ref={(r) => {
                                            checkOutRef.current = r;
                                        }}
                                        selected={checkOutDate}
                                        onChange={(date: Date | null) => {
                                            if (!date) return;
                                            setCheckOutDate(startOfDay(date));
                                        }}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={dfAddDays(checkInDate, 1)}
                                        className="w-full bg-transparent text-2xl text-white outline-none placeholder:text-white/50"
                                        calendarClassName="rounded-xl shadow-xl"
                                        popperClassName="z-50"
                                    />

                                    <CalendarIcon
                                        className="h-5 w-5 text-white/70 cursor-pointer"
                                        onClick={() => checkOutRef.current?.setOpen(true)}
                                    />
                                </div>
                            </div>

                            {/* ADULTS */}
                            <div className="p-6 text-left">
                                <p className="text-xs tracking-[0.2em] text-white/70">YETİŞKİN</p>
                                <div className="mt-2 flex items-center justify-between gap-3">
                                    <span className="text-2xl">{adults}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setAdults((v) => clamp(v - 1, 1, 6))}
                                            className="h-9 w-9 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition-colors"
                                            aria-label="Yetişkin azalt"
                                        >
                                            <ChevronDown className="h-4 w-4 text-white/70" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setAdults((v) => clamp(v + 1, 1, 6))}
                                            className="h-9 w-9 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition-colors"
                                            aria-label="Yetişkin artır"
                                        >
                                            <ChevronUp className="h-4 w-4 text-white/70" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* CHILDREN */}
                            <div className="p-6 text-left">
                                <p className="text-xs tracking-[0.2em] text-white/70">ÇOCUK</p>
                                <div className="mt-2 flex items-center justify-between gap-3">
                                    <span className="text-2xl">{children}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setChildren((v) => clamp(v - 1, 0, 6))}
                                            className="h-9 w-9 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition-colors"
                                            aria-label="Çocuk azalt"
                                        >
                                            <ChevronDown className="h-4 w-4 text-white/70" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setChildren((v) => clamp(v + 1, 0, 6))}
                                            className="h-9 w-9 rounded-full border border-white/20 grid place-items-center hover:bg-white/10 transition-colors"
                                            aria-label="Çocuk artır"
                                        >
                                            <ChevronUp className="h-4 w-4 text-white/70" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <div className="p-6 flex items-center justify-start md:justify-center">
                                <Link
                                    href="/reservation"
                                    prefetch={false}
                                    className="w-full cursor-pointer md:w-auto border border-white px-6 py-3 text-xs tracking-[0.2em] text-white hover:bg-white hover:text-[#1c2c34] transition-colors"
                                >
                                    REZERVASYON
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* ROOMS */}
                <section>
                    {rooms.map((room, index) => {
                        const isReversed = index % 2 === 1;
                        const bgColor = index % 2 === 0 ? 'bg-gray-150' : 'bg-white';

                        return (
                            <Reveal key={room.id} className={`${bgColor} py-16`}>
                                <div className="max-w-[1400px] mx-auto px-6">
                                    <div
                                        className={`flex flex-col lg:flex-row gap-8 mb-8 ${isReversed ? 'lg:flex-row-reverse' : ''
                                            }`}
                                    >
                                        <Reveal className="w-full lg:w-[45%] space-y-6" preset="fadeInLeft" inherit>
                                            <div className="flex items-center gap-4">
                                                <span className="w-12 h-[3px] bg-black flex-shrink-0"></span>
                                                <h2 className="text-4xl md:text-5xl text-[#1c2c34] font-bold uppercase tracking-tight leading-tight">
                                                    {room.name}
                                                </h2>
                                            </div>

                                            <p className="text-base text-[#1c2c34] font-semibold leading-relaxed ml-16">
                                                {room.description}
                                            </p>

                                            <Link href={`/rooms/${room.id}`} prefetch={false}>
                                                <button className="group relative overflow-hidden px-8 py-4 cursor-pointer ml-16 bg-[#1f2d34] text-white text-sm font-semibold tracking-wide uppercase transition-transform duration-700 ease-out hover:shadow-lg hover:shadow-black/10 group-hover:scale-105">
                                                    <span className="absolute inset-0 bg-[#ab9a8b] scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center"></span>
                                                    <span className="relative z-10 transition-colors duration-700 ease-out group-hover:text-[#1c2c34]">
                                                        Odayı Keşfet
                                                    </span>
                                                </button>
                                            </Link>
                                        </Reveal>

                                        <Reveal className="w-full lg:w-[55%] relative" preset="fadeInRight" inherit>
                                            <div
                                                id={`scroll-${room.id}`}
                                                className="relative overflow-x-hidden overflow-y-hidden scrollbar-hide"
                                            >
                                                <div className="flex gap-4">
                                                    {room.images.map((image, imageIndex) => (
                                                        <div
                                                            key={imageIndex}
                                                            className="relative h-[360px] lg:h-[440px] w-[520px] lg:w-[620px] flex-shrink-0"
                                                        >
                                                            <Image
                                                                src={image}
                                                                alt={`${room.name} - ${imageIndex + 1}`}
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    const container = document.getElementById(`scroll-${room.id}`);
                                                    if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                                                }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
                                                aria-label="Previous"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const container = document.getElementById(`scroll-${room.id}`);
                                                    if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                                                }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
                                                aria-label="Next"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        </Reveal>
                                    </div>

                                    <Reveal className="flex flex-wrap justify-center gap-12 lg:gap-8 mt-12" preset="fadeUp" inherit>
                                        {room.features.map((feature, i) => (
                                            <Reveal key={i} className="text-center" inherit>
                                                <div className="flex justify-center mb-4">{iconMap[feature]?.()}</div>
                                                <p className="text-base font-semibold uppercase">{feature}</p>
                                            </Reveal>
                                        ))}
                                    </Reveal>
                                </div>
                            </Reveal>
                        );
                    })}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default RoomsPage;
