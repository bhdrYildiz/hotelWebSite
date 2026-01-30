'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="relative py-20 bg-white font-cormorant">
            <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block">
                        <p className="text-base text-[#ab9a8b] uppercase tracking-[0.3em] mb-3">
                            Yıldız Otel
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1c2c34] mb-4">
                            Konfor ve Zarafet
                        </h2>
                        <div className="w-32 h-[1px] bg-[#ab9a8b] mx-auto"></div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative lg:pr-12 lg:pb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] lg:h-[500px] z-10 overflow-hidden group"
                        >
                            <Image
                                src="/images/otelBahce/resim15.jpeg"
                                alt="Yıldız Otel Kapadokya"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-4 left-4 sm:left-6 lg:-left-8 w-52 h-48 lg:w-80 lg:h-56 z-20 overflow-hidden group shadow-2xl"
                        >
                            <Image
                                src="/images/otelBahce/resim4.jpg"
                                alt="Yıldız Otel Odalar"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 border-4 border-white pointer-events-none"></div>
                        </motion.div>

                        <div className="hidden lg:block absolute top-6 right-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] border-2 border-[#ab9a8b] pointer-events-none z-0"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-lg text-[#1c2c34] leading-relaxed mb-6">
                                Kapadokya&apos;nın merkezi Ürgüp ilçesinde yer alan Yıldız Otel, 35 yılı aşkın
                                süredir misafirlerine hizmet vermekte ve misafirlerimizin memnuniyetini en üst seviyede tutmayı hedeflemektedir.

                            </p>
                            <p className="text-base text-[#1c2c34] leading-relaxed">
                                Misafirlerimize konforlu güvenli ve hijyenik odalar, uygun fiyatlar ve iyi konum ile hizmet vermekteyiz.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-[#ab9a8b] pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">10+</h3>
                                <p className="text-sm text-gray-600 uppercase tracking-wider">Konforlu Oda</p>
                            </div>
                            <div className="border-l-2 border-[#ab9a8b] pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">35+</h3>
                                <p className="text-sm text-gray-600 uppercase tracking-wider">Yıllık Deneyim</p>
                            </div>
                            <div className="border-l-2 border-[#ab9a8b] pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">100%</h3>
                                <p className="text-sm text-gray-600 uppercase tracking-wider">Misafir Memnuniyeti</p>
                            </div>
                            <div className="border-l-2 border-[#ab9a8b] pl-4">
                                <h3 className="text-3xl font-light text-[#1c2c34] mb-1">24/7</h3>
                                <p className="text-sm text-gray-600 uppercase tracking-wider">Hizmet</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center bg-[#1c2c34] hover:bg-[#ab9a8b] 
                                text-white px-8 py-3 text-sm font-medium tracking-wider transition-all duration-300"
                                prefetch={false}
                            >
                                HAKKIMIZDA
                            </Link>
                            <Link
                                href="/rooms"
                                className="inline-flex items-center justify-center border-2 border-[#1c2c34] 
                                text-[#1c2c34] hover:bg-[#1c2c34] hover:text-white px-8 py-3 text-sm 
                                font-medium tracking-wider transition-all duration-300"
                                prefetch={false}
                            >
                                ODALARIMIZ
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
