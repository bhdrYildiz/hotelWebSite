'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { tours } from '../data/tours';
import Image from 'next/image';

const ToursPage = () => {
    return (
        <>
            <Header />
            <main className="bg-[#f8f8f3] font-cormorant ">
                {/* Banner */}
                <section
                    className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/banner.jpg')" }}
                >
                    <h1 className="text-[#1f2c42] text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                        Tur ve Aktiviteler
                    </h1>
                </section>
                <section className="max-w-[1200px] mx-auto px-6 py-20 space-y-24">
                    {tours.map((tour, index) => (
                        <div
                            key={tour.id}
                            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Content */}
                            <div className="basis-1/2 text-start ml-2 space-y-4">
                                <h2 className="text-3xl font-bold font-cormorant text-[#1f2c42] text-center md:text-left">{tour.title}</h2>
                                <p className="text-[#1f2c42] text-base leading-relaxed text-center md:text-left">
                                    {tour.description}
                                </p>
                                <div className="flex justify-center md:justify-start">
                                    <Link
                                        href={`/tours/${tour.id}`}
                                        aria-label={`${tour.title} tur detaylarını inceleyin`}
                                        className="mt-2 inline-block px-10 py-2 bg-[#aa875d] text-white relative overflow-hidden z-0 group cursor-pointer"
                                    >
                                        <span className="relative z-10">Turu İncele</span>
                                        <span className="absolute inset-0 bg-[#1f2c42] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative w-full max-w-[550px] aspect-[550/740] rounded-md shadow-md overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={`Kapadokya - ${tour.title} turu`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 550px"
                                    quality={75}
                                    priority={index === 0}
                                />
                            </div>

                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ToursPage;