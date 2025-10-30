/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["ArcadeClassic", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        pixel: ["CoralPixel", "sans-serif"],
        sans: ["Pixelify", "sans-serif"],
        pixelated: ["FontPixel", "sans-serif"],
      },
      colors: {
        terminal: "rgba(30,30,30,255)",
      },

      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
