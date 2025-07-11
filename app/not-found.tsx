'use client';

import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#1f2c42] text-[#f8f8f3] text-center px-4">
            <AlertCircle className="w-16 h-16 text-yellow-500 mb-4" />
            <h1 className="text-4xl font-bold font-cormorant mb-2">404 - Sayfa Bulunamadı</h1>
            <p className="mb-6 text-[#cccccc]">Aradığınız sayfa mevcut değil ya da taşınmış olabilir.</p>

            <Link
                href="/"
                className="bg-[#c1a37b] hover:bg-[#b99365] text-[#1f2c42] font-semibold px-6 py-2 rounded transition"
            >
                Anasayfaya Dön
            </Link>
        </div>
    );
}
