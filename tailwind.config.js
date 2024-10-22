/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
          100: '#F4F3E1',
          300: '#EFEED5',
          500: '#E8E6C3',
          700: '#D1CFB0',
          900: '#BAB89C',
        },
        'tertiary': {
          100: '#FFFFFF',
          300: '#E6E6E6',
          500: '#CCCCCC',
          700: '#B3B3B3',
          900: '#999999',
        },
        'utility': {
          'button': '#95ADE5',
          'pressed-button': '#596889',
          'loading-button': '#C2D3FC',
          'error': '#F10700',
          'border': '#000000',
        },
        'icon': {
          'lightblue': '#2DBCD2',
          'orange': '#EDB14D',
          'lightgreen': '#74CB3E',
          'yellow': '#E0E030',
          'green': '#28C40B',
          'violet': '#D74DDE',
        },
        'shadow': {
          'black':{
            60: 'rgba(0, 0, 0, 0.06)',
            40 : 'rgba(0, 0, 0, 0.04)',
          },
          'green':{
            25: 'rgba(40, 196, 11, 0.6)',
          },
        },
        'bg': {
          'default': '#F4F3E1',
          'bright':{
            'blue': '#E4FAFA',
            'orange': '#FCF7F0',
            'green': '#EEFBF2',
            'violet': '#FBF0FC',
            'red': '#FDF1F5',
          },
          'colorful':{
            'lightblue': '#2DBCD2',
            'orange': '#EDB14D',
            'lightgreen': '#74CB3E',
            'violet': '#D74DDE',
            'red': '#F10700',
            'yellow': '#E0E030',
          },
        },
        'text': {
          'default': {
            'black':'#000000',
            'white': '#FFFFFF',
          },
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
          },
          'primary': {
            100: '#D0F2B5',
            900: '#6A8C4F',
          },
          'secondary': {
            100: '#F4F3E1',
          },
          'button': {
            'pressed': '#596889',

          },
        },
      },
      backgroundImage:{
        'blue': {
          100: 'linear-gradient(to right, #33D4ED, #1D7987)',
          30: 'linear-gradient(to right, rgba(51, 212, 237, 0.3), rgba(29, 121, 135, 0.3))',
        },
        'green': {
          100: 'linear-gradient(to right, #28C40B, #135E05)',
          30: 'linear-gradient(to right, rgba(40, 196, 11, 0.3), rgba(19, 94, 5, 0.3))',
        },
        'orange': {
          100: 'linear-gradient(to right, #EDB14D, #87652C)',
          30: 'linear-gradient(to right, rgba(237, 177, 77, 0.3), rgba(135, 101, 44, 0.3))',
        },
        'yellow': {
          100: 'linear-gradient(to right, #E0E030, #7A7A1A)',
          30: 'linear-gradient(to right, rgba(224, 224, 48, 0.3), rgba(122, 122, 26, 0.3))',
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
    },
  },
  plugins: [],
}
