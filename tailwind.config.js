/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8CDBDD",
          dark: "#2bd0d0",
        },
        glass: "rgba(214, 214, 214, 0.6)",
        backgroundColor: "#3a3053",
        textColor: "#B5C0D0",
        footerColor: "#232027",
      },
      fontFamily: {
        urbanist: "Urbanist",
        Poppins: "Poppins",
        Tourney: "Tourney",
        BriemHand: "Briem Hand",
        Geological: "Geological",
        Monoton: "Monoton",
        Ubuntu: "Ubuntu",
        Montserrat: "Montserrat",
        Lato: "Lato",
      },
    },
  },
  plugins: [],
};
