import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#3F1D38',
          light: '#5C2B52',
          dark: '#2A1226',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CA6A',
          dim: '#A8892A',
        },
        ivory: {
          DEFAULT: '#F8F6F2',
          dark: '#EDE9E3',
        },
        graphite: {
          DEFAULT: '#171717',
          mid: '#252525',
          soft: '#333333',
        },
        stone: {
          DEFAULT: '#E8E5DF',
          dark: '#C5C0B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '8xl': ['6rem', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
