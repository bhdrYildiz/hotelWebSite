'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ReselivaWidget from './ReselivaWidget';
import PageHero from '../components/PageHero';

export default function ReservationPage() {
    return (
        <>
            <Header />
            <main className="font-cormorant bg-white">
                <PageHero
                    title="REZERVASYON"
                    subtitle="- EN KISA ZAMANDA GÖRÜŞMEK ÜZERE -"
                    backgroundImage="/images/otelBahce/resim5.jpeg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'REZERVASYON' },
                    ]}
                />
                <section className="py-24">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="border border-[#d7d2cc] shadow-sm bg-white">
                            <div className="border-b border-[#d7d2cc] px-6 py-6 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-[#1c2c34]">
                                    Online Rezervasyon
                                </h2>
                                <p className="mt-2 text-sm md:text-base font-bold text-[#ab9a8b]">
                                    Güvenli • Anında Onay • En İyi Fiyat Garantisi
                                </p>
                                <p className="mt-2 text-sm md:text-base font-bold text-[#1c2c34]">
                                    Rezervasyon yapmak için müsaitlik kontrolü yapabilir ve odanızı seçebilirsiniz.
                                </p>
                            </div>
                            <div className="p-4 md:p-6">
                                <ReselivaWidget />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
