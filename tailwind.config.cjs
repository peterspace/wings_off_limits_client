/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-layer-3": "rgba(0, 0, 0, 0.2)",
        "overlay-2": "rgba(255, 255, 255, 0.16)",
        gray: {
          100: "#fefefe",
          200: "rgba(0, 0, 0, 0.8)",
          300: "rgba(0, 0, 0, 0.9)",
          400: "rgba(254, 254, 254, 0.93)",
        },
        "button-primary": "#616161",
        inactive: "#bbb",
        gainsboro: {
          100: "#ddd",
          200: "rgba(221, 221, 221, 0.87)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
        "184xl": "203px",
        "3xl-5": "22.5px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      "21xl": "40px",
      inherit: "inherit",
    },
    // theme: {
    //   screens: {
    //     mobile: "375px",
    //     tablet: "744px",
    //     // => @media (min-width: 640px) { ... }

    //     laptop: "1280x",
    //     // => @media (min-width: 768px) { ... }

    //     desktop: "1440px",
    //     // => @media (min-width: 1024px) { ... }
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
