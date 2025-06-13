"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tours = [
    {
        title: "Hot Air Balloon Flight",
        description: "Greet the sunrise from the sky with panoramic views of Cappadocia.",
        img: "/images/balon.png",
        link: "/tours/balloon",
    },
    {
        title: "ATV Safari Tour",
        description: "Ride through valleys and dusty trails with high adrenaline.",
        img: "/images/atv.jpg",
        link: "/tours/atv",
    },
    {
        title: "Horse Riding Tour",
        description: "Explore Cappadocia's natural wonders on horseback.",
        img: "/images/at1.jpg",
        link: "/tours/horse",
    },
];

export default function ToursSection() {
    return (
        <section className="bg-[#f8f8f3] py-24">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1f2c42] mb-2 font-cormorant">
                    TOURS AND ACTIVITIES
                </h2>
                <p className="text-[#1f2c42] font-cormorant">
                    Unforgettable tours and adventures await you
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {tours.map((tour, index) => (
                    <TourCard key={index} tour={tour} />
                ))}
            </div>
        </section>
    );
}

type Tour = {
    title: string;
    description: string;
    img: string;
    link: string;
};

function TourCard({ tour }: { tour: Tour }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden shadow-md border border-[#f8f8f3] cursor-pointer bg-white"
        >
            <div className="w-full h-[420px] relative">
                <Image
                    src={tour.img}
                    alt={tour.title}
                    fill
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
                <a
                    href={tour.link}
                    className="inline-block rounded-sm bg-[#c1a37b] hover:bg-[#b99365] px-6 py-2 
                        transition-all duration-300 text-[#f8f8f3] hover:text-[#1f2c42] font-semibold text-sm tracking-wider"
                >
                    View More →
                </a>
            </div>
        </motion.div>
    );
}
