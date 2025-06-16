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
                        className="h-24 justify-self-start cursor-pointer"
                    />
                    <p className="text-base text-gray-700 max-w-xs mx-auto md:mx-0 font-cormorant">
                        Arriving at the entrance of Yıldız Otel, you realise that this unique place offers a boutique experience that activates the senses.
                    </p>
                </div>

                {/* Orta Sütun - Sayfa linkleri */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 uppercase text-lg text-[#c1a37b] tracking-wide">Useful Links</h3>
                    <ul className="space-y-2 text-base font-medium">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About Us", href: "/about" },
                            { label: "Rooms", href: "/rooms" },
                            { label: "Tours & Activities", href: "/tours" },
                            { label: "Blog", href: "/blog" },
                            { label: "Contact Us", href: "/contact" },
                        ].map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="hover:text-[#b99365] transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 uppercase text-lg text-[#c1a37b] tracking-wide">Rooms</h3>
                    <ul className="space-y-2 text-base font-medium">
                        <li><a href="/rooms/deluxe" className="hover:text-[#b99365] transition">Deluxe Room</a></li>
                        <li><a href="/rooms/cave" className="hover:text-[#b99365] transition">Cave Suite</a></li>
                        <li><a href="/rooms/stone" className="hover:text-[#b99365] transition">Stone Room</a></li>
                        <li><a href="/rooms/family" className="hover:text-[#b99365] transition">Family Suite</a></li>
                        <li><a href="/rooms/terrace" className="hover:text-[#b99365] transition">Terrace Room</a></li>
                    </ul>
                </div>

                {/* Sağ Sütun - İletişim bilgileri */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 uppercase text-lg text-[#c1a37b] tracking-wide">Contact Us</h3>
                    <div className="space-y-4 text-base text-[#1f2c42]">
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaMapMarkerAlt className="text-[#b99365]" />
                            Kavaklıönü, Atatürk Blv. No:61, Ürgüp/Nevşehir
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaPhoneAlt className="text-[#b99365]" />
                            <a href="tel:+905303897163" className="hover:underline">+90 530 389 7163</a>
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            <FaEnvelope className="text-[#b99365]" />
                            <a href="mailto:info@yildizhotel.com" className="hover:underline">info@yildizhotel.com</a>
                        </p>
                    </div>

                    {/* Sosyal medya ikonları */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl text-[#b99365]">
                        <a href="#"><FaFacebookF className="hover:text-[#1f2c42] transition" /></a>
                        <a href="#"><FaInstagram className="hover:text-[#1f2c42] transition" /></a>
                        <a href="#"><FaTripadvisor className="hover:text-[#1f2c42] transition" /></a>
                        <a href="#"><FaWhatsapp className="hover:text-[#1f2c42] transition" /></a>
                    </div>
                </div>
            </div>

            {/* Alt Bilgi */}
            <div className="mt-12 border-t border-[#d6d6d6] pt-6 text-center text-xs text-[#1f2c42] font-light tracking-wide">
                © {new Date().getFullYear()} Yıldız Otel Cappadocia. All rights reserved.
            </div>
        </footer>
    );
}
