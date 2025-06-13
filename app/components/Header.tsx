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
        <header
            className={`fixed w-full z-[1000] transition-all duration-200 ${navBg ? 'bg-[#1f2c42]/60 backdrop-blur-md shadow-md' : ''
                }`}
        >
            <div className="container max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <img src="/images/logo2.png" alt="Logo" className="h-20 md:h-24" />
                </Link>

                {/* Navbar */}
                <nav className="hidden md:flex items-center gap-8 text-[#f8f8f3] text-sm md:text-base font-cormorant tracking-wide">
                    <Link href="/" className="hover:text-[#b99365] hover:font-bold transition-colors">HOME</Link>
                    <Link href="/about" className="hover:text-[#b99365] hover:font-bold transition-colors">ABOUT US</Link>
                    <Link href="/rooms" className="hover:text-[#b99365] hover:font-bold transition-colors">ROOMS</Link>
                    <Link href="/tours" className="hover:text-[#b99365] hover:font-bold transition-colors">TOURS & ACTIVITIES</Link>
                    <Link href="/blog" className="hover:text-[#b99365] hover:font-bold transition-colors">BLOG</Link>
                    <Link href="/contact" className="hover:text-[#b99365] hover:font-bold transition-colors">CONTACT US</Link>
                </nav>

                {/* Book Online Button */}
                <Link
                    href="/booking"
                    className="hidden md:flex items-center gap-2 bg-[#c1a37b] hover:bg-[#b99365] hover:text-[#1f2c42] text-[#f8f8f3] px-5 py-2 rounded-sm font-semibold text-sm font-cormorant transition-all duration-300"
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
