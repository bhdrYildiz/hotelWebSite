import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetailClient from "./RoomDetailClient";
import { rooms } from "@/app/data/rooms";

const BASE_URL = "https://www.yildizhotelcappadocia.com";

type PageParams = { roomId: string };

export function generateStaticParams() {
    return rooms.map((r) => ({ roomId: r.id }));
}

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { roomId } = await params;
    const room = rooms.find((r) => r.id === roomId);
    if (!room) return {};

    const url = `${BASE_URL}/rooms/${room.id}`;
    const ogImage = room.images?.[0]
        ? `${BASE_URL}${room.images[0].startsWith("/") ? room.images[0] : `/${room.images[0]}`}`
        : `${BASE_URL}/images/logo.png`;

    const description =
        (room.description?.length ?? 0) > 160
            ? `${room.description.slice(0, 157)}...`
            : room.description || "Ürgüp’te Yıldız Otel Kapadokya oda detaylarını inceleyin.";

    return {
        title: `${room.name} | Yıldız Otel Kapadokya - Ürgüp`,
        description,
        keywords: [
            "kapadokya otel odası",
            "ürgüp otel odası",
            "taş oda",
            "jakuzili oda",
            "balayı odası",
            "yıldız otel kapadokya",
            room.name,
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
        alternates: { canonical: url },
        openGraph: {
            title: `${room.name} | Yıldız Otel Kapadokya`,
            description,
            url,
            siteName: "Yıldız Otel Kapadokya",
            images: [{ url: ogImage, width: 1200, height: 630, alt: room.name }],
            locale: "tr_TR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${room.name} | Yıldız Otel Kapadokya`,
            description,
            images: [ogImage],
        },
    };
}

export default async function RoomPage({
    params,
}: {
    params: Promise<PageParams>;
}) {
    const { roomId } = await params;
    const room = rooms.find((r) => r.id === roomId);
    if (!room) notFound();

    return <RoomDetailClient roomId={roomId} />;
}
