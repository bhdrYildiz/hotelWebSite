import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-transparent">
            <div className="container max-w-[1200px] mx-auto px-4 flex justify-between items-center py-6">
                <div className="logo">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Logo" className="h-16 w-16" />
                    </Link>
                </div>
                <div className="hamburger md:hidden cursor-pointer">
                    <div className="w-6 h-0.5 bg-[#c1a37b] mb-1"></div>
                    <div className="w-6 h-0.5 bg-[#c1a37b] mb-1"></div>
                    <div className="w-6 h-0.5 bg-[#c1a37b]"></div>
                </div>
                <nav className="hidden md:flex gap-8 text-xl text-[#c1a37b]">
                    <Link href="/">Anasayfa</Link>
                    <Link href="/about">Hakkımızda</Link>
                    <Link href="/rooms">Odalar</Link>
                    <Link href="/activities">Aktiviteler</Link>
                    <Link href="/gallery">Galeri</Link>
                    <Link href="/reservation">Rezervasyon</Link>
                    <Link href="/contact">İletişim</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
