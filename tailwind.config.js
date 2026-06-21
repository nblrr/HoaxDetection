/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary": "#001e92",
        "outline-variant": "#444656",
        "surface-tint": "#bbc3ff",
        "inverse-primary": "#2748ee",
        "surface-container-highest": "#273647",
        "inverse-surface": "#d4e4fa",
        "surface-bright": "#2c3a4c",
        "primary-container": "#3e5cff",
        "background": "#051424",
        "surface-container-high": "#1c2b3c",
        "on-surface": "#d4e4fa",
        "on-primary-fixed": "#000f5c",
        "surface-container-lowest": "#010f1f",
        "surface-variant": "#273647",
        "surface": "#051424",
        "tertiary-container": "#c14800",
        "error": "#ffb4ab",
        "primary": "#bbc3ff",
        "surface-dim": "#051424",
        "on-primary-container": "#f4f2ff",
        "on-secondary-container": "#c4abff",
        "on-background": "#d4e4fa",
        "secondary": "#d0bcff",
        "outline": "#8e8fa2",
        "on-surface-variant": "#c4c5d9",
        "surface-container": "#122131"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "gutter": "24px",
        "container-max": "1280px",
        "unit": "8px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "label-sm": ["Geist", "sans-serif"],
        "label-md": ["Geist", "sans-serif"],
        "headline-md": ["Manrope", "sans-serif"],
        "headline-lg": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "display-lg": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.02em", "fontWeight": "500"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "500"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
      }
    },
  },
  plugins: [],
}
