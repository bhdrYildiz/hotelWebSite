const AboutSection = () => {
    return (
        <section className="py-24 bg-white !important">
            <div className="container max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12">
                {/* Metin Kısmı */}
                <div className="text-[#c1a37b] mt-4">
                    <h2 className="text-amber-900 md:text-3xl font-semibold font-cormorant mb-2">
                        YILDIZ OTEL
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold font-cormorant mb-6 text-[#606060]">
                        Doğanın Kalbinde
                    </h2>
                    <p className="text-lg mb-6 leading-relaxed text-[#1e1e1e]">
                        Doğayla iç içe, huzur dolu bir konaklama deneyimi sunuyoruz.
                        Konforlu odalarımız, eşsiz manzaralarımız ve çeşitli aktivitelerimizle sizleri bekliyoruz.
                        <br /><br />
                        Şehirden uzaklaşmak ve yenilenmek isteyen herkesi bu eşsiz deneyime davet ediyoruz.
                        Dağların gölgesinde, kuş sesleriyle uyanacağınız bir tatil sizi bekliyor.
                        <br /><br />
                        Şehirden uzaklaşmak ve yenilenmek isteyen herkesi bu eşsiz deneyime davet ediyoruz.
                        Dağların gölgesinde, kuş sesleriyle uyanacağınız bir tatil sizi bekliyor.
                    </p>
                    <a
                        href="/about"
                        className="inline-block border-2 border-amber-900 text-amber-900 px-8 py-2 text-lg font-semibold hover:bg-[#606060] hover:text-white transition-colors"
                    >
                        Daha Fazlası
                    </a>
                </div>

                {/* Görsel Kısmı */}
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                    <div className="relative w-full md:w-1/2 h-80 md:h-[350px]">
                        <img
                            src="/images/oda1.jpg"
                            alt="Hakkımızda"
                            className="object-cover w-full h-full shadow-lg rounded-md"
                        />
                    </div>
                    <div className="relative w-full md:w-1/2 h-80 md:h-[420px] mt-6 md:mt-24">
                        <img
                            src="/images/oda2.jpg"
                            alt="Hakkımızda"
                            className="object-cover w-full h-full shadow-lg rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
