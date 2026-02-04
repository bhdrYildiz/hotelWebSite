import type { Metadata } from "next";
import RoomsClient from "./RoomsClient";

export const metadata: Metadata = {
    title:
        "Odalar | Yıldız Otel Kapadokya - Ürgüp’te Taş Oda ve Jakuzili Oda Seçenekleri",
    description:
        "Yıldız Otel Kapadokya odalarını keşfedin: taş odalar, jakuzili seçenekler, kahvaltı dahil konaklama. Ürgüp merkezde en iyi fiyat garantisiyle doğrudan rezervasyon.",
    keywords: [
        "kapadokya otel odaları",
        "ürgüp otel odaları",
        "taş oda",
        "jakuzili oda",
        "balayı odası",
        "yıldız otel kapadokya odalar",
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
    alternates: {
        canonical: "https://www.yildizhotelcappadocia.com/rooms",
    },
    openGraph: {
        title: "Odalar | Yıldız Otel Kapadokya",
        description:
            "Taş odalar, jakuzili oda seçenekleri ve Ürgüp merkez konumuyla Yıldız Otel Kapadokya odalarını inceleyin.",
        url: "https://www.yildizhotelcappadocia.com/rooms",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/otelBahce/resim12.jpeg",
                width: 1200,
                height: 630,
                alt: "Yıldız Otel Kapadokya Odalar",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Odalar | Yıldız Otel Kapadokya",
        description: "Ürgüp’te taş odalar ve jakuzili oda seçenekleri.",
        images: ["https://www.yildizhotelcappadocia.com/images/otelBahce/resim12.jpeg"],
    },
};

export default function RoomsPage() {
    return <RoomsClient />;
}
