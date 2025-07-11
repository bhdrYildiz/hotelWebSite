'use client';

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const reviews = [
    {
        name: "Ahmet Demir",
        date: "Haziran 2025",
        avatar: "/icons/man.png",
        rating: 5,
        text:
            "Güzel ve ferah bi yerdi hizmetten memnun kaldık tavsiye ederim ilgilinizden dolayı çok teşekkür ederiz"
    },
    {
        name: "Şebnem Acar",
        date: "Haziran 2025",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Konumu çok güzel, önünde küçük bir otoparkı var, işletmeci çok ilgili ve yardım sever, odalar temiz, kahvaltısı gayet güzel. Yörenin yabancısıydık işletmeci Fatih bey, harita üzerinden sırasıyla nereleri gezmemiz gerektiği konusunda da, balon yolculuğu konusunda da yardımcı oldu. Tekrar gidersem konaklama konusunda maceraya girmem."
    },
    {
        name: "Mustafa Arguc",
        date: "Haziran 2025",
        avatar: "/icons/man.png",
        rating: 5,
        text:
            "Ailecek ilk defa gittiğimiz Ürgüp turumuzda 3 gece misafir eden yıldız hotel sahibi ve çok degerli oğullarına teşekkür ediyoruz. Herkese tavsiye ediyorum temiz güler yüzlü. Geri dönüş yolculuğumuz da arayıp sormaları ayrıca bize bir kat daha memnun etti"
    },
    {
        name: "Selin Kuyumcuoğlu",
        date: "Mayıs 2025",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Çok tatlı bir aile işletmesi, çok güleryüzlü, saygılı ve yardımseverler. İhtiyacımız olan her konuda yardımcı oldular. Odalar temiz ve konforluydu. Kahvaltılar gayet yeterli, özellikle portakallı kek çok lezzetliydi. Konum olarak gezilebilecek her yere yakın. Tekrar konaklamak isteyebileceğim ve tavsiye edebileceğim bir otel."
    },
    {
        name: "İrem Özcan",
        date: "Mayıs 2025",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Ailece çok güler yüzlü ve yardımsever insanlar işletiyor. Bize her konuda yardımcı oldular. Konum olarak çoğu gezilecek yere çok yakın. Tekrar gidecek olsam aynı yerde kalmayı tercih edebilirim."
    },
    {
        name: "Özgür Ergin",
        date: "Mart 2023",
        avatar: "/icons/man.png",
        rating: 5,
        text:
            "Her şeyi ile çok güzel bir oteldi ailece kendimizi evimizde hissettirdiler konum olsun hizmet olsun gerçekten gidersem kalacağım tek hotel yıldız hotel saygılarımla"
    },
];

export default function CustomerReviews() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section className="bg-[#e2e2e2]/40 py-16 font-cormorant" id="reviews">
            <div className="container max-w-[1200px] min-h-[400px] md:min-h-[500px] mx-auto text-center flex flex-col">
                <div className="flex flex-col justify-center mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f2c42] mb-2">
                        MİSAFİRLERİMİZİN YORUMLARI
                    </h2>
                    <p className="text-[#111827] mb-4">
                        Misafirlerimiz bizim hakkımızda neler söylüyor
                    </p>
                    <div className="mb-8">
                        <Link
                            href="https://www.google.com/travel/search?gsas=1&ts=EggKAggDCgIIAxocEhoSFAoHCOkPEAcYCxIHCOkPEAcYDBgBMgIQAA&qs=MhRDZ3NJdU1fdWlfS0lrdEQ3QVJBQjgC&ap=ugEHcmV2aWV3cw&ictx=111&biw=1440&bih=833&hl=tr-TR&ved=0CAAQ5JsGahcKEwjohuyL_rSOAxUAAAAAHQAAAAAQEA"
                            className="relative overflow-hidden inline-block px-6 py-2 bg-[#1f2c42] text-[#f8f8f3] group z-0 cursor-pointer"
                        >
                            <span className="relative z-10">Tüm Yorumları Gör</span>
                            <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 items-start">
                    <div className="relative w-full flex justify-center">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
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
                                    <div className="flex justify-center">
                                        <div className="bg-[#f8f8f3] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 p-6 text-left max-w-xs w-full flex flex-col justify-between font-cormorant">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Image src={review.avatar} alt={review.name} width={40} height={40} className="rounded-full" />
                                                <div>
                                                    <p className="font-semibold text-sm text-[#1f2c42]">{review.name}</p>
                                                    <p className="text-xs text-[#b99365]">{review.date}</p>
                                                </div>
                                                <Image src="/icons/google.png" alt="Tripadvisor" width={20} height={20} className="ml-auto" />
                                            </div>

                                            <div className="flex gap-1 mb-2 text-[#c1a37b]">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FaStar key={i} size={16} />
                                                ))}
                                            </div>

                                            <p className={`text-[#111827] leading-relaxed ${expanded === index ? "" : "line-clamp-3"}`}>
                                                {review.text}
                                            </p>

                                            <button
                                                className="text-sm text-[#b99365] hover:underline hover:text-[#1f2c42] hover:font-semibold mt-2 self-start cursor-pointer"
                                                onClick={() => setExpanded(expanded === index ? null : index)}
                                            >
                                                {expanded === index ? "Hide" : "Read more"}
                                            </button>
                                        </div>
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
