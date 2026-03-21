/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aol-navy': '#000080',
        'aol-blue': '#0066CC',
        'aol-yellow': '#FFD700',
        'win95-gray': '#C0C0C0',
        'win95-dark': '#808080',
        'win95-darker': '#404040',
        'win95-light': '#DFDFDF',
        'win95-title': '#000080',
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
        'system': ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
