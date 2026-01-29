'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error('Global App Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#1c2c34] flex flex-col items-center justify-center text-white text-center px-4">
            <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold mb-2 font-cormorant">Bir hata oluştu</h1>
            <p className="mb-4 text-[#cccccc]">Bir sorunla karşılaştık. Lütfen tekrar deneyin.</p>

            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="bg-[#c1a37b] hover:bg-[#ab9a8b] text-[#1c2c34] font-semibold px-6 py-2 rounded transition"
                >
                    Yeniden Dene
                </button>
                <Link
                    href="/"
                    className="bg-transparent border border-[#c1a37b] hover:bg-[#ab9a8b] hover:text-[#1c2c34] text-[#c1a37b] font-semibold px-6 py-2 rounded transition"
                >
                    Anasayfa
                </Link>
            </div>
        </div>
    );
}
