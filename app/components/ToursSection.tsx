"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { tours as allTours } from "@/app/data/tours";
import Link from "next/link";
import { useRef } from "react";

const tours = allTours.slice(0, 6);

function TourCard({ tour }: { tour: (typeof tours)[0] }) {
    return (
        <div className="relative h-[320px] md:h-[480px] overflow-hidden shadow-lg group">
            <Image
                src={tour.image}
                alt={tour.title}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg md:text-xl font-light">{tour.title}</h3>
            </div>
        </div>
    );
}

export default function ToursSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftTours = tours.slice(0, 3);
    const rightTours = tours.slice(3, 6);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const leftColumnY = useTransform(scrollYProgress, [0, 1], [0, 220]);
    const rightColumnY = useTransform(scrollYProgress, [0, 1], [0, -220]);

    return (
        <section ref={sectionRef} className="bg-white font-cormorant">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr_1fr] gap-16 lg:gap-24 items-start">

                    <motion.div style={{ y: leftColumnY }} className="hidden lg:flex flex-col gap-12 will-change-transform">
                        {leftTours.map((tour, index) => (
                            <motion.div
                                key={`left-${tour.id}`}
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true, amount: 0.25 }}
                            >
                                <TourCard tour={tour} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-10rem)] text-center px-2 lg:px-8 flex flex-col items-center justify-center">
                        <p className="text-base uppercase tracking-[0.5em] font-bold text-[#ab9a8b] mb-4">
                            Keşfedin
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#1c2c34] leading-tight">
                            Tur ve Aktiviteler
                        </h2>
                        <p className="text-[#1c2c34] leading-relaxed text-base font-semibold tracking-wide mb-8 max-w-sm">
                            Kapadokya&apos;nın eşsiz güzelliklerini keşfedin. Unutulmaz turlar ve maceralar sizi bekliyor.
                        </p>
                        <Link
                            href="/tours"
                            className="bg-[#1c2c34] hover:bg-[#ab9a8b] text-white px-8 py-3 text-sm font-bold tracking-wider transition-colors duration-300"
                            prefetch={false}
                        >
                            TÜM TURLARI GÖR
                        </Link>
                    </div>

                    <motion.div style={{ y: rightColumnY }} className="hidden lg:flex flex-col gap-12 will-change-transform">
                        {rightTours.map((tour, index) => (
                            <motion.div
                                key={`right-${tour.id}`}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true, amount: 0.25 }}
                            >
                                <TourCard tour={tour} />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

                <div className="lg:hidden mt-10">
                    <div className="grid grid-cols-2 gap-4">
                        {tours.map((tour) => (
                            <div key={`mobile-${tour.id}`} className="relative h-[200px] overflow-hidden shadow-lg group">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 420px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end p-4">
                                    <h3 className="text-white text-sm font-light">{tour.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
