'use client';

import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1f2c42] text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4"
            >
                <Loader2 className="animate-spin w-12 h-12 text-[#b99365]" />
                <p className="text-lg font-cormorant">Sayfa yükleniyor...</p>
            </motion.div>
        </div>
    );
}
