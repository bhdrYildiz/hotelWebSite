'use client'

import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/bahce/slide1.jpg",
        topText: "MODERN VE FERAH ODALAR",
        middleText: "Zarif Deneyimler",
        bottomText: "Kapadokya'dan İlhamla",
    },
    {
        image: "/images/bahce/slide7.jpg",
        topText: "PANORAMİK MANZARALAR",
        middleText: "Nefes Kesen Sabahlar",
        bottomText: "Anı Yaşa",
    },
    {
        image: "/images/bahce/slide5.jpg",
        topText: "EŞSİZ ATMOSFER",
        middleText: "Büyüyü Hisset",
        bottomText: "Her Köşede Bir Hikâye",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden font-cormorant">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="absolute inset-0 bg-[#111827]/30"></div>

                    {index === current && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-[#c1a37b]"> {/* text-light */}
                            {/* SLIDE 1 */}
                            {index === 0 && (
                                <>
                                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-down text-[#f8f8f3]"> {/* text-secondary */}
                                        {slide.topText}
                                    </h2>
                                    <h3 className="text-2xl md:text-4xl font-medium mb-4 animate-slide-left text-[#f8f8f3]"> {/* text-accent */}
                                        {slide.middleText}
                                    </h3>
                                    <p className="text-lg md:text-xl font-light tracking-wider">
                                        <span className="animate-typewriter">{slide.bottomText}</span>
                                    </p>
                                </>
                            )}

                            {/* SLIDE 2 */}
                            {index === 1 && (
                                <>
                                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-down text-[#f8f8f3]">
                                        {slide.topText}
                                    </h2>
                                    <h3 className="text-2xl md:text-4xl font-medium mb-4 animate-slide-left text-[#f8f8f3]">
                                        {slide.middleText}
                                    </h3>
                                    <p className="text-lg md:text-xl font-light tracking-wider">
                                        <span className="animate-typewriter">{slide.bottomText}</span>
                                    </p>
                                </>
                            )}

                            {/* SLIDE 3 */}
                            {index === 2 && (
                                <>
                                    <h2 className="text-4xl md:text-6xl font-bold mb-2 animate-slide-down text-[#f8f8f3]">
                                        {slide.topText}
                                    </h2>
                                    <h3 className="text-2xl md:text-4xl font-medium mb-2 animate-slide-left text-[#c1a37b]">
                                        {slide.middleText}
                                    </h3>
                                    <p className="text-lg md:text-xl font-light tracking-wider text-[#f8f8f3] animate-fade-in-out">
                                        {slide.bottomText}
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slider;
