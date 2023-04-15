/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#299D91",
      secundary: "#525256",
      black: "#191919",
      white: "#FFFFFF",
      gray: {
        1: "#666666",
        2: "#878787",
        3: "#9F9F9F",
        4: "#D1D1D1",
        5: "#E8E8E8",
        6: "#F3F3F3",
      },
      special: {
        main: "#F4F5F7",
        bg: "rgb(210, 210, 210, 0.25)",
        bg2: "rgb(255, 255, 255, 0.70)",
        bg3: "rgb(255, 255, 255, 0.08)",
        red: "#E73D1C",
        green: "#4DAF6E",
      },
    },
  },
  plugins: [],
};
