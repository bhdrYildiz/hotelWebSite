'use client';

import { motion } from 'framer-motion';
import { FaParking, FaWifi, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa';
import styles from '../lib/FacilitiesSection.module.css';

const FacilitiesSection = () => {
    const facilities = [
        {
            icon: <FaParking size={48} />,
            title: "Özel Otopark",
            description: "Misafirlerimiz için güvenli ve geniş otopark alanı. 7/24 güvenlik kamerası ile korunan park alanı."
        },
        {
            icon: <FaWifi size={48} />,
            title: "Yüksek Hızlı WiFi",
            description: "Tüm otel genelinde ücretsiz yüksek hızlı fiber internet bağlantısı. Kesintisiz bağlantı."
        },
        {
            icon: <FaUtensils size={48} />,
            title: "Açık Büfe Kahvaltı",
            description: "Misafirlerimiz için açık büfe kahvaltı hizmeti. Kahvaltı saatleri 08:30-10:30 arasıdır."
        },
        {
            icon: <FaMapMarkedAlt size={48} />,
            title: "Kapadokya Bölge Haritası",
            description: "Kapadokya bölge haritası. Kapadokya bölge haritasını inceleyin ve Kapadokya bölgesini keşfedin."
        }
    ];

    return (
        <section className="relative bg-[#f5f5f0] py-12 font-cormorant overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                {/* Başlık */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-base text-[#ab9a8b] uppercase tracking-[0.3em] mb-3">
                        Yıldız Otel
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1c2c34] mb-4">
                        Otel İmkanları
                    </h2>
                </motion.div>

                {/* Facilities Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="text-[#ab9a8b] group-hover:text-[#1c2c34] transition-colors duration-300">
                                    {facility.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-light text-[#1c2c34] mb-4">
                                {facility.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base text-gray-600 leading-relaxed">
                                {facility.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Marquee - Akan Yazı */}
            <div className="mt-12 overflow-hidden">
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeContent}>
                        <span className={styles.marqueeText}>YILDIZ OTEL KAPADOKYA</span>
                        <span className={styles.marqueeText}>YILDIZ OTEL KAPADOKYA</span>
                        <span className={styles.marqueeText}>YILDIZ OTEL KAPADOKYA</span>
                        <span className={styles.marqueeText}>YILDIZ OTEL KAPADOKYA</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
