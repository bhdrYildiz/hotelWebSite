import Link from "next/link";

{/* components/CallToActionBanner.tsx */ }
export default function CallToActionBanner() {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
            <div className="bg-black/50 absolute inset-0 z-0"></div>
            <div className="relative z-10 px-6 font-cormorant">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-cormorant">Ready for Your Cappadocia Escape?</h2>
                <p className="text-lg md:text-xl mb-6 font-cormorant">Reserve your stay today and experience unforgettable moments.</p>
                <Link
                    href="/contact"
                    className="font-cormorant rounded-sm bg-[#c1a37b] hover:bg-[#b99365] px-6 py-2 inline-block 
                        transition-all duration-300 text-[#f8f8f3] hover:text-[#1f2c42] font-semibold text-sm tracking-wider"
                >
                    Book Now
                </Link>
            </div>
        </section>
    );
}
