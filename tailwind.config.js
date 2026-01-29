/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px", // Header ile birebir uyumlu
      },
    },
    extend: {
      animation: {
        slide: "slide 2.5s linear infinite",
      },
      colors: {
        // Yeni Renk Paleti
        primary: "#1c2c34",    // Koyu gri-mavi - Başlık, header, footer
        secondary: "#ab9a8b",  // Bej/taş tonu - Butonlar, hover efektleri
        accent: "#ab9a8b",     // Bej/taş tonu - İkonlar, aktif link, detay
        light: "#ffffff",      // Beyaz - Arka plan, açık alanlar
        dark: "#1c2c34",       // Koyu gri-mavi - Yazı ya da koyu arka planlar
      },
      fontFamily: {
        // Playfair Display font
        playfair: ["var(--font-playfair)", "serif"],
      },
      maxWidth: {
        "screen-xl": "1120px", // örnek genişlik
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
