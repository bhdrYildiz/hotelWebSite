'use client';

import {
    MapPin,
    Phone,
    Navigation,
    ChevronDown
} from 'lucide-react';
import { Facebook, Instagram } from "lucide-react";
import { FaTripadvisor, FaWhatsapp } from "react-icons/fa";

import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import PageHero from '../components/PageHero';

export default function ContactPage() {

    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
            source: "contact",
            name: String(form.get("fullName") || "").trim(),
            email: String(form.get("email") || "").trim(),
            subject: String(form.get("subject") || "").trim(),
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

            setStatus({ type: "ok", msg: "Mesajınız alındı. En kısa sürede dönüş yapacağız." });
            formEl.reset()
        } catch (err) {
            console.error("FETCH_ERROR:", err);
            setStatus({ type: "error", msg: "Bağlantı hatası. Lütfen tekrar deneyin." });
        } finally {
            setIsSending(false);
        }
    }

    const faqs = [
        {
            question: 'Otele erken giriş veya geç çıkış talebini nasıl iletebilirim?',
            answer:
                'Erken giriş veya geç çıkış talepleri müsaitliğe göre değerlendirilmektedir. Lütfen varışınızdan önce bizimle iletişime geçin.'
        },
        {
            question: 'İptal politikası nedir?',
            answer:
                'Rezervasyon iptal koşulları, seçtiğiniz tarihler ve kampanyaya göre değişiklik gösterebilir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.'
        },
        {
            question: 'Rezervasyon için yaş sınırı var mı?',
            answer:
                'Rezervasyon işlemlerinde ana misafirin 18 yaşını doldurmuş olması gerekmektedir.'
        },
        {
            question: 'Aynı anda birden fazla oda rezerve edebilir miyim?',
            answer:
                'Evet, aynı tarihler için birden fazla oda rezerve edebilirsiniz. Detaylar için rezervasyon ekibimiz size yardımcı olur.'
        },
        {
            question: 'Özel isteklerimi nasıl iletebilirim?',
            answer:
                'Rezervasyon sırasında not düşebilir veya doğrudan bize ulaşarak özel isteklerinizi iletebilirsiniz.'
        }
    ];

    return (
        <>
            <Header />
            <main className="bg-[#ffffff] font-cormorant text-[#1c2c34]">
                <PageHero
                    title="İLETİŞİM"
                    subtitle="- BİZİMLE İLETİŞİME GEÇİN -"
                    backgroundImage="/images/banner.jpg"
                    breadcrumbs={[
                        { label: 'ANA SAYFA', href: '/' },
                        { label: 'İLETİŞİM' },
                    ]}
                />

                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="w-full h-[620px] border border-black/10">
                                <iframe
                                    title="Yıldız Hotel Konumu"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.67950900664!2d34.91486377633296!3d38.63261497177908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a5cdd1a34f68b%3A0xfba04847217ba7b8!2sY%C4%B1ld%C4%B1z%20Hotel!5e0!3m2!1str!2str!4v1718123456789!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    className="w-full h-full"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-3xl tracking-wide leading-relaxed text-[#1c2c34] font-bold">
                                        ONLINE REZERVASYON VEYA BİLGİ ALMAK MI İSTİYORSUNUZ?
                                    </h2>
                                    <p className="text-base leading-relaxed tracking-wide text-[#1c2c34]">
                                        Otelimize direkt olarak online rezervasyon yapabilir veya bilgi almak istediğiniz konular hakkında
                                        bizimle iletişime geçebilirsiniz.
                                    </p>
                                </div>

                                <div className="space-y-6 text-[#1c2c34]">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-[#ab9a8b] transition-colors duration-200 hover:border-black/30 hover:text-black">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-base tracking-wide uppercase text-[#1c2c34] mb-1">Konum</p>
                                            <p className="text-sm text-[#1c2c34]">
                                                Kavaklıönü Mah., Atatürk Blv. No:61, 50400 Ürgüp/Nevşehir
                                            </p>
                                            <Link
                                                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x152a5cdd1a34f68b:0xfba04847217ba7b8"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[#ab9a8b] font-bold hover:underline inline-block mt-2 hover:text-black transition-colors"
                                            >
                                                Yol Tarifi Al
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-[#ab9a8b] transition-colors duration-200 hover:border-black/30 hover:text-black">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-base tracking-wide uppercase text-[#1c2c34] mb-1">Rezervasyon</p>
                                            <p className="text-sm text-[#1c2c34]">0 (384) 341 46 10</p>
                                            <p className="text-sm text-[#1c2c34]">+90 532 564 52 77</p>
                                            <p className="text-sm text-[#1c2c34]">info@yildizhotelcappadocia.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-[#ab9a8b] transition-colors duration-200 hover:border-black/30 hover:text-black">
                                            <Navigation className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-base tracking-wide uppercase text-[#1c2c34] mb-1">Sosyal</p>
                                            <p className="text-sm text-[#1c2c34]">
                                                Sosyal medyada bizi takip edin.
                                            </p>
                                            <div className="flex items-center gap-3 mt-3">
                                                <Link
                                                    href="https://www.facebook.com/urgupyildizhotel"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-[#6b6b6b] transition-colors hover:text-black hover:border-black/30"
                                                    aria-label="Facebook"
                                                >
                                                    <Facebook className="h-4 w-4" />
                                                </Link>

                                                <Link
                                                    href="https://www.instagram.com/urgupyildizhotel/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-[#6b6b6b] transition-colors hover:text-black hover:border-black/30"
                                                    aria-label="Instagram"
                                                >
                                                    <Instagram className="h-4 w-4" />
                                                </Link>

                                                <Link
                                                    href="https://www.tripadvisor.com.tr/Hotel_Review-g297989-d3161070-Reviews-Yildiz_Hotel-Urgup_Cappadocia.html"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-[#6b6b6b] transition-colors hover:text-black hover:border-black/30"
                                                    aria-label="TripAdvisor"
                                                >
                                                    <FaTripadvisor className="h-4 w-4" />
                                                </Link>
                                                <Link
                                                    href="https://wa.me/905XXXXXXXXX"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-10 w-10 rounded-full border border-black/10 flex items-center justify-center text-[#6b6b6b] transition-colors hover:text-black hover:border-black/30"
                                                    aria-label="WhatsApp"
                                                >
                                                    <FaWhatsapp className="h-4 w-4" />
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white border-t border-black/10">
                    <div className="max-w-[1200px] mx-auto px-6 py-16">
                        <div className="text-center text-[#1c2c34] mb-10">
                            <p className="text-base tracking-widest uppercase text-[#1c2c34] mb-4">
                                Rezervasyon ile ilgili sıkça sorulan sorular
                            </p>
                            <div className="h-px w-full bg-black/10" />
                        </div>

                        <div className="space-y-0">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={faq.question}
                                        className="border-b border-black/10"
                                    >
                                        <button
                                            className="w-full flex items-center justify-between py-6 text-left text-[#1c2c34] hover:text-black transition-transform duration-600"
                                            onClick={() =>
                                                setOpenIndex(isOpen ? null : index)
                                            }
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-lg md:text-xl tracking-wide text-[#1c2c34] font-bold">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`h-5 w-5 transition-transform duration-600 ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="pb-6 text-sm leading-relaxed font-semibold tracking-wide text-[#1c2c34]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <h2 className="text-4xl md:text-5xl tracking-wide text-[#1c2c34] font-bold">
                                        Bir Sorunuz mu Var?
                                    </h2>
                                    <p className="text-base text-[#1c2c34] tracking-wide">
                                        Formu doldurun, en kısa sürede size dönüş yapalım.
                                    </p>
                                </div>

                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <label className="block">
                                        <span className="text-sm tracking-wide text-black">Adınız</span>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-[#ab9a8b]"
                                            placeholder="Ad Soyad"
                                            required
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm tracking-wide text-black">E-posta</span>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-posta (ornek@mail.com)"
                                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                            title="Geçerli bir e-posta adresi giriniz"
                                            className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-[#ab9a8b]"
                                            required
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm tracking-wide text-black">Telefon</span>
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
                                            className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-[#ab9a8b]"
                                            required
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm tracking-wide text-black">Konu</span>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-[#ab9a8b]"
                                            placeholder="Rezervasyon / Bilgi"
                                            required
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm tracking-wide text-black">Mesajınız</span>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Mesajiniz (En az 10 karakter)"
                                            minLength={10}
                                            title="Mesaj en az 10 karakter olmalıdır"
                                            className="mt-4 w-full bg-transparent border-b border-black/40 focus:border-black outline-none py-2 text-base text-black placeholder:text-[#ab9a8b] resize-none"
                                            required
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className={`inline-flex items-center gap-2 border border-black/40 px-8 py-3 text-sm tracking-widest text-[#1c2c34] transition-all duration-300 hover:border-black hover:bg-[#1c2c34] hover:text-white hover:-translate-y-0.5 hover:shadow-lg
                                        ${isSending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                                    >
                                        {isSending ? "GÖNDERİLİYOR..." : "GÖNDER"}
                                    </button>
                                    {status && (
                                        <div
                                            className={`text-sm tracking-wide ${status.type === "ok" ? "text-green-700" : "text-red-700"
                                                }`}
                                        >
                                            {status.msg}
                                        </div>
                                    )}
                                </form>
                            </div>

                            <div className="w-full h-[620px] mt-32 overflow-hidden border border-black/10 bg-white">
                                <img
                                    src="/images/otelBahce/resim12.jpeg"
                                    alt="İletişim"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 py-20">
                        <div className="space-y-6 text-[#1c2c34] text-center">
                            <h2 className="text-4xl md:text-6xl tracking-wide">
                                Sosyal Medya'da Takip Edin
                            </h2>
                            <p className="text-base text-[#1c2c34]/80">
                                Güncel görseller ve son haberlerimiz sosyal medya hesaplarımızda:
                            </p>
                            <div className="flex items-center justify-center gap-6 text-sm tracking-widest uppercase">
                                <Link
                                    href="https://www.instagram.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.facebook.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Facebook
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-10 w-full">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    '/images/room-106/106-4.jpeg',
                                    '/images/otelBahce/resim2.jpg',
                                    '/images/room-104/104-1.jpg',
                                    '/images/otelBahce/resim4.jpg'
                                ].map((src, index) => (
                                    <div key={index} className="aspect-square hover:scale-105 transition-all duration-300 overflow-hidden bg-white">
                                        <img
                                            src={src}
                                            alt={`Instagram ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
                                <Link
                                    href="https://www.instagram.com/urgupyildizhotel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-black/40 px-8 py-3 text-sm tracking-widest text-[#1c2c34] transition-all duration-300 hover:border-black hover:bg-[#1c2c34] hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    INSTAGRAM'DA TAKİP ET
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    );
}
