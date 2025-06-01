"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tours = [
    {
        title: "Hot Air Balloon Flight",
        description: "Greet the sunrise from the sky with panoramic views of Cappadocia.",
        img: "/images/slider1.jpeg",
        link: "/tours/balloon",
    },
    {
        title: "ATV Safari Tour",
        description: "Ride through valleys and dusty trails with high adrenaline.",
        img: "/images/room5.jpg",
        link: "/tours/atv",
    },
    {
        title: "Horse Riding Tour",
        description: "Explore Cappadocia's natural wonders on horseback.",
        img: "/images/slider2.jpeg",
        link: "/tours/horse",
    },
];

export default function ToursSection() {
    return (
        <section className="bg-neutral-50 py-24">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">TOURS AND ACTIVITIES</h2>
                <p className="text-gray-500">Unforgettable tours and adventures await you</p>
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
            className="overflow-hidden shadow-md border border-gray-300 cursor-pointer"
        >
            <div className="w-full h-[420px] relative">
                <Image
                    src={tour.img}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500"
                />
            </div>

            <div className="bg-white p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{tour.description}</p>
                <a
                    href={tour.link}
                    className="inline-block px-4 py-2 bg-[#b99365] text-white text-sm hover:bg-gray-800 transition"
                >
                    View More →
                </a>
            </div>
        </motion.div>
    );
}
