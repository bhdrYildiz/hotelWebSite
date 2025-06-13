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
        <footer className="bg-[#e2e2e2] text-[#1f2c42] py-12 border-t border-[#e2e2e2] font-cormorant">
            <div className="w-full max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
                {/* Sol Sütun */}
                <div className="text-center md:text-left ml-16">
                    <img
                        src="/images/logo2.png"
                        alt="Yıldız Otel Logo"
                        className="h-24 mx-auto md:mx-0 cursor-pointer"
                    />
                    <p className="text-sm text-[#1f2c42]">
                        Arriving at the entrance of Yıldız Otel, you realise that this unique place offers a boutique experience that activates the senses.
                    </p>
                </div>

                {/* Orta Sütun */}
                <div className="text-center md:text-left flex flex-col justify-center ml-28">
                    <h3 className="font-bold mb-4 uppercase text-xl text-[#c1a37b]">
                        Useful Links
                    </h3>
                    <ul className="space-y-2 text-sm font-semibold">
                        <li>
                            <a href="/" className="hover:text-[#b99365] transition">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-[#b99365] transition">About Us</a>
                        </li>
                        <li>
                            <a href="/rooms" className="hover:text-[#b99365] transition">Rooms</a>
                        </li>
                        <li>
                            <a href="/toursandactivities" className="hover:text-[#b99365] transition">
                                Tours & Activities
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="hover:text-[#b99365] transition">Blog</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-[#b99365] transition">Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* Sağ Sütun */}
                <div className="text-left md:text-left flex flex-col justify-items-end ml-8">
                    <h3 className="font-bold mb-4 uppercase text-xl text-[#c1a37b]">
                        Contact Us
                    </h3>
                    <div className="space-y-2 text-sm">
                        <p className="flex justify-center md:justify-start items-center gap-2 text-[#1f2c42]">
                            <FaMapMarkerAlt /> Kavaklıönü, Atatürk Blv. No:61, Ürgüp/Nevşehir
                        </p>
                        <p className="flex justify-center md:justify-start items-center gap-2 text-[#1f2c42]">
                            <FaPhoneAlt /> +90 530 389 7163
                        </p>
                        <p className="flex justify-center md:justify-start items-center gap-2 text-[#1f2c42]">
                            <FaEnvelope /> info@yildizhotel.com
                        </p>
                    </div>

                    <div className="flex justify-start text-start md:justify-start gap-4 mt-4 text-xl text-[#b99365]">
                        <FaFacebookF className="cursor-pointer hover:text-[#1f2c42] transition" />
                        <FaInstagram className="cursor-pointer hover:text-[#1f2c42] transition" />
                        <FaTripadvisor className="cursor-pointer hover:text-[#1f2c42] transition" />
                        <FaWhatsapp className="cursor-pointer hover:text-[#1f2c42] transition" />
                    </div>
                </div>
            </div>

            {/* Alt Kısım */}
            <div className="mt-10 text-center text-sm text-[#111827]">
                Copyright © Yıldız Otel Cappadocia 2025
            </div>
        </footer>
    );
}
