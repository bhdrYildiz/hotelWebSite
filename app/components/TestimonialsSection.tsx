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
        name: "Burcu S.",
        date: "Eylül 2024",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "ilgi alaka 4 4luk bir otel küçük mutevazi ama herseyiyle yeterli 4 kisilik bir aile olarak 3 gün gecirdik çok memnun kaldık"
    },
    {
        name: "Canan K.",
        date: "Nisan 2024",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Otel sahipleri cok guler yuzlu ve otel odalari son derece temiz ve bakimli Ayrica her türlü transferlerinize yardimci oluyorlar merkeze cok yakin fiyat olarakta uygun içiniz rahatlikla tercih edebilirsiniz ozellikle yakujili odalari cok güzel.Tesekkur ediyorum"
    },
    {
        name: "ALİ H.",
        date: "Kasım 2023",
        avatar: "/icons/man.png",
        rating: 5,
        text:
            "Otel muhteşem. İlgi alaka harika. Kahvaltılar muhteşem. Mirkan kardeşim her konuda sağolsun yardımcı oldu. Yolunuz düşerse bu güzel aile mekanında kalmanızı tavsiye ederim. Herşey için teşekkür ederim."
    },
    {
        name: "Senem Ç.",
        date: "Mayıs 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Akşamları Otelimize dönerken evimize dönüyoruz gibi hissettirdikleri için çok teşekkür ederiz. Temiz, güzel bir otel, fiyat kalite performansı çok iyi mutlaka deneyin... Ürgüp merkezine 5 dakika yürüme mesafesinde."
    },
    {
        name: "Büşra Keskin",
        date: "Temmuz 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "4 gece 5 gün konaklama gerçekleştirdik. Oda gerçekten çok temizdi. Bahçesine özellikle bayıldık. Çalışanların güleryüzlülüğü de ekstra bizi rahat hissettirdi. Herkese tavsiye ediyoruz. Teşekkürler Yıldız Hotel :)"
    },
    {
        name: "Elif Oncel",
        date: "Mart 2023",
        avatar: "/icons/woman.png",
        rating: 5,
        text:
            "Her şey oldukça güzeldi. Çalışanlar çok güler yüzlü ve samimiydi. İçi şirin ve yöreyi hissettirecek şekilde düzenlenen bir otel. Odalar temiz ve sıcacıktı. Otelin konumu merkezi olduğundan bol bol gezme imkanı da bulduk. Uygun fiyatli ve gayet memnun kaldık. Yine gelsem yine tercih edeceğim bir otel. Kesinlikle tavsiye ediyorum "
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
                            href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html#REVIEWS"
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
