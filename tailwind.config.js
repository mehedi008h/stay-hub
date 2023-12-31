/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                lobster: ["Lobster", "cursive"],
                satisfy: ["Satisfy", "cursive"],
                nunito: ["Nunito", "sans-serif"],
                merriweather: ["Merriweather", "serif"],
                josefin: ["Josefin Sans", "sans-serif"],
                jetbrains: ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
};
