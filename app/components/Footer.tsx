const Footer = () => {
    return (
        <footer className="bg-[#1c2128] text-[#f8f8f3] py-12 px-6">
            <div className="container max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* About Hotel */}
                <div>
                    <h2 className="text-[#f8f8f3] text-2xl font-semibold mb-4">About Hotel</h2>
                    <p className="text-gray-400 mb-6">
                        Welcome to Vie Cappadocia, where you step into a place that stands just beneath the majestic and breathtaking formation of Ortahisar Castle, the tallest fairy chimney in Cappadocia, offering a historical and authentic view.
                    </p>
                    <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
                        <span>English</span>
                        <span className="text-lg">🌐</span>
                    </button>
                </div>

                {/* Explore */}
                <div>
                    <h2 className="text-[#f8f8f3] text-2xl font-semibold mb-4">Explore</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-[#f8f8f3]">Home</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">Rooms & Suites</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">About Hotel</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">Contact</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">Terms Of Use</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">Cookie Policy</a></li>
                        <li><a href="#" className="hover:text-[#f8f8f3]">Data Processing</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-gray-400 text-2xl font-semibold mb-4">Contact</h2>
                    <address className="not-italic text-gray-400 mb-4">
                        Ortahisar Beld. Yeni Mah. Ali Reis Sok. No. 43<br />
                        50650 Ürgüp/Nevşehir
                    </address>
                    <div className="mb-2 flex items-center gap-2">
                        📅 <span>Book Now</span>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                        📞 <a href="tel:5435207677" className="hover:text-[#f8f8f3]">543 520 7677</a>
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                        ✉️ <a href="mailto:hello@viehotel.com.tr" className="hover:text-[#f8f8f3]">hello@viehotel.com.tr</a>
                    </div>
                    <div className="flex gap-4 text-2xl">
                        <a href="#"><span>🟢</span></a>
                        <a href="#"><span>📷</span></a>
                        <a href="#"><span>📘</span></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
                © Copyright 2023 by <span className="text-[#f8f8f3] font-semibold">Yıldız Hotel Cappadocia</span>
            </div>

            {/* Scroll to Top */}
            <div className="fixed bottom-4 right-4">
                <a href="#" className="bg-[#222] text-[#f8f8f3] p-4 rounded-full hover:bg-[#333] transition-all">
                    ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;
