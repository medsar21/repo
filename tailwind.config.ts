import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroc: {
          red: '#C1272D',
          green: '#006233',
          gold: '#D4AF37',
          'dark': '#0A0A0A',
          'light': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['var(--font-chivo)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-chivo-mono)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'gradient-maroc': 'linear-gradient(135deg, #C1272D 0%, #006233 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'maroc': '0 4px 20px rgba(193, 39, 45, 0.3)',
        'maroc-green': '0 4px 20px rgba(0, 98, 51, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config

