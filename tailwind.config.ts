import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2563eb",
          "primary-content": "#d2e2ff",
          "secondary": "#93c5fd",
          "secondary-content": "#080e16",
          "accent": "#dbeafe",
          "accent-content": "#111316",
          "neutral": "#1e40af",
          "neutral-content": "#ced9f2",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          "info": "#07344f",
          "info-content": "#cad3da",
          "success": "#bef264",
          "success-content": "#0d1403",
          "warning": "#fbbf24",
          "warning-content": "#150d00",
          "error": "#7f1d1d",
          "error-content": "#e8d1ce",
        },
      },
    ],
  },
  plugins: [
    daisyui,
  ],
};
export default config;
