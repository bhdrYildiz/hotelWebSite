'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const testimonials = [
    {
        name: 'Kadir Tara Bilen',
        review: "I'm a photographer in the region, I chose it for a 1-day holiday with my wife...",
        role: 'Guest review',
        avatar: '/icons/man.png' // public klasörüne eklenecek
    },
    {
        name: 'Kaasdasdasdasdaas!',
        review: "I'm a photographer in the region, I casdadasdasdasdasdasdahose it for a 1-day holiday with my wife...",
        role: 'Guest review',
        avatar: '/icons/woman.png' // public klasörüne eklenecek
    },
    {
        name: 'Kaasdasdadasdasdasn',
        review: "I'm a photographer in the adsadasdasdas, I chose it for a 1-day holiday with my wife...",
        role: 'Guest review',
        avatar: '/icons/woman.png' // public klasörüne eklenecek
    },
    {
        name: 'Kaasdasdadasdasdasn',
        review: "I'm a photographer in the adsadasdasdas, I chose it for a 1-day holiday with my wife...",
        role: 'Guest review',
        avatar: '/icons/man.png' // public klasörüne eklenecek
    },
    {
        name: 'Kaasdasdadasdasdasn',
        review: "I'm a photographer in the adsadasdasdas, I chose it for a 1-day holiday with my wife...",
        role: 'Guest review',
        avatar: '/icons/man.png' // public klasörüne eklenecek
    },
    // Diğer slider item’larını buraya ekleyebilirsin
];
export default function TestimonialsSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        const slider = sliderRef.current;
        if (!slider) return;

        setIsDown(true);
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
    };

    const handleMouseLeave = () => setIsDown(false);
    const handleMouseUp = () => setIsDown(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const slider = sliderRef.current;
        if (!isDown || !slider) return;
        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // hız ayarı
        slider.scrollLeft = scrollLeft - walk;
    };
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        const slider = sliderRef.current;
        if (!slider) return;
        const width = slider.offsetWidth;
        slider.scrollTo({
            left: width * index,
            behavior: 'smooth',
        });
        setActiveIndex(index);
    };

    return (
        <section className="relative w-full h-[150vh] text-[#f8f8f3] overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/slide3.jpg"
                alt="spa"
                fill
                quality={100}
                className="object-cover pointer-events-none"
            />

            {/* Top shadow from center */}
            <div
                className="absolute w-full h-1/2 z-10 pointer-events-none"
                style={{
                    top: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                }}
            />

            {/* Content */}
            <div className="container max-w-[1200px] mt-32 mx-auto px-4 z-20 flex flex-col">
                <p className="text-xs z-20 tracking-widest text-[#1d1811] uppercase mb-2">Testimonials</p>
                <h2 className="text-3xl z-20 md:text-4xl font-semibold mb-6">What Guest's Say?</h2>

                {/* Slider with drag to scroll */}
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide pb-4"
                    style={{
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {testimonials.map((item, i) => (
                        <div key={i} className="min-w-[90%] md:min-w-[60%] bg-black/50 p-6 rounded-m shadow-lg backdrop-blur-sm">
                            <p className="text-sm md:text-base text-[#c1a37b] mb-4">{item.review}</p>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-xs text-[#f8f8f3]">{item.role}</p>
                                    <p className="text-[#c1a37b] text-sm mt-1">★★★★★</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                {/* Dot navigation */}
                <div className="flex justify-center gap-2 mt-4 z-20">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-[#c1a37b]' : 'bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>


            <div className="container max-w-[1168px] mt-32 mx-auto px-6 z-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black/50 backdrop-blur-md p-12">

                {/* Sol Bilgi Alanı */}
                <div className="space-y-6 text-[#f8f8f3]">
                    <h2 className="text-3xl md:text-4xl font-light leading-snug">
                        Rezervasyon detayları ve fiyatlar hakkında bilgilendirme için bizimle iletişime geçebilirsiniz.
                    </h2>
                    <div className="text-lg space-y-2">
                        <p className="font-medium">Rezervasyon</p>
                        <div className="flex flex-col text-xl space-y-1">
                            <span>+90 384 551 22 22</span>
                            <span>+90 546 699 77 77</span>
                        </div>
                    </div>
                </div>

                {/* Sağ Form Alanı */}
                <div className="relative z-10 bg-[#1b1b1b] p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto text-[#f8f8f3]">
                    <p className="text-sm text-[#c1a37b] tracking-widest uppercase mb-2">YILDIZ HOTEL</p>
                    <h3 className="text-3xl font-light mb-6">İletişim Formu</h3>
                    <form className="space-y-4 z-10">
                        <input
                            type="text"
                            placeholder="Adınız Soyadınız"
                            className="w-full bg-[#2a2a2a] text-[#f8f8f3] px-4 py-3 rounded-md focus:outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Telefon Numaranız"
                            className="w-full bg-[#2a2a2a] text-[#f8f8f3] px-4 py-3 rounded-md focus:outline-none"
                        />
                        <textarea
                            placeholder="Mesajınız"
                            rows={4}
                            className="w-full bg-[#2a2a2a] text-[#f8f8f3] px-4 py-3 rounded-md focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#c1a37b] text-[#2a2a2a] font-semibold tracking-wider py-3 rounded-md hover:bg-[#b38f65] transition-colors"
                        >
                            FORMU GÖNDER
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
