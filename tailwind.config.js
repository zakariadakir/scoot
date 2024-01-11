/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": "Space Mono",
        "lexend-deca": "Lexend Deca",
      },
      colors: {
        "yellow-scoot": "#FCB72B",
        "grey-scoot": " #939caa",
        "navy-scoot": "#495567",
      },
      cursor: {
        scoot: "url(./imgs/cursor.png), pointer",
      },
      boxShadow: {
        "3xl": "0 -52px 90px 10px #000000",
      },
    },
    screens: {
      laptop: "911px",
      tablet: "670px",
    },
    fontSize: {
      15: "15px",
    },
  },
  plugins: [],
};
