/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "-webkit-repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "-webkit-repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px,#1b1b1b 100px)",

        circularLightLg:
          "-webkit-repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "-webkit-repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "-webkit-repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "-webkit-repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "-webkit-repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "-webkit-repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px,#1b1b1b 40px)",
        circularLightXs:
          "-webkit-repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 30px)",

        circularDarkXs:
          "-webkit-repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px,#1b1b1b 30px)",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        aboutlg: { max: "1040px" },
        //Just for about
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        // => For skills section
        lgSkills: { min: "1023px", max: "1535px" },
        mdSkills: { min: "660px", max: "1023px" },
        smSkills: { min: "479px", max: "660px" },
        xsSkills: { max: "479px" },

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }

        XsToSm: { min: "479px", max: "639px" },
        SmToMd: { min: "639px", max: "767px" },
        MdToLg: { min: "767px", max: "1023px" },
      },
      plugins: [],
    },
  },
};
