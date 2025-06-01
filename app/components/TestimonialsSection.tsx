"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
    {
        name: "Orhan Şahin",
        date: "24 April 2024",
        avatar: "/icons/man.png",
        rating: 5,
        text:
            "An enjoyable holiday\nYou receive hospitality and attention from the moment you enter the hotel. The rooms are large, spacious and clean. You feel comfortable in the room built inside the rock. The hotel's breakfast was excellent. You eat with a pleasant view of Ürgüp. Another important feature of the hotel is that it is within walking distance of local attractions. Highly recommended for families and solo travelers alike.",
    },
    {
        name: "Ömer Y",
        date: "1 April 2024",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "It's like an extraordinary fairy tale. It is in the best location, within walking distance of the market, restaurants, and cafes. You wake up to a panoramic view and sleep in complete silence. The design of the rooms blends perfectly with the cave ambiance.",
    },
    {
        name: "Orhan Şahin",
        date: "24 May 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Urgup bölgesi kalınacak bir yer. Urgup bölgesinde merkeze yakın temiz ve yöresel bir otel bulmak zor olabilir ama burası kesinlikle beklentileri karşılıyor. Güler yüzlü personeli ve temiz odalarıyla rahat bir tatil geçirdik.",
    },
    {
        name: "Orhan Şahin",
        date: "24 May 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Urgup bölgesi kalınacak bir yer. Urgup bölgesinde merkeze yakın temiz ve yöresel bir otel bulmak zor olabilir ama burası kesinlikle beklentileri karşılıyor. Güler yüzlü personeli ve temiz odalarıyla rahat bir tatil geçirdik.",
    },
    {
        name: "Orhan Şahin",
        date: "24 May 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Urgup bölgesi kalınacak bir yer. Urgup bölgesinde merkeze yakın temiz ve yöresel bir otel bulmak zor olabilir ama burası kesinlikle beklentileri karşılıyor. Güler yüzlü personeli ve temiz odalarıyla rahat bir tatil geçirdik.",
    },
];

export default function CustomerReviews() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section className="bg-white py-16" id="reviews">
            <div className="container max-w-[1200px] h-[500px] mt-8 mx-auto text-center flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        CUSTOMER REVIEWS
                    </h2>
                    <p className="text-gray-500 mb-10">
                        What our guests are saying about us
                    </p>
                    <div className="mb-8">
                        <a
                            href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html#REVIEWS"
                            className="border border-[#d9b464] p-2 rounded-md cursor-pointer 
                   text-gray-700 bg-white
                   hover:bg-blue-600 hover:text-amber-50 hover:text-xl
                   transition-all duration-300 ease-in-out"
                        >
                            See all reviews
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
                    {/* Review Slider */}
                    <div className="relative w-full flex justify-center">
                        {/* Swiper içerik */}
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1.1}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                768: { slidesPerView: 3 },
                            }}
                            className="w-full max-w-[1000px]"
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-neutral-300 rounded-lg shadow-md p-4 h-auto text-left max-w-xs w-full flex flex-col">
                                        {/* avatar + isim */}
                                        <div className="flex items-center gap-3 mb-2">
                                            <Image src={review.avatar} alt={review.name} width={40} height={40} className="rounded-full" />
                                            <div>
                                                <p className="font-semibold text-sm">{review.name}</p>
                                                <p className="text-xs text-gray-400">{review.date}</p>
                                            </div>
                                            <Image src="/icons/tripLogo.svg" alt="Tripadvisor" width={20} height={20} className="ml-auto" />
                                        </div>
                                        {/* stars */}
                                        <div className="flex gap-1 mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Image key={i} src="/icons/tripDot.svg" alt="star" width={18} height={18} />
                                            ))}
                                        </div>
                                        {/* text */}
                                        <p className={`text-sm text-gray-700 leading-relaxed ${expanded === index ? "" : "line-clamp-4"}`}>
                                            {review.text}
                                        </p>
                                        <button
                                            className="text-xs text-gray-500 hover:underline mt-2 self-start cursor-pointer"
                                            onClick={() => setExpanded(expanded === index ? null : index)}
                                        >
                                            {expanded === index ? "Hide" : "Read more"}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                        {/* CUSTOM NAVIGATION BUTTONS */}
                        <div className="custom-prev absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-700 text-5xl">
                            ❮
                        </div>
                        <div className="custom-next absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-700 text-5xl">
                            ❯
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
