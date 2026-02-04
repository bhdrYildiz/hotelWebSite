import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TourDetailClient from "./TourDetailClient";
import { tours, getTourById } from "@/app/data/tours";

const BASE_URL = "https://www.yildizhotelcappadocia.com";
type PageParams = { tourId: string };

export function generateStaticParams() {
    return tours.map((t) => ({ tourId: t.id }));
}

export async function generateMetadata(
    { params }: { params: Promise<PageParams> }
): Promise<Metadata> {
    const { tourId } = await params;
    const tour = getTourById(tourId);
    if (!tour) return {};

    const url = `${BASE_URL}/tours/${tour.id}`;
    const ogImagePath = tour.gallery?.[0] ?? tour.image;
    const ogImage = ogImagePath.startsWith("http")
        ? ogImagePath
        : `${BASE_URL}${ogImagePath}`;

    const description =
        (tour.description?.length ?? 0) > 160
            ? `${tour.description.slice(0, 157)}...`
            : tour.description || "Kapadokya tur detaylarını inceleyin.";

    return {
        title: `${tour.title} | Kapadokya Turu - Yıldız Otel`,
        description,
        keywords: [
            "kapadokya tur",
            "ürgüp tur",
            "kapadokya aktiviteler",
            tour.title,
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
            title: `${tour.title} | Yıldız Otel Kapadokya`,
            description,
            url,
            siteName: "Yıldız Otel Kapadokya",
            images: [{ url: ogImage, width: 1200, height: 630, alt: tour.title }],
            locale: "tr_TR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${tour.title} | Yıldız Otel Kapadokya`,
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
