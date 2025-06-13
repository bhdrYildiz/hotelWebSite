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
        //Tanım	Hex Kodu	Açıklama
        //Primary	#1f2c42	Başlık, header, footer
        //Secondary	#c1a37b	Butonlar, hover efektleri
        //Accent	#b99365	İkonlar, aktif link, detay
        //Light	#f8f8f3	Arka plan, açık alanlar
        //Dark	#111827	Yazı ya da koyu arka planlar
        //footer #e2e2e2
      },
      fontFamily: {
        // Daha sonra fontları yükleyeceğimiz adımlarla ilişkilendiriyoruz.
        // next/font veya Google Fonts kullanabilirsiniz.
        cormorant: ["'Cormorant Infant'", "'Cormorant SC'", "serif"],
      },
      maxWidth: {
        "screen-xl": "1120px", // örnek genişlik
      },
    },
  },
  plugins: [],
};
