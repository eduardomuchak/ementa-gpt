/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-gray": "#F0F0F5",
        input: "#F8F9FA",
        "green-primary": "#34CB79",
        "green-primary-light": "#E1FAEC",
        "green-primary-dark": "#0DA151",
        "red-secondary": "#C33617",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        stripes:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)",
      },
      backgroundSize: {
        stripes: "100% 8px",
      },
      blur: {
        full: "194px",
      },
    },
  },
  plugins: [],
};
