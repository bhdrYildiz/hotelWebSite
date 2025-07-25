'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [navBg, setNavBg] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setNavBg(window.scrollY >= 90);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: "/", label: "ANASAYFA" },
        { href: "/about", label: "HAKKIMIZDA" },
        { href: "/rooms", label: "ODALAR" },
        { href: "/tours", label: "TUR VE AKTİVİTELER" },
        { href: "/gallery", label: "GALERİ" },
        { href: "/contact", label: "İLETİŞİM" },
    ];

    return (
        <>
            {/* Üst Navbar */}
            <header className={`fixed w-full z-[1000] transition-all duration-200 ${navBg ? "bg-[#1f2c42]/90 backdrop-blur-md shadow-md" : ""}`}>
                <div className="container max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between relative">
                    <Link href="/" className="shrink-0">
                        <img
                            src="/images/logo3.png"
                            alt="Logo"
                            className="h-16 md:h-24 transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-white text-sm md:text-base font-cormorant tracking-wide cursor-pointer">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:text-[#b99365] hover:font-bold transition-colors duration-200">
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Rezervasyon */}
                    <Link href="/contact" className="hidden md:flex items-center gap-2 bg-[#421f1f] hover:bg-[#151E2E] hover:text-[#F1E9E0] text-white px-5 py-2 rounded-sm font-semibold text-base font-cormorant transition-all duration-300">
                        <CalendarDays size={16} />
                        REZERVASYON
                    </Link>

                    {/* Hamburger */}
                    <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white hover:text-[#b99365] text-3xl cursor-pointer">
                        ☰
                    </button>
                </div>
            </header>

            {/* Mobil Menü */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#1f2c42] backdrop-blur-md z-[1100]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 max-w-[280px] w-full bg-[#1f2c42] backdrop-blur-md shadow-md z-[1200] p-5 flex flex-col overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-lg font-semibold text-white">MENU</span>
                                <button className="text-white text-2xl hover:text-[#b99365] cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4 text-base text-white">
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#b99365]">
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
