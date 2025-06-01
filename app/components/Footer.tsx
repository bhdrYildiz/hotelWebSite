// components/Footer.tsx

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 py-12 border-t">
            <div className="w-full max-w-[1200px] mx-auto mt-4 px-4 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 place-items-start md:place-items-start">
                {/* Sol Sütun */}
                <div className="text-center md:text-left ml-12">
                    <img src="/images/logo.png" alt="Asuwari Suites Logo" className="mb-4 h-24 mx-auto md:mx-0" />
                    <p className="text-sm">
                        Arriving at the entrance of Asuwari Suites, you realise that this unique place offers a boutique experience that activates the senses.
                    </p>
                </div>

                {/* Orta Sütun */}
                <div className="text-center md:text-left ml-32">
                    <h3 className="font-bold mb-4 uppercase text-xl">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About us</a></li>
                        <li><a href="/rooms" className="hover:underline">Rooms</a></li>
                        <li><a href="/toursandactivities" className="hover:underline">Tours And Activities</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Sağ Sütun */}
                <div className="text-center font-bold md:text-left ml-24 text-xl">
                    <h3 className="font-bold mb-4 uppercase">Contact Us</h3>
                    <div className="space-y-2 text-sm">
                        <p className="flex justify-center md:justify-start items-center gap-2">
                            <FaMapMarkerAlt /> Kavaklıönü, Atatürk Blv. No:61, 50400 Ürgüp/Nevşehir
                        </p>
                        <p className="flex justify-center md:justify-start items-center gap-2">
                            <FaPhoneAlt /> +90 530 389 7163
                        </p>
                        <p className="flex justify-center md:justify-start items-center gap-2">
                            <FaEnvelope /> info@yildizhotel.com
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-gray-900" />
                        <FaInstagram className="cursor-pointer hover:text-gray-900" />
                        <FaTripadvisor className="cursor-pointer hover:text-gray-900" />
                        <FaWhatsapp className="cursor-pointer hover:text-gray-900" />
                    </div>
                </div>
            </div>

            {/* Alt Kısım */}
            <div className="mt-10 text-center text-sm text-gray-500">
                Copyright © Yıldız Otel Cappadocia 2025
            </div>
        </footer>
    );
}
