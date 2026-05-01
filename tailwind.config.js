/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-400': '#4ade80',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
        'red-400': '#f87171',
        'red-500': '#ef4444',
        'red-600': '#dc2626',
      },
    },
  },
  plugins: [],
}
