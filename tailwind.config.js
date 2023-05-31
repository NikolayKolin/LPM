/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Pages/*.{html,js}"],
  theme: {
      screens: {
        'xl': {'min': '1024px'},
        // => @media (min-width: 1024px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '479px'},
        // => @media (max-width: 479px) { ... }
      },
    extend: {
      colors: {
        lpmgold: '#b49758',
        bisque: '#ffe4c4',
        gold:'ffd700',
        bookBtn:'#84643e',
        headerBG:'rgba(255, 255, 255, 0.7)',
        test:'rgba(50, 50, 50, 0.7)'
      },
      fontFamily: {
        'isabel': ['Isabel Light', 'sans-serif'],
        'charoe': ['Charoe Semi Bold', 'Laser 1', 'sans-serif'],
        'optimal': ['OptimalLTStd-Bold', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
}
