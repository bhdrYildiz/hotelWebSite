'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { tours } from '../data/tours';

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
                    <h1 className="text-[#1f2c42] text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
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
                                <h2 className="text-3xl font-bold font-cormorant text-[#1f2c42]">{tour.title}</h2>
                                <p className="text-[#1f2c42] text-base leading-relaxed">
                                    {tour.description}
                                </p>
                                <Link href={`/tours/${tour.id}`}>
                                    <button className="mt-2 px-10 py-2 bg-[#b99365] text-[#f8f8f3] relative overflow-hidden z-0 group cursor-pointer">
                                        <span className="relative z-10">Turu İncele</span>
                                        <span className="absolute inset-0 bg-[#1f2c42] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                                    </button>
                                </Link>
                            </div>

                            {/* Image */}
                            <div className="basis-1/2 flex justify-end">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="rounded-md shadow-md w-full h-[740px] object-cover max-w-[550px]"
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