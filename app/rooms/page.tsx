'use client';

import React, { JSX } from 'react';
import Image from 'next/image';
import { BedDouble, Wifi, Snowflake, Tv, BathIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { rooms } from './[roomId]/data';

const iconMap: { [key: string]: JSX.Element } = {
    BedDouble: <BedDouble size={16} />,
    Wifi: <Wifi size={16} />,
    Snowflake: <Snowflake size={16} />,
    Tv: <Tv size={16} />,
    BathIcon: <BathIcon size={16} />,
};

const RoomsPage = () => {
    return (
        <>
            <Header />
            <main className="font-cormorant bg-[#f8f8f3]">
                {/* Hero Section */}
                {/* Banner */}
                <section
                    className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/banner.jpg')" }}
                >
                    <h1 className="text-[#1f2c42] text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
                        Rooms
                    </h1>
                </section>

                {/* Room Cards */}
                <section className="container max-w-[1200px] mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-[#1f2c42] mb-12 text-center">Our Rooms</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {rooms.map((room, index) => (
                            <div
                                key={index}
                                className="bg-[#e2e2e2]/40 shadow-md overflow-hidden hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="relative h-[420px]">
                                    <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                                </div>
                                <div className="p-6 space-y-3 text-[#111827]">
                                    <h3 className="text-xl font-semibold">{room.name}</h3>
                                    <p className="text-sm text-[#1f2c42]">{room.description}</p>
                                    <div className="flex flex-wrap gap-2 text-sm text-[#c1a37b]">
                                        {room.features.map((feature, i) => (
                                            <span key={i} className="flex items-center gap-1">
                                                {iconMap[feature]}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={`/rooms/${101 + index * 100}`}>
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
        </>
    );
};

export default RoomsPage;
