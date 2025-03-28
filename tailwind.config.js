module.exports = {
  content: [
    "./src/**/*.{rs,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        'universe': {
          DEFAULT: '#0a0a2a',
          light: '#1a1a3a',
          dark: '#050510',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 