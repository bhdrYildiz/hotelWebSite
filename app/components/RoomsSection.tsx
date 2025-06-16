'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { rooms } from '../rooms/[roomId]/data';

const RoomsSection = () => {
    return (
        <section className="bg-[#f8f8f3] py-16 font-cormorant" id="rooms">
            <div className="container max-w-[1200px] min-h-[500px] md:min-h-[600px] mx-auto px-4 text-center">
                {/* Başlıklar */}
                <div className="mb-8">
                    <Link href="/" className="shrink-0">
                        <img src="/images/logo2.png" alt="Logo" className="h-24 md:h-24 mx-auto block" />
                    </Link>
                    <h2 className="text-4xl font-bold mt-4 text-[#1f2c42]">KEMER PALACE ROOMS</h2>
                    <p className="text-[#111827] mt-4 max-w-xl mx-auto text-base leading-relaxed">
                        Discover the enchanting beauty of Cappadocia from the comfort of Kemer Palace.
                    </p>
                </div>

                {/* Swiper */}
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper custom-swiper"
                >
                    {rooms.map((room, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md overflow-hidden group relative mb-16">
                                {/* Görsel ve Hover Butonu */}
                                <div className="w-full h-96 relative overflow-hidden cursor-pointer">
                                    <Image
                                        src={room.images[0]}
                                        alt={room.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition duration-400"
                                    />
                                    <Link href={`/rooms/${room.id}`}>
                                        <button
                                            className="absolute bottom-2 left-2 bg-[#1f2c42] text-white px-5 py-2 text-sm 
        tracking-wide opacity-0 group-hover:opacity-100 hover:bg-[#b99365] hover:text-[#1f2c42] 
        hover:font-bold transition cursor-pointer flex items-center gap-2"
                                        >
                                            VIEW DETAILS
                                            <FaArrowRight className="text-sm" />
                                        </button>
                                    </Link>
                                </div>

                                {/* Metin Bilgileri */}
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-semibold text-[#1f2c42]">
                                        {room.name}
                                    </h3>
                                    <p className="text-sm text-[#b99365] tracking-wide mb-2">
                                        {room.description}
                                    </p>
                                    <div className="border-t-1 border-t-gray-300 pt-4 flex justify-between text-sm text-[#111827]">
                                        <div className="flex items-center gap-2">
                                            <img src="/icons/bed.png" alt="bed" className="w-4 h-4" />
                                            <img src="/icons/bath.png" alt="bath" className="w-4 h-4" />
                                            <img src="/icons/breakfast.png" alt="breakfast" className="w-4 h-4" />
                                            <img src="/icons/towel.png" alt="towel" className="w-4 h-4" />
                                            <img src="/icons/wifi.png" alt="wifi" className="w-4 h-4" />
                                            <img src="/icons/balcony.png" alt="balcony" className="w-4 h-4" />
                                        </div>
                                        <div>{room.size}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Opsiyonel boş pagination alanı (kaldırılabilir) */}
                <div className="custom-pagination mt-8 flex justify-center gap-2 cursor-pointer"></div>
                <div className="mt-2">
                    <a
                        href="/rooms"
                        className="relative overflow-hidden inline-block px-6 py-2 bg-[#1f2c42] text-[#f8f8f3] group z-0 cursor-pointer"
                    >
                        <span className="relative z-10">Tüm Odaları Gör</span>
                        <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RoomsSection;
