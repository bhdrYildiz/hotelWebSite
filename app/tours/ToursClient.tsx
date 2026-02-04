'use client';

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { tours } from '../data/tours';
import Image from 'next/image';
import { Accordion, AccordionItem } from '../components/ui/accordion';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

export default function ToursClient() {
    return (
        <>
            <Header />
            <main className="bg-[#f7f4f1] font-cormorant ">
                <PageHero
                    title="TUR VE AKTİVİTELER"
                    subtitle="- UNUTULMAZ TURLAR VE MACERALAR SIZI BEKLİYOR -"
                    backgroundImage="/images/turlar/red2.jpg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'TUR VE AKTİVİTELER' },
                    ]}
                />
                <section className="w-full py-16">
                    {tours.map((tour, index) => (
                        <Reveal
                            key={tour.id}
                            className="border-b border-[#e6e0da]"
                            preset="stagger"
                        >
                            <div className="grid lg:grid-cols-2 max-w-[1400px] mx-auto">
                                <Reveal className="bg-white" preset="fadeInLeft" inherit>
                                    <div className="max-w-[620px] ml-auto px-6 lg:px-12 py-14 lg:py-16 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="h-px w-10 bg-[#1c2c34]" />
                                            <h2 className="text-3xl md:text-4xl font-bold text-[#1c2c34] tracking-wide uppercase">
                                                {tour.title}
                                            </h2>
                                        </div>
                                        <p className="text-black text-base leading-relaxed tracking-wide">
                                            {tour.description}
                                        </p>
                                        <div className="flex">
                                            <Link
                                                prefetch={false}
                                                href={`/tours/${tour.id}`}
                                                aria-label={`${tour.title} tur detaylarını inceleyin`}
                                                className="mt-2 inline-block px-10 py-2 bg-[#ab9a8b] text-white relative overflow-hidden z-0 group cursor-pointer"
                                            >
                                                <span className="relative z-10">Turu İncele</span>
                                                <span className="absolute inset-0 bg-[#1c2c34] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal className="bg-[#efece8]" preset="fadeInRight" inherit>
                                    <div className="max-w-[620px] mr-auto px-6 lg:px-12 py-14 lg:py-16">
                                        <div className="bg-white p-3 shadow-sm border border-[#e6e0da] group overflow-hidden">
                                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src={tour.image}
                                                    alt={`Kapadokya - ${tour.title} turu`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 520px"
                                                    quality={75}
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                            <div className="grid lg:grid-cols-2 max-w-[1400px] mx-auto">
                                <Reveal className="bg-white" preset="fadeInLeft" inherit>
                                    <div className="max-w-[620px] ml-auto px-6 lg:px-12 pb-16 lg:pb-20">
                                        <div className="bg-white p-3 shadow-sm border border-[#e6e0da] group overflow-hidden">
                                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                                <Image
                                                    src={tour.gallery?.[0] ?? tour.image}
                                                    alt={`${tour.title} turundan görüntü`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 520px"
                                                    quality={75}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal className="bg-[#efece8]" preset="fadeInRight" inherit>
                                    <div className="max-w-[620px] mr-auto px-6 lg:px-12 pb-16 lg:pb-20">
                                        <Accordion type="single" defaultIndex={0}>
                                            {tour.program.slice(0, 3).map((item, i) => (
                                                <AccordionItem key={item.title} title={item.title} index={i}>
                                                    <p
                                                        className="text-base text-[#1c2c34] leading-relaxed"
                                                        style={{
                                                            display: '-webkit-box',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 4,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {item.description}
                                                    </p>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </Reveal>
                            </div>
                        </Reveal>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
};
