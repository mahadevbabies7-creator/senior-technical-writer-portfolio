/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f3f5f8',
          100: '#e2e8ef',
          200: '#c4d0dd',
          300: '#9aaecc',
          400: '#6883ad',
          500: '#466390',
          600: '#354e75',
          700: '#283d5e',
          800: '#1c2d48',
          900: '#14243a',
          950: '#0d1726',
        },
        teal: {
          50: '#effcf9',
          100: '#cbf7ee',
          200: '#99efe0',
          300: '#5be0d0',
          400: '#2ec9b8',
          500: '#0d9488',
          600: '#0a7d72',
          700: '#0c6259',
          800: '#0f4f48',
          900: '#11413c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(20, 36, 58, 0.06), 0 1px 2px rgba(20, 36, 58, 0.04)',
        'card-hover': '0 12px 32px rgba(20, 36, 58, 0.10), 0 4px 8px rgba(20, 36, 58, 0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
