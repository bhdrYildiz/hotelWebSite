'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Image from 'next/image';

const galleryImages = [
    { src: '/images/otelBahce/resim10.jpeg', area: 'leftTall' },
    { src: '/images/otelBahce/resim1.jpg', area: 'midTop1' },
    { src: '/images/otelBahce/resim9.jpeg', area: 'midTop2' },
    { src: '/images/otelBahce/resim2.jpg', area: 'rightTall' },
    { src: '/images/otelBahce/resim3.jpg', area: 'midWide' },
    { src: '/images/otelBahce/resim8.jpeg', area: 'bottomWide' },
    { src: '/images/otelBahce/resim7.jpeg', area: 'bottomRight1' },
    { src: '/images/otelBahce/resim4.jpg', area: 'bottomRight2' },

    { src: '/images/otelBahce/resim5.jpeg', span: 'md:col-span-2' },
    { src: '/images/otelBahce/resim11.jpeg' },
    { src: '/images/otelBahce/resim12.jpeg' },
    { src: '/images/otelBahce/resim13.jpeg', span: 'md:col-span-2' },
    { src: '/images/otelBahce/resim14.jpeg' },
    { src: '/images/otelBahce/foto1.jpeg' },
    { src: '/images/otelBahce/foto2.jpeg' },
    { src: '/images/otelBahce/foto3.jpeg' },
    { src: '/images/otelBahce/foto4.jpeg', span: 'md:col-span-2' },
    { src: '/images/otelBahce/foto5.jpeg', span: 'md:col-span-2' },
    { src: '/images/otelBahce/foto6.jpeg' },
    { src: '/images/otelBahce/foto7.jpeg' },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedImage =
        selectedIndex !== null ? galleryImages[selectedIndex]?.src : null;

    const handlePrev = () => {
        if (selectedIndex === null) return;
        const prevIndex =
            (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedIndex(prevIndex);
    };

    const handleNext = () => {
        if (selectedIndex === null) return;
        const nextIndex = (selectedIndex + 1) % galleryImages.length;
        setSelectedIndex(nextIndex);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-light">
                <PageHero
                    title="GALERİ"
                    subtitle="- YILDIZ OTEL&apos;İ RESİMLERLE KEŞFEDİN -"
                    backgroundImage="/images/otelBahce/resim10.jpeg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'GALERİ' },
                    ]}
                />

                <div className="container mx-auto px-4 py-16">
                    <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className={`group cursor-pointer relative overflow-hidden ${image.span ?? ''} ${image.area ? 'md:[grid-area:var(--ga)]' : ''}`}
                                style={
                                    image.area && typeof window !== 'undefined' && window.innerWidth >= 768
                                        ? ({ gridArea: image.area } as React.CSSProperties)
                                        : undefined
                                }
                                onClick={() => {
                                    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                                        setSelectedIndex(index);
                                    }
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={`Gallery ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 1200px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center justify-center transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2">
                                        <span className="text-white text-3xl font-light transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedImage && selectedIndex !== null && (
                    <div
                        className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-8 md:p-12"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <div
                            className="relative w-full max-w-6xl h-[55vh] flex items-center justify-center gallery-lightbox"
                            onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
                        >
                            <div className="gallery-lightbox__toolbar">
                                <div className="gallery-lightbox__counter">
                                    {selectedIndex + 1} / {galleryImages.length}
                                </div>
                                <button
                                    className="gallery-lightbox__close"
                                    onClick={() => setSelectedIndex(null)}
                                    aria-label="Kapat"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="grid w-full h-full grid-cols-[64px_1fr_64px] items-center gap-6 px-2 md:grid-cols-[80px_1fr_80px] md:gap-8">
                                <button
                                    className="gallery-lightbox__nav"
                                    onClick={handlePrev}
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

                                <div className="relative h-full w-full">
                                    <Image
                                        src={selectedImage}
                                        alt={`Gallery ${selectedIndex + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        className="object-cover shadow-2xl"
                                        priority
                                    />
                                </div>

                                <button
                                    className="gallery-lightbox__nav"
                                    onClick={handleNext}
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
            </main>
            <Footer />
        </>
    );
}
