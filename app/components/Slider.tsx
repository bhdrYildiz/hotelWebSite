// components/Slider.tsx
'use client'
// Client component olarak işaretleme

import { useState, useEffect } from "react";

const slides = [
    {
        image: "/images/slide1.jpg",
        subtitle: "Sıradışı Aktiviteler",
        title: "Benzersiz Deneyimler",
        btnText: "Aktiviteler",
        btnLink: "/activities",
    },
    {
        image: "/images/slide2.jpg",
        subtitle: "Muhteşem Manzaralar",
        title: "Rüya Gibi Konaklama",
        btnText: "Odalar",
        btnLink: "/rooms",
    },
    {
        image: "/images/slide3.jpg",
        subtitle: "Unutulmaz Anlar",
        title: "Her An Bir Hikaye",
        btnText: "Rezervasyon",
        btnLink: "/reservation",
    },
];


const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="absolute inset-0 bg-secondary opacity-30"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#1f2c42] px-4">
                        <p className="text-3xl tracking-widest font-cormorant">
                            {slide.subtitle}
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold my-4 font-cormorant text-[#1f2c42]">
                            {slide.title}
                        </h1>
                        <a
                            href={slide.btnLink}
                            className="text-2xl border-2 mt-4 px-10 py-2 border-[#c1a37b] text-[#1f2c42] font-semibold"
                        >
                            {slide.btnText}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
