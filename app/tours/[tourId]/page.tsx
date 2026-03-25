import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TourDetailClient from "./TourDetailClient";
import { tours, getTourById } from "@/app/data/tours";

const BASE_URL = "https://www.yildizhotelcappadocia.com";
type PageParams = { tourId: string };

const tourSeoMap: Record<string, {
    title: string;
    description: string;
    keywords: string[];
}> = {
    "ballon-tour": {
        title: "Kapadokya Balon Turu Fiyatları 2026 | Ürgüp'ten Gün Doğumu Balonu",
        description: "Kapadokya balon turu €100'dan başlayan fiyatlarla! Ürgüp Yıldız Otel'den otelden transfer dahil gün doğumu balon turu. 1 saatlik uçuş, uçuş sertifikası hediye. Hemen rezervasyon yapın.",
        keywords: [
            "kapadokya balon turu",
            "kapadokya balon turu fiyatları 2026",
            "ürgüp balon turu",
            "kapadokya gün doğumu balon turu",
            "kapadokya sıcak hava balonu",
            "göreme balon turu",
        ],
    },
    "red-tour": {
        title: "Kapadokya Bölge Turu (Kırmızı Tur) | Paşabağları, Uçhisar, Göreme",
        description: "Kapadokya'nın en popüler günlük turu! Devrent Vadisi, Paşabağları, Zelve Açık Hava Müzesi, Uçhisar Kalesi. Öğle yemeği ve müze biletleri dahil. €42 — otelden transfer ücretsiz.",
        keywords: [
            "kapadokya kırmızı tur",
            "kapadokya bölge turu",
            "kapadokya günlük tur",
            "paşabağları turu",
            "uçhisar kalesi turu",
            "ürgüp günlük tur fiyatları",
            "göreme turu",
        ],
    },
    "atv-tour": {
        title: "Kapadokya ATV Turu Fiyatları 2026 | Ürgüp'ten Gün Batımı ATV Safari",
        description: "Kapadokya'da ATV turu €20'den başlıyor! Kızıl Vadi, Aşk Vadisi ve peri bacaları arasında 2 saatlik ATV safari. Otelden transfer dahil, kask ve ekipman dahil. Balayı çiftlerine özel.",
        keywords: [
            "kapadokya atv turu",
            "ürgüp atv turu",
            "kapadokya atv safari",
            "kapadokya atv turu fiyatları",
            "kızıl vadi atv",
            "kapadokya quad turu",
            "ürgüp quad safari",
        ],
    },
    "green-tour": {
        title: "Kapadokya Yeşil Tur | Ihlara Vadisi & Kaymaklı Yeraltı Şehri Turu",
        description: "Kapadokya Yeşil Tur ile Ihlara Vadisi doğa yürüyüşü ve Kaymaklı Yeraltı Şehri'ni keşfedin. Öğle yemeği ve müze biletleri dahil €42. Ürgüp'ten otelden transfer ücretsiz.",
        keywords: [
            "kapadokya yeşil tur",
            "ihlara vadisi turu",
            "kaymaklı yeraltı şehri",
            "kapadokya yeraltı şehri turu",
            "ihlara vadisi yürüyüş",
            "nevşehir yeşil tur",
        ],
    },
    "at-tour": {
        title: "Kapadokya At Turu | Peri Bacaları Arasında At Binme Turu Ürgüp",
        description: "Kapadokya'da at binme turu €25! Kızıl Vadi ve Aşk Vadisi'nde rehber eşliğinde 1-2 saatlik at turu. Otelden transfer dahil. Gün doğumu ve gün batımı seçeneği mevcut.",
        keywords: [
            "kapadokya at turu",
            "kapadokya at binme turu",
            "ürgüp at turu",
            "kapadokya at safari",
            "peri bacaları at turu",
            "kapadokya at binme fiyatları",
        ],
    },
    "safari-tour": {
        title: "Kapadokya Jeep Safari Turu | Gizli Vadilerde 4x4 Off-Road Macera",
        description: "Kapadokya Jeep Safari turu €60! Göreme vadileri, Güvercinlik Vadisi ve Ortahisar'da 2 saatlik off-road macera. Tur sonunda şampanya ikramı. Otelden transfer dahil.",
        keywords: [
            "kapadokya jeep safari",
            "kapadokya safari turu",
            "ürgüp jeep turu",
            "kapadokya off road turu",
            "kapadokya 4x4 safari",
            "göreme jeep safari fiyatları",
        ],
    },
};

export function generateStaticParams() {
    return tours.map((t) => ({ tourId: t.id }));
}

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { tourId } = await params;
    const tour = getTourById(tourId);
    if (!tour) return {};

    const seo = tourSeoMap[tourId];
    const url = `${BASE_URL}/tours/${tour.id}`;
    const ogImagePath = tour.gallery?.[0] ?? tour.image;
    const ogImage = ogImagePath.startsWith("http")
        ? ogImagePath
        : `${BASE_URL}${ogImagePath}`;

    const title = seo?.title ?? `${tour.title} | Kapadokya Turu - Yıldız Otel`;
    const description = seo?.description ?? tour.description.slice(0, 160);
    const keywords = seo?.keywords ?? ["kapadokya tur", "ürgüp tur", tour.title];

    return {
        title,
        description,
        keywords,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1,
            },
        },
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: "Yıldız Otel Kapadokya",
            images: [{ url: ogImage, width: 1200, height: 630, alt: tour.title }],
            locale: "tr_TR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function TourPage({
    params,
}: {
    params: Promise<PageParams>;
}) {
    const { tourId } = await params;
    const tour = getTourById(tourId);
    if (!tour) notFound();

    return <TourDetailClient tourId={tourId} />;
}