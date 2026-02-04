import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
    title: "Galeri | Yıldız Otel Kapadokya - Ürgüp’te Taş Oda ve Otel Fotoğrafları",
    description:
        "Yıldız Otel Kapadokya’nın taş odalarını, bahçesini ve Ürgüp’teki konumunu fotoğraflarla keşfedin. Otel galerimizi inceleyin ve doğrudan rezervasyon yapın.",
    keywords: [
        "kapadokya otel galeri",
        "ürgüp otel fotoğrafları",
        "kapadokya taş oda fotoğrafları",
        "yıldız otel galeri",
        "yıldız otel kapadokya fotoğraf",
        "nevşehir otel görselleri",
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
        canonical: "https://www.yildizhotelcappadocia.com/gallery",
    },
    openGraph: {
        title: "Galeri | Yıldız Otel Kapadokya",
        description:
            "Yıldız Otel Kapadokya’nın fotoğraf galerisi: taş odalar, bahçe ve otel detayları.",
        url: "https://www.yildizhotelcappadocia.com/gallery",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/otelBahce/resim10.jpeg",
                width: 1200,
                height: 630,
                alt: "Yıldız Otel Kapadokya Galeri",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Galeri | Yıldız Otel Kapadokya",
        description: "Otel fotoğrafları, taş odalar ve Ürgüp’te otel detayları.",
        images: ["https://www.yildizhotelcappadocia.com/images/otelBahce/resim10.jpeg"],
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
