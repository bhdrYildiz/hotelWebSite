// RoomDetailPage.tsx
'use client';

import { useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { rooms } from './data';
import {
    BedDouble,
    Wifi,
    Snowflake,
    Tv,
    BathIcon,
    Coffee,
    Minimize2,
    ConciergeBell,
    ShowerHead,
    ShieldCheck,
    Bath,
    Thermometer,
    Eye,
} from 'lucide-react';
import { JSX, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FullScreenSlider from './FullScreenSlider';
import { PiHairDryer } from 'react-icons/pi';

const iconMap: { [key: string]: JSX.Element } = {
    BedDouble: <BedDouble size={20} />,
    Wifi: <Wifi size={20} />,
    Snowflake: <Snowflake size={20} />,
    Tv: <Tv size={20} />,
    BathIcon: <BathIcon size={20} />,
    Coffee: <Coffee size={20} />, // Nespresso
    Minibar: <Minimize2 size={20} />, // Minibar
    RoomService: <ConciergeBell size={20} />, // 7/24 Servis
    HairDryer: <PiHairDryer size={20} />,
    Shower: <ShowerHead size={20} />,
    Safe: <ShieldCheck size={20} />, // Kasa
    Bath: <Bath size={20} />,
    Thermometer: <Thermometer size={20} />,
    Mirror: <Eye size={20} />,
};

const RoomDetailPage = () => {
    const { roomId } = useParams();
    const room = rooms.find((room) => room.id === roomId);
    const otherRooms = rooms.filter((r) => r.id !== roomId);
    const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

    if (!room) {
        return <div className="text-center py-20">Room not found</div>;
    }

    const amenities = [
        { icon: 'Coffee', label: 'Nespresso' },
        { icon: 'Tv', label: 'TV' },
        { icon: 'Wifi', label: 'Ücretsiz internet' },
        { icon: 'Thermometer', label: 'Klima' },
        { icon: 'Minibar', label: 'Minibar' },
        { icon: 'RoomService', label: '7/24 Oda Servisi' },
        { icon: 'HairDryer', label: 'Saç Kurutma' },
        { icon: 'Mirror', label: 'Makyaj Aynası' },
        { icon: 'Shower', label: 'Duş' },
        { icon: 'Safe', label: 'Özel Kasa' },
        { icon: 'Bath', label: 'Küvet' },
    ];

    return (
        <>
            <Header />
            <main className="font-cormorant bg-[#f8f8f3] text-[#1f2c42]">
                <section
                    className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/banner.jpg')" }}
                >
                    <h1 className="text-5xl font-bold drop-shadow-md">{room.name}</h1>
                </section>

                <section className="w-full bg-[#e2e2e2]/40 py-12">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        autoplay={{ delay: 4500 }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={12}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="relative w-full"
                    >
                        {room.images.map((img, index) => (
                            <SwiperSlide
                                key={index}
                                className="rounded-md overflow-hidden shadow-md cursor-pointer"
                                style={{ width: 'auto' }}
                                onClick={() => setFullscreenIndex(index)}
                            >
                                <div className="relative h-[500px] w-[350px] sm:w-[400px] md:w-[500px] lg:w-[550px] xl:w-[600px]">
                                    <Image
                                        src={img}
                                        alt={`${room.name} image ${index + 1}`}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-[#1f2c42] hover:bg-[#b99365] hover:text-white rounded-full p-1 shadow-md cursor-pointer">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
                        </div>
                        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-[#1f2c42] hover:bg-[#b99365] hover:text-white rounded-full p-1 shadow-md cursor-pointer">
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
                        </div>
                    </Swiper>
                    <div className="swiper-pagination mt-6 flex justify-center gap-2"></div>
                </section>

                <section className="max-w-[1200px] mx-auto px-6 py-12">
                    <h2 className="text-4xl font-bold mb-6">{room.name}</h2>
                    <p className="text-base text-[#111827] leading-relaxed mb-10 max-w-full">
                        Deluxe Odalarımız, temiz çizgileri ve doğal malzemelerle geçmişle günümüzü harmanlıyor. Odadaki “Tonlar” çevredeki doğal peyzajın niteliklerini yansıtıyor. Her odada 160×200 cm veya 180×200 cm Visco yatak bulunmaktadır. Ayrıca odalarda, genç konuklar için ideal olan ve odada üçüncü bir kişinin konaklayabileceği 80x190cm veya 90x190cm Visco yataklı kanepeler bulunmaktadır. Mermer banyolarda yağmur hissiyatı veren duş başlıklı seramik küvet ve ayarlanabilir el duşu bulunmaktadır. Her oda, yerel cazibeyi korurken, düşünceli tasarım ögeleri ve modern olanaklara sahiptir.
                    </p>

                    <div className="border-t-1 border-t-gray-300 pt-10">
                        <h3 className="text-3xl font-semibold mb-8">Oda Özellikleri</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {amenities.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 border border-gray-200 rounded-xl px-6 py-4 shadow-sm bg-[#e2e2e2]/40 hover:shadow-md transition"
                                >
                                    {iconMap[item.icon]}
                                    <span className="text-sm font-medium text-[#1f2c42]">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="max-w-[1200px] mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-[#1f2c42] mb-12 text-center">
                        Diğer Odalarımız
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherRooms.slice(0, 3).map((room) => (
                            <div
                                key={room.id}
                                className="bg-[#e2e2e2]/40 shadow-md overflow-hidden hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative h-[300px]">
                                    <Image
                                        src={room.images[0]}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 space-y-3 text-[#111827]">
                                    <h3 className="text-xl font-semibold">{room.name}</h3>
                                    <div className="flex flex-wrap gap-2 text-sm text-[#c1a37b]">
                                        {room.features.slice(0, 3).map((feature, i) => (
                                            <span key={i}>{iconMap[feature]}</span>
                                        ))}
                                    </div>
                                    <Link href={`/rooms/${room.id}`}>
                                        <button className="mt-2 px-10 py-2 bg-[#1f2c42] text-[#f8f8f3] relative overflow-hidden z-0 group cursor-pointer">
                                            <span className="relative z-10">View Details</span>
                                            <span className="absolute inset-0 bg-[#b99365] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
            {fullscreenIndex !== null && (
                <FullScreenSlider
                    images={room.images}
                    startIndex={fullscreenIndex}
                    onClose={() => setFullscreenIndex(null)}
                />
            )}
        </>
    );
};

export default RoomDetailPage;