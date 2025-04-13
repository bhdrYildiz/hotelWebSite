import React from 'react';

const rooms = [
    {
        name: "Grand Room 102",
        image: "images/room1.jpg",
        link: "room102.html"
    },
    {
        name: "Comfort Suite 202",
        image: "images/room2.jpg",
        link: "room202.html"
    },
    {
        name: "Deluxe Suite 305",
        image: "images/room3.jpg",
        link: "room305.html"
    },
    {
        name: "Superior Room 303",
        image: "images/room4.jpg",
        link: "room303.html"
    },
    {
        name: "Luxury Suite 103",
        image: "images/room5.jpg",
        link: "room103.html"
    },
    {
        name: "Junior Suite 302",
        image: "images/room6.jpg",
        link: "room302.html"
    }
];

const RoomsSection = () => {
    return (
        <section className="bg-[#1c2128] text-[#f8f8f3] py-24" id="rooms">
            <div className="container max-w-[1200px] mx-auto px-4 mb-12">
                <div className="mb-12">
                    <div className="text-3xl mb-2 text-[#c1a37b]">Yıldız Hotel</div>
                    <h2 className="text-6xl text-[#f8f8f3]">Rooms & Suites</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden shadow-lg bg-[#1e1e1e]"
                        >
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                            />

                            {/* Overlay içerik */}
                            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-500 z-10 pointer-events-none" />

                            {/* İçerik kutusu */}
                            <div className="absolute bottom-0 left-0 w-full p-4 z-20 opacity-0 group-hover:opacity-400 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                <h5 className="text-xl font-semibold mb-2">{room.name}</h5>
                                <div className="h-px bg-[#f8f8f3] mb-3"></div>
                                <div className="flex items-center justify-between flex-wrap">
                                    <ul className="flex gap-3 text-lg text-[#f8f8f3]">
                                        <li><img src="/icons/bed.png" alt="bed" className="w-4 h-4" /></li>
                                        <li><img src="/icons/bath.png" alt="bath" className="w-4 h-4" /></li>
                                        <li><img src="/icons/breakfast.png" alt="breakfast" className="w-4 h-4" /></li>
                                        <li><img src="/icons/towel.png" alt="towel" className="w-4 h-4" /></li>
                                        <li><img src="/icons/wifi.png" alt="wifi" className="w-4 h-4" /></li>
                                    </ul>
                                    <a href={room.link} className="text-m font-semibold text-[#f8f8f3] hover:text-[#c1a37b] transition">
                                        Details <i className="ti-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomsSection;
