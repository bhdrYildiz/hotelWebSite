'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

const Header = () => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header className={`fixed w-full z-[1000] transition-all duration-200 ${navBg ? 'bg-[#1a1a1a]/70 backdrop-blur-md shadow-md' : ''}`}>
            {/* 👇 Container burada max-w-[1200px] olarak ayarlandı */}
            <div className="container max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo (biraz büyütüldü: h-20) */}
                <Link href="/" className="shrink-0">
                    <img src="/images/logo2.png" alt="Logo" className="h-28" />
                </Link>

                {/* Navbar */}
                <nav className="hidden md:flex items-center gap-8 text-white text-[15px] font-semibold tracking-wider">
                    <Link href="/">HOME</Link>
                    <Link href="/about">ABOUT US</Link>
                    <Link href="/rooms">ROOMS</Link>
                    <Link href="/activities">TOURS & ACTIVITIES</Link>
                    <Link href="/blog">BLOG</Link>
                    <Link href="/contact">CONTACT US</Link>
                </nav>

                {/* Book Online Button */}
                <Link
                    href="/booking"
                    className="hidden md:flex items-center gap-2 bg-[#d9b464] hover:bg-[#ad9868] text-white px-5 py-2 rounded-sm font-semibold text-sm transition-all"
                >
                    <CalendarDays size={16} />
                    BOOK ONLINE
                </Link>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-white text-2xl">☰</div>
            </div>
        </header>
    );
};

export default Header;
