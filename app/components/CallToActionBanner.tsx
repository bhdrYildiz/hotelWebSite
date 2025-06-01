{/* components/CallToActionBanner.tsx */ }
export default function CallToActionBanner() {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
            <div className="bg-black/50 absolute inset-0 z-0"></div>
            <div className="relative z-10 px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Your Cappadocia Escape?</h2>
                <p className="text-lg md:text-xl mb-6">Reserve your stay today and experience unforgettable moments.</p>
                <a
                    href="/contact"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded transition-all duration-300"
                >
                    Book Now
                </a>
            </div>
        </section>
    );
}
