'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.8,
            duration: 1.2,
            ease: 'easeOut',
        },
    }),
};

const AboutSection = () => {
    return (
        <section className="relative py-24 bg-[#f8f8f3] overflow-hidden z-10 font-cormorant">
            {/* Sağ arka plan görseli */}
            <div
                className="absolute inset-y-0 right-12 top-24 w-full md:w-3/4 h-3/4 bg-center opacity-10"
                style={{ backgroundImage: "url('/images/balon.png')" }}
            />

            <div className="container max-w-[1200px] min-h-[500px] md:min-h-[600px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-20">
                {/* Sol Alan - Görseller */}
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            className="col-span-2 overflow-hidden"
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        >
                            <img
                                src="/images/bahce/bahce2.jpg"
                                alt="pool"
                                className="shadow-lg w-5/6 h-[250px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="overflow-hidden"
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        >
                            <img
                                src="/images/bahce/bahce10.jpg"
                                alt="room"
                                className="shadow-lg w-full h-[230px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="overflow-hidden"
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        >
                            <img
                                src="/images/tour1.jpg"
                                alt="tour"
                                className="shadow-lg w-full h-[350px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Sağ Alan - Metin */}
                <motion.div
                    className="z-20"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-sm font-semibold text-[#b99365] uppercase mb-2 tracking-wider">
                        YILDIZ OTEL CAPPADOCIA
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1f2c42] leading-tight mb-6">
                        Discover Our <br /> Underground
                    </h2>
                    <p className="text-base leading-relaxed text-[#111827] mb-6">
                        Welcome to a hidden realm of extraordinary accommodations where luxury,
                        comfort, and adventure converge. Our underground hotels offer an unparalleled
                        escape from the ordinary, inviting you to explore a subterranean world of
                        wonders.
                    </p>
                    <Link
                        href="/contact"
                        className="font-cormorant rounded-sm bg-[#c1a37b] hover:bg-[#b99365] px-6 py-2 inline-block 
                        transition-all duration-300 text-[#f8f8f3] hover:text-[#1f2c42] font-semibold text-sm tracking-wider"
                    >
                        Book Now
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
