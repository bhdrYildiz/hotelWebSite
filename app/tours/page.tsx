import type { Metadata } from "next";
import ToursClient from "./ToursClient";

export const metadata: Metadata = {
    title: "Tur ve Aktiviteler | Yıldız Otel Kapadokya - Kapadokya Turları",
    description:
        "Kapadokya’da unutulmaz tur ve aktiviteleri keşfedin: balon turu, ATV, at turu ve daha fazlası. Yıldız Otel Kapadokya ile güvenli ve planlı tur deneyimi.",
    keywords: [
        "kapadokya turları",
        "ürgüp turlar",
        "kapadokya aktiviteler",
        "balon turu",
        "atv turu kapadokya",
        "yıldız otel kapadokya tur",
    ],
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    alternates: { canonical: "https://www.yildizhotelcappadocia.com/tours" },
    openGraph: {
        title: "Tur ve Aktiviteler | Yıldız Otel Kapadokya",
        description:
            "Kapadokya tur ve aktiviteleri: detaylar, programlar ve fotoğraflar.",
        url: "https://www.yildizhotelcappadocia.com/tours",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/turlar/red2.jpg",
                width: 1200,
                height: 630,
                alt: "Kapadokya Tur ve Aktiviteler",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tur ve Aktiviteler | Yıldız Otel Kapadokya",
        description: "Kapadokya’da tur ve aktiviteler.",
        images: ["https://www.yildizhotelcappadocia.com/images/turlar/red2.jpg"],
    },
};

export default function ToursPage() {
    return <ToursClient />;
}
