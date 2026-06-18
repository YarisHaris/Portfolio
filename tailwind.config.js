/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0f',
        'dark-card': '#111827',
        'primary-blue': '#2563EB',
        'secondary-blue': '#3B82F6',
        'accent-light': '#60A5FA',
        'text-primary': '#ffffff',
        'text-secondary': '#9CA3AF',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(37, 99, 235, 0.5)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
