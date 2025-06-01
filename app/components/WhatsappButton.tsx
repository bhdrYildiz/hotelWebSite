import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    return (
        <a
            href="https://wa.me/905303897163" // ← Numaranızı buraya girin
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-[1001] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
            <FaWhatsapp size={24} />
        </a>
    );
};

export default WhatsappButton;
