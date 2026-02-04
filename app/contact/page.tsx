import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title:
        "İletişim | Yıldız Otel Kapadokya - Ürgüp’te Rezervasyon ve Bilgi",
    description:
        "Yıldız Otel Kapadokya ile iletişime geçin. Ürgüp’teki konumumuz, telefon ve e-posta bilgilerimizle hızlıca ulaşın; rezervasyon ve bilgi talepleriniz için bize yazın.",
    keywords: [
        "kapadokya otel iletişim",
        "ürgüp otel iletişim",
        "ürgüp otel adres",
        "nevşehir otel telefon",
        "kapadokya otel rezervasyon",
        "yıldız otel kapadokya",
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
        canonical: "https://www.yildizhotelcappadocia.com/contact",
    },

    openGraph: {
        title: "İletişim | Yıldız Otel Kapadokya",
        description:
            "Telefon, e-posta ve harita bilgileri ile Yıldız Otel’e kolayca ulaşın. Ürgüp merkezde konum ve hızlı iletişim.",
        url: "https://www.yildizhotelcappadocia.com/contact",
        siteName: "Yıldız Otel Kapadokya",
        images: [
            {
                url: "https://www.yildizhotelcappadocia.com/images/otelBahce/resim12.jpeg",
                width: 1200,
                height: 630,
                alt: "Yıldız Otel Kapadokya - İletişim",
            },
        ],
        locale: "tr_TR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "İletişim | Yıldız Otel Kapadokya",
        description:
            "Yıldız Otel Kapadokya ile iletişime geçin: telefon, e-posta, konum ve rezervasyon.",
        images: ["https://www.yildizhotelcappadocia.com/images/otelBahce/resim12.jpeg"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
