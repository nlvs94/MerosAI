/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#050B1F',
          mid: '#0A1330',
        },
        brand: {
          blue: '#2F80FF',
          'blue-bright': '#4DA3FF',
          violet: '#7C3AED',
          green: '#22C55E',
          gold: '#F5C542',
        },
        ink: {
          primary: '#FFFFFF',
          secondary: '#A9B4D0',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
      },
      boxShadow: {
        'card-glow': '0 0 30px rgba(47,128,255,0.15)',
        'btn-glow': '0 0 24px rgba(47,128,255,0.45)',
      },
      maxWidth: {
        container: '1440px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-wave': {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.025)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-wave': 'pulse-wave 1s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        breathe: 'breathe 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
