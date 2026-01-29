'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoGallery({ images }: { images: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    const prevImage = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="space-y-4">
            <div
                className="relative w-full h-[450px] rounded-md overflow-hidden"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full w-full"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div key={i} className="relative min-w-full h-full">
                            <Image
                                src={src}
                                alt={`Gallery Image ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevImage}
                    className={`cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={nextImage}
                    className={`cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar px-1">
                {images.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt={`Thumbnail ${i + 1}`}
                        width={80}
                        height={50}
                        onClick={() => setActiveIndex(i)}
                        className={`object-cover w-[120px] h-[80px] cursor-pointer rounded-md border-2 transition-transform duration-300 ${activeIndex === i
                            ? 'border-[#ab9a8b] scale-105'
                            : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
