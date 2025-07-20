'use client';

import Link from 'next/link';
import { Construction } from 'lucide-react';

export default function Gallery() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#1f2c42] text-[#f8f8f3] text-center px-4">
            <Construction size={64} className="text-[#421f1f] mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">GALERİ YAKINDA!</h1>
            <p className="text-lg md:text-xl mb-6 max-w-md">
                Bu bölüm şu anda yapım aşamasında. Kısa süre içinde harika içeriklerle burada olacağız.
            </p>
            <Link href="/" className="bg-[#ffffff] hover:bg-[#421f1f] text-[#1f2c42] hover:text-amber-50 px-6 py-2 rounded font-semibold transition">
                Anasayfaya Dön
            </Link>
        </div>
    );
}
