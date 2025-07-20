'use client';

import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/bahce/slide1.webp",
        alt: "Modern ve ferah odalar, Kapadokya'da zarif bir deneyim",
        topText: "MODERN VE FERAH ODALAR",
        middleText: "Zarif Deneyimler",
        bottomText: "Kapadokya'dan İlhamla",
    },
    {
        image: "/images/bahce/slide7.webp",
        alt: "Panoramik manzaralar ve nefes kesen sabahlar",
        topText: "PANORAMİK MANZARALAR",
        middleText: "Nefes Kesen Sabahlar",
        bottomText: "Anı Yaşa",
    },
    {
        image: "/images/bahce/slide5.webp",
        alt: "Eşsiz atmosfer ve her köşede bir hikâye",
        topText: "EŞSİZ ATMOSFER",
        middleText: "Büyüyü Hisset",
        bottomText: "Her Köşede Bir Hikâye",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const prefersReducedMotion = typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        if (prefersReducedMotion) return;

        const interval = setInterval(() => {
            setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, [prefersReducedMotion]);

    return (
        <section
            aria-label="Tanıtım Slaytları"
            className="relative h-screen overflow-hidden font-cormorant"
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    role="group"
                    aria-roledescription="slayt"
                    aria-label={slide.alt}
                    aria-hidden={index !== current}
                    className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {index === current && (
                        <div className="px-4 py-2 rounded absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                {slide.topText}
                            </h1>
                            <h2 className="text-2xl md:text-4xl font-medium mb-4 animate-slide-down">
                                {slide.middleText}
                            </h2>
                            <p className="text-lg md:text-xl font-light tracking-wider animate-slide-left">
                                {slide.bottomText}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Slider;
