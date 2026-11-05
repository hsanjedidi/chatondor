/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F2F6FB',
          100: '#E1EAF4',
          200: '#C3D4E8',
          300: '#97B3D3',
          400: '#6A8DB8',
          500: '#4A6F9C',
          600: '#355A85',
          700: '#274670',
          800: '#1C3558',
          900: '#13263F',
        },
        gold: {
          50: '#FFF9EA',
          100: '#FEF0C7',
          200: '#FCE08F',
          300: '#FACE5C',
          400: '#F8BD35',
          500: '#F2A90F',
          600: '#C98A07',
          700: '#8F5F00',
          800: '#6B4700',
          900: '#4A3100',
        },
        sky: {
          50: '#EEF8FF',
          100: '#D6EEFD',
          200: '#AEDDFA',
          300: '#7CC6F4',
          400: '#4DAEEA',
          500: '#2B93D6',
          600: '#1C74AE',
          700: '#165C8B',
        },
        coral: {
          50: '#FFF1EE',
          100: '#FFDCD3',
          200: '#FFB9A6',
          300: '#FF917A',
          400: '#F76D55',
          500: '#E5523A',
          600: '#C23C27',
        },
        mint: {
          50: '#EEFBF5',
          100: '#D2F5E4',
          200: '#A6E9CB',
          300: '#6FD8AE',
          400: '#3DC28F',
          500: '#22A574',
          600: '#18845D',
        },
        ivory: '#FFFBF4',
      },
      fontFamily: {
        sans: ['Inter', 'Tajawal', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(19, 38, 63, 0.28)',
        card: '0 10px 30px -12px rgba(19, 38, 63, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(4deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
