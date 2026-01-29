"use client";

import { useEffect, useRef } from "react";

export default function ReselivaWidget() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // config önce
        (window as any).ReselivaCustomWidget = {
            hotelUrl: "yildizhotel",
            lang: "tr",
        };

        // daha önce eklendiyse tekrar ekleme
        if (!mountRef.current) return;
        if (mountRef.current.querySelector("#reselivaScript")) return;

        const s = document.createElement("script");
        s.id = "reselivaScript";
        s.src = "https://www.reseliva.com/ReselivaWidget/JS/rw_iframe.js";
        s.async = true;

        // script'i body'ye değil, bu div'in içine bas
        mountRef.current.appendChild(s);
    }, []);

    return (
        <div
            ref={mountRef}
            className="w-full"
            // widget yüklenirken boş görünmesin diye
            style={{ minHeight: 800 }}
        />
    );
}
