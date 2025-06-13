'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface FullscreenSliderProps {
    images: string[];
    startIndex: number;
    onClose: () => void;
}

const FullScreenSlider = ({ images, startIndex, onClose }: FullscreenSliderProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-xl z-50 bg-black/60 px-3 py-1 rounded"
            >
                ✕
            </button>

            <Swiper
                modules={[Navigation]}
                navigation
                initialSlide={startIndex}
                spaceBetween={50}
                slidesPerView={1}
                className="w-full h-full"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center">
                        <div className="relative w-full mt-12 h-[90vh] flex justify-center items-center">
                            <Image
                                src={img}
                                alt={`Fullscreen ${i}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 90vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FullScreenSlider;
