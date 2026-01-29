'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Nuri Türkmen",
        rating: 5,
        highlight: "Güzel ve ferah bir yerdi",
        text: "Fatih Bey'e çok teşekkür ederiz. İlgi ve alakası bizi çok mutlu etti. Otel Ürgüp'te merkezi bir konumda restoranlara, marketlere ve terminale çok yakın mesafede. Balayı tatili için de harika bir yer. Kesinlikle herkese tavsiye ederim."
    },
    {
        name: "Serap Karakoyak",
        rating: 5,
        highlight: "Konumu çok güzel",
        text: "1 gece konakladim ama keske daha fazla kalma imkanim olsaydi,Ürgüp te her noktaya yakin,merkezî konumda küçük sakin bir aile isletmesi,odalar olmasi gerek a sicaklikta,temiz ve nezih,ama en güzel sey kahvalti salonunda bizi bekleyen minnak kedi 🐈"
    },
    {
        name: "Mehmet Yılmaz",
        rating: 5,
        highlight: "Temiz ve güler yüzlü",
        text: "İki aile olarak gittik. Çok memnun kalarak ayrıldık otelden odaların temizliği harikaydı. Sabah kahvaltısı güzeldi. Konum olarak merkezi ve kolay bulanalecek bir yerde. İçiniz rahat bir şekilde tavsiye edebilirsiniz."
    },
    {
        name: "Yener Ünlütemür",
        rating: 5,
        highlight: "Çok tatlı bir aile işletmesi",
        text: "Otelin Ürgüp'de merkezi konumda olması, sessiz, sakin ve temiz odaları, bol ve yeterli kahvaltısı, otelin estetik görünüşü, otogar, çarşı ve birçok güzel yerin yürüme mesafesinde olması ve en önemlisi Güler Yüzlü ve ilgili personellerinin olması vs. bu güzel oteli ailece tercih etme sebepleriniz olacaktır. Eşim ile birlikte balayında gitmiştik ve yine gittik. Bunun tekrarları olacak. Size de tavsiye ederiz. Tekrardan herşey için çok teşekkür ederiz. 🙏 😊"
    },
    {
        name: "Mert Taşkınel",
        rating: 5,
        highlight: "Çok yardımsever insanlar",
        text: "Eşim ve kızımla beraber 2 gece konaklama yaptık. Çok memnun kalarak ayrıldık. Odalar, otelin konumu, genel temizlik, verilen hizmet çok iyiydi. Kahvaltı doyurucu ve güzeldi. Bir daha gelsem kesinlikle burayı tercih ederim. Heryere ulaşımınız çok kolay. Ürgüp şehir merkezine çok yakın. Araçla gezilip görülecek farklı bölgelere 5dk ile 15dk aralığında gidebiliyorsunuz. Özellikle Bahadır bey’e ve Berkay bey’e ilgi ve alakasından dolayı çok teşekkür ederiz. Bir daha görüşmek dileğiyle. Selamlar 😊"
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative bg-[#fafaf8] py-20 font-cormorant overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12">

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.testimonial-pagination',
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-center py-12 px-4 md:px-12"
                            >
                            
                                <div className="flex justify-center mb-8">
                                    <FaQuoteLeft className="text-[#ab9a8b] opacity-40" size={64} />
                                </div>

                                
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1c2c34] mb-8 tracking-wide uppercase border-b-2 border-[#1c2c34] inline-block pb-2">
                                    {testimonial.highlight}
                                </h3>

                                
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-[800px] mx-auto">
                                    {testimonial.text}
                                </p>

                                
                                <div className="flex justify-center gap-2 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-[#ab9a8b]" size={20} />
                                    ))}
                                </div>
                                <p className="text-sm md:text-base text-[#1c2c34] uppercase tracking-[0.2em] font-light">{testimonial.name}</p>

                            </motion.div>
                        </SwiperSlide>

                    ))}
                </Swiper>

                
                <div className="testimonial-pagination flex justify-center gap-3 mt-8"></div>
            </div>

            
            <style jsx global>{`
                .testimonial-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #d1d5db;
                    opacity: 1;
                    transition: all 0.3s ease;
                }

                .testimonial-pagination .swiper-pagination-bullet-active {
                    background: #1c2c34;
                    width: 32px;
                    border-radius: 6px;
                }
            `}</style>
        </section>
    );
}
