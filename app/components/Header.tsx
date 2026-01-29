'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
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
        { href: "/", label: "ANA SAYFA" },
        { href: "/about", label: "HAKKIMIZDA" },
        { href: "/rooms", label: "ODALARIMIZ" },
        { href: "/tours", label: "AKTİVİTELER" },
        { href: "/gallery", label: "GALERİ" },
        { href: "/blog", label: "BLOG" },
        { href: "/contact", label: "İLETİŞİM" },
    ];

    return (
        <>
            <header className={`fixed w-full z-[1000] transition-all duration-300 ${navBg ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"}`}>
                <div className="max-w-[1440px] mx-auto px-2 lg:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="shrink-0">
                            <h1 className="text-2xl md:text-3xl font-light tracking-wider text-[#1c2c34] font-cormorant">
                                yıldız otel
                            </h1>
                        </Link>
                        <div className="hidden md:block h-12 w-[1px] bg-[#ab9a8b]"></div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 text-sm text-[#1c2c34] font-medium tracking-wide font-cormorant">
                        {navLinks.map((link) => (
                            <Link
                                prefetch={false}
                                key={link.href}
                                href={link.href}
                                className="hover:text-[#ab9a8b] transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ab9a8b] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="/reservation"
                        prefetch={false}
                        className="hidden md:flex items-center justify-center bg-[#1c2c34] hover:bg-[#ab9a8b] text-white px-8 py-2.5 text-sm font-bold tracking-wider transition-all duration-300 font-cormorant"
                    >
                        REZERVASYON
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden text-[#1c2c34] hover:text-[#ab9a8b] text-3xl cursor-pointer"
                    >
                        ☰
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black backdrop-blur-sm z-[1100]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 max-w-[280px] w-full bg-white shadow-xl z-[1200] p-6 flex flex-col overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-light text-[#1c2c34] font-cormorant">yıldız otel</span>
                                <button
                                    className="text-[#1c2c34] text-2xl hover:text-[#ab9a8b] cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-5 text-sm text-[#1c2c34] font-medium mb-8 font-cormorant">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        prefetch={false}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="hover:text-[#ab9a8b] transition-colors border-b border-gray-100 pb-3"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <Link
                                href="/reservation"
                                onClick={() => setIsMobileMenuOpen(false)}
                                prefetch={false}
                                className="w-full bg-[#1c2c34] hover:bg-[#ab9a8b] text-white text-center py-3 text-sm font-bold tracking-wider transition-all duration-300 font-cormorant"
                            >
                                Rezervasyon
                            </Link>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
