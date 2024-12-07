import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: "4px -4px 0 0 #ffffff",
        myShadow2: "-4px -4px 0 0 #ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
