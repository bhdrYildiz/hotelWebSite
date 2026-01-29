import Link from "next/link";

export default function CallToActionBanner() {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center"
            style={{ backgroundImage: "url('/images/turlar/balon5.jpg')" }}
        >
            <div className="bg-black/50 absolute inset-0 z-0"></div>
            <div className="relative z-10 px-6 font-cormorant">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-cormorant">Kapadokya Tatiline Hazır Mısınız?</h2>
                <p className="text-lg md:text-xl mb-6 font-cormorant">Konaklamanızı bugünden ayırtın ve unutulmaz anlar yaşayın.</p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#1c2c34] hover:bg-[#ab9a8b] text-white px-8 py-2.5 text-sm font-bold tracking-wider transition-all duration-300 font-cormorant"
                    prefetch={false}
                >
                    REZERVASYON
                </Link>
            </div>
        </section>
    );
}
