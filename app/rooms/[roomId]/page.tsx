import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDetailClient from "./RoomDetailClient";
import { rooms } from "@/app/data/rooms";

const BASE_URL = "https://www.yildizhotelcappadocia.com";

type PageParams = { roomId: string };

const roomSeoMap: Record<string, {
    title: string;
    description: string;
    keywords: string[];
}> = {
    "room-105": {
        title: "Havuzlu King Suit | Özel Havuzlu Oda Kapadokya - Yıldız Otel Ürgüp",
        description: "Odaya özel havuzlu king suit. Geleneksel taş mimari ile çağdaş konforun buluştuğu bu odada king size yatak, akıllı TV, minibar ve oturma grubu bulunmaktadır. Balayı ve özel tatil için ideal.",
        keywords: ["kapadokya havuzlu oda", "ürgüp özel havuzlu suit", "kapadokya havuzlu otel odası", "ürgüp balayı odası havuzlu", "kapadokya king suit"],
    },
    "room-301": {
        title: "Özel Teraslı Jakuzili King Suit | Ürgüp Manzaralı - Yıldız Otel Kapadokya",
        description: "Ürgüp Kayakapı manzaralı özel terasta kahvaltı keyfi, odaya ait jakuzide dinlenme. King size yatak, akıllı TV, minibar, oturma grubu. Kapadokya'da romantik ve sakin konaklama.",
        keywords: ["kapadokya teraslı oda", "ürgüp manzaralı jakuzili suit", "kapadokya jakuzili king suit", "ürgüp romantik oda", "kapadokya teraslı suit"],
    },
    "room-103": {
        title: "Jakuzili Balkonlu Suit | Bahçe Manzaralı Oda Ürgüp - Yıldız Otel Kapadokya",
        description: "Bahçe manzaralı özel balkonlu jakuzili suit. Balkonda kahvaltı yapın, jakuzide günün yorgunluğunu atın. King size yatak, özel aydınlatma, akıllı TV, minibar, klima. Ürgüp merkezde lüks konaklama.",
        keywords: ["kapadokya balkonlu jakuzili oda", "ürgüp bahçe manzaralı oda", "kapadokya suit oda balkon", "ürgüp jakuzili balkonlu oda", "kapadokya lüks suite"],
    },
    "room-202": {
        title: "Deluxe Jakuzili Oda 202 | Kapadokya Taş Mimarili Oda - Yıldız Otel Ürgüp",
        description: "Ayrı banyo bölümlü jakuzili deluxe oda. Kapadokya'nın tarihi taş mimarisinde konforlu konaklama — akıllı TV, minibar, çay-kahve ikramı. Ürgüp merkezde çift kişilik oda.",
        keywords: ["kapadokya deluxe jakuzili oda", "ürgüp taş oda jakuzili", "kapadokya deluxe room", "ürgüp çift kişilik jakuzili oda", "kapadokya uygun fiyatlı jakuzili"],
    },
    "room-203": {
        title: "Deluxe Jakuzili Oda 203 | Ekstra Yataklı Aile Odası Ürgüp - Yıldız Otel",
        description: "Geniş çift kişilik yataklı, ek yatak eklenebilen jakuzili deluxe oda. Aile ve üçlü konaklamalar için uygun. TV, ütü, kahve-çay ikramı dahil. Ürgüp merkezde ekonomik konaklama.",
        keywords: ["kapadokya aile odası jakuzili", "ürgüp ekstra yataklı oda", "kapadokya 3 kişilik jakuzili oda", "ürgüp deluxe room ekstra yatak", "nevşehir aile konaklaması"],
    },
    "room-104": {
        title: "Deluxe Taş Oda | Doğal Taş Mimarili 3 Kişilik Oda Ürgüp - Yıldız Otel",
        description: "Doğal taşın serinliğinde 3 kişilik deluxe oda. Sabahları kuş sesleriyle uyanın — akıllı TV, minibar, oturma grubu, kahvaltı dahil. Ürgüp'te aile ve arkadaş grubu konaklaması için ideal.",
        keywords: ["kapadokya taş oda", "ürgüp doğal taş oda", "kapadokya 3 kişilik oda", "ürgüp aile odası", "kapadokya deluxe taş oda"],
    },
    "room-106": {
        title: "Twin Taş Oda | İki Ayrı Yataklı Oda Kapadokya - Yıldız Otel Ürgüp",
        description: "Kapadokya'da arkadaş veya kardeş konaklaması için twin yatak düzenli taş oda. İki ayrı tek kişilik yatak, akıllı TV, minibar, oturma grubu. Ürgüp merkezde twin oda seçeneği.",
        keywords: ["kapadokya twin oda", "ürgüp iki ayrı yataklı oda", "kapadokya taş twin oda", "ürgüp arkadaş konaklaması", "kapadokya iki kişilik ayrı yatak"],
    },
};

export function generateStaticParams() {
    return rooms.map((r) => ({ roomId: r.id }));
}

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { roomId } = await params;
    const room = rooms.find((r) => r.id === roomId);
    if (!room) return {};

    const seo = roomSeoMap[roomId];
    const url = `${BASE_URL}/rooms/${room.id}`;
    const ogImage = room.images?.[0]
        ? `${BASE_URL}${room.images[0].startsWith("/") ? room.images[0] : `/${room.images[0]}`}`
        : `${BASE_URL}/images/logo.png`;

    const title = seo?.title ?? `${room.name} | Yıldız Otel Kapadokya - Ürgüp`;
    const description = seo?.description ?? (
        (room.description?.length ?? 0) > 157
            ? `${room.description.slice(0, 157)}...`
            : room.description || "Ürgüp'te Yıldız Otel Kapadokya oda detaylarını inceleyin."
    );
    const keywords = seo?.keywords ?? [
        "kapadokya otel odası",
        "ürgüp otel odası",
        "yıldız otel kapadokya",
        room.name,
    ];

    return {
        title,
        description,
        keywords,
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
            title: seo?.title ?? `${room.name} | Yıldız Otel Kapadokya`,
            description,
            url,
            siteName: "Yıldız Otel Kapadokya",
            images: [{ url: ogImage, width: 1200, height: 630, alt: room.name }],
            locale: "tr_TR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: seo?.title ?? `${room.name} | Yıldız Otel Kapadokya`,
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