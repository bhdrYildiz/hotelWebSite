/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
