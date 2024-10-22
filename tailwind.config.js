/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        'bg': '#F4F3E1',
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
        'notification': {
          'bg': '#FBF0FC',
          'warning': {
            'primary': '#FF0043',
            'bg': '#FDF1F5',
          },
          'activity': {
            'bg': '#EEFBF2',
          },
          'task': {
            'bg': '#FCF7F0',
          },
          'success': {
            'bg': '#EEFBF2',
          },
          'info': {
            'bg': '#E4FAFA',
          },
        }
      }
    },
  },
  plugins: [],
}
