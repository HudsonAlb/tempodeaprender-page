/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* Azul claro — PRIMÁRIO (corpo do uniforme) */
          sky:        '#5DADE2',
          'sky-mid':  '#3498DB',
          'sky-light':'#D6EAF8',
          'sky-pale': '#EBF5FB',

          /* Azul escuro — SECUNDÁRIO */
          navy:        '#0D3B8C',
          'navy-mid':  '#154BA8',
          'navy-light':'#1A5DC8',

          /* Verde — detalhe (listras do uniforme) */
          green:        '#1E7E34',
          'green-mid':  '#28A745',
          'green-light':'#D4EDDA',

          /* Laranja — detalhe (listras do uniforme) */
          orange:        '#C85A00',
          'orange-mid':  '#E96A00',
          'orange-light':'#FDE8D0',

          /* Neutros */
          white:    '#FFFFFF',
          gray:     '#F4F8FC',
          'gray-mid':'#5D7285',
          dark:     '#0B1F3A',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        bento: 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [],
}
