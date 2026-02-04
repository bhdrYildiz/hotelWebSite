"use client";

import React, { useMemo, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Accordion, AccordionItem } from "../../components/ui/accordion";
import { BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import PhotoGallery from "../PhotoGallery";
import { getTourById } from "@/app/data/tours";
import PageHero from "@/app/components/PageHero";

type Props = {
    tourId: string;
};

export default function TourDetailClient({ tourId }: Props) {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);

    const tour = useMemo(() => getTourById(tourId), [tourId]);

    async function handleInfoSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formEl = e.currentTarget;
        setStatus(null);

        const form = new FormData(formEl);

        const name = String(form.get("fullName") || "").trim();
        const email = String(form.get("email") || "").trim();
        const phone = String(form.get("phone") || "").trim();
        const message = String(form.get("message") || "").trim();

        const phoneRegex = /^05[0-9]{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            setStatus({ type: "error", msg: "Lütfen ad soyad giriniz." });
            return;
        }

        if (!phoneRegex.test(phone)) {
            setStatus({
                type: "error",
                msg: "Lütfen geçerli bir telefon numarası giriniz (05XXXXXXXXX).",
            });
            return;
        }

        if (!emailRegex.test(email)) {
            setStatus({
                type: "error",
                msg: "Lütfen geçerli bir e-posta adresi giriniz.",
            });
            return;
        }

        if (!message) {
            setStatus({ type: "error", msg: "Lütfen mesaj alanını doldurunuz." });
            return;
        }

        setIsSending(true);

        const payload = {
            source: "tour",
            tourTitle: tour?.title,
            tourId,
            name: String(form.get("fullName") || "").trim(),
            email: String(form.get("email") || "").trim(),
            phone: String(form.get("phone") || "").trim(),
            subject: `Tur Bilgi: ${tour?.title ?? ""}`,
            message: String(form.get("message") || "").trim(),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok || !data.ok) {
                setStatus({ type: "error", msg: data.error || "Gönderim başarısız." });
                return;
            }

            setStatus({ type: "ok", msg: "Talebiniz alındı. En kısa sürede size dönüş yapacağız." });
            formEl.reset();
        } catch (err) {
            console.error("FETCH_ERROR:", err);
            setStatus({ type: "error", msg: "Bağlantı hatası. Lütfen tekrar deneyin." });
        } finally {
            setIsSending(false);
        }
    }

    if (!tour) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-[#1c2c34]">Tour not found.</p>
            </main>
        );
    }

    return (
        <>
            <Header />
            <main className="bg-[#f7f4f1] font-cormorant">
                <PageHero
                    title={tour.title}
                    subtitle="- TUR DETAYLARINI İNCELEYİN -"
                    backgroundImage={tour.gallery?.[0] ?? tour.image}
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'TUR VE AKTİVİTELER', href: '/tours' },
                        { label: tour.title },
                    ]}
                />
                <section className="max-w-[1400px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white shadow-sm border border-[#e6e0da] p-8">
                            <h2 className="text-3xl font-bold text-[#1c2c34] text-center md:text-left">
                                Tur Detaylari
                            </h2>
                            <p className="text-gray-900 mt-4 leading-relaxed tracking-wide text-center md:text-left">
                                {tour.description}
                            </p>
                        </div>

                        <div className="bg-white shadow-sm border border-[#e6e0da] p-8">
                            <h3 className="text-3xl font-semibold text-[#1c2c34] mb-4 text-center md:text-left">
                                Tur Programi
                            </h3>
                            <Accordion type="single" defaultIndex={0}>
                                {tour.program.map((item, i) => (
                                    <AccordionItem key={item.title} title={item.title} index={i}>
                                        <p className="text-base text-[#1c2c34] leading-relaxed tracking-wide">{item.description}</p>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>


                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white shadow-sm border border-[#e6e0da] p-6">
                                <h4 className="text-xl font-semibold text-[#1c2c34] mb-2">Dahiller</h4>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    {tour.included.map((inc, i) => <li key={i}>{inc}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white shadow-sm border border-[#e6e0da] p-6">
                                <h4 className="text-xl font-semibold text-[#1c2c34] mb-2">Haricler</h4>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    {tour.excluded.map((exc, i) => <li key={i}>{exc}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white shadow-sm border border-[#e6e0da] p-8">
                            <h3 className="text-2xl font-semibold text-[#1c2c34] mb-4">Fotograf Galerisi</h3>
                            <PhotoGallery images={tour.gallery} />
                        </div>
                    </div>

                    <div className="space-y-6 sticky top-24 self-start">
                        <div id="info-form" className="bg-white p-6 shadow-sm border border-[#e6e0da]">
                            <h4 className="text-xl font-bold text-[#1c2c34] mb-2">Tur Hakkinda Bilgi Al</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Size en kisa surede geri donelim.
                            </p>
                            <form className="space-y-3" onSubmit={handleInfoSubmit}>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Ad Soyad"
                                    className="w-full p-3 border border-[#e6e0da] rounded focus:ring-2 focus:ring-[#ab9a8b] outline-none"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Telefon (05XXXXXXXXX)"
                                    inputMode="numeric"
                                    maxLength={11}
                                    pattern="^05[0-9]{9}$"
                                    title="Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır"
                                    onInput={(e) => {
                                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                                    }}
                                    className="w-full p-3 border border-[#e6e0da] rounded focus:ring-2 focus:ring-[#ab9a8b] outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-posta (ornek@mail.com)"
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    title="Geçerli bir e-posta adresi giriniz"
                                    className="w-full p-3 border border-[#e6e0da] rounded focus:ring-2 focus:ring-[#ab9a8b] outline-none"
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Mesajiniz (En az 10 karakter)"
                                    minLength={10}
                                    title="Mesaj en az 10 karakter olmalıdır"
                                    className="w-full p-3 border border-[#e6e0da] rounded focus:ring-2 focus:ring-[#ab9a8b] outline-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full uppercase tracking-wide text-sm py-3 transition-all duration-300
                                    ${isSending ? "opacity-60 cursor-not-allowed bg-[#ab9a8b]" : "cursor-pointer bg-[#ab9a8b] hover:bg-[#1c2c34]"}
                                    text-white`}
                                >
                                    {isSending ? "GÖNDERİLİYOR..." : "Bilgi Al"}
                                </button>
                                {status && (
                                    <p className={`text-sm ${status.type === "ok" ? "text-green-700" : "text-red-700"}`}>
                                        {status.msg}
                                    </p>
                                )}
                            </form>
                        </div>
                        <div className="space-y-3 text-gray-900 text-sm bg-white p-6 shadow-sm border border-[#e6e0da]">
                            <div className="flex items-center gap-2">
                                <BadgeCheck size={16} className="text-[#1c2c34] font-bold" />
                                <span>Ücretsiz İptal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-[#1c2c34] font-bold" />
                                <span>Otelden alma hizmeti dahildir</span>
                            </div>

                            <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <Phone size={16} className="text-[#1c2c34] font-semibold" />
                                    <a href="tel:+905551112233" className="hover:underline">+90 530 389 7163</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-[#1c2c34] font-semibold" />
                                    <a href="mailto:info@yildizhotelcappadocia.com" className="hover:underline">info@yildizhotelcappadocia.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};