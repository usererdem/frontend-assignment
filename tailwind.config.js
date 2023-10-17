/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0582ff",
          iconbackground: "rgba(3, 129, 255, 0.10)",
          background: "#FBFCFC",
          border: "#0381ff",
          borderInactive: "#00000014",
        },
      },
    },
  },
  plugins: [],
};
