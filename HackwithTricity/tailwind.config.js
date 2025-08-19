// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        border: "#e5e7eb",
        muted: {
          DEFAULT: "#6b7280",
          foreground: "#9ca3af",
        },
        leaf: "#4CAF50",
        'leaf-foreground': "#ffffff",
        botanical: "#81C784",
        'botanical-foreground': "#ffffff",
        earth: "#A1887F",
        'earth-foreground': "#ffffff",
        sage: "#c8e6c9",
      },
      boxShadow: {
        botanical: '0 4px 6px -1px rgba(76, 175, 80, 0.3)',
        soft: '0 2px 4px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'gradient-sage': 'linear-gradient(to right, #e8f5e9, #f1f8e9)',
        'gradient-herbal': 'linear-gradient(to right, #a5d6a7, #66bb6a)',
        'gradient-leaf': 'linear-gradient(to right, #66bb6a, #43a047)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
