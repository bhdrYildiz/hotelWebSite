import type { Metadata } from "next";
import ReservationClient from "./ReservationClient";

export const metadata: Metadata = {
    title:
        "Rezervasyon | Yıldız Otel Kapadokya - Ürgüp’te En İyi Fiyat Garantisi",
    description:
        "Yıldız Otel Kapadokya’da güvenli ve hızlı online rezervasyon yapın. Ürgüp’te taş odalar, jakuzili odalar ve en iyi fiyat garantisiyle anında onay.",
    keywords: [
        "kapadokya otel rezervasyon",
        "ürgüp otel rezervasyon",
        "online otel rezervasyonu",
        "kapadokya balayı oteli rezervasyon",
        "yıldız otel kapadokya rezervasyon",
        "yıldız otel ürgüp",
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
        canonical: "https://www.yildizhotelcappadocia.com/reservation",
    },

    openGraph: {
        title: "Rezervasyon | Yıldız Otel Kapadokya",
        description:
            "Yıldız Otel Kapadokya’da online rezervasyon: güvenli ödeme, anında onay ve en iyi fiyat garantisi.",
        url: "https://www.yildizhotelcappadocia.com/reservation",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/otelBahce/resim5.jpeg",
                width: 1200,
                height: 630,
                alt: "Yıldız Otel Kapadokya Rezervasyon",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Rezervasyon | Yıldız Otel Kapadokya",
        description:
            "Ürgüp’te Yıldız Otel için online rezervasyon yapın. Güvenli, hızlı ve avantajlı.",
        images: [
            "https://www.yildizhotelcappadocia.com/images/otelBahce/resim5.jpeg",
        ],
    },
};

export default function ReservationPage() {
    return <ReservationClient />;
}
