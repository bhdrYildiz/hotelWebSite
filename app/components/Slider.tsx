'use client';

import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/otelBahce/resim3.jpg",
        alt: "Yıldız Otel'e Hoşgeldiniz",
    },
    {
        image: "/images/otelBahce/resim7.jpeg",
        alt: "Yıldız Otel'e Hoşgeldiniz",
    },
    {
        image: "/images/otelBahce/resim11.jpeg",
        alt: "Yıldız Otel'e Hoşgeldiniz",
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
            className="relative h-screen w-full bg-white flex items-center justify-center py-4 px-4"
        >
            <div className="relative w-full max-w-[1380px] h-[calc(100vh-5rem)] overflow-hidden">
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
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {index === current && (
                            <div className="absolute -bottom-2 -left-2 px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
                                <div className="text-left text-white max-w-2xl">
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wider mb-2 leading-tight font-cormorant">
                                        YILDIZ OTEL'E
                                    </h1>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider leading-tight font-cormorant">
                                        Hoş Geldiniz
                                    </h2>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "bg-[#ab9a8b] w-12" : "bg-white/60 w-8"
                                }`}
                            aria-label={`Slayt ${index + 1}'e git`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;
