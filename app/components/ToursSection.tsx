"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { tours as allTours } from '@/app/data/tours'
import type { Tour } from '@/app/data/tours';
import Link from "next/link";

const tours = allTours.slice(0, 3);

export default function ToursSection() {
    return (
        <section className="bg-[#f8f8f3] py-24">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1f2c42] mb-2 font-cormorant">
                    TUR VE AKTİVİTELER
                </h2>
                <p className="text-[#1f2c42] text-base font-cormorant">
                    Unutulmaz turlar ve maceralar sizi bekliyor
                </p>
                <div className="mt-4 mx-auto block text-center">
                    <Link
                        href="/tours"
                        aria-label="Tüm turları görüntüle"
                        className="relative overflow-hidden inline-block px-6 py-2 bg-[#1f2c42] text-white group z-0 cursor-pointer"
                    >
                        <span className="relative z-10">Turlara Göz At</span>
                        <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {tours.map((tour, index) => (
                    <TourCard key={index} tour={tour} index={index} />
                ))}
            </div>
        </section>
    );
}

function TourCard({ tour, index }: { tour: Tour; index: number }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={
                inView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: index * 0.1 },
                    }
                    : {}
            } whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden shadow-md border border-[#f8f8f3] cursor-pointer bg-white"
        >
            <div className="w-full h-[420px] relative">
                <Image
                    src={tour.image}
                    alt={`${tour.title} turuna ait tanıtım görseli`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover transition-transform duration-500"
                />
            </div>

            <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-[#111827] mb-2 font-cormorant">
                    {tour.title}
                </h3>
                <p className="text-sm text-[#1f2c42] mb-4 font-cormorant">
                    {tour.description}
                </p>
                <Link
                    href={`/tours/${tour.id}`}
                    aria-label={`${tour.title} turunun detaylarını gör`}
                    className="relative overflow-hidden inline-block px-6 py-2 bg-[#1f2c42] text-white group z-0 cursor-pointer"
                >
                    <span className="relative z-10">Detayları Gör</span>
                    <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                </Link>
            </div>
        </motion.div>
    );
}

