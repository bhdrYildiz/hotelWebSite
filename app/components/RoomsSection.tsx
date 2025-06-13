'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const rooms = [
    {
        category: "Deluxe Jacuzzi Stone Room",
        name: "Room 201",
        image: "/images/room1.jpg",
        bed: "1 Double Bed",
        size: "40 m²",
    },
    {
        category: "Superior Terrace Room",
        name: "Room 301",
        image: "/images/room2.jpg",
        bed: "1 Double Bed",
        size: "30 m²",
    },
    {
        category: "Superior Terrace Room",
        name: "Room 302",
        image: "/images/room3.jpg",
        bed: "1 Double Bed",
        size: "30 m²",
    },
    {
        category: "Deluxe Family Stone Room",
        name: "Room 303",
        image: "/images/room4.jpg",
        bed: "1 Double Bed",
        size: "45 m²",
    },
    {
        category: "Luxury Suite",
        name: "Room 401",
        image: "/images/room5.jpg",
        bed: "1 King Bed",
        size: "50 m²",
    },
    {
        category: "Panoramic View Room",
        name: "Room 501",
        image: "/images/room6.jpg",
        bed: "1 Double Bed",
        size: "35 m²",
    },
];

const RoomsSection = () => {
    return (
        <section className="bg-[#f8f8f3] py-16 font-cormorant" id="rooms">
            <div className="container max-w-[1200px] min-h-[500px] md:min-h-[600px] mx-auto px-4 text-center">
                {/* Başlıklar */}
                <div className="mb-8">
                    <h3 className="text-[#b99365] text-3xl tracking-wide">YILDIZ OTEL</h3>
                    <h2 className="text-4xl font-bold mt-4 text-[#1f2c42]">KEMER PALACE ROOMS</h2>
                    <p className="text-[#111827] mt-4 max-w-xl mx-auto text-base leading-relaxed">
                        Discover the enchanting beauty of Cappadocia from the comfort of Kemer Palace.
                    </p>
                    <a
                        href="/rooms"
                        className="mt-4 rounded-sm bg-[#c1a37b] hover:bg-[#b99365] px-6 py-2 inline-block 
                        transition-all duration-300 text-[#f8f8f3] hover:text-[#1f2c42] font-semibold text-sm tracking-wider"
                    >
                        See all rooms
                    </a>
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
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition duration-500"
                                    />
                                    <button className="absolute bottom-2 left-2 bg-[#1f2c42] text-white px-5 py-2 text-sm 
                                        tracking-wide opacity-0 group-hover:opacity-100 hover:bg-[#b99365] hover:text-[#1f2c42] hover:font-bold transition cursor-pointer">
                                        VIEW DETAILS →
                                    </button>
                                </div>

                                {/* Metin Bilgileri */}
                                <div className="p-6 text-left">
                                    <p className="text-sm text-[#b99365] tracking-wide uppercase mb-1">
                                        {room.category}
                                    </p>
                                    <h3 className="text-xl font-semibold text-[#1f2c42] mb-4">
                                        {room.name}
                                    </h3>
                                    <div className="border-t pt-4 flex justify-between text-sm text-[#111827]">
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
            </div>
        </section>
    );
};

export default RoomsSection;
