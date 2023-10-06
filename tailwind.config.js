/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: "Old English Text MT",
      },
    },
  },
  plugins: [require("daisyui")],
};
