/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      //colors
      colors: {
        'primary': {
          100: '#D0F2B5',
          300: '#C1ED9C',
          500: '#B1E983',
          700: '#8EBA69',
          900: '#6A8C4F',
        },
        'secondary': {
          100: '#FFFFFF',
          300: '#E6E6E6',
          500: '#CCCCCC',
          700: '#B3B3B3',
          900: '#999999',
        },
        'icon': {
          'lightblue': '#62DFF2',
          'orange': '#EDB14D',
          'lightgreen': '#74CB3E',
          'yellow': '#E0E030',
          'green': '#28C40B',
          'violet': '#D74DDE',
          'red': '#F10700',
          'black': '#000000',
        },
        'shadow': {
          'black':{
            60: 'rgba(0, 0, 0, 0.6)',
            40 : 'rgba(0, 0, 0, 0.4)',
          },
          'green':{
            25: 'rgba(40, 196, 11, 0.6)',
          },
        },
        'bg': {
          'default': '#FFFFFF',
          'bright':{
            'blue': '#DBFEFF',
            'orange': '#FFF1DF',
            'green': '#EAFFF0',
            'violet': '#FEE8FF',
            'red': '#FFECED',
            'yellow': '#FFF9DA',
          },
          'colorful':{
            'lightblue': '#62DFF2',
            'orange': '#EDB14D',
            'lightgreen': '#74CB3E',
            'violet': '#D74DDE',
            'red': '#F10700',
            'yellow': '#E0E030',
          },
          'light':{
            'lightblue': '#BBD7DC',
            'orange': '#F7E1BF',
            'yellow': '#F5F5C1',
          },
        },
        'text': {
          'default': '#000000',
          'description': {
            'dark': '#707070',
            'bright': '#A8A8A8',
          },
          'colorful':{
              'orange': '#EDB14D',
              'lightgreen': '#74CB3E',
              'violet': '#D74DDE',
          },
          'dark':{
            'blue': '#1D7987',
            'orange': '#87652C',
            'green': '#135E05',
            'violet': '#880071',
            'yellow': '#7A7A1A',
            'red': '#880002',
          },
          'primary': {
            100: '#D0F2B5',
            500: '#B1E983',
            900: '#6A8C4F',
          },
          'secondary': {
            100: '#FFFFFF',
          },
        },
      },
      backgroundImage:{
        'blue': {
          100: 'linear-gradient(to right, #33D4ED, #1D7987)',
          300: 'linear-gradient(to right, rgba(51, 212, 237, 0.3), rgba(29, 121, 135, 0.3))',
        },
        'green': {
          100: 'linear-gradient(to right, #28C40B, #135E05)',
          300: 'linear-gradient(to right, rgba(40, 196, 11, 0.3), rgba(19, 94, 5, 0.3))',
        },
        'orange': {
          100: 'linear-gradient(to right, #EDB14D, #87652C)',
          300: 'linear-gradient(to right, rgba(237, 177, 77, 0.3), rgba(135, 101, 44, 0.3))',
        },
        'yellow': {
          100: 'linear-gradient(to right, #E0E030, #7A7A1A)',
          300: 'linear-gradient(to right, rgba(224, 224, 48, 0.3), rgba(122, 122, 26, 0.3))',
        },
      },

      //text
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        extrabold: 800,
      },
      fontSize: {
        'h1': '48px',
        'h2': '40px',
        'h3': '34px',
        'h4': '28px',
        'h5': '20px',
        'p': '16px',
        'm': '14px',
      },

      //animaciones de tailwind
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scaleY(0.9)' },
          '60%': { transform: 'scaleY(1.05)' },
          '100%': { transform: 'scaleY(1)' },
        },
        bounceOut: {
          '0%': { transform: 'scaleY(1)' },
          '60%': { transform: 'scaleY(1.05)' },
          '100%': { transform: 'scaleY(0.9)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutToBottom: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 0.4s ease-out',
        bounceOut: 'bounceOut 0.3s ease-in',
        fadeIn: 'fadeIn 300ms ease-out',
        fadeOut: 'fadeOut 300ms ease-out',
        slideInFromTop: 'slideInFromTop 300ms ease-out forwards',
        slideOutToBottom: 'slideOutToBottom 300ms ease-in forwards',

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
