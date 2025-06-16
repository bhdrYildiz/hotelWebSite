'use client';

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

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
    {
        name: "Orhan Şahin",
        date: "24 May 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Urgup bölgesi kalınacak bir yer. Urgup bölgesinde merkeze yakın temiz ve yöresel bir otel bulmak zor olabilir ama burası kesinlikle beklentileri karşılıyor. Güler yüzlü personeli ve temiz odalarıyla rahat bir tatil geçirdik.",
    },
    // Diğer tekrar edenleri tek bıraktım
];

export default function CustomerReviews() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section className="bg-[#e2e2e2]/40 py-16 font-cormorant" id="reviews">
            <div className="container max-w-[1200px] min-h-[400px] md:min-h-[500px] mx-auto text-center flex flex-col">
                <div className="flex flex-col justify-center mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f2c42] mb-2">
                        CUSTOMER REVIEWS
                    </h2>
                    <p className="text-[#111827] mb-4">
                        What our guests are saying about us
                    </p>
                    <div className="mb-8">
                        <a
                            href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html#REVIEWS"
                            className="relative overflow-hidden inline-block px-6 py-2 bg-[#1f2c42] text-[#f8f8f3] group z-0 cursor-pointer"
                        >
                            <span className="relative z-10">Tüm Yorumları Gör</span>
                            <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 items-start">
                    <div className="relative w-full flex justify-center">
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
                                    <div className="bg-[#f8f8f3] shadow-lg p-6 text-left max-w-xs w-full flex flex-col justify-between font-cormorant">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Image src={review.avatar} alt={review.name} width={40} height={40} className="rounded-full" />
                                            <div>
                                                <p className="font-semibold text-sm text-[#1f2c42]">{review.name}</p>
                                                <p className="text-xs text-[#b99365]">{review.date}</p>
                                            </div>
                                            <Image src="/icons/tripLogo.svg" alt="Tripadvisor" width={20} height={20} className="ml-auto" />
                                        </div>

                                        <div className="flex gap-1 mb-2 text-[#c1a37b]">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FaStar key={i} size={16} />
                                            ))}
                                        </div>

                                        <p className={`text-[#111827] leading-relaxed ${expanded === index ? "" : "line-clamp-4"}`}>
                                            {review.text}
                                        </p>

                                        <button
                                            className="text-sm text-[#b99365] hover:underline hover:text-[#1f2c42] hover:font-semibold mt-2 self-start cursor-pointer"
                                            onClick={() => setExpanded(expanded === index ? null : index)}
                                        >
                                            {expanded === index ? "Hide" : "Read more"}
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* NAV BUTTONS */}
                        <div className="custom-prev absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-[#1f2c42] text-4xl hover:scale-110 transition">
                            ❮
                        </div>
                        <div className="custom-next absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-[#1f2c42] text-4xl hover:scale-110 transition">
                            ❯
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
