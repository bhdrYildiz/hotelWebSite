import type { Metadata } from "next";
import ToursClient from "./ToursClient";

export const metadata: Metadata = {
    title: "Kapadokya Tur ve Aktiviteler 2026 | Balon, ATV, At, Jeep Safari - Yıldız Otel Ürgüp",
    description:
        "Ürgüp Yıldız Otel'den Kapadokya'nın en iyi turları: balon turu, ATV safari, at binme turu, jeep safari, bölge turu ve yeşil tur. Otelden ücretsiz transfer, uygun fiyat garantisi. Hemen rezervasyon yapın!",
    keywords: [
        "kapadokya tur ve aktiviteler",
        "kapadokya turları 2026",
        "kapadokya balon turu",
        "kapadokya atv turu",
        "kapadokya at binme turu",
        "kapadokya jeep safari",
        "kapadokya yeşil tur",
        "kapadokya kırmızı tur",
        "kapadokya aktiviteler",
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
            "Balon turu, ATV safari, at binme, jeep safari ve daha fazlası. Ürgüp'ten otelden transfer dahil Kapadokya turları. Uygun fiyat ve güvenli tur garantisi.",
        url: "https://www.yildizhotelcappadocia.com/tours",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/turlar/red2.jpg",
                width: 1200,
                height: 630,
                alt: "Kapadokya Tur ve Aktiviteler - Yıldız Otel Ürgüp",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tur ve Aktiviteler | Yıldız Otel Kapadokya",
        description: "Balon turu, ATV safari, at binme, jeep safari — Ürgüp'ten otelden transfer dahil Kapadokya turları.",
        images: ["https://www.yildizhotelcappadocia.com/images/turlar/red2.jpg"],
    },
};

export default function ToursPage() {
    return <ToursClient />;
}
