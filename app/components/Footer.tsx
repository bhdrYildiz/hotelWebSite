import Link from "next/link";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTripadvisor,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1c2c34] text-white font-cormorant">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 text-center md:text-left">
                    <div className="space-y-5 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                            İletişim
                        </h3>

                        <p className="text-white/75 leading-relaxed text-center md:text-left">
                            Kavaklıönü Mah., Atatürk Blv. No:61
                            <br />
                            Ürgüp / Nevşehir
                        </p>

                        <div className="space-y-2">
                            <p className="flex items-center justify-center md:justify-start gap-3">
                                <FaEnvelope className="text-[#ab9a8b] shrink-0" />
                                <a
                                    href="mailto:info@yildizhotelcappadocia.com"
                                    className="hover:underline break-all"
                                    aria-label="mail"
                                >
                                    info@yildizhotelcappadocia.com
                                </a>
                            </p>

                            <p className="flex items-center justify-center md:justify-start gap-3">
                                <FaPhoneAlt className="text-[#ab9a8b] shrink-0" />
                                <a
                                    href="tel:+903843414610"
                                    className="hover:underline"
                                    aria-label="telefon"
                                >
                                    0 (384) 341 46 10
                                </a>
                            </p>

                            <p className="flex items-center justify-center md:justify-start gap-3">
                                <FaPhoneAlt className="text-[#ab9a8b] shrink-0" />
                                <a
                                    href="tel:+905325645277"
                                    className="hover:underline"
                                    aria-label="telefon2"
                                >
                                    +90 532 564 52 77
                                </a>
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-5 pt-2 text-xl">
                            <a
                                href="https://www.instagram.com/urgupyildizhotel/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:text-[#ab9a8b] transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.facebook.com/urgupyildizhotel/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-[#ab9a8b] transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Tripadvisor"
                                className="hover:text-[#ab9a8b] transition"
                            >
                                <FaTripadvisor />
                            </a>

                            <a
                                href="https://wa.me/905325645277"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Whatsapp"
                                className="hover:text-[#ab9a8b] transition"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                            Keşfet
                        </h3>

                        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-6 text-white text-center md:text-left">
                            {[
                                { label: "Ana Sayfa", href: "/" },
                                { label: "Hakkımızda", href: "/about" },
                                { label: "Odalarımız", href: "/rooms" },
                                { label: "Aktiviteler", href: "/tours" },
                                { label: "Galeri", href: "/gallery" },
                                { label: "Blog", href: "/blog" },
                                { label: "İletişim", href: "/contact" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-[#ab9a8b] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-3 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                            Özel Teklif
                        </h3>

                        <div className="border border-white/15 bg-white/5 p-5 sm:p-6 text-center md:text-left w-full">
                            <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                                Hemen Rezervasyon
                            </p>

                            <h4 className="mt-2 text-xl md:text-2xl text-white font-light leading-snug">
                                Web sitemizden rezervasyona özel avantajlar
                            </h4>

                            <p className="mt-2 text-white/70 text-sm leading-relaxed">
                                En iyi fiyat garantisi ve ekstra ayrıcalıklar için WhatsApp’tan
                                yazın.
                            </p>

                            <a
                                href="https://wa.me/905325645277"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 border border-white/30 text-white hover:bg-white hover:text-[#1c2c34] transition"
                            >
                                WhatsApp’tan Yaz
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 text-center text-xs sm:text-sm text-white/80 tracking-wide">
                    © {new Date().getFullYear()} Yıldız Otel Kapadokya.
                </div>
            </div>
        </footer>
    );
}
