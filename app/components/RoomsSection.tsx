'use client';

import React, { useEffect } from "react";
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
        <section className="bg-[#f8f4f2] py-16" id="rooms">
            <div className="container max-w-[1200px] mx-auto px-4 text-center">
                <div className="mb-12">
                    <h3 className="text-[#b99365] font-serif text-3xl">YILDIZ OTEL</h3>
                    <h2 className="text-4xl font-semibold mt-2">KEMER PALACE ROOMS</h2>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        Discover the enchanting beauty of Cappadocia from the comfort of Kemer Palace.
                    </p>
                </div>

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
                            <div className="bg-white shadow-md rounded-md overflow-hidden group relative mb-16">
                                <div className="w-full h-82 relative overflow-hidden">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition duration-500"
                                    />
                                    <button className="absolute bottom-2 left-2 bg-gray-800 text-white px-5 py-2 text-sm 
                                    tracking-wide opacity-0 group-hover:opacity-100 hover:bg-[#b99365] transition cursor-pointer">
                                        VIEW DETAILS →
                                    </button>
                                </div>

                                <div className="p-6 text-left">
                                    <p className="text-sm text-[#b99365] tracking-wide uppercase">
                                        {room.category}
                                    </p>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        {room.name}
                                    </h3>
                                    <div className="border-t pt-4 flex justify-between text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <img src="/icons/bed.png" alt="bed" className="w-4 h-4" />
                                            {room.bed}
                                        </div>
                                        <div>{room.size}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="custom-pagination mt-8 flex justify-center gap-2 cursor-pointer"></div>
            </div>
        </section>
    );
};

export default RoomsSection;
