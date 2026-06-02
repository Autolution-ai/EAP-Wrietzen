import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Basis: Anthrazit / Schiefer
        anthracite: {
          950: '#0B0D0F',
          900: '#14181B',
          800: '#1C2228',
          700: '#2A323A',
          600: '#3A444E',
          500: '#55626E',
          400: '#7B8794',
          300: '#A6B0BA',
        },
        // Akzent: Signalgelb
        signal: {
          DEFAULT: '#FACC15',
          400: '#FBD436',
          500: '#FACC15',
          600: '#E0B40A',
          700: '#B8920A',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
