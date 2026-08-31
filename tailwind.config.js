/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stark-black': '#050814',
        'arc-cyan': '#00f0ff',
        'arc-cyan-glow': 'rgba(0, 240, 255, 0.5)',
        'alert-red': '#ff2a2a',
        'stark-gold': '#ffd700',
        'hud-border': 'rgba(0, 240, 255, 0.2)',
        'hud-bg': 'rgba(5, 8, 20, 0.85)',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Rajdhani"', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 4s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(0,240,255,0.4)' },
          '50%': { opacity: '.8', boxShadow: '0 0 30px rgba(0,240,255,0.8)' },
        }
      }
    },
  },
  plugins: [],
}
