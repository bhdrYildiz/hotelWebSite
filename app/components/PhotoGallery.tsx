'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
    '/images/turlar/tur1.jpg',
    '/images/turlar/tur30.jpg',
    '/images/turlar/tur27.jpg',
    '/images/turlar/tur7.jpg',
    '/images/turlar/tur28.jpg',
    '/images/turlar/tur14.jpg',
];

export default function PhotoGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    const prevImage = () => {
        setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="space-y-4">
            {/* Slider Container */}
            <div
                className="relative w-full h-[450px] rounded-md overflow-hidden"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                {/* Images Row */}
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full w-full"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {galleryImages.map((src, i) => (
                        <div key={i} className="relative min-w-full h-full">
                            <Image
                                src={src}
                                alt={`Gallery Image ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevImage}
                    className={`cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <ChevronLeft />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextImage}
                    className={`cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar px-1">
                {galleryImages.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`Thumbnail ${i + 1}`}
                        width={80}
                        height={50}
                        onClick={() => setActiveIndex(i)}
                        className={`object-cover w-[120px] h-[80px] cursor-pointer rounded-md border-2 transition-transform duration-300 ${activeIndex === i
                            ? 'border-[#b99365] scale-105'
                            : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
