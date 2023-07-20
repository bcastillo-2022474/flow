/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      fontFamily: {
        regular:
            [
              "Inter UI",
              "SF Pro Display",
              "-apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Oxygen",
              "Ubuntu",
              "Cantarell",
              "Open Sans",
              "Helvetica Neue",
              "sans-serif",
            ],
      },
    },
  },
  plugins: [],
};
