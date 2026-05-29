/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E1B3D",
          deep: "#0A1530",
          dark: "#0B1733",
          ink: "#0E1F4D",
          900: "#0A1530",
          800: "#0E1B3D",
          700: "#11244F",
          600: "#1B3A7A",
          500: "#1E5BD8",
        },
        brand: {
          blue: "#1E5BD8",
          "blue-deep": "#1F3C99",
          "blue-light": "#5BA8FF",
          gold: "#F2B33A",
          "gold-soft": "#F5C548",
          orange: "#F39A3A",
          mint: "#0F7B5C",
          "mint-light": "#1AAB7E",
          cream: "#F8F4EC",
        },
        surface: {
          DEFAULT: "#F4F6F9",
          alt: "#EEF1F6",
          muted: "#F6F8FB",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0E1B3D",
          soft: "#3A4663",
          muted: "#6B7593",
          line: "#E5E9F0",
        },
      },
      fontFamily: {
        display: ['"Manrope"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.78rem", { lineHeight: "1", letterSpacing: "0.16em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["3rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        card: "20px",
        pill: "9999px",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(14, 27, 61, 0.08)",
        "card-hover": "0 18px 48px -16px rgba(14, 27, 61, 0.18)",
        soft: "0 2px 12px rgba(14, 27, 61, 0.06)",
        ring: "0 0 0 1px rgba(14, 27, 61, 0.06)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(rgba(91, 168, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 168, 255, 0.08) 1px, transparent 1px)",
        "fade-bottom":
          "linear-gradient(to bottom, transparent 0%, rgba(14, 27, 61, 0.4) 60%, rgba(14, 27, 61, 0.85) 100%)",
      },
      backgroundSize: {
        "grid-lg": "48px 48px",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        blink: "blink 1s steps(2) infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
