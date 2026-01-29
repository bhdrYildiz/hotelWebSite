'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft, FaBed, FaUsers, FaEye, FaStar, FaWifi } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { rooms } from '../data/rooms';
import type { Swiper as SwiperType } from 'swiper';

const RoomsSection = () => {
    const [activeRoom, setActiveRoom] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <section className="relative bg-white py-20 font-cormorant" id="rooms">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1c2c34] mb-2 uppercase tracking-wide">
                                Odalarımızı Keşfedin
                            </h2>
                            <p className="text-lg text-gray-600 max-w-xl">
                                Odalarımızın detaylarını keşfedin ve hizmetlerimizi deneyimleyin.
                            </p>
                        </div>


                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 mr-2 hidden lg:block">
                                Odalarımız ({rooms.length} oda)
                            </span>
                            <div className="flex gap-2">
                                {rooms.slice(0, 7).map((room, index) => (
                                    <button
                                        key={room.id}
                                        onClick={() => {
                                            setActiveRoom(index);
                                            swiperInstance?.slideTo(index);
                                        }}
                                        className={`w-12 h-12 flex items-center justify-center text-sm font-medium transition-all duration-300 ${activeRoom === index
                                            ? 'bg-[#ab9a8b] text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {room.idName}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-[1.3fr_1fr] gap-0 min-h-[600px]"
                >

                    <div className="bg-[#1c2c34] p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                        <motion.div
                            key={activeRoom}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >

                            <h3 className="text-3xl lg:text-4xl font-light text-white mb-8 uppercase tracking-wider">
                                {rooms[activeRoom].name}
                            </h3>


                            <div className="flex gap-8 mb-8 text-white">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Oda No</p>
                                    <p className="text-2xl font-light">{rooms[activeRoom].idName}</p>
                                </div>
                                <div className="border-l border-gray-600 pl-8">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Alan</p>
                                    <p className="text-2xl font-light">{rooms[activeRoom].size}</p>
                                </div>
                                <div className="border-l border-gray-600 pl-8">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Kapasite</p>
                                    <p className="text-2xl font-light">{rooms[activeRoom].capacity}</p>
                                </div>
                            </div>


                            <p className="text-gray-300 leading-relaxed mb-8 text-base">
                                {rooms[activeRoom].description}
                            </p>


                            <div className="space-y-4 mb-10">
                                <div className="flex items-start gap-4 text-gray-300">
                                    <FaBed className="text-[#ab9a8b] mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">Yatak:</p>
                                        <p className="text-base">King Size Yatak</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <FaUsers className="text-[#ab9a8b] mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">Kapasite:</p>
                                        <p className="text-base">{rooms[activeRoom].capacity} Kişi</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <FaStar className="text-[#ab9a8b] mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">Özellik:</p>
                                        <p className="text-base">{rooms[activeRoom].features.join(", ")}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <FaWifi className="text-[#ab9a8b] mt-1 flex-shrink-0" size={18} />
                                    <div>
                                        <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">Hizmet:</p>
                                        <p className="text-base">Açık Büfe Kahvaltı, Ücretsiz Otopark, Ücretsiz WiFi</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={`/rooms/${rooms[activeRoom].id}`}
                                className="inline-flex items-center justify-center bg-white hover:bg-[#ab9a8b] text-[#1c2c34] hover:text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                                prefetch={false}
                            >
                                Oda Detayları
                            </Link>
                        </motion.div>
                    </div>


                    <div className="relative bg-white order-1 lg:order-2 min-h-[400px] lg:min-h-[600px] p-6 lg:p-12 flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">

                            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] h-[calc(100%-3rem)] border-2 border-[#ab9a8b] z-0 pointer-events-none"></div>

                            <div className="group relative w-full h-full max-w-[500px] max-h-[450px] z-10">
                                <Swiper
                                    key={activeRoom}
                                    navigation={{
                                        nextEl: '.room-image-nav-next',
                                        prevEl: '.room-image-nav-prev',
                                    }}
                                    modules={[Navigation]}
                                    className="h-full"
                                >

                                    {rooms[activeRoom].images.map((image, imgIndex) => (
                                        <SwiperSlide key={imgIndex}>
                                            <div className="relative w-full h-full overflow-hidden">
                                                <Image
                                                    src={image}
                                                    alt={`${rooms[activeRoom].name} - Görsel ${imgIndex + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>


                                <button className="room-image-nav-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-[#ab9a8b] text-[#1c2c34] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100">
                                    <FaArrowLeft size={14} />
                                </button>
                                <button className="room-image-nav-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-[#ab9a8b] text-[#1c2c34] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100">
                                    <FaArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/rooms"
                        prefetch={false}
                        className="inline-flex items-center justify-center border-2 border-[#1c2c34] text-[#1c2c34] hover:bg-[#1c2c34] hover:text-white px-12 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300"
                    >
                        Tüm Odaları Görüntüle
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default RoomsSection;
