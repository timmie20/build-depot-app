/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["45px", "32px"],
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      calSans: ["Cal Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-50": "#E9E9EA",
        "gray-100": "#6D6D73",
        "gray-200": "#81818F",
        "gray-300": "#515158",
        "dark-50": "#25252E",
        "dark-100": "#101013",
        "dark-200": "#22222A",
        "dark-full": "#0000",
        "green-clr": "#48C546",
        "orange-clr-50": "#F9ECE8",
        "orange-clr-100": "#F5BF55",
        "orange-clr-200": "#D97F64",
        "orange-clr-full": "#C74018",
      },
    },
  },
  plugins: [],
};
