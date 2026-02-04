import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title:
        "Hakkımızda | Yıldız Otel Kapadokya - Ürgüp’te Taş Oda ve Jakuzili Konaklama",
    description:
        "Yıldız Otel Kapadokya, Ürgüp merkezinde taş oda, jakuzili balayı odası...",
    keywords: [
        "kapadokya otel",
        "ürgüp otelleri",
        "nevşehir otelleri",
        "balayı otelleri",
        "yıldız otel kapadokya",
        "yıldız otel ürgüp",
        "kapadokya tatil",
        "kapadokya otel önerisi",
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
        canonical: "https://www.yildizhotelcappadocia.com/about",
    },

    openGraph: {
        title: "Hakkımızda | Yıldız Otel Kapadokya",
        description: "Kapadokya’da konforlu ve otantik konaklama için Yıldız Otel...",
        url: "https://www.yildizhotelcappadocia.com/about",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/logo.png",
                width: 800,
                height: 600,
                alt: "Yıldız Otel Kapadokya Taş Oda",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hakkımızda | Yıldız Otel Kapadokya",
        description: "Kapadokya’da konforlu ve otantik konaklama için Yıldız Otel...",
        images: ["https://www.yildizhotelcappadocia.com/images/logo.png"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
