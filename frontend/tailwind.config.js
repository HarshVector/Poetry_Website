// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       colors: {
//         primary: "#f7ba34",
//         secondary: "#69a79c",
//         light: "#f7f7f7",
//         dark: "#333333",
//         dark2: "#999999",
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "2rem",
//           lg: "4rem",
//           xl: "5rem",
//           "2xl": "6rem",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34", // Your primary color (yellow)
        secondary: "#69a79c", // Your secondary color (teal)
        light: "#f7f7f7", // Light background color
        dark: "#333333", // Dark text color
        dark2: "#999999", // Secondary dark color
        blue: {
          500: "#1D4ED8", // Tailwind Blue
          600: "#2563EB", // Hover state blue
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
