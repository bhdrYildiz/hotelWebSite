'use client'

import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/bahce/bahce1.jpg",
        topText: "MODERN & SPACIOUS ROOMS",
        middleText: "Sophisticated Experiences",
        bottomText: "Inspired by Cappadocia",
    },
    {
        image: "/images/bahce/bahce6.jpg",
        topText: "PANORAMIC VIEWS",
        middleText: "Breathtaking Mornings",
        bottomText: "Moments that Matter",
    },
    {
        image: "/images/bahce/bahce7.jpg",
        topText: "UNIQUE ATMOSPHERE",
        middleText: "Feel the Magic",
        bottomText: "A Story in Every Corner",
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
                                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-out text-[#f8f8f3]">
                                        {slide.topText}
                                    </h2>
                                    <div className="flex items-center text-4xl md:text-6xl font-medium text-[#c1a37b]">
                                        Dive Into
                                        <div className="ml-4 h-[1.1em] w-[8rem] overflow-hidden relative">
                                            <div className="absolute top-0 left-0 w-full leading-none animate-slide-up">
                                                <div className="h-[1.1em] flex items-center justify-center text-[#f8f8f3]">Ideas</div>
                                                <div className="h-[1.1em] flex items-center justify-center text-[#f8f8f3]">Tech</div>
                                                <div className="h-[1.1em] flex items-center justify-center text-[#f8f8f3]">Art</div>
                                                <div className="h-[1.1em] flex items-center justify-center text-[#f8f8f3]">Art</div>
                                                <div className="h-[1.1em] flex items-center justify-center text-[#f8f8f3]">Art</div>
                                            </div>
                                        </div>
                                    </div>
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
