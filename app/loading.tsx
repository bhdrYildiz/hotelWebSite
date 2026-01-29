'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f5f2] relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#ab9a8b]/20 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-[#1c2c34]/10 blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative flex flex-col items-center"
                style={{ position: "relative" }}
            >
                <div className="relative h-32 w-32 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border border-[#ab9a8b]/30"
                    />

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                        className="absolute inset-3 rounded-full border border-dashed border-[#1c2c34]/20"
                    />

                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                        className="relative h-24 w-24 rounded-full bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center"
                    >
                        <Image
                            src="/images/yildizotelMavi.png"
                            alt="Yıldız Otel"
                            fill
                            sizes="96px"
                            className="object-contain p-3 rounded-full"
                            priority
                        />
                    </motion.div>
                </div>

                <motion.p
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="mt-6 text-sm tracking-[0.35em] uppercase font-semibold text-[#1c2c34]/80"
                >
                    YILDIZ OTEL
                </motion.p>

                <div className="mt-2 flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-[#ab9a8b]"
                            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.2,
                                ease: 'easeInOut',
                                delay: i * 0.15,
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
