import Link from "next/link";
import Image from "next/image";
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
        <>
            <div aria-hidden className="h-[520px] md:h-[420px]" />
            <footer
                className="fixed bottom-0 left-0 w-full z-0 text-white font-cormorant"
                style={{ height: "520px" }}
            >
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner.jpg"
                        alt="Footer background"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={false}
                    />
                    <div className="absolute inset-0 bg-[#0f1c22]/85" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="relative h-full">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 md:pt-36">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                            <div className="space-y-5">
                                <h3 className="text-2xl md:text-3xl font-light tracking-wide">İletişim</h3>
                                <p className="text-white/75 leading-relaxed">
                                    Kavaklıönü Mah., Atatürk Blv. No:61
                                    <br />
                                    Ürgüp / Nevşehir
                                </p>
                                <div className="space-y-2 text-white">
                                    <p className="flex items-center gap-2">
                                        <FaEnvelope className="text-[#ab9a8b]" />
                                        <Link href="mailto:info@yildizhotelcappadocia.com" className="hover:underline" aria-label="mail">
                                            info@yildizhotelcappadocia.com
                                        </Link>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaPhoneAlt className="text-[#ab9a8b]" />
                                        <Link href="tel:0(384)3414610" className="hover:underline" aria-label="telefon">
                                            0 (384) 341 46 10
                                        </Link>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaPhoneAlt className="text-[#ab9a8b]" />
                                        <Link href="tel:+905325645277" className="hover:underline" aria-label="telefon2">
                                            +90 532 564 52 77
                                        </Link>
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-2 text-xl text-white">
                                    <Link href="https://www.instagram.com/urgupyildizhotel/" aria-label="Instagram">
                                        <FaInstagram className="hover:text-[#ab9a8b] transition" />
                                    </Link>
                                    <Link href="https://www.instagram.com/urgupyildizhotel/" aria-label="Facebook">
                                        <FaFacebookF className="hover:text-[#ab9a8b] transition" />
                                    </Link>
                                    <Link href="/https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html" aria-label="Tripadvisor">
                                        <FaTripadvisor className="hover:text-[#ab9a8b] transition" />
                                    </Link>
                                    <Link href="https://wa.me/905325645277" aria-label="Whatsapp">
                                        <FaWhatsapp className="hover:text-[#ab9a8b] transition" />
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-light tracking-wide">Keşfet</h3>
                                <ul className="space-y-2 text-white">
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
                                            <Link href={item.href} className="hover:text-[#ab9a8b] transition-colors">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-light tracking-wide">Özel Teklif</h3>

                                <div className="border border-white/15 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md p-5">
                                    <p className="text-xs tracking-[0.25em] uppercase text-white/70">Direct Booking</p>
                                    <h4 className="mt-2 text-xl md:text-2xl text-white font-light">
                                        Web sitemizden rezervasyona özel avantajlar
                                    </h4>
                                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                                        En iyi fiyat garantisi ve ekstra ayrıcalıklar için WhatsApp’tan yazın.
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

                    <div className="absolute bottom-0 left-0 w-full border-t border-white/10">
                        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 text-center text-sm text-white tracking-wide">
                            © {new Date().getFullYear()} Yıldız Otel Kapadokya.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
