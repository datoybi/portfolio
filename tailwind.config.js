/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      selection: "rgba(255, 235, 60, 0.3);",
      link: "rgba(0,0,0,0.07);",
    },
    maxWidth: {
      45.5: "45.5rem",
    },
    extend: {
      fontFamily: {
        body: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Bazier Square",
          "Noto Sans KR",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Roboto,Helvetica Neue",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
