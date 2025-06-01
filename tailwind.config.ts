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
        primary: "#1f2c42", // Ana renk, örneğin metin veya arka plan
        secondary: "#c1a37b", // Buton veya öne çıkarılacak alanlar
        light: "#f8f8f3", // Açık ton, örneğin arka plan
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
