/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    maxWidth: {
      45.5: "45.5rem",
    },
    wordBreak: {
      body: "keep-all",
    },
    letterSpacing: {
      body: "-.3px",
    },
    color: {
      body: "#222",
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
