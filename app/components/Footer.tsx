import Link from "next/link";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaTripadvisor,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#e2e2e2] text-[#1f2c42] py-12 border-t border-gray-200 font-cormorant">
            <div className="w-full max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[repeat(4,minmax(0,1fr))] gap-10">
                {/* Sol Sütun - Logo ve açıklama */}
                <div className="text-center md:text-left space-y-4">
                    <img
                        src="/images/logo2.png"
                        alt="Yıldız Otel Logo"
                        className="h-24 cursor-pointer mx-auto md:mx-0"
                    />
                    <p className="text-base text-gray-700 max-w-xs mx-auto md:mx-0 font-cormorant">
                        Yıldız Otele geldiğinizde bu eşsiz mekanın duyuları harekete geçiren butik bir deneyim sunduğunu fark ediyorsunuz.
                    </p>
                </div>

                {/* Orta Sütun - Sayfa linkleri */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 uppercase text-lg text-[#c1a37b] tracking-wide">Hızlı Linkler</h3>
                    <ul className="space-y-2 text-base font-medium">
                        {[
                            { label: "AnaSayfa", href: "/" },
                            { label: "Hakkımızda", href: "/about" },
                            { label: "Odalar", href: "/rooms" },
                            { label: "Tur ve Aktiviteler", href: "/tours" },
                            { label: "Galeri", href: "/blog" },
                            { label: "İletişim", href: "/contact" },
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="hover:text-[#b99365] transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 uppercase text-lg text-[#c1a37b] tracking-wide">Odalar</h3>
                    <ul className="space-y-2 text-base font-medium">
                        <li><Link href="/rooms/room-301" className="hover:text-[#b99365] transition">Özel Teraslı ve Jakuzili King Suit</Link></li>
                        <li><Link href="/rooms/room-105" className="hover:text-[#b99365] transition">Havuzlu King Suit</Link></li>
                        <li><Link href="/rooms/room-103" className="hover:text-[#b99365] transition">Jakuzili ve Balkonlu Suit</Link></li>
                        <li><Link href="/rooms/room-202" className="hover:text-[#b99365] transition">Deluxe Room 202</Link></li>
                        <li><Link href="/rooms/room-203" className="hover:text-[#b99365] transition">Deluxe Room 203</Link></li>
                        <li><Link href="/rooms/room-104" className="hover:text-[#b99365] transition">Deluxe Room</Link></li>
                    </ul>
                </div>

                {/* Sağ Sütun - İletişim bilgileri */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 uppercase text-lg text-[#c1a37b] tracking-wide">İletişim</h3>
                    <div className="space-y-4 text-base text-[#1f2c42]">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaMapMarkerAlt className="text-[#b99365]" />
                            Kavaklıönü Mah., Atatürk Blv. No:61, Ürgüp/Nevşehir
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaPhoneAlt className="text-[#b99365]" />
                            <Link href="tel:+905303897163" className="hover:underline">+90 530 389 7163</Link>
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaEnvelope className="text-[#b99365]" />
                            <Link href="mailto:info@yildizhotel.com" className="hover:underline">info@yildizhotel.com</Link>
                        </p>
                    </div>

                    {/* Sosyal medya ikonları */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl text-[#b99365]">
                        <Link href="/"><FaFacebookF className="hover:text-[#1f2c42] transition" /></Link>
                        <Link href="/"><FaInstagram className="hover:text-[#1f2c42] transition" /></Link>
                        <Link href="/"><FaTripadvisor className="hover:text-[#1f2c42] transition" /></Link>
                        <Link href="/"><FaWhatsapp className="hover:text-[#1f2c42] transition" /></Link>
                    </div>
                </div>
            </div>

            {/* Alt Bilgi */}
            <div className="mt-12 border-t border-[#d6d6d6] pt-6 text-center text-xs text-[#1f2c42] font-light tracking-wide">
                © {new Date().getFullYear()} Yıldız Otel Cappadocia.
            </div>
        </footer>
    );
}
