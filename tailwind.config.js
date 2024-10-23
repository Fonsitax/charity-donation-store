/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // If you use a base HTML file for Vite
    "./src/**/*.{js,jsx}",   // Include all JSX files in the 'src' directory
  ],
  theme: {
    extend: {
      colors: {
        // Custom color scheme for your Ocean Cleanup theme
        'deep-ocean-blue': '#0077b6',
        'soft-white': '#f0f8ff',
        'deep-navy': '#1a202c',
        'light-teal': '#48cae4',
        'pale-aqua': '#caf0f8',
        'bright-aqua': '#00b4d8',
        'deep-sea-blue': '#023e8a',
        'deep-navy-charcoal': '#1c1f24',
        'sea-mist-white': '#e5e7eb',
        'aqua-glow': '#90e0ef',
        'deep-aqua-gray': '#2a3a4e',
        'vibrant-sky-blue': '#0096c7',
      },
    },
  },
  plugins: [],
}
