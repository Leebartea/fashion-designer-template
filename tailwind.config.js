/** @type {import('tailwindcss').Config} */
// tailwind.config.js — Elegant Fashion Palace
// EDIT HERE: Extend colors, fonts, or breakpoints as needed.

module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './js/**/*.js',
    './data/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        // EDIT HERE: Change heading/body fonts
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // EDIT HERE: Brand color tokens (mirrors CSS custom properties)
        primary: {
          DEFAULT: '#8B1A1A',
          dark:    '#C9A96E',
          50:      '#FDF5F5',
          100:     '#FAE8E8',
          200:     '#F3CECE',
          300:     '#E9A3A3',
          400:     '#D96868',
          500:     '#C43636',
          600:     '#8B1A1A',
          700:     '#6B1414',
          800:     '#4D0E0E',
          900:     '#300909',
        },
        accent: {
          DEFAULT: '#C9A96E',
          dark:    '#8B1A1A',
          50:      '#FDF9F0',
          100:     '#F8EFDA',
          200:     '#F0DDB0',
          300:     '#E5C77E',
          400:     '#D9B05A',
          500:     '#C9A96E',
          600:     '#A8883E',
          700:     '#7D6530',
          800:     '#524224',
          900:     '#2D2514',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/5': '4 / 5',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            fontFamily: 'var(--font-body)',
          },
        },
      },
    },
  },
  plugins: [],
};
