"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        ReselivaCustomWidget?: {
            hotelUrl: string;
            lang: string;
        };
    }
}

export default function ReselivaWidget() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.ReselivaCustomWidget = {
            hotelUrl: "yildizhotel",
            lang: "tr",
        };

        if (!mountRef.current) return;
        if (mountRef.current.querySelector("#reselivaScript")) return;

        const s = document.createElement("script");
        s.id = "reselivaScript";
        s.src = "https://www.reseliva.com/ReselivaWidget/JS/rw_iframe.js";
        s.async = true;

        mountRef.current.appendChild(s);
    }, []);

    return (
        <div
            ref={mountRef}
            className="w-full"
            style={{ minHeight: 800 }}
        />
    );
}
